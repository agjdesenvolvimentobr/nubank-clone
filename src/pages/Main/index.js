import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container, Content, Card, CardHeader, CardContent, Title, Descriptions, CardFooter, Annotation,
} from './styles';
import Header from '~/components/Header';
import Tabs from '~/components/Tabs';


export default function Main() {
  return (
    <Container>
      <Header />
      <Content>
        <Card>
          <CardHeader>
            <Icon name="monetization-on" size={28} color="#888" />
            <Icon name="visibility-off" size={28} color="#888" />
          </CardHeader>
          <CardContent>
            <Title>Saldo Disponível</Title>
            <Descriptions>R$ 999.539,07</Descriptions>
          </CardContent>
          <CardFooter>
            <Icon name="attach-money" size={24} color="#888" />
            <Annotation>
              Trasferência de R$ 5000,00 recebida de Adailson Gaspar hoje
            </Annotation>
            <Icon name="keyboard-arrow-right" size={20} color="#888" />
          </CardFooter>
        </Card>
      </Content>
      <Tabs />
    </Container>
  );
}
