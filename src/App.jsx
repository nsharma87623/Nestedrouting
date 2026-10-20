import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import Orders from "./Orders";
import CurrentOrders from "./Currentorders";
import OrderHistory from "./OrderHistory";
import CancelledOrders from "./CancelledOrder";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/orders" replace />} />

        <Route path="/orders" element={<Orders />}>
          <Route
            index
            element={<Navigate to="current" replace />}
          />
          <Route
            path="current"
            element={<CurrentOrders />}
          />
          <Route
            path="history"
            element={<OrderHistory />}
          />
          <Route
            path="cancelled"
            element={<CancelledOrders />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;