interface ResourceDTO {
  resourceName: string
  resourceDescription?: string
  subResourceCollection: Array<SubResourceDTO>
}

interface SubResourceDTO {
  subResourceName: string
  subResourceDescription?: string
  visibility: 'public' | 'private'
}

export { ResourceDTO, SubResourceDTO }
