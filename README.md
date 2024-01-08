# blue-atom

默认所有的class都带上了ba-的前缀名，可修改$prefix-name相关的配置修改

#### 使用模块配置
```scss
//字体大小相关
$font-size-start: 10 !default;
$font-size-end: 35 !default;

// 是否使用指定单位的font
// 最新版本移除rp单位，使用通过$platform区分使用端，h5||mp分发对于端的rpx计算
$use-px-font: true !default;
$use-rpx-font: true !default;  

//配置padding的起始值
$padding-start: 1 !default;
$padding-end: 50 !default;

//配置margin的起始值
$margin-start: 1 !default;
$margin-end: 50 !default;

//是否使用指定单位的padding
$use-px-padding: true !default;
$use-rpx-padding: true !default;

//是否使用指定单位的margin
$use-px-margin: true !default;
$use-rpx-margin: true !default;

//是否使用flex
$use-flex: true !default;

//是否使用栅格系统
$use-grid: true !default;

//使用百分比宽度
$use-width-percentage: true !default;

//是否使用链接相关内容
$use-link: true !default;

//是否使用表格相关内容
$use-table: true !default;

```


### color上的配置

```scss
//颜色配置信息
$color-base: #0f8cca !default;
$color-999: #999;
$color-666: #666;
$color-333: #333;
$color-e5e: #e5e5e5;
$color-f4f: #f4f4f4;
$color-org: #ff8400 !default;
$color-green: #008000 !default;
$color-red: red !default;
$color-blue: blue !default;
$color-white: white !default;
$color-grey: grey !default;

//颜色组项
$base-color-group: ("base", $color-base, $color-white) !default;
$nine-color-group: ("999", $color-999, $color-white);
$six-color-group: ("666", $color-666, $color-white);
$three-color-group: ("333", $color-333, $color-white);
$e5e-color-group: ("e5e", $color-e5e, $color-white);
$f4f-color-group: ("f4f", $color-f4f, $color-white);
$org-color-group: ("org", $color-org, $color-white) !default;
$green-color-group: ("green", $color-green, $color-white) !default;
$red-color-group: ("red", $color-red, $color-white) !default;
$blue-color-group: ("blue", $color-blue, $color-white) !default;
$white-color-group: ("white", $color-white, $color-333) !default;
$grey-color-group: ("grey", $color-grey, $color-white) !default;

// color 颜色组
$color-group: $base-color-group, $nine-color-group, $six-color-group,
  $three-color-group, $e5e-color-group, $f4f-color-group,
  $org-color-group $green-color-group, $red-color-group, $grey-color-group,
  $white-color-group !default;
```



### 字体相关

```html
.ba-t-c  文字居中
.ba-t-l  文字左对齐
.ba-t-r  文字右对齐
.ba-v-m 基线居中
.ba-v-t 基线向上对齐
.ba-v-b 基线向下对齐
```

##### 字体颜色为：

```html
.ba-t-(color-name)
如：
  .ba-t-333
  .ba-t-success
```


##### 字体大小：

字体的单位存在3中,

```html
.ba-f-10
.ba-f-10rpx
```

不带代为的为px像素，rpx在h5为px->rem,小程序内使用为px->rpx

按具体的使用环境选择使用的单位字体，
计算公式参考config/viewport.scss查看，
转化公式查看function/index.scss中的反向计算

### 边框相关

包含两个组合边框 tb lr ,和四个反向独立的边框定义 t r b l;

```html
.ba-bd-lr-(color-name)
.ba-bd-l-(color-name)
.ba-bd-r-(color-name)
.ba-bd-tb-(color-name)
.ba-bd-t-(color-name)
.ba-bd-b-(color-name)
```

### 背景相关

```
.ba-bg-(color-name)
```






















