import React, {Component} from 'react';
import LottieView from 'lottie-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Animated, Easing} from 'react-native';

export default class SplashScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: new Animated.Value(0),
    };
  }
  componentDidMount() {
    Animated.timing(this.state.progress, {
      toValue: 1,
      duration: 5000,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start(() => {
      const token = this.getStore('token');

      if (token == null) {
        this.props.navigation.replace('LoginPage');
      }
      this.props.navigation.replace('LoginPage');
    });
  }
  getStore = async key => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        return value;
      }
    } catch (e) {
      console.log(e);
    }
  };
  render() {
    return (
      <LottieView
        source={require('assets/SplashScreen/AnimatedSplash')}
        autoPlay
        loop
      />
    );
  }
}
