import React, { Component } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ''
    };
  }

  onInputChange(term) {
    this.setState({term: term});
    this.props.onChangeTerm(term);
  }

  render() {
    if (this.props.show) {
      return (
        <View style={styles.container}>
          <TextInput
            autoFocus
            value={this.state.term}
            onChange={event => this.onInputChange(event.nativeEvent.text)}
            placeholder="Search for articles..."
          />
        </View>
      );
    } else {
      return (null);
    }
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginTop: 4,
    padding: 2,
    flex: 0.3,
    borderWidth: 0.4,
    borderRadius: 3
  }
});
