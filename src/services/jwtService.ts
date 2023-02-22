// src/services/jwtService.ts

import jwt from 'jsonwebtoken'

const secret = 'chave-jwt'

export const jwtService = {
  signPayload: (payload: string | object | Buffer, expiration: string) => {
    return jwt.sign(payload, secret, { expiresIn: expiration })
  }
}