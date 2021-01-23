import Accordion, { IAccordion } from "components/Accordion"
import React, { useEffect, useState } from "react"
import Api from "services"

const Home = () => {
  const [data, setData] = useState<IAccordion[]>([])
  useEffect(() => {
    Api<IAccordion[]>("/react-accordion/data/db.json").then((data) =>
      setData(data)
    )
  }, [setData])

  return (
    <div>
      <Accordion items={data} />
    </div>
  )
}

export default Home
