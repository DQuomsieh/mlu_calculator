import React from 'react';
import { StyleSheet, Image, TextInput} from 'react-native';
import { Audio } from 'expo-av'
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import {Form, Textarea, Item, Textnput, Content, Input, Right, Container, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon, Button, Label, Title } from 'native-base';
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

export default class App extends React.Component{

  constructor(props) {
    super(props);
    // this.recording = null;
    // this.sound = null;
    // this.isSeeking = false;
    this.state = {
      totalMLU: 0,
      inputOne: '',
      inputTwo: '',
      inputThree: '',
      fontLoaded: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      'Roboto_medium': require('./assets/fonts/Roboto-Medium.ttf')
    })
    this.setState({ 
      fontLoaded: true,
    });
  }

  // _askForPermissions = async () => {
  //   const response = await Permissions.askAsync(Permissions.AUDIO_RECORDING);
  //   this.setState({
  //     haveRecordingPermissions: response.status === 'granted',
  //   });
  // };

  handleMLU = () => {
    var words1 = this.state.inputOne.match(/\S+/g);
    var words2 = this.state.inputTwo.match(/\S+/g);
    var words3 = this.state.inputThree.match(/\S+/g);
    var i = 0;
    var oneMLU = 0;
    var twoMLU = 0;
    var threeMLU = 0;
    alert(words3);
    if(words1 !== null){
      while(i != words1.length){
        if(words1[i].length > 0){
          if(words1[i].charAt(words1[i].length - 1) === 's'){
            if(words1[i] === 'this' || words1[i] === 'is' || words1[i] === 'his'){
              oneMLU += 1;
            } else {
              oneMLU += 2;
            }
          } else if (words1[i].slice(-3) === 'ing'){
            oneMLU += 2;
          } else {
            oneMLU += 1;
          }
        }
        i++;
      }
    }
    i = 0;
    if(words2 !== null){
      while(i != words2.length){
        if(words2[i].length > 0){
          if(words2[i].charAt(words2[i].length - 1) === 's'){
            if(words2[i] === 'this' || words2[i] === 'is' || words2[i] === 'his'){
              twoMLU += 1;
            } else {
              twoMLU += 2;
            }
          } else if (words2[i].slice(-3) === 'ing'){
            twoMLU += 2;
          } else {
            twoMLU += 1;
          }
        }
        i++;
      }
    }
    i = 0;
    if(words3 !== null){
      while(i != words3.length){
        if(words3[i].length > 0){
          if(words3[i].charAt(words3[i].length - 1) === 's'){
            if(words3[i] === 'this' || words3[i] === 'is' || words3[i] === 'his'){
              threeMLU += 1;
              alert(threeMLU);
            } else {
              threeMLU += 2;
              alert(threeMLU);
            }
          } else if (words3[i].slice(-3) === 'ing'){
            threeMLU += 1;
            alert(threeMLU);
          } else {
            threeMLU += 1;
            alert(threeMLU);
          }
        }
        i++;
      }
    }
    var total = (oneMLU + twoMLU + threeMLU) / 3;
    
    this.setState({totalMLU: (Math.round(total * 10) / 10).toFixed(1)});
  }

  render() {
    return (
      <Container style={{paddingTop: 24}}>
      <Header>
        <Left />
        <Body>
          <Title>MLA Calculator</Title>
        </Body>
        <Right />
      </Header>
      <View>
        <DeckSwiper
        dataSource={cards}
        looping={false}
        renderEmpty={() =>
          <View>
            <View style={{flexDirection: 'column', justifyContent: 'space-evenly', padding: 10}}>
              <Item style={{paddingTop: 20}}>
                <Icon active name="microphone" />
                <TextInput 
                  style={{height: 50, fontSize: 18}}
                  placeholder="Enter sentence for picture #1"
                  placeholderTextColor = "#9a73ef"
                  onChangeText={(inputOne) => this.setState({inputOne})}
                />
                {/* <Input placeholder="Enter sentence for picture #1" /> */}
              </Item>
              <Item style={{paddingTop: 20}}>
                <Icon active name="microphone" />
                <TextInput 
                  style={{height: 50, fontSize: 18}}
                  placeholder="Enter sentence for picture #2"
                  placeholderTextColor = "#9a73ef"
                  onChangeText={(inputTwo) => this.setState({inputTwo})}
                  
                />
                {/* <Input placeholder="Enter sentence for picture #2" /> */}
              </Item>
              <Item style={{paddingTop: 20}}>
                <Icon active name="microphone" />
                <TextInput 
                  style={{height: 50, fontSize: 18}}
                  placeholder="Enter sentence for picture #3"
                  placeholderTextColor = "#9a73ef"
                  onChangeText={(inputThree) => this.setState({inputThree})}
                />
                {/* <Input placeholder="Enter sentence for picture #3" /> */}
              </Item>
            </View>
            <View style={{padding: 70, justifyContent: 'center'}}>
              <Button bordered dark onPress={this.handleMLU} style={{paddingRight: 40}}>
                <Icon name="calculator" />
                <Text>Calculate MLU</Text>
              </Button>
            </View>
            <View style={{alignItems: 'center'}}>
              <Card style={{width: 70, height: 50}}>
                <CardItem>
                  <Body style={{alignItems: 'center'}}>
                    <Text style={{textAlign: "center", fontSize: 20}}>
                      {this.state.totalMLU}
                    </Text>
                  </Body>
                </CardItem>
              </Card>   
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
