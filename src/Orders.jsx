import { Link, Outlet } from "react-router-dom";

function Orders() {
  return (
    <div>
      <h1 className="mb-2 text-3xl font-bold text-gray-900">E-commerce Order Management</h1>

      <nav className="mb-6 flex flex-wrap gap-3 rounded-lg bg-white p-4 shadow">
        <Link to="/orders/current">Current Orders</Link>{" | "}
        <Link to="/orders/history">Order History</Link>{" | "}
        <Link to="/orders/cancelled">Cancelled Orders</Link>
      </nav>

      <hr />

      <Outlet />
    </div>
  );
}

export default Orders;