import styled from "styled-components"

export const Accordion = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  transition: all 0.2s linear;
  visibility: hidden;
  max-height: 0;
  overflow: hidden;

  &[aria-expanded="true"] {
    visibility: visible;
    max-height: 100vh;
    overflow-y: auto;
  }
`
