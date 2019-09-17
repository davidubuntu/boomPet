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
    paddingTop: 50,
    paddingLeft: 16,
    paddingBottom: 30
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
  image: {
    width: 50,
    height: 50
  },
  text_container: {
    left: 5
  },
  image_container: {
    right: 5
  }
})
