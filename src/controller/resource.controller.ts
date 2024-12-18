import { RequestHandler } from 'express'
import { Resource, SubResource } from '../schema'
import { ResourceDTO } from '../dto/resource.dto'

export const createResource: RequestHandler<
  {},
  { success: boolean; data: { message?: string } | null; error: Error | null },
  { resourceCollection: Array<ResourceDTO> },
  {},
  {}
> = async (req, res) => {
  try {
    const { resourceCollection } = req.body
    for await (const {
      resourceName,
      resourceDescription,
      subResourceCollection,
    } of resourceCollection) {
      const newResource = await Resource.create({
        resourceName: resourceName,
        resourceDescription: resourceDescription || '',
      })

      for await (const {
        subResourceName,
        visibility,
        subResourceDescription,
      } of subResourceCollection) {
        const newSubResource = await SubResource.create({
          visibility,
          subResourceDescription: subResourceDescription || '',
          subResourceName,
        })
        await newResource.addSubResource(newSubResource)
      }
    }
    res.status(200).json({
      success: true,
      data: { message: 'Resource(s) Added' },
      error: null,
    })
  } catch (e) {
    if (e instanceof Error)
      res.status(500).json({ data: null, error: e, success: false })
  }
}

export const getResources: RequestHandler<{}, {}, {}, {}, {}> = async (
  req,
  res
) => {
  try {
    const existingResource = await Resource.findAll({})
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
