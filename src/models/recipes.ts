import db from '../lib/db.mjs'

class Recipes { 
    static async getAll() {
        const connection = await db.connect()
        const [recipes] = await connection.query('SELECT * FROM recipes')
        return recipes
    }

    static async getFavorites() {
        const connection = await db.connect()
        const [recipes_favorites] = await connection.query('SELECT * FROM recipes WHERE favorite = 1')
        return recipes_favorites
    }

    static async getOne(id: string) {
        const connection = await db.connect()
        const [recipes_by_id] = await connection.query('SELECT * FROM recipes WHERE id = ?', [id])
        return recipes_by_id
    }
}

export default Recipes