import React from "react"
import Accordion from "./"
import { render } from "@testing-library/react"

const _MOCK_ITEMS_ = [
  {
    id: "97cd3a19-0f1c-4248-a84c-a1f5a0093a89",
    name: "Luis F. Doris",
    level: 1,
    children: [
      {
        id: "6410eff5-5aff-46fd-bb08-ed90581007b4",
        name: "Maurice Rudolf Ludwig",
        level: 2,
        children: []
      }
    ]
  }
]

describe("<Accordion /> component", () => {
  it("Should render component", () => {
    const { container } = createComponent()
    expect(container).toBeInTheDocument()
  })
})

function createComponent() {
  return render(<Accordion items={_MOCK_ITEMS_} />)
}
