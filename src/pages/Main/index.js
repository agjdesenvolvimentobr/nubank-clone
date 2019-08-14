import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Animated } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import {
  Container, Content, Card, CardHeader, CardContent, Title, Descriptions, CardFooter, Annotation,
} from './styles';
import Header from '~/components/Header';
import Tabs from '~/components/Tabs';
import Menu from '~/components/Menu';

export default function Main() {
  let offset = 0;
  const translateY = new Animated.Value(0);
  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY,
        },
      },
    ],
    { useNativeDriver: true },
  );
  function onHandlerStateChanged(event) {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      let opened = false;
      const { translationY } = event.nativeEvent;
      offset += translationY;
      if (translationY >= 100) {
        opened = true;
      } else {
        translateY.setValue(offset);
        translateY.setOffset(0);
        offset = 0;
      }
      Animated.timing(translateY, {
        toValue: opened ? 420 : 0,
        duration: 200,
        useNativeDriver: true,
      }).start(() => {
        offset = opened ? 420 : 0;
        translateY.setOffset(offset);
        translateY.setValue(0);
      });
    }
  }

  return (
    <Container>
      <Header />
      <Content>
        <Menu translateY={translateY} />
        <PanGestureHandler
          onGestureEvent={animatedEvent}
          onHandlerStateChange={onHandlerStateChanged}
        >
          <Card
            style={{
              transform: [{
                translateY: translateY.interpolate({
                  inputRange: [0, 420],
                  outputRange: [0, 420],
                  extrapolate: 'clamp',
                }),
              }],
            }}
          >
            <CardHeader>
              <Icon name="monetization-on" size={28} color="#888" />
              <Icon name="visibility-off" size={28} color="#888" />
            </CardHeader>
            <CardContent>
              <Title>Saldo Disponível</Title>
              <Descriptions>R$ 99.539,07</Descriptions>
            </CardContent>
            <CardFooter>
              <Icon name="attach-money" size={24} color="#888" />
              <Annotation>
                Trasferência de R$ 5000,00 recebida de Adailson Gaspar hoje
              </Annotation>
              <Icon name="keyboard-arrow-right" size={20} color="#888" />
            </CardFooter>
          </Card>
        </PanGestureHandler>
      </Content>
      <Tabs translateY={translateY} />
    </Container>
  );
}
