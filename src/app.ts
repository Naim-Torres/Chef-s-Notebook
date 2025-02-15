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

app.get("/", (req, res) => {
    res.render("index")
})

app.get("/recipes", async (req, res) => {
    try {
        const connection = await db.connect(); // Obtener la conexión
        const [recipes] = await connection.query('SELECT * FROM recipes'); // Consulta SQL
        res.json(recipes); // Enviar los resultados como JSON
      } catch (error) {
        console.error('Error al consultar la base de datos:', error);
        res.status(500).send('Error al obtener los datos');
      }
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})
