import prismaCLient from "../../prisma";

class ListCategoryService {
  async execute() {

    const category = await prismaCLient.category.findMany({
      select: {
        id: true,
        name: true
      }
    })

    return category
  }
}

export { ListCategoryService }