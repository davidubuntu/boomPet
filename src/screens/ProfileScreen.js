import React from "react"
import {
  StyleSheet,
  Button,
  View,
  TouchableOpacity,
  Image,
  Text,
  TextInput,
  KeyboardAvoidingView
} from "react-native"
import { createStackNavigator, createAppContainer } from "react-navigation"
import Header from "../components/Header"
// import Text from '../components/CustomText'
import * as Font from "expo-font"
export default class ProfileScreen extends React.Component {
  constructor() {
    super()
    this.state = { fontloaded: false, user: "" }
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
  handleUser = userName => {
    this.setState({ user: userName })
  }
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.profile_container}>
        <Image
          style={styles.image}
          source={require("../assets/pet-icon.png")}
        />
        {this.state.fontLoaded ? (
          <Text style={styles.title}>BoomPet</Text>
        ) : null}
        {this.state.fontLoaded ? (
          <Text style={styles.subtitle}>Find your best animal friend</Text>
        ) : null}
        {this.state.fontLoaded ? (
          <TextInput
            style={styles.user_input}
            underlineColorAndroid="transparent"
            placeholder="User"
            placeholderTextColor="black"
            autoCapitalize="none"
            onChangeText={this.handleUser}
            autoCompleteType="username"
          />
        ) : null}
        {this.state.fontLoaded ? (
          <TextInput
            style={styles.password_innput}
            underlineColorAndroid="transparent"
            placeholder="Password"
            placeholderTextColor="black"
            autoCapitalize="none"
            autoCompleteType="password"
            secureTextEntry={true}
          />
        ) : null}

        <TouchableOpacity
          style={styles.button_login}
          onPress={() =>
            this.state.user != ""
              ? this.props.navigation.navigate("Home", {
                  user: this.state.user
                })
              : ""
          }
        >
          {this.state.fontLoaded ? (
            <Text style={styles.text_button}>Login</Text>
          ) : null}
        </TouchableOpacity>
      </KeyboardAvoidingView>
    )
  }
}
const styles = StyleSheet.create({
  profile_container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  button_login: {
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
    fontFamily: "Muli-Light",
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
  },
  user_input: {
    fontFamily: "Muli-Light",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    padding: 10,
    height: 50,
    width: "90%",
    marginTop: 10,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "gray"
  },
  password_innput: {
    fontFamily: "Muli-Light",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    padding: 10,
    height: 50,
    width: "90%",
    marginTop: 10,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "gray"
  }
})
