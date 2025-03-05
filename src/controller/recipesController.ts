import Recipes from '../models/recipes'
import { Request, Response } from 'express'
import { z } from 'zod'
import validateRecipe from '../schema/recipeSchema'

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

    static async addRecipe(req: Request, res: Response) {
        if (!isNaN(req.body.cooking_time)) {
            req.body.cooking_time = Number(req.body.cooking_time);
        }
        const result = validateRecipe(req.body)
        
        if (!result.success) {
            res.status(400).send(result.error.message)
            return
        }
        try {
            const newRecipe = await Recipes.addRecipe({ input: result.data })
        if (!newRecipe) { 
            res.status(503).send('Error al añadir la receta')
            return
        }
        } catch {
            res.status(503).send('Error al añadir la receta')
            return
        }

        res.status(201).send('Receta añadida correctamente')
    }

    static async editRecipe(req: Request, res: Response) {
        try {
            const { id } = req.query
            const uuidSchema = z.string().uuid()
            if (!id || !uuidSchema.safeParse(id).success) {
                res.status(404).send('No se ha encontrado la receta')
                return
            }
            const recipe = await Recipes.getOne({ id: id.toString() })
            if (!recipe) {
                res.status(404).send('No se ha encontrado la receta')
            }
            res.status(201).render('update', { recipe })
        } catch {
            console.error('Error al consultar la base de datos')
            res.status(404).send('No se ha encontrado la receta')
        }
    }

    static async updateRecipe(req: Request, res: Response) {
        if (!isNaN(req.body.cooking_time)) {
            req.body.cooking_time = Number(req.body.cooking_time);
        }
        const result = validateRecipe(req.body)
        
        if (!result.success) {
            res.status(400).send(result.error.message)
            return
        }
        try {
            const { id } = req.query
            const uuidSchema = z.string().uuid()
            if (!id || !uuidSchema.safeParse(id).success) {
                res.status(404).send('No se ha encontrado la receta')
                return
            }
            const recipe = await Recipes.updateRecipe({ id: id.toString(), input: result.data })
            if (!recipe) {
                res.status(404).send('No se ha encontrado la receta')
            }
            res.status(201).redirect(`/recipe?id=${id}`)
        } catch {
            console.error('Error al consultar la base de datos')
            res.status(404).send('No se ha encontrado la receta')
        }
    }
}

export default recipesController