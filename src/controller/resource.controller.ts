import { RequestHandler } from 'express'
import { ResourceDTO } from '../dto/resource.dto'

export const createResource: RequestHandler<
  {},
  {},
  { resourceCollection: Array<ResourceDTO> },
  {},
  {}
> = (req, res) => {
  try {
    const { resourceCollection } = req.body
  } catch (e) {
    if (e instanceof Error)
      res.status(500).json({ message: e.message, stack: e.stack })
  }
}

export const getResources: RequestHandler = async (req, res) => {
  try {
  } catch (e: Error | unknown) {
    if (e instanceof Error)
      res.status(500).json({ message: e.message, stack: e.stack })
  }
}

export const updateResource: RequestHandler = async (req, res) => {
  try {
  } catch (e: Error | unknown) {
    if (e instanceof Error)
      res.status(500).json({ message: e.message, stack: e.stack })
  }
}

export const deleteResource: RequestHandler = async (req, res) => {
  try {
  } catch (e: Error | unknown) {
    if (e instanceof Error)
      res.status(500).json({ message: e.message, stack: e.stack })
  }
}
