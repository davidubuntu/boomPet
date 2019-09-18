import React from "react"
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native"
import { createStackNavigator, createAppContainer } from "react-navigation"
import Icon from "react-native-vector-icons/MaterialIcons"
export default class Header extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const navigate = this.props.navigate
    const destination = this.props.destination
    const backIcon = destination ? (
      <TouchableOpacity
        style={styles.icon_back_container}
        onPress={() => navigate(destination)}
      >
        <Icon name="chevron-left" color="#ccc" size={50} />
      </TouchableOpacity>
    ) : (
      <></>
    )
    return (
      <>
        <View style={styles.header_container}>
          {backIcon}
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
    paddingTop: 30,
    paddingLeft: 16,
    paddingBottom: 5
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
  text_container: {},
  image_container: {
    flexDirection: "column",
    alignItems: "flex-end"
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 5
  },
  user: {
    fontWeight: "100",
    fontSize: 12,
    marginRight: 20
  },
  icon_back_container: {
    flexDirection: "row",
    justifyContent: "flex-end"
  }
})
