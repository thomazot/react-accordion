import Accordion from "components/Accordion"
import React from "react"
import { useRecoilValue } from "recoil"
import ListItemState from "stores/atoms/ListItemState"

const Home = () => {
  const items = useRecoilValue(ListItemState)

  return (
    <div>
      <Accordion items={items} />
    </div>
  )
}

export default Home
