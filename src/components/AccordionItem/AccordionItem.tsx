import React, { useEffect, useState } from "react"
import Accordion from "components/Accordion/Accordion"
import * as Style from "./AccordionItem.style"
import IItem from "typings/IITem"
import { ReactComponent as IconDown } from "styles/img/down.svg"
import UpdateListState from "stores/selectors/UpdateListState"
import { useSetRecoilState } from "recoil"

interface AccordionItemProp {
  item: IItem
}

const AccordionItem = ({ item }: AccordionItemProp) => {
  const { id, name, children, level } = item
  const [expanded, setExpanded] = useState(false)
  const [count, setCount] = useState(0)
  const setUpdateListState = useSetRecoilState(UpdateListState)
  const checked =
    (item.checked === undefined ? false : item.checked) || count > 0

  const handleChange = () => {
    const updateChecked: boolean =
      typeof item.checked !== "undefined" ? !item.checked : true

    setUpdateListState([{ ...item, checked: updateChecked }])
  }

  useEffect(() => {
    setCount(item.children.filter((child) => child.checked).length)
  }, [item.children])

  return (
    <Style.AccordionItem
      data-checked={checked}
      data-count={count}
      data-level={level}
      data-total={children.length}
      data-testid={`accordion-item-${id}`}
      nv={level}
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
        <Accordion items={children} expanded={expanded} />
      )}
    </Style.AccordionItem>
  )
}

export default React.memo(AccordionItem)
