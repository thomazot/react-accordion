import { atom } from "recoil"
import Api from "services"
import IItem from "typings/IITem"

const KEY_LOCAL_STORAGE = "@KEY_LOCAL_STORAGE"

const ListItemState = atom<IItem[]>({
  key: "@LIST_ITEM_STATE",
  default: [],
  effects_UNSTABLE: [
    ({ setSelf, onSet }) => {
      Api<IItem[]>("/react-accordion/data/db.json").then((items) => {
        const itemList = localStorage.getItem(KEY_LOCAL_STORAGE)

        if (itemList !== null) {
          setSelf(JSON.parse(itemList))
        } else {
          setSelf(items)
        }
      })

      onSet((newValue) =>
        localStorage.setItem(KEY_LOCAL_STORAGE, JSON.stringify(newValue))
      )
    }
  ]
})

export default ListItemState
