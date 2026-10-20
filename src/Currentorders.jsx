function CurrentOrders() {
  return (
    <div className="rounded-lg bg-white p-6 shadow">
      <h2 className="mb-4 text-2xl font-bold text-blue-700">Current Orders</h2>
      <ul>
        <li className="font-semibold">Laptop - ₹50,000 - Processing</li>
        <li className="text-gray-600">Mobile - ₹20,000 - Shipped</li>
      </ul>
    </div>
  );
}

export default CurrentOrders;