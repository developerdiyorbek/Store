import {
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

// layouts
import RootLayouts from "./layouts/RootLayouts";
import LoginLayouts from "./layouts/LoginLayouts";
import DashboardLayouts from "./layouts/DashboardLayouts";

//pages
import {
  Accessories,
  AddToCartPage,
  AddresBook,
  Clothes,
  Home,
  LikesPage,
  LoginPage,
  MyFavorites,
  MyOrders,
  Shoes,
  UserInformation,
} from "./pages";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayouts />}>
      <Route index element={<Home />} />
      <Route path="clothes" element={<Clothes />} />
      <Route path="shoes" element={<Shoes />} />
      <Route path="accessories" element={<Accessories />} />
      <Route path="login" element={<LoginLayouts />}>
        <Route index element={<LoginPage />} />
        <Route path="dashboard" element={<DashboardLayouts />}>
          <Route path="userinformation" element={<UserInformation />} />
          <Route path="addresbook" element={<AddresBook />} />
          <Route path="myorders" element={<MyOrders />} />
          <Route path="myfavorites" element={<MyFavorites />} />
        </Route>
      </Route>
      <Route path="addtocart" element={<AddToCartPage />} />
      <Route path="likes" element={<LikesPage />} />
    </Route>
  )
);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
