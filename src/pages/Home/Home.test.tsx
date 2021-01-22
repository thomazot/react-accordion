import React from "react"
import Home from "./"
import { render } from "@testing-library/react"

describe("<Home /> pages", () => {
  it("Should render component", () => {
    const { container } = createComponent()
    expect(container).toBeInTheDocument()
  })
})

function createComponent() {
  return render(<Home />)
}
