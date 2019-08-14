import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import QRCode from 'react-native-qrcode';
import {
  Container, Code, Nav, NavItem, NavText, SignOutButton,
  SignOutButtonText, Account, AccountText, AccountTextBold,
} from './styles';

export default function Menu({ translateY }) {
  return (
    <Container style={{
      opacity: translateY.interpolate({
        inputRange: [0, 250],
        outputRange: [0, 1],
      })
    }}>
      <Code>
        <QRCode
          value="nuapp://cpf/04607528129"
          size={80}
          fgColor="#FFF"
          bgColor="#8B10AE"
        />
      </Code>
      <Account>
        <AccountText>Banco <AccountTextBold>260 - Nu Pagamentos S.A.</AccountTextBold></AccountText>
        <AccountText>Agência <AccountTextBold>0001</AccountTextBold></AccountText>
        <AccountText>Conta <AccountTextBold>4074456-8</AccountTextBold></AccountText>
      </Account>
      <Nav>
        <NavItem>
          <Icon name="help-outline" size={22} color="#FFF" />
          <NavText>Me ajude</NavText>
          <Icon name="keyboard-arrow-right" size={20} color="#FFF" />
        </NavItem>
        <NavItem>
          <Icon name="person-outline" size={22} color="#FFF" />
          <NavText>Perfil</NavText>
          <Icon name="keyboard-arrow-right" size={20} color="#FFF" />
        </NavItem>
        <NavItem>
          <Icon name="monetization-on" size={22} color="#FFF" />
          <NavText>Configurar NuConta</NavText>
          <Icon name="keyboard-arrow-right" size={20} color="#FFF" />
        </NavItem>
        <NavItem>
          <Icon name="credit-card" size={22} color="#FFF" />
          <NavText>Configurar Cartão</NavText>
          <Icon name="keyboard-arrow-right" size={20} color="#FFF" />
        </NavItem>
        <NavItem>
          <Icon name="smartphone" size={22} color="#FFF" />
          <NavText>Configurações do app</NavText>
          <Icon name="keyboard-arrow-right" size={20} color="#FFF" />
        </NavItem>
      </Nav>
      <SignOutButton>
        <SignOutButtonText>SAIR DA CONTA</SignOutButtonText>
      </SignOutButton>
    </Container>
  );
}
