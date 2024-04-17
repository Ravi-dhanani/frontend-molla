import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomeCarousel from "./component/common/HomeCarousel";
import MainLayout from "./component/common/MainLayout";
import HomePage from "./component/home/HomePage";

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
        <Route path="/shop" element={<HomeCarousel />} />
      </Routes>
    </div>
  );
}

export default App;
