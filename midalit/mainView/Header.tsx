// @flow
import * as React from 'react';
import {View, StyleSheet, Image, Dimensions} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Section} from './Constants';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    width: null,
    height: null
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
    opacity: 0.9,
  },
});

interface HeaderProps {
  section: Section;
  index: number;
}

const Header = ({section, index}: HeaderProps) => {
  const colors = [section.leftColor, section.rightColor];
  return (
    <View style={styles.container}>
      <Image source={section.image} style={styles.image} />
      <LinearGradient
        style={styles.gradient}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        {...{colors}} />
    </View>
  );
};

export default Header;
