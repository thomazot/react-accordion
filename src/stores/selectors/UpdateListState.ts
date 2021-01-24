import { DefaultValue, selector } from "recoil"
import ListItemState from "stores/atoms/ListItemState"
import IItem from "typings/IITem"

function updateSearchItem(
  itemList: IItem[],
  updateItem: IItem[],
  checked?: boolean
): IItem[] {
  const itemListUpdate = itemList.map((item) => {
    let newItem = item
    if (item.id === updateItem[0].id) {
      return {
        ...updateItem[0],
        children: updateSearchItem(
          updateItem[0].children,
          updateItem,
          updateItem[0].checked
        )
      }
    }
    if (item.children.length > 0) {
      return {
        ...item,
        children: updateSearchItem(item.children, updateItem, checked),
        checked:
          typeof checked !== "undefined"
            ? checked
            : typeof item.checked !== "undefined"
            ? item.checked
            : false
      }
    }
    return {
      ...newItem,
      checked:
        typeof checked !== "undefined"
          ? checked
          : typeof item.checked !== "undefined"
          ? item.checked
          : false
    }
  })

  return itemListUpdate
}

const UpdateListState = selector<IItem[]>({
  key: "@UPDATE_LIST_STATE",
  get: ({ get }) => get(ListItemState),
  set: ({ set }, newValue) => {
    if (!(newValue instanceof DefaultValue))
      set(ListItemState, (oldValue) => updateSearchItem(oldValue, newValue))
  }
})

export default UpdateListState
