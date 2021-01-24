import updateSearchItem from "helpers/updateSearchItem"
import { DefaultValue, selector } from "recoil"
import ListItemState from "stores/atoms/ListItemState"
import IItem from "typings/IITem"

const UpdateListState = selector<IItem[]>({
  key: "@UPDATE_LIST_STATE",
  get: ({ get }) => get(ListItemState),
  set: ({ set }, newValue) => {
    if (!(newValue instanceof DefaultValue))
      set(ListItemState, (oldValue) => updateSearchItem(oldValue, newValue))
  }
})

export default UpdateListState
