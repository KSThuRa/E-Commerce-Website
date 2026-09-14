const orders = [
  ["#NOVA-1048", "Olivia Martin", "$349.00", "Paid", "Processing"],
  ["#NOVA-1047", "James Wilson", "$129.00", "Paid", "Shipped"],
  ["#NOVA-1046", "Emma Davis", "$418.00", "Paid", "Delivered"],
  ["#NOVA-1045", "Noah Brown", "$94.00", "Pending", "Processing"],
  ["#NOVA-1044", "Mia Garcia", "$229.00", "Paid", "Delivered"],
];
export default function Orders() {
  return (
    <div className="p-5 md:p-8">
      <p className="text-sm text-gray-500">Commerce</p>
      <h1 className="mt-1 text-3xl font-black">Orders</h1>
      <div className="mt-8 overflow-x-auto rounded-2xl border bg-white">
        <table className="w-full min-w-[700px] text-left text-sm">
          <thead className="border-b bg-soft text-xs uppercase text-gray-500">
            <tr>
              <th className="p-4">Order</th>
              <th>Customer</th>
              <th>Total</th>
              <th>Payment</th>
              <th>Fulfillment</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((o) => (
              <tr key={o[0]} className="border-b last:border-0">
                <td className="p-4 font-bold">{o[0]}</td>
                <td>{o[1]}</td>
                <td>{o[2]}</td>
                <td>
                  <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-bold text-green-700">
                    {o[3]}
                  </span>
                </td>
                <td>{o[4]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
