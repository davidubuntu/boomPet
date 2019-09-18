import React from "react"
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native"
import { createStackNavigator, createAppContainer } from "react-navigation"
import Icon from "react-native-vector-icons/MaterialIcons"
import * as Font from "expo-font"
export default class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = { fontloaded: false }
  }
  async componentDidMount() {
    await Font.loadAsync({
      "Muli-Light": require("../../assets/fonts/Muli-Light.ttf"),
      "Muli-Regular": require("../../assets/fonts/Muli-Regular.ttf"),
      "Muli-Bold": require("../../assets/fonts/Muli-Bold.ttf"),
      "Muli-SemiBold": require("../../assets/fonts/Muli-SemiBold.ttf"),
      "Muli-Black": require("../../assets/fonts/Muli-Black.ttf")
    })
    this.setState({ fontLoaded: true })
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
            {this.state.fontLoaded ? (
              <Text style={styles.header_title}>{this.props.title}</Text>
            ) : null}
            {this.state.fontLoaded ? (
              <Text style={styles.header_subtitle}>{this.props.subtitle}</Text>
            ) : null}
          </View>
          <View style={styles.image_container}>
            <Image
              style={styles.image}
              source={require("../assets/pet-icon.png")}
            />
            {this.state.fontLoaded ? (
              <Text style={styles.user}>{this.props.user}</Text>
            ) : null}
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
    fontFamily: "Muli-Bold",
    fontWeight: "600",
    fontSize: 17
  },
  header_title: {
    fontFamily: "Muli-Light",
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
    fontFamily: "Muli-Regular",
    fontWeight: "100",
    fontSize: 12,
    marginRight: 20
  },
  icon_back_container: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginLeft: -15
  }
})
