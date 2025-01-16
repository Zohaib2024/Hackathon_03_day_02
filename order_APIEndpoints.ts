export default {
  name: "order",
  title: "Order",
  type: "document",
  fields: [
    {
      name: "orderId",
      title: "Order ID",
      type: "number",
    },
    {
      name: "customer",
      title: "Customer",
      type: "object",
      fields: [
        { name: "name", title: "Name", type: "string" },
        { name: "email", title: "Email", type: "string" },
        { name: "address", title: "Address", type: "string" },
      ],
    },
    {
      name: "orderDetails",
      title: "Order Details",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "productId", title: "Product ID", type: "number" },
            { name: "name", title: "Product Name", type: "string" },
            { name: "quantity", title: "Quantity", type: "number" },
            { name: "price", title: "Price", type: "number" },
          ],
        },
      ],
    },
    {
      name: "paymentStatus",
      title: "Payment Status",
      type: "string",
    },
    {
      name: "total",
      title: "Total",
      type: "number",
    },
    {
      name: "status",
      title: "Status",
      type: "string",
    },
  ],
};
