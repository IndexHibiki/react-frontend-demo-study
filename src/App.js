import { Routes, Route } from "react-router-dom";

import SlideShow from "./1_轮播图/SlideShow";
import SlideUnfoldDown from "./2_滑动展开/SlideUnfoldDown";
import ButtonNavgation from "./3_按钮导航/ButtonNavgation";
import TurnTable from "./4_抽奖转盘/TurnTable";
import AddToCart from "./5_加入购物车/AddToCart";
import RowScrollGallery from "./6_滚动图集/RowScrollGallery";
import EnlargedRouting from "./7_扩大式跳转/EnlargedRouting";
import Render from "./7_扩大式跳转/Render";
import HomepageIntro from "./8_主页介绍部分/HomepageIntro";
import DialogBoxTest from "./9_对话框/DialogBoxTest";
import CommandStyleHomepage from "./10_命令行风格主页/CommandStyleHomepage";

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
      show: require("../show/6_滚动图集.gif"),
    },
    {
      path: "/enlarged_routing",
      name: "Enlarged Routing",
    },
    {
      path: "/homepage",
      name: "Homepage Introduction",
      show: require("../show/8_主页介绍部分.png"),
    },
    {
      path: "/dialog_box",
      name: "Dialog Box",
      show: require("../show/9_对话框.gif"),
    },
    {
      path: "/command_style_homepage",
      name: "Command Style Homepage",
      show: require("../show/10_命令行风格主页.gif"),
    },
  ];

  const enlargedRoutingPaths = [
    {
      path: "/enlarged_routing/hi",
      themeColor: "blue",
      text: "Hi",
    },
    {
      path: "/enlarged_routing/bi",
      themeColor: "green",
      text: "Bi",
    },
    {
      path: "/enlarged_routing/ki",
      themeColor: "red",
      text: "Ki",
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

        <Route
          path="/enlarged_routing"
          element={<EnlargedRouting paths={enlargedRoutingPaths} />}
        />

        {enlargedRoutingPaths.map((item) => (
          <Route
            path={item.path}
            element={<Render themeColor={item.themeColor} text={item.text} />}
          />
        ))}

        <Route path="/homepage" element={<HomepageIntro />} />

        <Route path="/dialog_box" element={<DialogBoxTest />} />

        <Route
          path="/command_style_homepage"
          element={<CommandStyleHomepage projects={routes} />}
        />
      </Routes>
    </div>
  );
}

export default App;
