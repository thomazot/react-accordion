import styled from "styled-components"

export const Accordion = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  transition: all 0.2s linear;
  visibility: hidden;
  max-height: 0;
  overflow: hidden;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);

  &[aria-expanded="true"] {
    visibility: visible;
    max-height: none;
    overflow-y: auto;
  }
`
