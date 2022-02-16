import { makeStyles } from "@mui/styles"

export default makeStyles({
    container: {
        display: "flex",
        flexDirection: "column",
        overflowY: "auto",
        boxSizing: "border-box",
        height: "100vh"
    },
    contentContainer: {
        flexGrow: 1,
        display: "flex"
    },
    toolbarGutter: {
        minHeight: 60
    }
})
