import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { Right, Container, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon, Button } from 'native-base';

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

export default function App() {
  return (
    <Container>
      <Header />
      <View>
        <DeckSwiper
        dataSource={cards}
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
      </View>
      <View style={{flexDirection: "row", justifyContent: "space-around", flex: 1, position: "absolute", bottom: 50, left: 0, right: 0}}>
        <Button light onPress={() => alert("Recording")}>
          <Icon name="microphone" style={{color: 'black'}} />
        </Button>
        <Button success onPress={() => alert("Go Next")}>
        <Icon name="arrow-forward" style={{color: 'black'}} />
        </Button>
      </View>
      {/* <View style={{ flexDirection: "row", flex: 1, position: "absolute", bottom: 50, left: 0, right: 0, justifyContent: 'right', padding: 15 }}>
          <Button iconRight onPress={() => alert("Swipe Right")}>
            <Icon name="arrow-forward" />
            <Text>Swipe Right</Text>
          </Button>
        </View> */}
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
