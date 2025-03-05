import express from "express"
import morgan from "morgan"
import path from "node:path"
import recipesController from "./controller/recipesController"

const app = express()
app.use(morgan("dev"))
app.disable("x-powered-by")

const __dirname = import.meta.dirname
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "/views"))
app.use(express.static(path.join(__dirname, "../public")));

const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/", recipesController.getAll)
app.get("/recipe", recipesController.getOne)
app.get("/recipe/add", recipesController.submitRecipe)
app.get("/recipe/update", recipesController.editRecipe)

app.post("/update", recipesController.updateRecipe)
app.post("/add", recipesController.addRecipe)

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})
