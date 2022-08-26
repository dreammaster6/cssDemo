弹性盒子是一种用于按行或按列布局元素的一维布局方法。元素可以膨胀以填充额外的空间，收缩以适应更小的空间。

重点： 行 列 布局。元素可膨胀，可收缩。

display：flex 将元素变为弹性布局，元素内的第一层元素是弹性元素。弹性元素在主轴方向，按列摆放，并且列高相同。

怎么修改主轴方向？

flex-direction 控制主轴方向。 
row： 主轴方向为从左到右的x轴。
row-reverse: 主轴方向为从右到左的x轴。
column: 主轴方向为从上到下的y轴。
column-reverse: 主轴方向为从下到上的y轴。


flex-wrap 控制弹性元素是否是多行显示。
nowrap： 不允许多行显示。
wrap:  允许多行显示。
wrap-reverse： 允许多行显示，但是行的位置颠倒。

flex-flow: 为flex-direction flex-wrap的缩写。

flex: 1 代表 flex-basis: 0 flex-grow: 1 flex-shrink: 1。相当于子元素平分父元素的宽度。

flex-basis: 指定了 弹性元素在主轴方向上的初始大小。
auto: 默认大小。
0： 最长的单词的大小。
大于0的px:  大小为200px。

flex-grow: 指定了父元素剩余空间怎么分配

flex-shrink: 指定超出父元素内容，溢出的部分怎么分配(元素宽度减少一部分)

主轴的对齐方式
justify-content

交叉轴的对齐方式
align-items


order: 可以更换子元素的位置，默认为0，值越大排名越往后。


总结： display: flex 将父元素变为弹性盒子，父元素的第一层元素变为弹性元素。 父元素中设置 flex-direction设置主轴，flex-wrap 设置是否换行。 justify-content设置主轴对齐方式，align-items设置交叉轴对齐方式。 上面的属性用于父元素中。

flex-grow flex-shrink flex-basis order 用于控制弹性元素(子元素)的初始宽度，缩放比例，以及显示顺序。