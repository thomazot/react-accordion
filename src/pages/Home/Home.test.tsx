import React from "react"
import Home from "./"
import { render, waitFor } from "@testing-library/react"
import { act } from "react-dom/test-utils"
import { RecoilRoot } from "recoil"
import { KEY_LOCAL_STORAGE } from "stores/atoms/ListItemState"

describe("<Home /> pages", () => {
  beforeAll(() => {
    window.localStorage.removeItem(KEY_LOCAL_STORAGE)
  })
  it("Should render component", () => {
    const { container } = createComponent()
    expect(container).toBeInTheDocument()
  })
  it("Should request api and setState", async () => {
    jest.spyOn(global, "fetch").mockResolvedValue({
      status: 200,
      json: async () => []
    } as Response)

    act(() => {
      createComponent()
    })

    await waitFor(() => expect(global.fetch).toHaveBeenCalledTimes(1))
  })
  it("Should get localStorage list", async () => {
    window.localStorage.setItem(
      KEY_LOCAL_STORAGE,
      '[{ "id": "3", "name": "teste", "level": 1, "children": []}]'
    )
    jest.spyOn(global, "fetch").mockResolvedValue({
      status: 200,
      json: async () => []
    } as Response)

    act(() => {
      createComponent()
    })

    await waitFor(() => expect(global.fetch).toHaveBeenCalledTimes(1))
  })
})

function createComponent() {
  return render(
    <RecoilRoot>
      <React.Suspense fallback={<div>Loading...</div>}>
        <Home />
      </React.Suspense>
    </RecoilRoot>
  )
}
