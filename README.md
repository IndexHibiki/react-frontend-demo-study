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

