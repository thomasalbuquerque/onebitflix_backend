// src/controllers/categoriesController.ts

import { Request, Response } from 'express'
import { getPaginationParams } from '../helpers/getPaginationParams'
import { Category } from '../models'
import { categoryService } from '../services/categoryService'

export const categoriesController = {

  index: async (req: Request, res: Response) => {

    let [page, perPage] = getPaginationParams(req.query)

  try {
    const paginatedCategories = await categoryService.findAllPaginated(page, perPage)

    return res.json(paginatedCategories)

  } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message })
      }
    }
  }
}