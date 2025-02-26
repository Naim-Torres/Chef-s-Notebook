import { z } from 'zod'

const recipeSchema = z.object({
    name: z.string({
        invalid_type_error: 'El nombre de la receta debe tener entre 5 y 50 caracteres',
        required_error: 'El nombre de la receta es obligatorio'
    }).min(5).max(50),
    ingredientes: z.string({
        invalid_type_error : 'Los ingredientes deben tener entre 5 y 255 caracteres',
        required_error: 'Los ingredientes son obligatorios'
    }).min(5).max(255),
    steps: z.string({
        invalid_type_error: 'Los pasos deben tener entre 5 como mínimo',
        required_error: 'Los pasos son obligatorios'
    }).min(5),
    cooking_time: z.number({
        invalid_type_error: 'El tiempo de cocción debe ser un número',
        required_error: 'El tiempo de cocción es obligatorio'
    }).int().min(1),
    img: z.string().url({
        message: 'La URL de la imagen no es válida'
    }).optional(),
})

const validateRecipe = (recipe: JSON) => {
    return recipeSchema.safeParse(recipe)
}

export default validateRecipe