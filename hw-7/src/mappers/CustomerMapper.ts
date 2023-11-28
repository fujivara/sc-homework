

export class CustomerMapper {

  customerOrder (order: any) {
    const orderWithCost = {
      ...order,
      totalCost: order.products.reduce((prev, curr) =>
        prev + curr.product.price * curr.product.amount
      , 0) + order.deliveryCost,
    };

    delete orderWithCost.products;

    return orderWithCost;
  }

  customerOrders (orders: any[]) {
    const ordersWithCost = orders.map((order) => this.customerOrder(order));

    return {
      orders: ordersWithCost,
      totalCost: ordersWithCost.reduce((prev, curr) => prev + curr.totalCost, 0),
    };
  }
}