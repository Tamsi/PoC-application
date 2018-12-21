import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import { Header, Card } from 'react-native-elements';

export default class DetailsScreen extends Component {
  constructor(props) {
    super(props);

    this.state = { article: props.navigation.getParam('article') };
    console.log('ici', this.state.article.post_title);
  }

  render() {
    return (
      <View>
        <Header
          leftComponent={{ icon: 'home', color: '#fff', onPress: () => this.props.navigation.navigate('Home', { show: true }) }}
          centerComponent={{ text: this.props.navigation.getParam('article').name, style: { color: '#fff' } }}
          rightComponent={{ icon: 'message', color: '#fff', onPress: () => this.props.navigation.navigate('Chat') }}
        />
        <Card title={this.props.navigation.getParam('article').post_title}>
          <Text style={{marginBottom: 10}}>
            {this.props.navigation.getParam('article').post_subtitle}
          </Text>
        </Card>
      </View>
    );
  }
}
