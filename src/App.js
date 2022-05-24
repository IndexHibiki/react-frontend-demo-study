import { Routes, Route } from "react-router-dom";

import SlideShow from "./1_轮播图/SlideShow";
import SlideUnfoldDown from "./2_滑动展开/SlideUnfoldDown";
import ButtonNavgation from "./3_按钮导航/ButtonNavgation";
import TurnTable from "./4_抽奖转盘/TurnTable";

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

        <Route path="/turn_table" element={<TurnTable routes={routes} />} />
      </Routes>
    </div>
  );
}

export default App;
