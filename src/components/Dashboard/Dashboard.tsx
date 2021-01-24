import React from "react"
import * as Style from "./Dashboard.style"

type DashboardProps = {
  children?: React.ReactChild | React.ReactChild[]
}

const Dashboard = ({ children }: DashboardProps) => {
  return (
    <>
      <Style.Header>
        <h1>React Accordion</h1>
      </Style.Header>
      <Style.Main>{children}</Style.Main>
      <Style.Footer>
        © Desenvolvido por
        <a href="mailto:thomazot@gmail.com"> Thomaz T. O. Toyama </a>
      </Style.Footer>
    </>
  )
}

export default Dashboard
