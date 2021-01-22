import { render } from "@testing-library/react"
import AccordionItem from "./"

describe("<AccordionItem /> component", () => {
  it("Should render component", () => {
    const { container } = createComponent()
    expect(container).toBeInTheDocument()
  })
})

function createComponent() {
  return render(<AccordionItem />)
}
