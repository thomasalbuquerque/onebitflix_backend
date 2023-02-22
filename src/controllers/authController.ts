// src/controllers/authController.ts

import { Request, Response } from 'express'
import { userService } from '../services/userService'
import { jwtService } from '../services/jwtService'

export const authController = {
  // POST /auth/register
  register: async (req: Request, res: Response) => {
    const { firstName, lastName, phone, birth, email, password } = req.body

    try {
      const userAlreadyExists = await userService.findByEmail(email)

      if (userAlreadyExists) {
        throw new Error('Este e-mail já está cadastrado.')
      }

      const user = await userService.create({
        firstName,
        lastName,
        phone,
        birth,
        email,
        password,
        role: 'user'
      })

      return res.status(201).json(user)
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message })
      }
    }
  },

  // Agora só resta criar o método de login no controlador. 
  // Ele deverá obter email e senha digitados pelo usuário no corpo da requisição, 
  // verificar se o usuário existe, comparar a senha digitada com a do banco de dados 
  // e então assinar o payload e retornar o token:

  // POST /auth/login
  login: async (req: Request, res: Response) => {
    const { email, password } = req.body

    try {
      const user = await userService.findByEmail(email)

      if (!user) {
        return res.status(401).json({ message: 'E-mail não registrado' })
      }

      user.checkPassword(password, (err, isSame) => {
        if (err) {
          return res.status(400).json({ message: err.message })
        }

        if (!isSame) {
          return res.status(401).json({ message: 'Senha incorreta' })
        }

        const payload = {
          id: user.id,
          firstName: user.firstName,
          email: user.email
        }

        const token = jwtService.signPayload(payload, '7d')

        return res.json({ authenticated: true, payload, token })
      })
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message })
      }
    }
  }
}