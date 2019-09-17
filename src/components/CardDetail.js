import React from "react"
import Icon from "react-native-vector-icons/MaterialIcons"
import { db } from "../services/FirebaseService"
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from "react-native"

import { createStackNavigator, createAppContainer } from "react-navigation"

const CardDetail = props => {
  const {
    _key,
    likesCount,
    imageSrc,
    name,
    sex,
    description,
    petId,
    navigate,
    destination,
    starFilled
  } = props

  const addLike = petId => {
    const userId = "userPepe"
    db.ref(`pets/${petId}/likes/${userId}`)
      .set(true)
      .then(data => {
        //success callback
        console.log("data ", data)
      })
      .catch(error => {
        //error callback
        console.log("error ", error)
      })
  }

  const likesIcon =
    starFilled ? (
      <Icon name="star" color="#00CADD" size={25} />
    ) : (
      <Icon name="star-border" color="#00CADD" size={25} />
    )
  const LikesText =
    likesCount > 0 ? (
      <Text style={styles.likes_count}>{likesCount} likes</Text>
    ) : (
      <Text style={styles.likes_count}>0 likes</Text>
    )

  return (
    <>
      <View style={styles.card_container}>
        <View style={styles.image_container}>
          <Image
            style={styles.image}
            source={{
              uri: imageSrc
            }}
          />
        </View>
        <View style={styles.details_container}>
          <View style={styles.details_title_container}>
            <Text style={styles.name}>{name}</Text>
          {/*   <TouchableOpacity
              style={styles.icons}
              onPress={() => addLike(_key)}
            >
              {likesIcon}
              {LikesText}
            </TouchableOpacity> */}
            <View
              style={styles.icons}
            >
              {likesIcon}
              {LikesText}
            </View>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.text_button}>{sex}</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.description}>{description}</Text>
          <TouchableOpacity
            style={styles.icon_back_container}
            onPress={() => navigate(destination)}
          >
            <Icon name="chevron-left" color="#ccc" size={50} />
          </TouchableOpacity>
        </View>
        {/* acaba details container */}
      </View>
    </>
  )
}

export default CardDetail
const styles = StyleSheet.create({
  card_container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    flexDirection: "column",
    alignItems: "center",
    marginLeft: 20,
    marginRight: 20,
    marginTop: 25,
    borderWidth: 0,
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  image_container: {
    alignContent: "center",
    justifyContent: "center",
    height: 250,
    width: "100%"
  },
  image: {
    marginTop: 8,
    marginBottom: 10,
    height: 300,
    borderRadius: 16,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    width: "100%"
  },
  details_container: {
    flexDirection: "column",
    padding: 10
  },
  details_title_container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 25
  },
  description: {
    marginTop: 20,
    fontWeight: "100",
    fontSize: 14,
    lineHeight: 16,
    letterSpacing: 0.461538,
    color: "#878B8B"
  },
  name: {
    fontWeight: "600",
    lineHeight: 28,
    marginBottom: 5,
    fontSize: 22,
    letterSpacing: -0.100122,
    color: "#404040"
  },
  likes_count: {
    color: "#404040",
    letterSpacing: -0.0938645,
    lineHeight: 19,
    fontSize: 18
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FF806C",
    height: 30,
    width: 70,
    borderRadius: 16
  },
  text_button: {
    color: "white",
    fontSize: 14
  },
  icons: {
    flexDirection: "row",
    alignItems: "center"
  },
  icon_back_container: {
    flexDirection: "row",
    justifyContent: "flex-end"
  }
})
