import React from "react"
import { StyleSheet, Text, View, Image } from "react-native"

export default class Header extends React.Component {
  render() {
    return (
      <>
        <View style={styles.header_container}>
          <View style={styles.text_container}>
            <Text style={styles.header_title}>{this.props.title}</Text>
            <Text style={styles.header_subtitle}>{this.props.subtitle}</Text>
          </View>
          <View style={styles.image_container}>
            <Image
              style={styles.image}
              source={require("../assets/pet-icon.png")}
            />
             <Text style={styles.user}>{this.props.user}</Text>
          </View>
        </View>
      </>
    )
  }
}

const styles = StyleSheet.create({
  header_container: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#E5E5E5",
    paddingTop: 40,
    paddingLeft: 16,
    paddingBottom: 10
  },
  header_subtitle: {
    fontWeight: "600",
    fontSize: 17
  },
  header_title: {
    fontWeight: "100",
    fontSize: 17,
    marginBottom: 5
  },
  text_container: {

  },
  image_container: {
    flexDirection: "column",
    alignItems: "flex-end"
  },
  image: {
    width: 50,
    height: 50
  },
  user:{
    fontWeight: "100",
    fontSize: 12,
    marginRight : 20
  }
})
