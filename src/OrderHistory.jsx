import React from "react";
function OrderHistory() {
  return (
    <div className="rounded-lg bg-white p-6 shadow">
      <h2 className="mb-4 text-2xl font-bold text-blue-700">Order History</h2>
      <ul>
        <li className="font-semibold">Headphones - ₹2,000 - Delivered</li>
        <li className="text-gray-600">Keyboard - ₹1,500 - Delivered</li>
      </ul>
    </div>
  );
}

export default OrderHistory;