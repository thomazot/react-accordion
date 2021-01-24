import * as React from "react"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import AccordionItem from "./"
import { RecoilRoot } from "recoil"

describe("<AccordionItem /> component", () => {
  it("Should render component", () => {
    const { container } = createComponent()
    expect(container).toBeInTheDocument()
  })

  // it("Should on click label checked input", () => {
  //   const setState = jest.fn()
  //   const useStateMock: any = (initState: any) => [initState, setState]
  //   const useStateSpy = jest.spyOn(React, "useState")
  //   useStateSpy.mockImplementation(useStateMock)
  //   createComponent()

  //   const label = screen.getByText(/joão carlos/i)
  //   expect(label).toBeInTheDocument()
  //   userEvent.click(label)
  //   expect(setState).toHaveBeenCalled()
  // })
})

function createComponent() {
  return render(
    <RecoilRoot>
      <React.Suspense fallback={<div>Loading...</div>}>
        <AccordionItem
          item={{
            id: "1",
            name: "João Carlos",
            level: 0,
            children: [],
            checked: false
          }}
        />
      </React.Suspense>
    </RecoilRoot>
  )
}
