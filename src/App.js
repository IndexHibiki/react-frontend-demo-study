import { Routes, Route } from "react-router-dom";

import SlideShow from "./1_轮播图/SlideShow";
import SlideUnfoldDown from "./2_滑动展开/SlideUnfoldDown";
import ButtonNavgation from "./3_按钮导航/ButtonNavgation";

import "./style.css";

function App() {
  const routes = {
    homepage: {
      path: "/",
      name: "here",
    },
    slide_show: {
      path: "/slide_show",
      name: "Slide Show",
    },
    slide_unfold: {
      path: "/slide_unfold",
      name: "Slide Unfold",
    },
  };

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
      </Routes>
    </div>
  );
}

export default App;
