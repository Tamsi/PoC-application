import React, { Component } from "react";
import { View } from "react-native";
import PostList from '../components/postList';
import { Header } from 'react-native-elements';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);

    this.state = { show: props.navigation.getParam('show') || false };
  }

  showSearchbar() {
    if (!this.state.show) {
      this.setState({ show: true });
    } else {
      this.setState({ show: false });
    }
  }

  render() {
    return (
      <View>
        <Header
            leftComponent={{ icon: 'search', color: '#fff', onPress: () => this.showSearchbar() }}
            centerComponent={{ text: 'List', style: { color: '#fff' } }}
            rightComponent={{ icon: 'message', color: '#fff', onPress: () => this.props.navigation.navigate('Chat') }}
        />
        <PostList showSearchbar={this.state.show} nav={this.props.navigation} />
      </View>
    );
  }
}
