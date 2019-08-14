import { Animated } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(Animated.View)`
  
`;
export const TabsContainer = styled.ScrollView.attrs({
  horizontal: true,
  contentContainerStyle: { paddingLeft: 15, paddingRigth: 20 },
  showsHorizontalScrollIndicator: false,
})``;
export const TabItem = styled.View`
  width: 100px;
  height: 100px;
  background: rgba(255,255,255, 0.2);
  border-radius: 3px;
  margin-left: 5px;
  margin-right: 5px;
  margin-bottom: 20px;
  padding: 10px;
  justify-content: space-between;
`;
export const TabText = styled.Text`
  font-size: 14px;
  color: #FFF;
`;
