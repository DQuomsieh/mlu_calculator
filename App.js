import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { Audio } from 'expo-av'
import {Form, Textarea, Item, Content, Input, Right, Container, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon, Button } from 'native-base';
import LastPage from './components/LastPage';

const cards = [
  {
    text: 'What is the boy doing in the picture?',
    name: 'One',
    image: require('./assets/images/kid2.jpg'),
  },
  {
    text: 'What is the boy doing in the picture?',
    name: 'Two',
    image: require('./assets/images/kid1.jpg'),
  },
  {
    text: 'What is the boy doing in the picture?',
    name: 'Three',
    image: require('./assets/images/kid3.jpg'),
  },
];

export default class MainPage extends React.Component{

  async componentDidMount() {
    await Font.loadAsync({
      "Roboto Regular": require('./assets/fonts/Roboto-Regular.ttf')
    })
    this.setState({ fontLoaded: true })
  }

  render() {
    return (
      <Container>
      <Header />
      <View>
        <DeckSwiper
        dataSource={cards}
        looping={false}
        renderEmpty={() =>
          <View>
            <View style={{flexDirection: 'column', justifyContent: 'space-evenly', padding: 10}}>
              <Item style={{paddingTop: 20}}>
                <Icon active name="microphone" />
                <Input placeholder="Enter sentence for picture #1" />
              </Item>
              <Item style={{paddingTop: 20}}>
                <Icon active name="microphone" />
                <Input placeholder="Enter sentence for picture #2" />
              </Item>
              <Item style={{paddingTop: 20}}>
                <Icon active name="microphone" />
                <Input placeholder="Enter sentence for picture #3" />
              </Item>
            </View>
            <View style={{padding: 70, justifyContent: 'center'}}>
              <Button bordered dark>
                <Text>Calculate MLU</Text>
              </Button>
            </View>
          </View>
        }
        renderItem={item =>
        <Card Style={{ elevation: 3}}>
          <CardItem>
            <Text></Text>
          </CardItem>
          <CardItem cardBody>
            <Image style={{ height: 400, flex: 1}} source={item.image} />
          </CardItem>
          <CardItem>
              <Body>
                <Text style={{fontSize: 20}}>{item.text}</Text>
              </Body>  
          </CardItem>
        </Card>
        }/>
        <View style={{flexDirection: "row", justifyContent: "space-around", flex: 1, position: "absolute", bottom: -600, left: 0, right: 0}}>
        <Button light onPress={() => alert("Recording")}>
          <Icon name="microphone" style={{color: 'black'}} />
        </Button>
        <Button success onPress={() => this._deckSwiper._root.swipeRight()}>
        <Icon name="arrow-forward" style={{color: 'black'}} />
        </Button>
      </View>
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
