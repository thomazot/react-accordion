import React from "react"
import Home from "pages/Home"
import { RecoilRoot } from "recoil"

function App() {
  return (
    <RecoilRoot>
      <React.Suspense fallback={<div>Loading...</div>}>
        <Home />
      </React.Suspense>
    </RecoilRoot>
  )
}

export default App
