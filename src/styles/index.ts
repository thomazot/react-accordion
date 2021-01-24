import { css } from "styled-components"

export const Container = css`
  width: ${({ theme }) => `${theme.viewport}px`};
  max-width: calc(100vw - ${({ theme }) => `${theme.gap}px`});
  margin: 0 auto;
`
