import Accordion from "components/Accordion"
import React, { useEffect, useState } from "react"
import Api from "services"
import IItem from "typings/IITem"

const Home = () => {
  const [data, setData] = useState<IItem[]>([])
  useEffect(() => {
    Api<IItem[]>("/react-accordion/data/db.json").then((data) => setData(data))
  }, [setData])

  return (
    <div>
      <Accordion items={data} />
    </div>
  )
}

export default Home
