import React from "react"
import { IAccordion } from "components/Accordion"
import AccordionItem from "components/AccordionItem"

const Accordion = ({
  items,
  parentChecked = false
}: {
  items: IAccordion[]
  parentChecked?: boolean
}) => {
  return (
    <ul>
      {items.map((item) => (
        <AccordionItem key={item.id} {...item} parentChecked={parentChecked} />
      ))}
    </ul>
  )
}

export default Accordion
