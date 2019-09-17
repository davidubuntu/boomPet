import React from "react"
import { StyleSheet, Text, View, Image } from "react-native"
import * as Font from "expo-font"
export default class CustomText extends React.Component {
  setFontType = type => {
    switch (type) {
      case "black":
        return "Muli-Black"
        break
      case "light":
        return "Muli-Light"
      case "bold":
        return "Muli-Bold"
        break
      case "semi-bold":
        return "Muli-SemiBold"
      case "regular":
        return "Muli-Regular"
        break
      default:
        return "Muli-Light"
    }
  }
  render() {
    const font = this.setFontType(this.props.type ? this.props.type : "normal")
    const style = [{ fontFamily: font }, this.props.style || {}]
    return <Text style={style}>{this.props.children}</Text>
  }
}
