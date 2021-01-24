import React from "react"
import Home from "pages/Home"
import { RecoilRoot } from "recoil"
import { ThemeProvider } from "styled-components"
import { Theme } from "styles/Theme"
import { GlobalStyle } from "styles/GlobalStyle"

function App() {
  return (
    <RecoilRoot>
      <React.Suspense fallback={<div>Loading...</div>}>
        <ThemeProvider theme={Theme}>
          <GlobalStyle />
          <Home />
        </ThemeProvider>
      </React.Suspense>
    </RecoilRoot>
  )
}

export default App
