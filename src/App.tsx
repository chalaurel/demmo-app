import React from "react"
import Auth from "aws-amplify"
// import { PersistGate } from "redux-persist/integration/react"
import { ThemeProvider } from "swoop-ui"
import { Provider as StoreProvider } from "react-redux"
import { StyledEngineProvider } from "@mui/material"
import { auth } from "./config/auth.json"
import Routes from "./pages"
// import ErrorBoundary from "./components/ErrorBoundary"
import store from "./store"

Auth.configure({ Auth: auth, Analytics: { disabled: true } })

function App() {
    return (
        <StoreProvider store={store}>
            <ThemeProvider>
                <StyledEngineProvider injectFirst>
                    <Routes />
                </StyledEngineProvider>
            </ThemeProvider>
        </StoreProvider>
    )
}

export default App
