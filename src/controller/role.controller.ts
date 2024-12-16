import { RequestHandler } from 'express'

export const createRole: RequestHandler = async (req, res) => {
  try {
  } catch (e: Error | unknown) {
    if (e instanceof Error)
      res.status(500).json({ message: e.message, stack: e.stack })
  }
}
export const getAllRoles: RequestHandler = async (req, res) => {
  try {
  } catch (e: Error | unknown) {
    if (e instanceof Error)
      res.status(500).json({ message: e.message, stack: e.stack })
  }
}
export const updateRole: RequestHandler = async (req, res) => {
  try {
  } catch (e: Error | unknown) {
    if (e instanceof Error)
      res.status(500).json({ message: e.message, stack: e.stack })
  }
}
export const DeleteRole: RequestHandler = async (req, res) => {
  try {
  } catch (e: Error | unknown) {
    if (e instanceof Error)
      res.status(500).json({ message: e.message, stack: e.stack })
  }
}
