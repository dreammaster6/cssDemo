flex布局 弹性盒子布局。

主轴 副轴（交叉轴）
弹性盒子里的元素按主轴排列的，所以确定主轴，主轴方向很有必要。

主轴方向

换行

存在剩余空间。 主轴可以通过设置justify-content来设置剩余空间的分配。
              副轴可以通过设置align-items 或 align-content 来设置剩余空间分配。
              align-items 针对单行
              aligin-congent 针对多行，把多行看作一个来处理。

空间不足。

flex: flex-shrink flex-grow flex-basis
flex-grow 元素拉伸  
flex-shrink 元素缩放
flex-basis 元素默认宽度 如果值不为auto 则优先级高于元素的width。 如果值为auto 元素宽度为 wdith值。