import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { Audio } from 'expo-av'
import { Right, Container, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon, Button } from 'native-base';

export default class MainPage extends React.Component{
  render() {
    return (
      <Container>
      <Header />
      <View>
        <Text>Done</Text>
      </View>
    </Container>
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
