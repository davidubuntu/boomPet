// In App.js in a new project
import React, { component } from "react"
import { Platform, StyleSheet } from "react-native"
import { createAppContainer } from "react-navigation"
import { createStackNavigator } from "react-navigation-stack"
import HomeScreen from "./src/screens/HomeScreen"
import ProfileScreen from "./src/screens/ProfileScreen"
import DetailsScreen from "./src/screens/DetailsScreen"

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
})

const RootStack = createStackNavigator(
  {
    Profile: ProfileScreen,
    Home: HomeScreen,
    Details: DetailsScreen
  },
  {
    initialRouteName: "Profile"
  }
)

const AppContainer = createAppContainer(RootStack)

export default class App extends React.Component {
  render() {
    return <AppContainer style={styles.container} />
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "aqua",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})
