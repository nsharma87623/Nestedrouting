import React from "react";
function CancelledOrder() {
  return (
    <div className="rounded-lg bg-white p-6 shadow">
      <h2 className="mb-4 text-2xl font-bold text-blue-700">Cancelled Orders</h2>
      <ul>
        <li className="font-semibold">Mouse - ₹800 - Cancelled</li>
        <li className="text-gray-600">Phone Cover - ₹500 - Cancelled</li>
      </ul>
    </div>
  );
}

export default CancelledOrder;