display: grid 设置在父元素中，并且父元素还需要设置列数。

grid-template-columns：规定网格布局中的列数（和宽度）。这些值是一个用空格分隔的列表，其中每个值指定相应列的尺寸。
fr 代表可用空间的分配比例。

grid-gap: 设置 行 列间隔。
grid-column-gap： 设置列间隔
grid-row-gap： 设置行间隔

grid-auto-columns： 设置表格列宽
grid-auto-rows: 设置表格行高

grid-column: 1 / 3 表示第一列开始 第三列结束(包含的是第1列 第2列)
grid-row: 1 / 2 表示第一行开始 第2行结束(包含的是第1行 第2行)


网格布局可以自己设置元素的位置，大小，比弹性布局可操作性更高。