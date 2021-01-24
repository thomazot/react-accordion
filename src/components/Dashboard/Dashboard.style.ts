import styled from "styled-components"
import { Container } from "styles"

export const Main = styled.main`
  ${Container}
`

export const Header = styled.header`
  ${Container}
  padding: 30px 0;

  h1 {
    text-align: center;
    font-size: 32px;
  }
`

export const Footer = styled.footer`
  ${Container}
  text-align: center;
  font-size: 14px;
  padding: 50px 0;
`
