import React, { useState, useEffect }from 'react'
import { Animated } from 'react-native'

const FadeInImage = (props) => {
  const [opacity] = useState(new Animated.Value(0)) 

  onLoad = () => {
    Animated.timing(
    opacity, 
    {
      toValue: 1,
      duration: props.duration,
      useNativeDriver: true
    }).start()
  }
    return (
      <Animated.Image
        onLoad={onLoad}
        {...props}
        style={[
          {
            opacity: opacity,
            transform: [
              {
                scale: opacity.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0.85, 1],
                })
              },
            ],
          },
          props.style,
        ]}
      />
    )
}
export default FadeInImage