// src/services/jwtService.ts

import jwt from 'jsonwebtoken'
import { JWT_KEY } from '../config/environment'

const secret = JWT_KEY

export const jwtService = {
  signPayload: (payload: string | object | Buffer, expiration: string) => {
    return jwt.sign(payload, secret, { expiresIn: expiration })
  },

  verifyToken: (token: string, callbackfn: jwt.VerifyCallback) => {
    jwt.verify(token, secret, callbackfn)
  }
}