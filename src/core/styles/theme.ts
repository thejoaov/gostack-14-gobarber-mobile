import { DefaultTheme } from 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string
      background: string
      white: string
      black: { shape: string; black: string; medium: string; inputs: string }
      gray: { gray: string; grayHard: string }
      // transparency: string[]
      semantic: {
        success: string
        warning: string
        error: string
        info: string
      }
    }
    fonts: {
      bold: string
      light: string
      medium: string
      regular: string
    }
  }
}

const theme: DefaultTheme = {
  colors: {
    primary: '#ff9000',
    background: '#312E38',
    white: '#F4EDE8',
    black: {
      black: '#000000',
      inputs: '#232129',
      medium: '#28262E',
      shape: '#3E3B47',
    },
    gray: {
      gray: '#999591',
      grayHard: '#666360',
    },
    semantic: {
      success: '#00a99d',
      warning: '#ff9000',
      error: '#c53030',
      info: '#3172b7',
    },
  },
  fonts: {
    bold: 'RobotoSlab-Bold',
    medium: 'RobotoSlab-Medium',
    regular: 'RobotoSlab-Regular',
    light: 'RobotoSlab-Light',
  },
}

export default theme
