import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/Feather'
import { color, space, width } from 'styled-system'

export const Container = styled.TouchableOpacity<{ color?: string }>`
  height: 50px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  flex-direction: row;

  ${color}
  ${width};
  ${space};
`
export const StyledIcon = styled(Icon)`
  margin-right: 18px;
`
