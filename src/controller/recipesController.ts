import Recipes from '../models/recipes'
import { Request, Response } from 'express'
import { z } from 'zod'

class recipesController {
    static async getAll(req: Request, res: Response) {
        try {
            const recipes = await Recipes.getAll()
            const favorites = await Recipes.getFavorites()
            res.status(201).render('index', { recipes, favorites })
        }catch {
            console.error('Error al consultar la base de datos')
            res.status(503).render('index', { recipes: [], favorites: [] })
        }
    }

    static async getOne(req: Request, res: Response) {
        try {
            const { id } = req.query
            const uuidSchema = z.string().uuid()
            if (!id || !uuidSchema.safeParse(id).success) {
                res.status(404).send('No se ha encontrado la receta')
                return
            }
            //TODO: Use Zod to validate the UUID
            const recipe = await Recipes.getOne({ id: id.toString() })
            if (!recipe) {
                res.status(404).send('No se ha encontrado la receta')
            }
            res.status(201).render('recipe', { recipe })
        } catch {
            console.error('Error al consultar la base de datos')
            res.status(404).send('No se ha encontrado la receta')
        }
    }

    static async submitRecipe(req: Request, res: Response) {
        res.status(201).render('add')
    }
}

export default recipesController