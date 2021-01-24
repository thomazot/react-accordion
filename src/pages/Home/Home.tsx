import Accordion from "components/Accordion"
import Dashboard from "components/Dashboard"
import React from "react"
import { useRecoilValue } from "recoil"
import ListItemState from "stores/atoms/ListItemState"

const Home = () => {
  const items = useRecoilValue(ListItemState)

  return (
    <Dashboard>
      <Accordion items={items} />
    </Dashboard>
  )
}

export default Home
