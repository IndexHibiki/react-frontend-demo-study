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

- [x] 图片正常滚动
- [x] 任何尺寸的图片均可显示（固定height，并利用css的自适应）
- [ ] 循环

![images](https://github.com/IndexHibiki/react-frontend-demo-study/blob/master/show/6_%E6%BB%9A%E5%8A%A8%E5%9B%BE%E9%9B%86.gif?raw=true)





## 7_扩大式跳转

- [x] 显示一个逐渐变大的背景以遮盖当前页面
- [ ] 遮盖完毕后进行跳转
- [ ] 尝试在遮盖过程中获取目标页面信息





## 8_主页介绍部分

- [x] 简单展示一个homepage页面
- [x] 尝试对一个个人比较喜欢的颜色进行色彩搭配设计

![images](https://github.com/IndexHibiki/react-frontend-demo-study/blob/master/show/8_%E4%B8%BB%E9%A1%B5%E4%BB%8B%E7%BB%8D%E9%83%A8%E5%88%86.png?raw=true)





## 9_对话框

- [x] 点击按钮后显示一个对话框
- [x] 点击cancel关闭对话框
- [x] 点击对话框以外的位置关闭对话框
- [ ] 对OK时间进行处理

![images](https://github.com/IndexHibiki/react-frontend-demo-study/blob/master/show/9_%E5%AF%B9%E8%AF%9D%E6%A1%86.gif?raw=true)





## 10_命令行风格主页

由TBXark大佬的Mac系统的命令行来的灵感https://github.com/TBXark/tbxark.github.io

做了一个仿照Windows命令行的homepage

- [x] Window命令行风格
- [x] 点击command命令来输入指令
- [x] 点击link进行跳转
- [ ] 用户可以自行输入指令

![images](https://github.com/IndexHibiki/react-frontend-demo-study/blob/master/show/10_%E5%91%BD%E4%BB%A4%E8%A1%8C%E9%A3%8E%E6%A0%BC%E4%B8%BB%E9%A1%B5.gif?raw=true)



