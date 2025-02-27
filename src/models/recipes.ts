import { RowDataPacket } from 'mysql2'
import db from '../lib/db.mjs'  
import { randomUUID } from 'node:crypto'
import { Recipe } from '../types/recipe'

class Recipes { 
    static async getAll() {
        const connection = await db.connect()
        const [recipes] = await connection.query(
            `SELECT name, ingredientes, steps, cooking_time, img, favorite, BIN_TO_UUID(id) id 
            FROM recipes;`)
        return recipes
    }

    static async getFavorites() {
        const connection = await db.connect()
        const [recipes_favorites] = await connection.query('SELECT * FROM recipes WHERE favorite = 1')
        return recipes_favorites
    }

    static async getOne({id}: {id: string}) {
        const connection = await db.connect()
        try{
            const [recipe] = await connection.query<RowDataPacket[]>(
                `SELECT name, ingredientes, steps, cooking_time, img, favorite, BIN_TO_UUID(id) id 
                FROM recipes WHERE id = UUID_TO_BIN(?);`, [id])
                
            if (recipe.length === 0) return null
            return recipe[0]
        } catch {
            throw new Error('Error al consultar la base de datos')
        }
    }

    static async addRecipe({ input }: { input: Recipe }) {
        const newRecipe = {
            id: randomUUID(),
            ...input
        }
        try {
            const connection = await db.connect()
            await connection.query(
                `INSERT INTO recipes (id, name, ingredientes, steps, cooking_time) 
                VALUES (UUID_TO_BIN(?), ?, ?, ?, ?);`, 
                [newRecipe.id, newRecipe.name, newRecipe.ingredientes, newRecipe.steps, newRecipe.cooking_time])
    
            if(newRecipe.img) {
                await connection.query(
                    `UPDATE recipes SET img = ? WHERE id = UUID_TO_BIN(?);`, 
                    [newRecipe.img, newRecipe.id])
            }
            return newRecipe
        } catch {
            throw new Error('Error al añadir la receta')
        }
    }
}

export default Recipes