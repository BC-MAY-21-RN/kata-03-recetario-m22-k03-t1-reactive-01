import {Text, View, Image, StyleSheet} from 'react-native';
import React, {Component} from 'react';

const styles = StyleSheet.create({
  container: {
    width: 120,
    height: 200,
    color: 'white',
  },
  image: {
    height: 120,
    width: 120,
    marginBottom: 10,
    borderRadius: 10,
  },
  footer: {
      color: 'white',
  }
});

export class itemReceta extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image 
            style={styles.image}
            source={require('../../../assets/chocolateChip.jpg')}
        />
        <Text styles={styles.footer}>Chocolate Chip</Text>
      </View>
    );
  }
}

export default itemReceta