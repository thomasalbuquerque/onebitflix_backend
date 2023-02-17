// src/controllers/categoriesController.ts

import { Request, Response } from 'express'
import { Category } from '../models'

export const categoriesController = {


  index: async (req: Request, res: Response) => {
    try {
        const categories = await Category.findAll({
        attributes: ['id', 'name', 'position'],
        order: [['position', 'ASC']]
      })
      // throw new Error('error message')
      return res.json(categories)

    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).json({ message: error.message })
      }
    }
    
  }
}