import { RequestHandler } from 'express'
import Project from '../schema/project.model'

export const createProject: RequestHandler<
  {},
  {},
  { projectName: string; projectDescription: string; entityId: number },
  {},
  {}
> = async (req, res) => {
  try {
    const { projectName, projectDescription, entityId } = req.body

    if (!projectName || !projectDescription || !entityId)
      res.status(400).json({ message: 'Missing required fields' })

    const project = await Project.create({
      projectName,
      projectDescription,
      entityId,
      createdBy: 1,
    })
    res.status(201).json(project)
  } catch (e: Error | unknown) {
    if (e instanceof Error)
      res.status(500).json({ message: e.message, stack: e.stack })
  }
}
