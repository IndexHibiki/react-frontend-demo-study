import { Routes, Route } from "react-router-dom";

import SlideShow from "./1_轮播图/SlideShow";
import SlideUnfoldDown from "./2_滑动展开/SlideUnfoldDown";
import ButtonNavgation from "./3_按钮导航/ButtonNavgation";
import TurnTable from "./4_抽奖转盘/TurnTable";
import AddToCart from "./5_加入购物车/AddToCart";
import RowScrollGallery from "./6_滚动图集/RowScrollGallery";

import "./style.css";

function App() {
  const routes = [
    {
      path: "/slide_show",
      name: "Slide Show",
      show: require("../show/1_轮播图_show.gif"),
    },
    {
      path: "/slide_unfold",
      name: "Slide Unfold",
      show: require("../show/2_滑动展开_show.gif"),
    },
    {
      path: "/",
      name: "here",
    },
    {
      path: "/turn_table",
      name: "Turn Table",
      show: require("../show/4_抽奖转盘.gif"),
    },
    {
      path: "/add_to_cart",
      name: "Add To Cart",
      show: require("../show/5_加入购物车.gif"),
    },
    {
      path: "/row_scroll_gallery",
      name: "Row Scroll Gallery",
    },
  ];

  return (
    <div className="App">
      <Routes>
        <Route path="/slide_show" element={<SlideShow />} />

        <Route
          path="/slide_unfold"
          element={
            <div>
              {/* This is for Testing real scenario */}
              <div
                className="other_block"
                style={{
                  width: "80vw",
                  height: "30vh",
                  backgroundColor: "rgb(0, 120, 255)",
                }}
              ></div>

              <SlideUnfoldDown />

              <div
                className="other_block"
                style={{
                  width: "80vw",
                  height: "30vh",
                  backgroundColor: "rgb(0, 120, 255)",
                }}
              ></div>
            </div>
          }
        />

        <Route path="/" element={<ButtonNavgation routes={routes} />} />

        <Route path="/turn_table" element={<TurnTable />} />

        <Route path="/add_to_cart" element={<AddToCart />} />

        <Route path="/row_scroll_gallery" element={<RowScrollGallery />} />
      </Routes>
    </div>
  );
}

export default App;
