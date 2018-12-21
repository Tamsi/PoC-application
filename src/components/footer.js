import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>Footer</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      position: 'relative',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F8F8F8',
    },
    textStyle: {
        fontSize: 30
    }
  });

export default Footer;
