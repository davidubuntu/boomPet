import React from "react"
import {
  StyleSheet,
  Button,
  View,
  TouchableOpacity,
  Image,
  Text
} from "react-native"
import { createStackNavigator, createAppContainer } from "react-navigation"
import Header from "../components/Header"
// import Text from '../components/CustomText'
import * as Font from "expo-font"
export default class ProfileScreen extends React.Component {
  constructor() {
    super()
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
  static navigationOptions = {
    // headerTitle instead of title
    header: null
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Image
          style={styles.image}
          source={require("../assets/pet-icon.png")}
        />
        <Text style={styles.title}>BoomPet</Text>
        {this.state.fontLoaded ? (
          <Text style={styles.subtitle}>Find your best animal friend</Text>
        ) : (
          <Text>BoomPet si estilo</Text>
        )}
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate("Home")}
        >
          <Text style={styles.text_button}>Login</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FF806C",
    padding: 10,
    height: 50,
    width: "90%",
    marginTop: 10,
    borderRadius: 16
  },
  title: {
    fontSize: 42,
    color: "#FF806C",
    fontWeight: "600"
  },
  subtitle: {
    fontFamily: "Muli-Bold",
    fontSize: 20,
    color: "#404040",
    fontWeight: "300"
  },
  image: {
    width: 400,
    height: 400
  },
  text_button: {
    color: "white",
    fontSize: 20
  }
})
