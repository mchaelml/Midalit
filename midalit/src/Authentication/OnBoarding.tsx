import React, { useRef } from "react";
import { Dimensions, StyleSheet } from "react-native";
import styled from "styled-components/native";
import { interpolateColor, useScrollHandler } from "react-native-redash";
import Animated, {
  interpolate,
  multiply,
  divide,
  Extrapolate,
} from "react-native-reanimated";

import { useTheme } from "../Theme";
import { AuthNavigationProps } from "../Components/Navigation";

import Slide, { SLIDE_HEIGHT } from "./Slide";
import SubSlide from "./SubSlide";
import Dot from "./Dot";

const { width } = Dimensions.get("screen");

const Pagination = styled.View`
  ${{ ...StyleSheet.absoluteFillObject }};
  height: ${(props) => props.theme.borderRadii.xl}px;
  /* background-color: rgba(100,200,300,0.5); */
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

const Container = styled.View`
  flex: 1;
  background-color: white;
`;

const Footer = styled.View`
  flex: 1;
`;

const PictureContainer = styled(Animated.View)`
  ${{ ...StyleSheet.absoluteFillObject }};
  align-items: center;
  justify-content: flex-end;
  border-bottom-right-radius: ${(props) => props.theme.borderRadii.xl};
  overflow: hidden;
`;

const Picture = styled.Image`
  width: ${(props) => width - props.theme.borderRadii.xl};
  height: ${(props) =>
    ((width - props.theme.borderRadii.xl) * props.picture.height) /
    props.picture.width};
`;

const Slider = styled(Animated.View)`
  height: ${SLIDE_HEIGHT}px;
  border-bottom-right-radius: ${(props) => props.theme.borderRadii.xl}px;
`;

const FooterOverlay = styled(Animated.View)`
  ${{ ...StyleSheet.absoluteFillObject }};
`;

const FooterContainer = styled(Animated.View)`
  flex: 1;
  flex-direction: row;
  background-color: white;
  border-top-left-radius: ${(props) => props.theme.borderRadii.xl}px;
`;

interface Slide {
  title: string;
  subtitle: string;
  description: string;
  color: string;
  picture: {
    width: number;
    height: number;
    src: number;
  };
}

const slides: Slide[] = [
  {
    title: "Relaxed",
    subtitle: "Find Your Outfits",
    description:
      "Confused about your outfit? Don’t worry! Find the best outfit here!",
    color: "#BFEAF5",
    picture: {
      src: require("../../assets/1.png"),
      width: 2513,
      height: 3583,
    },
  },
  {
    title: "Playful",
    subtitle: "Your Style, Your Way",
    description:
      " Create your individual & unique style and look amazing everyday",
    color: "#FFE4D9",
    picture: {
      src: require("../../assets/2.png"),
      width: 2791,
      height: 3744,
    },
  },
  {
    title: "Excentric",
    subtitle: "Look Good, Feel Good",
    description:
      "Discover the latest trends in fashion and explore your personality",
    color: "#FFDDDD",
    picture: {
      src: require("../../assets/3.png"),
      width: 2738,
      height: 3244,
    },
  },
  {
    title: "Funky",
    subtitle: "Look Good, Feel Good",
    description:
      "Discover the latest trends in fashion and explore your personality",
    color: "#FFDDDD",
    picture: {
      src: require("../../assets/4.png"),
      width: 1757,
      height: 2551,
    },
  },
];

const OnBoarding = ({ navigation }: AuthNavigationProps<"OnBoarding">) => {
  const theme = useTheme();
  const scroll = useRef<Animated.ScrollView>(null);
  const { scrollHandler, x } = useScrollHandler();
  const backgroundColor = interpolateColor(x, {
    inputRange: slides.map((s, _i) => _i * width),
    outputRange: slides.map((s, _i) => s.color),
  });
  return (
    <Container>
      <Slider style={{ backgroundColor }} {...{ theme }}>
        {slides.map(({ picture }, _i) => {
          const opacity = interpolate(x, {
            inputRange: [(_i - 0.5) * width, _i * width, (_i + 0.5) * width],
            outputRange: [0, 1, 0],
            extrapolate: Extrapolate.CLAMP,
          });
          return (
            <PictureContainer style={{ opacity }} {...{ theme }}>
              <Picture source={picture.src} {...{ picture, theme }} />
            </PictureContainer>
          );
        })}
        <Animated.ScrollView
          ref={scroll}
          horizontal
          snapToInterval={width}
          decelerationRate="fast"
          {...scrollHandler}
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={1}
          bounces={false}
        >
          {slides.map((s, _i) => {
            return <Slide label={s.title} key={_i} right={!!(_i % 2)} />;
          })}
        </Animated.ScrollView>
      </Slider>
      <Footer>
        <FooterOverlay style={{ backgroundColor }} />
        <FooterContainer {...{ theme }}>
          <Pagination {...{ theme }}>
            {slides.map((_, index) => (
              <Dot
                key={`dot${index}`}
                currentIndex={divide(x, width)}
                {...{ index }}
              />
            ))}
          </Pagination>
          <Animated.View
            style={{
              flex: 1,
              flexDirection: "row",
              width: width * slides.length,
              transform: [{ translateX: multiply(x, -1) }],
            }}
          >
            {slides.map((s, _i) => {
              const last = _i === slides.length - 1;
              return (
                <SubSlide
                  onPress={() => {
                    if (last) {
                      navigation.navigate("Welcome");
                    } else {
                      scroll.current
                        ?.getNode()
                        .scrollTo({ x: width * (_i + 1), animated: true });
                    }
                  }}
                  title={s.subtitle}
                  description={s.description}
                  key={_i}
                  last={_i === slides.length - 1}
                />
              );
            })}
          </Animated.View>
        </FooterContainer>
      </Footer>
    </Container>
  );
};

export default OnBoarding;
