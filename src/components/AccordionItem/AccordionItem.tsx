import React, { useEffect, useState, useCallback } from "react"
import Accordion from "components/Accordion/Accordion"
import * as Style from "./AccordionItem.style"
import IItem from "typings/IITem"
import { ReactComponent as IconDown } from "styles/img/down.svg"

interface AccordionItemProp {
  item: IItem
  parentChecked?: boolean
  nv: number
  onChecked: (checked: boolean) => void
}

const AccordionItem = ({
  item,
  parentChecked = false,
  nv,
  onChecked
}: AccordionItemProp) => {
  const { id, name, children } = item
  const [expanded, setExpanded] = useState(false)
  const [count, setCount] = useState(0)
  const [checked, setChecked] = useState(false)
  const [dispachParentChecked, setDispachParentChecked] = useState(false)

  const handleChange = () => {
    if (checked) setCount(0)
    else setCount(children.length)
    setDispachParentChecked(!checked)
    onChecked(!checked)
    setChecked(!checked)
  }

  const handleChecked = (checked: boolean) =>
    checked
      ? setCount((oldCount) => ++oldCount)
      : setCount((oldCount) => (oldCount - 1 < 0 ? 0 : --oldCount))

  const updateParentChecked = useCallback(
    (parentChecked: boolean) => {
      setChecked(parentChecked)
      if (parentChecked) setCount(children.length)
    },
    [setCount, children, setChecked]
  )

  useEffect(() => {
    updateParentChecked(parentChecked)
  }, [updateParentChecked, parentChecked])

  useEffect(() => {
    if (count) setChecked(true)
  }, [count])

  return (
    <Style.AccordionItem
      data-count={count}
      data-level={nv}
      data-total={children.length}
      data-testid={`accordion-item-${id}`}
      nv={nv}
      count={count}
      total={children.length}
      expanded={expanded}
    >
      <div>
        <input
          name="accordion-item"
          id={`accordion-item-${id}`}
          type="checkbox"
          checked={checked}
          onChange={handleChange}
        />
        <label htmlFor={`accordion-item-${id}`}>{name}</label>
        {children.length > 0 && (
          <button onClick={() => setExpanded(!expanded)} type="button">
            <IconDown fill="currentColor" width={20} height={20} />
          </button>
        )}
      </div>
      {children.length > 0 && (
        <Accordion
          items={children}
          parentChecked={dispachParentChecked}
          nv={++nv}
          onChecked={handleChecked}
          expanded={expanded}
        />
      )}
    </Style.AccordionItem>
  )
}

export default AccordionItem
