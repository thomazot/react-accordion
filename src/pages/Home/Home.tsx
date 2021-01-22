import Accordion, { IAccordion } from "components/Accordion"
import React, { useCallback, useEffect, useState } from "react"
import Api from "services"

const Home = () => {
  const [data, setData] = useState<IAccordion[]>([])
  const getData = useCallback(
    () =>
      Api<IAccordion[]>("/react-accordion/data/db.json").then((items) =>
        setData(items)
      ),
    [setData]
  )

  useEffect(() => {
    getData()
  }, [getData])

  return (
    <div>
      <Accordion items={data} />
    </div>
  )
}

export default Home
