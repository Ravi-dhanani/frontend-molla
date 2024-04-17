import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomeCarousel from "./component/common/HomeCarousel";
import MainLayout from "./component/common/MainLayout";
import HomePage from "./component/home/HomePage";
import ShopPage from "./component/shop/ShopPage";

function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <HomePage />
            </MainLayout>
          }
        />
        <Route
          path="/shop"
          element={
            <MainLayout>
              <ShopPage />
            </MainLayout>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
