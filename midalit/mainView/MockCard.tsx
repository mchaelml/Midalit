// @flow
import * as React from 'react';
import {View, StyleSheet, Image} from 'react-native';

const styles = StyleSheet.create({
    container: {},
    image: {
      borderRadius: 5,
      height: 200,
      resizeMode: 'cover',
      margin: 8,
    },
  });

interface MockCardProps {
  image: any;
}

const MockCard = ({image}: MockCardProps) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
    </View>
  );
};


export default MockCard;