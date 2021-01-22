import { IAccordion } from "components/Accordion"
export type IAccordionItem = {
  id: string
  name: string
  level: number
  children: IAccordion[]
}

export { default } from "./AccordionItem"
