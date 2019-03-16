# blue-component

默认所有的class都带上了bc-的前缀名，可修改$prefix-name相关的配置修改


### coloe上的配置

```scss
//颜色配置信息
$color-base: #00abff !default;
//浅色的base
$color-light-base: #00abff !default;
$color-999: #999;
$color-666: #666;
$color-333: #333;
$color-e5e: #e5e5e5;
$color-f4f: #f4f4f4;
$color-org: #ff8400;
$color-green: #008000;
$color-red: red;
$color-blue: blue;
$color-white: white;
$color-grey: #ccc;
$color-default: #666 !default;
$color-primary: #337ab7 !default;
$color-info: #5bc0de !default;
$color-success: #44cb7f !default;
$color-warning: #ff8400 !default;
$color-danger: #fe6270 !default;
```

存在default的为可配置的颜色参数

#### 以下为颜色组

全局 color 颜色组

```scss
$color-group:
	('base', $color-base),
	('light-base', $color-light-base),
	('999', $color-999),
	('666', $color-666),
	('333', $color-333),
	('e5e', $color-e5e),
	('f4f', $color-f4f),
	('org', $color-org),
	('green', $color-green),
	('red', $color-red),
	('blue', $color-blue),
	('grey', $color-grey),
	('white', $color-white),
	('default', $color-default),
	('primary', $color-primary),
	('info', $color-info),
	('success', $color-success),
	('warning', $color-warning),
	('danger', $color-danger);
```



### 字体相关

```html
.bc-t-c  文字居中
.bc-t-l  文字左对齐
.bc-t-r  文字右对齐
.bc-v-m 基线居中
.bc-v-t 基线向上对齐
.bc-v-b 基线向下对齐
```

##### 字体颜色为：

```html
.bc-t-(color-name)
如：
  .bc-t-333
  .bc-t-success
```


##### 字体大小：

字体的单位存在3中,

```html
.bc-f-10
.bc-f-10rp
.bc-f-10rpx
```

不带代为的为px像素，rp为通过px->rem，rpx为小程序内使用的px->rpx

按具体的使用环境选择使用的单位字体，
计算公式参考config/viewport.scss查看，
转化公式查看function/index.scss中的反向计算

### 边框相关

包含两个组合边框 tb lr ,和四个反向独立的边框定义 t r b l;

```html
.bc-bd-lr-(color-name)
.bc-bd-l-(color-name)
.bc-bd-r-(color-name)
.bc-bd-tb-(color-name)
.bc-bd-t-(color-name)
.bc-bd-b-(color-name)
```

### 背景相关

```
.bc-bg-(color-name)
```

### 箭头相关

```
.bc-arrow .bc-arrow-l .bc-arrow-small .bc-arrow-(color-name)
```

使用箭头样式需要调用四个class，箭头，箭头方向，箭头大小，箭头颜色






















