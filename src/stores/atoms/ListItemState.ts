import { atom, selector } from "recoil"
import Api from "services"
import IItem from "typings/IITem"

const KEY_LOCAL_STORAGE = "@KEY_LOCAL_STORAGE"

const ListItemState = atom({
  key: "@LIST_ITEM_STATE",
  default: selector<IItem[]>({
    key: "@LIST_ITEM_SELECTOR",
    get: async () => await Api<IItem[]>("/react-accordion/data/db.json")
  }),
  effects_UNSTABLE: [
    ({ setSelf, onSet }) => {
      const itemList = localStorage.getItem(KEY_LOCAL_STORAGE)

      if (itemList !== null) {
        setSelf(JSON.parse(itemList))
      }

      onSet((newValue) =>
        localStorage.setItem(KEY_LOCAL_STORAGE, JSON.stringify(newValue))
      )
    }
  ]
})

export default ListItemState
