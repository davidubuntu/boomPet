import React, { Component, useState, useEffect } from "react"
import { StyleSheet, Button, View, Text, FlatList } from "react-native"
import { createStackNavigator, createAppContainer } from "react-navigation"
import Header from "../components/Header"
import CardDetail from "../components/CardDetail"
let selectedCardName
const DetailsScreen = props => {
  const { navigation } = props
  const selectedCard = navigation.state.params.selected
  const starFilled = navigation.state.params.starFilled
  selectedCardName = navigation.state.params.name
  return (
    <>
      <View style={styles.line} />
      <View style={styles.details_container}>
        <CardDetail
          _key={selectedCard.key}
          name={selectedCard.name}
          description={selectedCard.description}
          imageSrc={selectedCard.photo}
          likesCount={selectedCard.likes_count}
          sex={selectedCard.sex}
          navigate={props.navigation.navigate}
          starFilled={starFilled}
          destination={"Home"}
        />
      </View>
    </>
  )
}
DetailsScreen.navigationOptions = ({ navigation }) => ({
  header: <Header title={selectedCardName} subtitle="Pet Details" />
})

export default DetailsScreen

const styles = StyleSheet.create({
  details_container: {
    backgroundColor: "#E5E5E5",
    height: "100%",
    paddingTop: 25,
    paddingBottom: 25
  },
  line: {
    borderBottomColor: "black",
    borderBottomWidth: 0.5
  }
})
