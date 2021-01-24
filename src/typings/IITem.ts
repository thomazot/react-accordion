type TypeItem = {
  id: string
  name: string
  level: number
  children: IItem[]
  checked?: boolean
}

export default interface IItem extends TypeItem {}
