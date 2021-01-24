import React from "react"
import AccordionItem from "components/AccordionItem"
import * as Style from "./Accordion.style"
import IItem from "typings/IITem"

interface AccordionProp {
  items: IItem[]
  expanded?: boolean
}

const Accordion = ({ items, expanded = true }: AccordionProp) => {
  return (
    <Style.Accordion aria-expanded={expanded}>
      {items.map((item) => (
        <AccordionItem key={item.id} item={item} />
      ))}
    </Style.Accordion>
  )
}

export default Accordion
