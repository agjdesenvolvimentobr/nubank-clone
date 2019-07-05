import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container, Top, Logo, Titulo,
} from './styles';
import logo from '~/assets/Nubank_Logo.png';


export default function Header() {
  return (
    <Container>
      <Top>
        <Logo source={logo} />
        <Titulo>Amilson</Titulo>
      </Top>
      <Icon name="keyboard-arrow-down" size={24} color="#DDD" />
    </Container>
  );
}
