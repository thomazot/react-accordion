type TypeItem = {
  id: string
  name: string
  level: number
  children: IItem[]
  checked: undefined | boolean
}

export default interface IItem extends TypeItem {}
