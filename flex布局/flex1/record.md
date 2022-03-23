flex-grow
定义： CSS flex-grow 属性定义弹性盒子项（flex item）的拉伸因子。
理解： 父元素盒子宽度大于子元素宽度总和，多余的宽度按flex-grow的属性值进行分配给子元素。
使用flex-grow计算方式为
目标元素拉伸之后的宽度 = 目标元素宽度width值 + （父元素实际宽度值 - (所有子元素实际宽度 + padding + border之和)） * 目标元素flex-grow / 所有子元素的flex-grow之和


flex-shrink
定义： CSS flex-shrink 属性指定了 flex 元素的收缩规则。flex 元素仅在默认宽度之和大于容器的时候才会发生收缩，其收缩的大小是依据 flex-shrink 的值。

使用flex-shrink元素的宽度计算方式为

目标元素收缩之后的宽度 = 目标元素宽度width值  - [目标元素实际宽度值 * 目标元素的shrink值 / （所有目标元素实际宽度值与shrink权重和） ] * （所有目标元素实际宽度值 + border-left + border-right + padding-left + padding-right  - 父元素的实际宽度值）

宽度width值： 即为元素的 width 属性值。
实际宽度值： content-box 中 为 width属性值。 border-box中 为 width - ( border-right + padding-left + padding-right)