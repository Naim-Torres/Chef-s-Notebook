import express from "express"
import morgan from "morgan"
import path from "node:path"

const app = express()
app.use(morgan("dev"))
app.disable("x-powered-by")

const __dirname = import.meta.dirname
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "/views"))
app.use(express.static(path.join(__dirname, "../public")));

const PORT = process.env.PORT || 3000

app.get("/", (req, res) => {
    res.render("index")
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})
