import React, { Component, useState, useEffect } from "react"
import { StyleSheet, Button, View, Text, FlatList } from "react-native"
import { createStackNavigator, createAppContainer } from "react-navigation"
import Header from "../components/Header"
import Card from "../components/Card"
import { db } from "../services/FirebaseService"

const HomeScreen = props => {
  const [pets, setPets] = useState([])

  let petsDBRef = db.ref("pets/")

  const getPetsData = () => {
    petsDBRef.on("value", snapshot => {
      let petsArray = []
      snapshot.forEach(childSnapshot => {
        let item = childSnapshot.val()
        item.key = childSnapshot.key
        petsArray.push(item)
      })
      setPets(petsArray)
    })
  }

  useEffect(() => {
    getPetsData()
  }, [])
  console.log(Date.now(), pets)
  const renderPets = ({ item }) => {
    return (
      <Card
        _key={item.key}
        name={item.name}
        description={item.description}
        imageSrc={item.photo}
        likesCount={item.likes_count}
        sex={item.sex}
        navigate={props.navigation.navigate}
        destination={"Details"}
        cardSelected={item}
      />
    )
  }
  return (
    <View style={styles.home_container}>
      <View style={styles.line} />
      <FlatList
        style={styles.list}
        data={pets}
        renderItem={renderPets}
        keyExtractor={item => item.key}
      />
    </View>
  )
}
HomeScreen.navigationOptions = ({ navigation }) => ({
  header: <Header title="Choose your pet" subtitle="Dogs" />
})

export default HomeScreen

const styles = StyleSheet.create({
  home_container: {
    backgroundColor: "#E5E5E5"
  },
  line: {
    borderBottomColor: "black",
    borderBottomWidth: 0.5
  },
  list: {}
})
