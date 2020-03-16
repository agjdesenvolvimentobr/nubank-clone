import { Animated } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #8b10AE;
`;
export const Content = styled.View`
  flex:1;
  max-height:400px;
  justify-content:center;
  z-index:5;
  margin-bottom:40px;
`;
export const Card = styled(Animated.View)`
  flex:1;
  background: #FFF;
  border-radius:3px;
  margin: 0 20px 20px;
  height:100%;
  position: absolute;
  left:0;
  right:0;
  top: 0;
`;
export const CardHeader = styled.View`
  flex-direction:row;
  justify-content: space-between;
  align-items:center;
  padding: 30px;
`;
export const CardContent = styled.View`
  flex:1;
  padding: 0 30px;
  justify-content:center;
`;
export const Title = styled.Text`
  font-size: 13px;
  color:#999
`;
export const Descriptions = styled.Text`
  font-size: 32px;
  margin-top: 3px;
  color:#333
`;
export const CardFooter = styled.View`
  flex-direction:row;
  align-items:center;
  justify-content: space-between;
  padding:30px;
  background:#EEE;
  border-radius:4px
`;
export const Annotation = styled.Text`
  padding: 0 20px;
  flex:1;
  font-size:12px;
  color:#333;
  text-align:justify
`;
