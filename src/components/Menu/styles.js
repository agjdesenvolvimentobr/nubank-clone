import { Animated } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(Animated.ScrollView)`
  margin: 0 30px;
`;

export const Code = styled.View`
  padding:5px;
  align-self: center;
  background: #FFF;
`;

export const Nav = styled.View`
  margin: 30px 50px 0;
  width: 100%;
`;
export const NavItem = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 0;
  border-top-width: 1px;
  border-top-color: rgba(255,255,255, 0.4);
`;
export const NavText = styled.Text`
  flex:1;
  font-size:15px;
  color: #FFF;
  margin-left: 20px;
`;
export const SignOutButton = styled.TouchableOpacity`
  width: 100%;
  border: 1px;
  border-color: rgba(255,255,255, 0.4);
  border-radius: 3px;
  justify-content:center;
  align-items: center;
  padding: 10px;
  margin-top: 10px

`;
export const SignOutButtonText = styled.Text`
  font-size:15px;
  color: #FFF;
  margin-left: 20px;
`;

export const Account = styled.View`
  margin-top:15px;
  align-items: center;
`;

export const AccountText = styled.Text`
  color: #FFF;
`;
export const AccountTextBold = styled.Text`
  color: #FFF;
  font-weight: bold;
`;
