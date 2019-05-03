import React from 'react'
import { render } from 'react-dom'
import { fontSize, color, height } from 'styled-system'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'
import { theme } from './theme'

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
    }
`

const Box = styled.div`
    ${fontSize}
    ${color}
    display: grid;
    height: 100vh;
    align-items: center;
    justify-content: center;
`
Box.displayName = 'Box'

const App = () => {
    return (
        <ThemeProvider theme={ theme }>
            <>
                <GlobalStyle />
                <Box fontSize={ 4 } color='orange' bg='white'>foobar</Box>
            </>
        </ThemeProvider>
    )
}

render(<App />, document.getElementById('root'))

if (module.hot) {
    module.hot.accept()
}
