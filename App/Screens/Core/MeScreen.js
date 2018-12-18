import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import * as firebase from 'firebase';
class MeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  onSignout = () =>{
    firebase.auth().signOut();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> Me </Text>
        <Button onPress={this.onSignout} title="Logout" />
      </View>
    );
  }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default MeScreen;
