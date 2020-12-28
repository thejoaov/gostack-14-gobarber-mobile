import { DefaultTheme } from 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string
      background: string
      secondary: string[]
      gray: string[]
      transparency: string[]
      semantic: {
        success: string
        warning: string
        error: string
        info: string
      }
      black: string
      white: string
    }
    fonts: {
      headings: string
      headingsMedium: string
      body: string
      bodyRegular: string
      light: string
    }
  }
}

const theme: DefaultTheme = {
  colors: {
    primary: '#ff9000',
    background: '#312E38',
    secondary: ['#ebf8ff'],
    transparency: ['rgba(0, 0, 0, 0.2)'],
    gray: ['#f4ede8', '#666360', '#232129'],
    semantic: {
      success: '#00a99d',
      warning: '#ff9000',
      error: '#c53030',
      info: '#3172b7',
    },
    black: '#000',
    white: '#fff',
  },
  fonts: {
    headings: 'RobotoSlab-Bold',
    headingsMedium: 'RobotoSlab-Medium',
    body: 'RobotoSlab-Medium',
    bodyRegular: 'RobotoSlab-Regular',
    light: 'RobotoSlab-Light',
  },
}

export default theme
