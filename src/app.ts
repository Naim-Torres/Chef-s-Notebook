import express from "express"
import morgan from "morgan"
import path from "node:path"
import db from "./lib/db.mjs"

const app = express()
app.use(morgan("dev"))
app.disable("x-powered-by")

const __dirname = import.meta.dirname
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "/views"))
app.use(express.static(path.join(__dirname, "../public")));

const PORT = process.env.PORT || 3000

/* app.get("/", (req, res) => {
    res.render("index")
}) */

app.get("/", async (req, res) => {
    try {
        const connection = await db.connect()
        const [recipes] = await connection.query('SELECT * FROM recipes')
        res.status(201).render('index', { recipes })
    } catch (error) {
        console.error('Error al consultar la base de datos:')
        const recipes: [{}] = [{
            id: 1,
            name: 'Tacos de carnitas',
            description: 'Tacos de carnitas de cerdo',
            image: 'https://www.cocinavital.mx/wp-content/uploads/2019/04/tacos-de-carnitas.jpg'
        }]
        res.status(201).render('index', { recipes })
    }
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})
