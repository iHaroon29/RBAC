import jwt from 'jsonwebtoken'

interface JWTPayload {
  role: string
  id: number
}

export const generateToken = (payload: JWTPayload, expiresIn: string) => {
  return jwt.sign(JSON.stringify(payload), 'haroon', { expiresIn: expiresIn })
}

export const validateToken = (token: string) => {
  return jwt.verify(token, 'haroon', { complete: true })
}
