---
slug: 《理解 Rust 的所有权》
title: 公开课：《理解 Rust 的所有权》
author: wubx
author_title: Datafuse Labs
tags: [mysql, replication]
---

上周公开课[《理解 Rust 的所有权》](https://www.bilibili.com/video/BV1264y1i7U9/) 回放地址： https://www.bilibili.com/video/BV1264y1i7U9/

**本周公开课：《通过实战理解 Rust 宏》|Vol. 3**

**课程主题：**《通过实战理解 Rust 宏》

**课程时间：** 2021 年 8 月 15 日 20:30-21:30

**课程介绍：**

如果想用 Rust 开发大型目，或者学习大型项目代码，特别是框架级别的项目，那么 Rust 的宏机制肯定是一个必须掌握的技能。 例如 datafuse 中的一些配置管理：
![](https://datafuse-1255499614.cos.ap-beijing.myqcloud.com/pbc/3/rust-macro-1628478411126.jpg)

<!--truncate-->

这就是通过宏实现配置的统一行为，代码参考：
https://github.com/datafuselabs/datafuse/blob/master/fusequery/query/src/sessions/settings.rs#L19

https://github.com/datafuselabs/datafuse/blob/master/fusequery/query/src/sessions/macros.rs

Rust 语言强大的一个特点就是可以创建和利用宏，不过创建宏看起来挺复杂，常常令刚接触 Rust 的开发者生畏惧。 在本次公开课中帮助你理解 Rust Macro 的基本原理，学习如何创自已的 Rust 宏，以及查看源码学习宏的实现。

### **课程大纲**

- 什么是 Rust 宏
- 什么是宏运行原理
- 如何创建 Rust 宏过程
- 阅读 datafuse 项目源码， 学习项目中宏的实现

### **讲师介绍**

![](https://datafuse-1255499614.cos.ap-beijing.myqcloud.com/pbc/%E8%8B%8F%E6%9E%97%E4%BB%8B%E7%BB%8D.png)

![](https://datafuse-1255499614.cos.ap-beijing.myqcloud.com/pbc/%E6%89%AB%E7%A0%81%E5%8F%82%E4%B8%8E.png)

本次活动由：知数堂、Datafuse 项目、Rust 语言中文社区 共同发起。后期也欢迎 Rust 爱好者，Rust 优秀项目， Data Cloud 项目来分享，公开课分享合作联系微信：82565387 备注：Rust 。 公开课嘉宾 & Datafuse contributor 都可以获取 Datafuse 纪念 T 恤。
![](https://datafuse-1255499614.cos.ap-beijing.myqcloud.com/pbc/T-shirt.png)

获取 T-shirt 的方法：

1. 给 datafuse 提 issue/pr
2. 进行 Rust，大数据，数据库方面的公开课分享
3. 社区里分享 datafuse 相关文章

### 课程回放

认识面向基础架构语言 Rust | Vol. 1 https://www.bilibili.com/video/BV1mg411778g

理解 Rust 的所有权 | Vol. 2 https://www.bilibili.com/video/BV1264y1i7U9

### 课程中苏林老师推荐入门资料

Rust 在线编辑器: https://play.rust-lang.org/

《Rust 语言程序设计》: https://kaisery.github.io/trpl-zh-cn/

打怪通关学习方式 Rustlings: https://github.com/rust-lang/rustlings

Rust 优秀项目 Datafuse： https://github.com/datafuselabs/datafuse
