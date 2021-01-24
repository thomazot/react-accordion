import React from "react"
import { RecoilRoot, useRecoilValue, useResetRecoilState } from "recoil"
import UpdateListState from "./UpdateListState"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

const MockTestSelector = () => {
  const list = useRecoilValue(UpdateListState)
  const resetUpdateList = useResetRecoilState(UpdateListState)
  const handleReset = () => resetUpdateList()

  return (
    <div>
      {list.map((item) => item.id)}{" "}
      <button type="button" onClick={handleReset}>
        Reset
      </button>
    </div>
  )
}

function createComponent() {
  return render(
    <RecoilRoot>
      <React.Suspense fallback={<div>Loading...</div>}>
        <MockTestSelector />
      </React.Suspense>
    </RecoilRoot>
  )
}

describe("Stores Selectors UpdateListState", () => {
  it("Should call list", () => {
    const { container } = createComponent()
    expect(container).toBeInTheDocument()
  })
  it("Should reset update list state", () => {
    const { container } = createComponent()
    expect(container).toBeInTheDocument()

    const button = screen.getByRole("button", { name: /reset/i })
    expect(button).toBeInTheDocument()
    userEvent.click(button)
  })
})
