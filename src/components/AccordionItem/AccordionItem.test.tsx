import * as React from "react"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import AccordionItem from "./"
import { RecoilRoot } from "recoil"
import IItem from "typings/IITem"

describe("<AccordionItem /> component", () => {
  it("Should render component", () => {
    const { container } = createComponent()
    expect(container).toBeInTheDocument()
  })

  it("Should render checked with default value true", () => {
    const { container } = createComponent({ checked: true })
    expect(container).toBeInTheDocument()
    const label = screen.getByText(/joão carlos/i)
    expect(label).toBeInTheDocument()
  })

  it("Should expand children on click see button more", async () => {
    const { container } = createComponent()
    expect(container).toBeInTheDocument()

    const item = screen.getByTestId("accordion-item-1")
    expect(item).toBeInTheDocument()
    expect(item.getAttribute("aria-expanded")).toBe("false")

    const buttonMore = screen.getByRole("button", { name: /ver mais/i })
    expect(buttonMore).toBeInTheDocument()

    userEvent.click(buttonMore)

    expect(item.getAttribute("aria-expanded")).toBe("true")
  })

  it("Should on click label checked input", () => {
    const setState = jest.fn()
    const useStateMock: any = (initState: any) => [initState, setState]
    const useStateSpy = jest.spyOn(React, "useState")
    useStateSpy.mockImplementation(useStateMock)
    createComponent()

    const label = screen.getByText(/joão carlos/i)
    expect(label).toBeInTheDocument()
    userEvent.click(label)
    expect(setState).toHaveBeenCalled()
  })
})

const _DEFAULT_ITEM_: IItem = {
  id: "1",
  name: "João Carlos",
  level: 0,
  children: [
    {
      id: "2",
      name: "Maria Clara",
      level: 1,
      children: [],
      checked: undefined
    }
  ],
  checked: undefined
}

function createComponent(item = {}) {
  const _ITEM_ = {
    ..._DEFAULT_ITEM_,
    ...item
  }
  return render(
    <RecoilRoot>
      <React.Suspense fallback={<div>Loading...</div>}>
        <AccordionItem item={_ITEM_} />
      </React.Suspense>
    </RecoilRoot>
  )
}
