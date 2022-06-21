// @flow
import * as React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  TouchableWithoutFeedback,
  TouchableOpacity
} from 'react-native';
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
    height: null,
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
    opacity: 0.9,
  },
});

interface HeaderProps {
  section: Section;
  index: number;
  onPress: () => void;
}

const Header = ({section, index, onPress}: HeaderProps) => {
  const colors = [section.leftColor, section.rightColor];
  return (
    <View style={styles.container}>
    <TouchableWithoutFeedback onPress={() => { console.log('pressed'); onPress()}}>
      <>
        <Image source={section.image} style={styles.image} />
        <LinearGradient
          style={styles.gradient}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          {...{colors}}
        />
        </>
    </TouchableWithoutFeedback>
    </View>
  );
};

export default Header;
