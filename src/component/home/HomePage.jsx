import { React } from "react";
import Category from "../category/Category";
import HomeCarousel from "../common/HomeCarousel";

export default function HomePage() {
  return (
    <div>
      <HomeCarousel />
      <Category />
    </div>
  );
}
