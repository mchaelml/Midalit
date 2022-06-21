import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import Animated, {
  multiply,
  interpolate,
  neq,
  and,
  add,
  concat,
} from "react-native-reanimated";
import { ICON_SIZE, PADDING, Colors, SEGMENT } from "./icons/Constants";
import {
  withSpringTransition,
  withTransition,
  string,
} from "react-native-redash";
import * as shape from "d3-shape";
import Svg, { Path } from "react-native-svg";

const AnimatedPath = Animated.createAnimatedComponent(Path);

const AnimatedSvg = Animated.createAnimatedComponent(Svg);
const { width, height } = Dimensions.get("window");

const size = 6;
const topParticles = [0, 1, 2];
const bottomParticles = [0, 1];

const HEIGHT = ICON_SIZE + PADDING;

interface ParticleProps {
  transition: Animated.Node<number>;
  activeTransition: Animated.Node<number>;
  active: Animated.Value<number>;
  number: number;
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
  },
  particles: {
    height: HEIGHT,
  },
  particle: {
    width: size,
    height: size,
    borderRadius: size / 2,
    backgroundColor: Colors.primary,
    top: 0,
    left: 0,
    position: "absolute",
  },
  svg: {
    backgroundColor: "red",
    borderRadius: size / 2,
    top: 0,
    left: 0,
    height: size,
    position: "absolute",
  },
});

const Particles = ({
  transition,
  activeTransition,
  active,
  number,
}: ParticleProps) => {
  const middle = HEIGHT / 2 - size / 2;
  const opacity = and(neq(activeTransition, 0), neq(activeTransition, 1));
  const x = add(multiply(transition, SEGMENT), SEGMENT / 2 - size / 2);
  const xLineEnd = number * SEGMENT + (SEGMENT / 2 - size / 2);
  const xLineStart = number * SEGMENT;
  const top = interpolate(activeTransition, {
    inputRange: [0, 0.5, 1],
    outputRange: [middle, 0 - 5, middle],
  });
  const bottom = interpolate(activeTransition, {
    inputRange: [0, 0.5, 1],
    outputRange: [middle, HEIGHT + 5, middle],
  });
  const s = interpolate(activeTransition, {
    inputRange: [0, 0.5, 1],
    outputRange: [0.8, 1, 0.8],
  });
  console.log("index: ", active);
  return (
    <View style={styles.container} pointerEvents="none">
      <View style={styles.particles}>
        {topParticles.map((particle) => {
          const subParticles = topParticles.slice(0, particle);
          const translateX = subParticles.reduce(
            (acc) => withSpringTransition(acc),
            x,
          );
          const translateY = subParticles.reduce(
            (acc) => withSpringTransition(acc),
            top,
          );
          const scale = subParticles.reduce(
            (acc) => withSpringTransition(acc),
            s,
          );
          const line = shape
            .line()
            .curve(shape.curveBasis)
            .x((d) => d[0])
            .y((d) => d[1])([
            [xLineStart, middle],
            [xLineStart + (xLineEnd - xLineStart / 2), -5],
            [xLineEnd, middle],
            //[width, middle],
          ]);

          //const d = string`M 40 0 C 1 1 ,50 1, 400 0`;
          //const line = string`M ${translateX} 10`;

          return (
            <>
              <Animated.View
                key={particle}
                style={[
                  styles.particle,
                  { opacity, transform: [{ translateX, translateY, scale }] },
                ]}
              />
              {/* <AnimatedSvg width={x} {...{opacity}}>
                <AnimatedPath
                  //{...{translateX, translateY, opacity}}
                  d={line}
                  stroke="red"
                  strokeWidth={5}
                />
            </AnimatedSvg> */}
            </>
          );
        })}
        {/* {bottomParticles.map(particle => {
          const subParticles = bottomParticles.slice(0, particle);
          const translateX = subParticles.reduce(
            acc => withSpringTransition(acc),
            x,
          );
          const translateY = subParticles.reduce(
            acc => withSpringTransition(acc),
            bottom,
          );
          const scale = subParticles.reduce(
            acc => withSpringTransition(acc),
            s,
          );
          return (
            <Animated.View
              key={particle}
              style={[
                styles.particle,
                {opacity, transform: [{translateX, translateY, scale}]},
              ]}
            />
          );
        })} */}
      </View>
    </View>
  );
};

export default Particles;
