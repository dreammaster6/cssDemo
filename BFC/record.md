块格式化上下文（Block Formatting Context，BFC）是 Web 页面的可视 CSS 渲染的一部分，是块级盒子的布局过程发生的区域，也是浮动元素与其他元素交互的区域。

BFC是CSS布局元素的一部分


CSS元素的定位方案是怎样的呢？
https://www.cnblogs.com/magicg/p/12650563.html


拥有BFC的元素有什么特点
1.包含内部浮动
2.排除外部浮动
3.阻止外边距重叠

形成BFC的方式
1.根元素。
2.浮动元素(float值不为none)
3.绝对定位元素(position为absolute 或 fixed)
4.行内块元素(display为inline-block)
5.overflow值不为 visible、clip 的块元素
6.display 值为 flow-root 的元素
7.表格单元格（display 值为 table-cell，HTML 表格单元格默认值）
8.表格标题（display 值为 table-caption，HTML 表格标题默认值）
9.contain 值为 layout、content 或 paint 的元素
10.弹性元素（display 值为 flex 或 inline-flex 元素的直接子元素），如果它们本身既不是 flex、grid 也不是 table 容器
11.网格元素（display 值为 grid 或 inline-grid 元素的直接子元素），如果它们本身既不是 flex、grid 也不是 table 容器
12.多列容器（column-count 或 column-width (en-US) 值不为 auto，包括column-count 为 1）
column-span 值为 all 的元素始终会创建一个新的 BFC，即使该元素没有包裹在一个多列容器中 (规范变更, Chrome bug)