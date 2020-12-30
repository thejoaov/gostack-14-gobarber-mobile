import styled from 'styled-components/native'
import { color, space, width } from 'styled-system'

export const Container = styled.TouchableOpacity<{ color?: string }>`
  height: 50px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;

  ${color}
  ${width};
  ${space};
`
