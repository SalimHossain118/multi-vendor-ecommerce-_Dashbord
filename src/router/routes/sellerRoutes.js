/** @format */

import { lazy } from "react";
const Home = lazy(() => import("../../views/Home"));
const SellerDashboard = lazy(() =>
  import("../../views/seller/SellerDashboard")
);
const AddProduct = lazy(() => import("../../views/seller/AddProduct"));
const Products = lazy(() => import("../../views/seller/Products"));
const DiscountProducts = lazy(() =>
  import("../../views/seller/DiscountProducts")
);
const Orders = lazy(() => import("../../views/seller/Orders"));
const Payments = lazy(() => import("../../views/seller/Payments"));
const SellerToCustomer = lazy(() =>
  import("../../views/seller/SellerToCustomer")
);
const SellerToAdmin = lazy(() => import("../../views/seller/SellerToAdmin"));
const Profile = lazy(() => import("../../views/seller/Profile"));

export const sellerRoutes = [
  {
    path: "/",
    element: <Home />,
    ability: ["admin", "seller"],
  },
  {
    path: "/seller/dashboard",
    element: <SellerDashboard />,
    ability: ["admin", "seller"],
  },
  {
    path: "/seller/dashboard/add-product",
    element: <AddProduct />,
    ability: ["admin", "seller"],
  },
  {
    path: "/seller/dashboard/products",
    element: <Products />,
    ability: ["admin", "seller"],
  },
  {
    path: "/seller/dashboard/discount-products",
    element: <DiscountProducts />,
    ability: ["admin", "seller"],
  },
  {
    path: "/seller/dashboard/orders",
    element: <Orders />,
    ability: ["admin", "seller"],
  },
  {
    path: "/seller/dashboard/payments",
    element: <Payments />,
    ability: ["admin", "seller"],
  },
  {
    path: "/seller/dashboard/chat-customer",
    element: <SellerToCustomer />,
    ability: ["admin", "seller"],
  },
  {
    path: "/seller/dashboard/chat-support",
    element: <SellerToAdmin />,
    ability: ["admin", "seller"],
  },
  {
    path: "/seller/dashboard/profile",
    element: <Profile />,
    ability: ["admin", "seller"],
  },
];
