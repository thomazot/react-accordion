type TypeItem = {
  id: string
  name: string
  level: number
  children: IItem[]
}

export default interface IItem extends TypeItem {}
