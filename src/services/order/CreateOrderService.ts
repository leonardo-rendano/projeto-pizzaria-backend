import prismaCLient from "../../prisma";

interface OrderRequest {
  table: number,
  name: string
}

class CreateOrderService {
  async execute({ table, name }: OrderRequest) {

    const order = await prismaCLient.order.create({
      data: {
        table: table,
        name: name
      }
    })

    return order
  }
}

export { CreateOrderService }