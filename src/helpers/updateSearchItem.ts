import IItem from "typings/IITem"

export default function updateSearchItem(
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
