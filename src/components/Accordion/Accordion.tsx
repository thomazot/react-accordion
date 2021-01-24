import React from "react"
import AccordionItem from "components/AccordionItem"
import * as Style from "./Accordion.style"
import IItem from "typings/IITem"

interface AccordionProp {
  items: IItem[]
  parentChecked?: boolean
  nv?: number
  onChecked?: (checked: boolean) => void
  expanded?: boolean
}

const Accordion = ({
  items,
  parentChecked = false,
  nv = 1,
  onChecked = () => {},
  expanded = true
}: AccordionProp) => {
  return (
    <Style.Accordion aria-expanded={expanded}>
      {items.map((item) => (
        <AccordionItem
          key={item.id}
          item={item}
          parentChecked={parentChecked}
          nv={nv}
          onChecked={onChecked}
        />
      ))}
    </Style.Accordion>
  )
}

export default Accordion
