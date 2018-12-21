import React from 'react';
import { View, TouchableOpacity } from 'react-native';

const Card = (props) => (
  <View style={styles.containerStyle}>
    <TouchableOpacity onPress={()=> {props.nav.navigate('Details', {id: props.id, article: props.post})}}>
      {props.children}
    </TouchableOpacity>
  </View>
);

const styles = {
  containerStyle: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  }
};

export default Card;
