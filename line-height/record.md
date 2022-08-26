line-height: 代表行高，即 字体大小 + 行距(行与行之间的距离)

line-height 在块级元素中（block, inline-block）,如果块级元素没有指定height属性值，那么这个块级元素的高度即为line-height的值。

了解行高之前，我们先了解一个知识.我们CSS是盒子模型(怪异，正常)。每个盒子模型下面可以放元素，块级元素(block)会占一行，而行内块级元素(inline-block)和行内元素(inline)，会并排排列在一起。 line-height 就代表了盒模型一行的高度。盒模型(也即父元素)的高度为盒模型内，每一行元素最高的高度相加。

CSS就是盒子模型，盒子模型的高度由盒子模型内的盒子高度决定。
盒子高度怎么得来呢?
1.如果指定了盒子的高度 height，则盒子的高度为 height值。
2.没有指定盒子高度，则由盒子内元素的line-height值，转化为元素的height值，再由这些height值决定盒子的高度。
3.line-height不能影响元素的height值，子元素的line-height能


line-height: MDN

line-height: 指行高。对于块级元素，指定元素行盒的最小高度，对于行内非替换元素，用于计算行盒高度(注意是高度，而非是行距，不是行内非替换元素的实际高度，而是撑起的高度)，对于行内替换元素不起作用。
行盒: 一行的盒子高度。
行高 = 字体大小 + 上半边行距 + 下半边行距
line-height: 属性可继承。

line-height和font-size的关系
line-height < font-size  行距小于0 行与行之间会有重叠部分。
line-height = font-size  行距等于0 行与行之间眼睛视角下有间距，对于某些场景会有。
line-height > font-size  行距大于0 行与行之间间距更明显。

line-height的取值。
px  : 父元素中是固定值，子元素继承固定值。
%   : 父元素中是font-size值与百分比值相乘的值。子元素继承父元素中font-size值与百分比值相乘的值。
数值 ：父元素中用数值与font-size值相乘。子元素中继承数值，子元素的font-size值与数值相乘。

line-height和height的关系

height = 0: 父元素的高度为0，子元素行高为line-height。
height != 0 && height < line-height: 父元素高度为height, 行内子元素高度为line-height。
height != 0 && height > line-height: 父元素高度为height, 行内子元素高度为line-height。
hegiht 不设置值: 父元素高度为line-height，此时行内文本元素是垂直居中的，替换元素需要设置(vertical-aligin：middle居中)
