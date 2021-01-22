import React, { useEffect, useState } from "react"
import { IAccordionItem } from "components/AccordionItem"
import Accordion from "components/Accordion/Accordion"

interface AccordionItemProp extends IAccordionItem {
  parentChecked?: boolean
}

const AccordionItem = ({
  id,
  name,
  level,
  children,
  parentChecked = false
}: AccordionItemProp) => {
  const [checked, setChecked] = useState(false)

  useEffect(() => {
    setChecked(parentChecked)
  }, [setChecked, parentChecked])

  return (
    <li data-level={level} data-testid={`accordion-item-${id}`}>
      <div>
        <input
          name="accordion-item"
          id={`accordion-item-${id}`}
          type="checkbox"
          checked={checked}
          onChange={() => setChecked(!checked)}
        />
        <label htmlFor={`accordion-item-${id}`}>{name}</label>
      </div>
      {children.length > 0 && (
        <Accordion items={children} parentChecked={checked} />
      )}
    </li>
  )
}

export default AccordionItem
