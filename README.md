[TOC]

#  前言

供个人学习使用，主要是实现一些比较常见、或者觉得很酷的前端组件，可以直接下载，如有问题或者对于某些组件有idea都欢迎交流讨论



#  组件介绍

##  1_轮播图

- [x] 基本的循环轮播

- [x] 随机跳转
- [x] 左右滑动
- [ ] 鼠标拖拽

![images](https://github.com/IndexHibiki/react-frontend-demo-study/blob/master/show/1_%E8%BD%AE%E6%92%AD%E5%9B%BE_show.gif?raw=true)

由于展示到html貌似只能是数组形式，所以为了保证能顺畅实现循环，需要在图片数组的首项和和末项额外添加原来的末项和首项，即对于三张图片，数组逻辑结构是这样的【3,1,2,3,1】，然后在对其余逻辑进行修改





##  2_滑动展开

- [x] 基本的滑动组件
- [x] 展开的部分不引起画面变化
- [x] 非展开状态也能显示部分内容
- [x] 通过点击操作进行展开/收缩
- [x] 鼠标聚焦在Head上进行展开
- [x] 鼠标焦点离开整个区域后立即收缩
- [ ] 鼠标焦点离开整个区域后再通过点击进行收缩
- [x] 向下展开
- [ ] 向上展开
- [ ] 向左展开
- [ ] 向右展开

![images](https://github.com/IndexHibiki/react-frontend-demo-study/blob/master/show/2_%E6%BB%91%E5%8A%A8%E5%B1%95%E5%BC%80_show.gif?raw=true)

利用在html中定义两种className  active和idle作为激活和未激活的两个状态，然后在css中分别就这两种状态进行调整即可





## 3_按钮导航

- [x] 基本导航功能
- [x] 基本按钮样式
- [x] 鼠标聚焦时按钮进行变化，以满足人机交互
- [ ] 鼠标聚焦时，显示该对象的intro，这里为演示的gif





##  4_抽奖转盘

- [x] 基本转盘实现
- [x] 锐角和钝角的扇形实现
- [ ] 优角（凸角，即大于180度的）的扇形实现     （即优角无法正常显示）
- [x] 无需每次重置再进行抽奖
- [x] 背景颜色自动设置
- [ ] 能自动设置背景颜色，但每次抽奖时颜色都会再次生成一次
- [ ] 自动分割扇形，以获取更好的视觉效果

![images](https://github.com/IndexHibiki/react-frontend-demo-study/blob/master/show/4_%E6%8A%BD%E5%A5%96%E8%BD%AC%E7%9B%98.gif?raw=true)

扇形区域用的两个skewY实现







## 5_加入购物车

- [x] 单张图片的加入购物车动画
- [x] 购物车加入物品后的交互动画
- [x] 固定动画时间的模式
- [x] 固定X轴速度的模式

![images](https://github.com/IndexHibiki/react-frontend-demo-study/blob/master/show/5_%E5%8A%A0%E5%85%A5%E8%B4%AD%E7%89%A9%E8%BD%A6.gif?raw=true)

主要就是获取组件的位置信息 getBoundingClientRect() 和设置动画requestAnimationFrame()





## 6_滚动图集

