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
export default class Card extends React.Component {
  constructor(props) {
    super(props)
    this.state = { starLikeFilled: false }
  }

  checkUserLikePet(){
    const likes = this.props.likes
    const userLogged = this.props.userLogged
    if(Object.keys(likes).includes(userLogged)){
    this.setState({starLikeFilled:true})
   }else{
    this.setState({starLikeFilled:false})
    }
  }

  componentDidMount(){
      this.checkUserLikePet()
  }

  addLike(petId) {
    const userId = this.props.userLogged
    console.log(userId, petId)
    db.ref(`pets/${petId}/likes/${userId}`)
      .set(true)
      .then(data => {
        this.checkUserLikePet()
        //success callback
        console.log("data ", data)
      })
      .catch(error => {
        //error callback
        console.log("error ", error)
      })
  }
  removeLike(petId) {
    const userId = this.props.userLogged
    db.ref(`pets/${petId}/likes/${userId}`)
    .set(null)
    .then(data => {
    this.checkUserLikePet()
    //success callback
    console.log("data ", data)
    })
    .catch(error => {
    //error callback
    console.log("error ", error)
    })
  }
  pressStar(petId){
      if (this.state.starLikeFilled){
        this.removeLike(petId)
    }else{
        this.addLike(petId)
      }
  }
  render() {
    return (
      <>
        <TouchableOpacity
          style={styles.card_container}
          onPress={() =>
            this.props.navigate(this.props.destination, this.props.cardSelected)
          }
        >
          <View style={styles.image_container}>
            <Image
              style={styles.image}
              source={{
                uri: this.props.imageSrc
              }}
            />
          </View>
          <View style={styles.details_container}>
            <View style={styles.details__left_panel}>
              <Text style={styles.name}>{this.props.name}</Text>
              <Text style={styles.description} numberOfLines={2}>
                {this.props.description}
              </Text>
              <TouchableOpacity
                style={styles.icons}
                onPress={() => this.pressStar(this.props._key)}
              >
                {this.state.starLikeFilled  ? (
                  <Icon name="star" color="#00CADD" size={20} />
                ) : (
                  <Icon name="star-border" color="#00CADD" size={20} />
                )}
                {this.props.likesCount > 0 ? (
                  <Text style={styles.likes_count}>
                    {this.props.likesCount}
                  </Text>
                ) : (
                  <Text style={styles.likes_count}>0</Text>
                )}
              </TouchableOpacity>
            </View>
            <View style={styles.details__right_panel}>
              <View style={styles.details__right_top_panel}>
                <TouchableOpacity style={styles.sex_button}>
                  <Text style={styles.text_button}>{this.props.sex}</Text>
                </TouchableOpacity>
              </View>
              <Icon
                style={styles.icon_forward}
                name="chevron-right"
                color="#ccc"
                size={23}
              />
            </View>
          </View>
        </TouchableOpacity>
      </>
    )
  }
}
const styles = StyleSheet.create({
  card_container: {
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 16,
    marginRight: 18,
    marginTop: 14,
    borderWidth: 0,
    borderRadius: 16,
    height: 130,
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
    height: 112
  },
  details_container: {
    flexDirection: "row",
    height: 112,
    marginLeft: 12,
    marginRight: 0
  },
  details__left_panel: {
    width: 165,
    flexDirection: "column",
    alignItems: "flex-start"
  },
  details__right_panel: {
    flexDirection: "column",
    alignItems: "flex-end"
  },
  details__right_top_panel: { flex: 1 },
  icon_forward: { flex: 2 },
  description: {
    // width: 165,
    fontWeight: "100",
    fontSize: 12,
    lineHeight: 14,
    letterSpacing: 0.461538,
    color: "#878B8B"
  },
  name: {
    fontWeight: "600",
    lineHeight: 28,
    marginTop: 5,
    marginBottom: 5,
    fontSize: 16,
    letterSpacing: -0.100122,
    color: "#404040"
  },
  image: {
    marginTop: 8,
    marginLeft: 8,
    marginBottom: 10,
    height: 112,
    width: 112,
    borderRadius: 16
  },
  likes_count: {
    color: "#404040",
    letterSpacing: 0.0938645,
    lineHeight: 19,
    fontSize: 15
  },
  sex_button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FF806C",
    padding: 10,
    height: 16,
    width: 53,
    borderRadius: 16,
    marginRight: 0
  },
  text_button: {
    color: "white",
    fontSize: 9,
    lineHeight: 11,
    letterSpacing: 0.0563187,
    fontWeight: "400"
  },
  icons: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 16
  }
})
