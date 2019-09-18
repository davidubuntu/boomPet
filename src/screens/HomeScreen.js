import React, { Component, useState, useEffect } from "react"
import { StyleSheet, Button, View, Text, FlatList } from "react-native"
import { createStackNavigator, createAppContainer } from "react-navigation"
import Header from "../components/Header"
import Card from "../components/Card"
import FadeInView from "../components/FadeInView"
import { db } from "../services/FirebaseService"
import * as Font from "expo-font"
const HomeScreen = props => {
  const { navigation } = props
  const [pets, setPets] = useState([])
  const [loggedUser, setLoggedUser] = useState("")
  const [fontLoaded, setFontLoaded] = useState(false)
  let petsDBRef = db.ref("pets/")

  const userIsLogged = () => {
    const user = navigation.state.params.user
    setLoggedUser(user)
  }

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

  const FontLoader = () => {
    loadFonts()
      async function loadFonts() {
        await Font.loadAsync({
          "Muli-Light": require("../../assets/fonts/Muli-Light.ttf"),
          "Muli-Regular": require("../../assets/fonts/Muli-Regular.ttf"),
          "Muli-Bold": require("../../assets/fonts/Muli-Bold.ttf"),
          "Muli-SemiBold": require("../../assets/fonts/Muli-SemiBold.ttf"),
          "Muli-Black": require("../../assets/fonts/Muli-Black.ttf")
        })
        setFontLoaded(true)
      }
  }

  useEffect(() => {
    userIsLogged()
    getPetsData()
    FontLoader()
  }, [])
  //   console.log(Date.now(), pets)
  const renderPets = ({ item }) => {
    return (
      <Card
        _key={item.key}
        name={item.name}
        description={item.description}
        imageSrc={item.photo}
        likesCount={item.likes_count}
        likes={item.likes}
        sex={item.sex}
        navigate={props.navigation.navigate}
        destination={"Details"}
        cardSelected={item}
        userLogged={loggedUser}
      />
    )
  }
  return (
      <FadeInView duration={1000} style={styles.home_container}>
        <View style={styles.line} />
        {fontLoaded ? (
        <FlatList
          style={styles.list}
          data={pets}
          renderItem={renderPets}
          keyExtractor={item => item.key}
        />
        ) : null}
      </FadeInView>
  )
}
HomeScreen.navigationOptions = ({ navigation }) => ({
  header: (
    <Header
      title="Choose your pet"
      subtitle="Dogs"
      user={navigation.state.params.user}
    />
  )
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
  list: {
    fontFamily: "Muli-Bold"
  }
})
