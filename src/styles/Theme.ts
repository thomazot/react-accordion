import { DefaultTheme } from "styled-components"

export interface ITheme extends DefaultTheme {
  viewport: number
  gap: number
  palette: {
    primary: {
      main: string
      contrastText: string
    }
  }
}

export const Theme: ITheme = {
  viewport: 1024,
  gap: 32,
  palette: {
    primary: {
      main: "#00a3ea",
      contrastText: "#fff"
    }
  }
}
