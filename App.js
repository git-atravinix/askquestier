import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { AppLoading, Asset, Font } from 'expo';
import * as firebase from 'firebase';
import AppTabNavigator from './App/navigation/TabNavigator';
import SwitchNavigation from './App/navigation/SwitchNavigator'
import ApiKeys from './App/constants/ApiKeys';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoadingComplete: false,
      isAuthenticationReady: false,
      isAuthenticated: false,
    };
    // Initialize firebase...
    if (!firebase.apps.length) { firebase.initializeApp(ApiKeys.FirebaseConfig); }
    firebase.auth().onAuthStateChanged(this.onAuthStateChanged);
  }

  onAuthStateChanged = (user) => {
    this.setState({isAuthenticationReady: true});
    this.setState({isAuthenticated: !!user});
  }
  

  render() {

      if ( (!this.state.isLoadingComplete || !this.state.isAuthenticationReady) && !this.props.skipLoadingScreen) {
        return (
          <AppLoading
            startAsync={this._loadResourcesAsync}
            onError={this._handleLoadingError}
            onFinish={this._handleFinishLoading}
          />
        );
      } else {
        return (
          <View style={styles.container}>
            {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
            {Platform.OS === 'android' && <View style={styles.statusBarUnderlay} />}
            {(this.state.isAuthenticated) ? <AppTabNavigator /> : <SwitchNavigation />}
          </View>
        );
      }    
    }


    _loadResourcesAsync = async () => {
      return Promise.all([
        Asset.loadAsync([
          require('./assets/logo.png'),
        ]),
        Font.loadAsync({
        }),
      ]);
    };
  
    _handleLoadingError = error => {
      // In this case, you might want to report the error to your error
      // reporting service, for example Sentry
      console.warn(error);
    };
  
    _handleFinishLoading = () => {
      this.setState({ isLoadingComplete: true });
    };

  }

  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    statusBarUnderlay: {
      height: 24,
      backgroundColor: 'rgba(0,0,0,0.2)',
    },
  });

