import React from "react"
import Accordion from "./"
import { render } from "@testing-library/react"

describe("<Accordion /> component", () => {
  it("Should render component", () => {
    const { container } = createComponent()
    expect(container).toBeInTheDocument()
  })
  // it("Should list items accordions", () => {
  //   createComponent(items)
  // })
})

function createComponent(items) {
  return render(<Accordion />)
}
