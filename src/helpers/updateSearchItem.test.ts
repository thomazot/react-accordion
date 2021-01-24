import data from "../../public/data/db.json"
import updateSearchItem from "./updateSearchItem"
import IItem from "typings/IITem"

describe("Helpers updateSearchItem", () => {
  it("Should update list default", () => {
    const list: IItem[] = data
    const listUpdate = updateSearchItem(list, [{ ...list[0], checked: true }])

    expect(listUpdate[0].checked).toBe(true)
  })

  it("Should update checked to undefined", () => {
    const list: IItem[] = data

    list[0].checked = true
    const listUpdate = updateSearchItem(list, [{ ...list[0].children[0] }])

    expect(listUpdate[0].checked).toBe(true)

    list[0].children = []
    const listUpdateNotChild = updateSearchItem(list, [{ ...list[2] }])

    expect(listUpdateNotChild[0].checked).toBe(true)
  })
})
