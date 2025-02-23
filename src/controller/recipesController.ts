import Recipes from '../models/recipes'
import { Request, Response } from 'express'

class recipesController {
    static async getAll(req: Request, res: Response) {
        try {
            const recipes = await Recipes.getAll()
            const favorites = await Recipes.getFavorites()
            res.status(201).render('index', { recipes, favorites })
        }catch(error){
            console.error('Error al consultar la base de datos:', error)
            res.status(500).render('index', { recipes: [], favorites: [] })
        }
    }

    static async getOne(req: Request, res: Response) {
        try {
            const { id } = req.query
            if (!id) {
                return res.status(404).send('No se ha encontrado la receta')
            }
            // Use Zod to validate the UUID
            const recipe = await Recipes.getOne({ id: id.toString() })
            if (!recipe) {
                return res.status(404).send('No se ha encontrado la receta')
            }
            res.status(201).render('recipe', { recipe })
        } catch {
            console.error('Error al consultar la base de datos')
            res.status(404).send('No se ha encontrado la receta')
        }
    }
}

export default recipesController