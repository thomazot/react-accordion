import styled from "styled-components"
import IconCheck from "styles/img/check.svg"
import IconLess from "styles/img/less.svg"

type LiProps = {
  nv: number
  count: number
  total?: number
  expanded?: boolean
}

export const AccordionItem = styled.li<LiProps>`
  list-style: none;
  padding: 0;
  margin: 0;

  > div {
    display: flex;
    align-items: stretch;

    &:hover {
      background: rgba(0, 0, 0, 0.2);
    }

    label {
      flex: 1;
      min-width: 0;
      display: flex;
      align-items: center;
      padding: 16px;
      cursor: pointer;

      ${(props) =>
        `
        padding-left: ${props.nv * 26}px;
      `}

      &:before {
        content: "";
        width: 16px;
        height: 16px;
        display: block;
        border: solid 1px rgba(0, 0, 0, 0.2);
        border-radius: 3px;
        margin-right: 8px;
        ${({ count, total = 0 }) =>
          count > 0 &&
          count !== total &&
          `
          background: #00a3ea url(${IconLess}) no-repeat center center;
          background-size: 10px 10px;
        `}
      }
    }

    input {
      position: absolute;
      opacity: 0;
    }

    input:checked + label:before {
      ${({ count, total = 0 }) =>
        count < total
          ? `
          background: #00a3ea url(${IconLess}) no-repeat center center;
          background-size: 10px 10px;
        `
          : `
          background: #00a3ea url(${IconCheck}) no-repeat center center;
          background-size: 10px 10px;
        `}
    }

    button {
      width: 50px;
      background: none;
      border: none;
      appearance: none;
      cursor: pointer;

      svg {
        transition: all 0.2s ease-in-out;
        ${({ expanded = false }) =>
          expanded ? `transform: rotate(-180deg);` : `transform: rotate(0deg);`}
      }

      &:focus {
        outline: none;
      }

      &:hover {
        color: #00a3ea;
      }
    }
  }
`
