import Recipes from '../models/recipes'
import { Request, Response } from 'express'

class recipesController {
    static async getAll(req: Request, res: Response) {
        try {
            const recipes = await Recipes.getAll()
            const favorites = await Recipes.getFavorites()
            console.log(favorites)
            res.status(201).render('index', { recipes, favorites })
        }catch(error){
            console.error('Error al consultar la base de datos:', error)
            res.status(500).render('index', { recipes: [], favorites: [] })
        }
    }
}

export default recipesController