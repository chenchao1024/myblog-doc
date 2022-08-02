---
icon: edit
date: 2022-01-09
category:
  - CategoryA
  - CategoryB
tag:
  - tag A
  - tag B
---



# 前端汇总



## HTML

### 超文本标记语言（超越文本）

```html
网页 <html>                          主体 <body>                               头部 <head>
网页标题 <title>                        段落 <p>                                字体 <font>
换行 <br />                          图片 <img />                            水平线 <hr />
超链接 <a>                           文本标题<h1> --- <h6>                     预格式 <pre>
无序列表 <ul> <li>                    有序列表 <ol> <li>             定义列表 <dl> <dt> <dd>
空格 &nbsp;                          左尖括号 &lt;                             右尖括号 &gt;
表格 <table>                         行 <tr>                                   单元格 <td>
背景颜色 bgcolor                      背景图片 background                        边框 border
宽度 width                            高度height                                颜色 color
图片路径 src                           图片提示字 title                 图片加载失败提示字 alt
字体大小 size                         字体样式 face                           水平对齐 align
链接地址 href                         链接方式 target                      列表符号类型 type
单元格外边距 cellspacing               单元格内边距 cellpadding          单元格垂直对齐 valign
跨行 rowspan                          跨列 colspan


表格标题 <caption>                   表格表头<th>                        表格分段头部 <thead>
表格分段主体 <tbody>                 表格分段尾部 <tfoot>                         表单 <form>
表单控件 <input>                    下拉列表 <select> <option>             文本域 <textarea> 
框架集 <frameset>                   子框架 <frame>                         内嵌框架 <iframe>
表单提交目的地 action                 表单提交方式 method                        控件类型 type
表单最大输入字符 maxlength             控件默认值 value                           文本框 text
密码框 password                      重置 reset                                  提交submit
隐藏域 hidden                        多选框 checkbox                           单选框 radio 
文件上传 file                        普通按钮 button                       图片提交按钮 image
只读 readonly                       下拉默认选中 selected             单选多选默认选中 checked
框架滚动条 scrolling                  框架边框 frameborder               框架固定大小 noresize
框架名 name     

内部样式标签 <style>
标签选择器定义及引用方式：  标签{ } 
类选择器定义及引用方式 : . 类名{ }     
class="类名"
ID选择器定义及引用方式：#ID名{ }		
id="ID名"	                       文本颜色 color                 文本装饰 text-decoration
文本居中 text-align                  字体大小 font-size                 字体字形 font-family
字体粗细 font-weight                 背景颜色 background-color     背景图片 background-image
背景重复 background-repeat           背景位移 background-position         超链接未访问 a:link
超链接已访问 a:visited                鼠标悬浮超链接 a:hover              超链接点击时 a:active
浮动 float                           边框颜色 border-color             边框样式 border-style
边框粗细 border-width                 外边距 margin                           内边距 padding
```

head标签一般用于说明一些信息，不直接显示在页面上

body标签一般页面内容，直接显示在页面上

flex弹性布局

```html
ul>li{xxx$}*5(快捷tab)
```

div标签：容器标签

自定义没有默认样式 

### **表单标签**

```
form表单  action:将表单数据提交到什么地址
提交的方法：get post
get提交方法将数据提交到链接地址上，不安全，效率高  例如：搜素数据
post提交方法将数据放置到请求的body里面，不直接显示，效率低，可以提交表单数据比较大，例如 登录表单
定义输入标签类型：type
提交数据名称：name
提交数据的输入框的值：value
预置文字：placeholder
```

```
<form action="https://www.baidu.com/s" method="get">
			<input type="text" name="wd" placeholder="请输入要搜素的名称" id="" value="" />
			<input type="submit"  value="搜素" />
</form>
```

### 滤镜

```
居中操作：img{
width: 400px; 
height: auto;
display: block;
margin: 0 auto;
}
```

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
		<style type="text/css">
			img {
				width: 400px;
				height: auto;
				display: block;
				margin: 0 auto;
				transition: all 3s;
			}

			/* 鼠标悬浮 */
			img:hover {
				-webkit-filter: none;
			}

			.img1 {
				/* 滤镜属性
				设置灰度  1是百分之百灰 0是正常  3秒过渡  2 曝光
				*/
				-webkit-filter: grayscale(1);
			}


			.img2 {
				/* 滤镜属性
				亮度
				*/
				-webkit-filter: brightness(0.5);
			}

			.img3 {

				/* 褐色属性 
				0是正常
				1是百分之百褐色
				*/
				-webkit-filter: sepia(1);
			}

			.img4 {
				/* 模糊度
				blur
				*/
				-webkit-filter: blur(5px);
			}


			.img5 {
				/* 对比度 、
				1正常
				0,没有任何对比度 灰色
				*/
				-webkit-filter: contrast(0.5);

			}

			.img6 {
				/* 
			 饱和度
			 0变灰
			 */
				-webkit-filter: saturate(2);
			}

			.img7 {
				/* 反相 胶片底色
			*/
				-webkit-filter: invert(0);
			}

			.img8 {
				/* 
			 色相旋转360度
			 */
				-webkit-filter: hue-rotate(0deg);
			}

			.img9 {
				-webkit-filter: blur(10px) brightness(20) grayscale(1);
				transition: all 15s;
			}

			.img9:hover {
				-webkit-filter: blur(0) (1) grayscale(1);
			}
		</style>


	</head>
	<body>
		<img class="img1" src="img/jjy.jpg" />
		<img class="img2" src="img/jjy.jpg" />
		<img class="img3" src="img/jjy.jpg" />
		<img class="img4" src="img/jjy.jpg" />
		<img class="img5" src="img/jjy.jpg" />
		<img class="img6" src="img/jjy.jpg" />
		<img class="img7" src="img/jjy.jpg" />
		<img class="img8" src="img/jjy.jpg" />
		<img class="img9" src="img/jjy.jpg" />
	</body>
</html>

```

## CSS样式

锚记点

定义<a href="#name"></a>

<a href="top"></a>

- 锚记
- 发邮件
- 页面跳转

盒子模型

margin

padding

border

标签选择器

id选择器：只针对页面当中某一个元素进行修改

类选择器：只针对页面中一些控件，不规定是同一类型的，且需设置为同一样式的

组合选择器：以逗号进行分割，可以自由组合

- 头部样式
- 外联样式
- 内嵌样式

设置样式的3种方法(层叠样式表)就近原则

1. 通过syle标签设置样式

2. 通过style属性设置样式(优先级最高)

3. 通过css文件设置样式

   注意：谁在后面优先级高，id比class优先级高 继承的样式<浏览器模式的样式<标签样式<class<id<style属性里的样式 

   提高优先级：!important

```
.d1{
	color: pink;
	font-size: 100px;
}

body .d1{
	color: #FFC0CB;
}
div.d1{
	color: #FFC0CB;
}既是div又是class
```

### 属性选择器

属性名称：单独选择某个属性

[属性名称=属性值]：选择这个属性具体的某个值的元素

```
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
		<style type="text/css">
			[data-src]{
				width: 200px;
				height: 200px;
				background: #FFC0CB;
			}
			[data-src="a"]{
				border: 1px solid aquamarine;
			}
		</style>
	</head>
	<body>
		<div></div>
		<div></div>
		<div></div>
		<!-- 自定义属性 -->
		<div data-src="a"></div>
		<div data-src="b"></div>
	</body>
</html>
```



### 子元素选择器

第几个元素语法

元素：nth-child()

最后一个元素语法

元素：last-child

```
<!DOCTYPE html><html>	<head>		<meta charset="utf-8">		<title></title>		<!-- <style type="text/css">		/* 选中第二个元素 */			li:nth-child(2){				background: #FFC0CB;			}			/* 选中最后一个子元素 */			li:last-child{				background: #7FFFD4;			}		</style> -->						<style type="text/css">				/* 继承 */			/* .parent div{				width: 200px;				height: 200px;				background: #FFC0CB;			} */						/* 直接子元素 */			.parent>div{				width: 200px;				height: 200px;				background: #FFC0CB;			}		</style>	<body>	</head>		<ul>			<li>新闻内容1</li>			<li>新闻内容2</li>			<li>新闻内容3</li>			<li>新闻内容4</li>			<li>新闻内容5</li>		</ul>		<div class="parent">			<div class="child">				<div class="suzi"></div>			</div>		</div>	</body></html>
```

```
<!DOCTYPE html><html>	<head>		<meta charset="utf-8">		<title></title>		<style type="text/css">		/* 选中后面的元素 */			.n+div{				width: 200px;				height: 200px;				background: #FFC0CB;				color: #7FFFD4;			}		</style>	</head>	<body>		<div></div>		<div></div>		<div class="n"></div>		<div>helloworld</div>		<div>helloworld</div>	</body></html>
```

### 伪元素

:before:在元素内部创建一个最前面假的子元素

:after：在元素内部最后面创建一个假的子元素 

行元素没有宽高

创建伪元素content必须写

```
<!DOCTYPE html><html>	<head>		<meta charset="utf-8">		<title></title>		<style type="text/css">			#id1 {				width: 0;				height: 0;				/* background: gainsboro; */				/* border: 20px solid #7FFFD4; */				border-top: 40px solid transparent;				border-bottom: 40px solid transparent;				border-left: 40px solid yellowgreen;				border-right: 40px solid transparent;			}			.chat {				width: 400px;				line-height: 100px;				padding: 30px;				font-size: 30px;				background: greenyellow;				margin: 0 auto;				border-radius: 30px;				position: relative;			}			.chat:before {				content: "";				display: inline-block;				width: 0px;				height: 0px;								border-top: 40px solid transparent;				border-bottom: 40px solid transparent;				border-left: 80px solid transparent;				border-right: 80px solid greenyellow;				position: absolute;				left: -160px;				top: 40px;			}			.chat:after {				content: "";			}		</style>	</head>	<body>		<div id="id1">		</div>		<div class="chat">吃饭</div>	</body></html>
```

效果图：


### 浮动

- 可以解决文字包围图片的问题	
- 可以解决莫名其妙的间隔问题
- 浮动可以解决向左，向右进行排版对齐

浮动：可以设置元素，脱离正常的文档流，或者向左向右，靠近父元素的边缘或者是设置了浮动的其他元素的边缘靠拢

浮动高度塌陷问题

解决方法

1. 设定父元素高度
2. 清除左右浮动：clear:both
3. 伪元素清除浮动

```
<!DOCTYPE html><html>	<head>		<meta charset="utf-8">		<title></title>		<style type="text/css">			.parent{				width: 600px;				/* height: 600px; */				margin: 0 auto;				background: lightgreen;				/* font-size: 0; */			}			.child{				display: inline-block;				width: 200px;				height: 200px;				background: #7FFFD4;				float: left;			}			/* .clear{				clear: both;			} */			.clear:after{				content: "";				display: block;				clear: both;							}		</style>			</head>	<body>				<div class="parent clear">			<div class="child"></div>			<div class="child"></div>			<div class="child"></div>			<!-- <div class="clear"></div> -->					</div>		<p>helloworld</p>	</body></html>
```

效果




box-shadow属性接收一个由5个参数组成的值，每个值的意思如下：

- h-shadow: 水平阴影的位置
- v-shadow:垂直阴影的位置
- blur：模糊距离
- spread：阴影的尺寸
- color：阴影的颜色



### 文字属性

```
font-size:字体大小font-family：字体类型font-weight：字体粗细（100~900）color：字体颜色text-aligntext-align:字体排布（默认向左）line-height:文字行高text-shadow:文字阴影  水平偏移距  垂直偏移距 模糊度 阴影颜色
```

### 过渡动画

```
transition-property: width;：过渡属性transition-duration: ;：过渡周期transition-timing-function: ease;：整个过渡动画变化的速度 默认值从慢到快在慢下来  linear(平均速度) transition-delay:设置延迟时间
```

```
<!DOCTYPE html><html>	<head>		<meta charset="utf-8">		<title></title>				<style type="text/css">			.d1{				width: 200px;				height: 100px;				background: #90EE90;				/* transition: width 2s; */				transition-property: width,background-color;				transition-duration: 2s,10s;				transition-timing-function: ease;				/* transition-delay: 3s; */			}						.d1:hover{				width: 800px;				height: 100px;				background: pink;			}					</style> 	</head>	<body>		<div class="d1">			</div>	</body></html>
```

### 转换

2D动画

```
transform: translate();：移动transform: rotate(30deg);：旋转perspective: 100px;：透明度
```

```
<!DOCTYPE html><html>	<head>		<meta charset="utf-8">		<title></title>		<link rel="stylesheet" type="text/css" href="css/style.css"/>		<style type="text/css">						img{						transition: all 3s;		}		img:hover{			-webkit-filter: none;		}				.img1{			-webkit-filter: blur(1px);;		}						.img2{			-webkit-filter: contrast(1);		}						body{			perspective: 1000px;/* 			background: pink; */								}		.lifang:hover{			transform: rotate3d(1,1,1,720deg);				}			.lifang{				width: 200px;				height: 200px;				margin: 250px auto;				position: relative;				/* 保留3d */				transform-style: preserve-3d;					transition: all 8s;					animation: rotate linear 10s infinite;								}												@-webkit-keyframes rotate {              			        from {			            transform: rotateX(0deg) rotateY(0deg);			        }			        to {			            transform: rotateX(360deg) rotateY(360deg);			        }			    }									.page{				width: 200px;				height: 200px;				position: absolute;				left: 0;				top: 0;				/* 设置透明度 */				opacity: 0.9;			}						.front{			background-image: url(img/img6.jpg);				background-size: 100% auto ;				transform: translateZ(100px);			}						.back{			background-image: url(img/img2.jpg);				background-size: 100% auto;				transform: translateZ(-100px);			}			.right{			background-image: url(img/img.jpg);				background-size:auto 100% ;				transform: rotateY(90deg) translateZ(100px);			}			.left{			background-image: url(img/img3.jpg);				background-size: 100% auto;				transform: rotateY(-90deg) translateZ(100px);			}			.top{			background-image: url(img/img5.jpg);				background-size: 100% auto;				transform: rotateX(90deg) translateZ(100px);			}			.bottom{			background-image: url(img/img4.jpg);				background-size: 100% auto;				transform: rotateX(-90deg) translateZ(100px);			}		</style>	</head>	<body>		<section class="showcase">			<div class="video-container">				<video src="img/video.mov" autoplay muted loop></video>			 		   	<!-- <a href="https://baike.baidu.com/item/%E5%91%A8%E6%9D%B0%E4%BC%A6/129156?fr=aladdin">	<img  class="img2" src="img/zjl.jpg" style="width: 32%; height: auto; float: left; " /></a>		<a href="https://baike.baidu.com/item/%E8%94%A1%E5%BE%90%E5%9D%A4/8511458?fr=aladdin"><img class="img1" src="img/cxk2.jpg" style="float: right; width: 29%; height: auto;"/></a> -->		<!-- <img class="img3" src="img/pyy.jpg" style="width: 32%; height: auto; margin-left:100px;"/> -->		<div class="lifang">			<div class="page front"></div>			<div class="page back"></div>			<div class="page left"></div>			<div class="page right"></div>			<div class="page top"></div>			<div class="page bottom"></div>					</div>				</div>					</section>			</body></html>
```

效果


margin顺序：上右下左

### 输入框

同一个选项name要相同，name值相同为同一选项，只有一个内容会被选中

```
radio：单选框checkbox:复选框label：可绑定选项框id hidden:隐藏输入框html{ overflow-x:hidden; overflow-y:hidden;}：去滚动条
```

### 定位

1. 固定定位（根据浏览器的位置进行定位,会脱离正常的文档流，必须配合left，right，top，bottom才能定位到浏览器具体位置上）fixed

2. 相对定位（相对于自己当前的位置,不会脱离文档流）relative

   注：left就是以左边作为参考系，向右走，以此类推

3. 默认定位（默认情况，不做定位）

4. 绝对定位（相对于设置了父元素或祖先元素进行定位，会脱离正常的文档流）absolute

5. 粘性定位新出模式，一般不兼容）sticky

###  动画

关键字：animation

```
animation-name:动画名称animation-duration：动画周期animation-timing-function：速度  默认ease 线性linear 也可以设置贝塞尔曲线 ease-in ease-outanimation-delay:延迟时间animation-iteration-count: 3 ;循环次数  无限次：infiniteanimation-direction:模式，方向 默认值:normal    奇数次正常运动，偶数次反方向：alternate    反方向：reverse偶数次正常运动，奇数次反方向alternate-reverseanimation-fill-mode: forwards;让动画保留最后一帧的效果animation: lxw 2s steps(16) infinite;一步一步
```

```
.id1{				width: 200px;				height: 200px;				background: skyblue;				animation: donghua1 3s; 			}						@keyframes donghua1{				/* from{}				to{} */				0%{					transform: translate(0,0);									}				33.3%{					transform: translate(500px,0);				}				100%{					transform: translate(500px,400px);				}			}
```

### 字体图标

优点:占用带宽小，不会失真，可以随意调节字体大小和颜色。

图片:比较占用带宽，放大有可能会产生失真的效果，图片改变颜色不方便。

`Unicode `是字体在网页端最原始的应用方式，特点是：

- 支持按字体的方式去动态调整图标大小，颜色等等。
- 默认情况下不支持多色，直接添加多色图标会自动去色。

> 注意：新版 iconfont 支持两种方式引用多色图标：SVG symbol 引用方式和彩色字体图标模式。（使用彩色字体图标需要在「编辑项目」中开启「彩色」选项后并重新生成。）

第一步：拷贝项目下面生成的 `@font-face`

```css
@font-face {  font-family: 'iconfont';  src: url('iconfont.woff2?t=1631457828849') format('woff2'),       url('iconfont.woff?t=1631457828849') format('woff'),       url('iconfont.ttf?t=1631457828849') format('truetype');}
```

第二步：定义使用 iconfont 的样式

```css
.iconfont {  font-family: "iconfont" !important;  font-size: 16px;  font-style: normal;  -webkit-font-smoothing: antialiased;  -moz-osx-font-smoothing: grayscale;}
```

第三步：挑选相应图标并获取字体编码，应用于页面

```html
<span class="iconfont">&#x33;</span>
```

> "iconfont" 是你项目下的 font-family。可以通过编辑项目查看，默认是 "iconfont"。

兼容性支持IE6以上

`font-class` 引用

font-class 是 Unicode 使用方式的一种变种，主要是解决 Unicode 书写不直观，语意不明确的问题。

与 Unicode 使用方式相比，具有如下特点：

- 相比于 Unicode 语意明确，书写更直观。可以很容易分辨这个 icon 是什么。
- 因为使用 class 来定义图标，所以当要替换图标时，只需要修改 class 里面的 Unicode 引用。

使用步骤如下：

第一步：引入项目下面生成的 fontclass 代码：

```html
<link rel="stylesheet" href="./iconfont.css">
```

第二步：挑选相应图标并获取类名，应用于页面：

```html
<span class="iconfont icon-xxx"></span>
```

兼容性IE8以上   含有伪元素

`Symbol` 引用

这是一种全新的使用方式，应该说这才是未来的主流，也是平台目前推荐的用法。相关介绍可以参考这篇[文章]() 这种用法其实是做了一个 SVG 的集合，与另外两种相比具有如下特点：

- 支持多色图标了，不再受单色限制。
- 通过一些技巧，支持像字体那样，通过 `font-size`, `color` 来调整样式。
- 兼容性较差，支持 IE9+，及现代浏览器。
- 浏览器渲染 SVG 的性能一般，还不如 png。

使用步骤如下：

第一步：引入项目下面生成的 symbol 代码：

```html
<script src="./iconfont.js"></script>
```

第二步：加入通用 CSS 代码（引入一次就行）：

```html
<style>.icon {  width: 1em;  height: 1em;  vertical-align: -0.15em;  fill: currentColor;  overflow: hidden;}</style>
```

第三步：挑选相应图标并获取类名，应用于页面：

```html
<svg class="icon" aria-hidden="true">  <use xlink:href="#icon-xxx"></use></svg>
```

兼容性IE9以上

### 弹性布局

弹性容器：设置了display：flex这个元素为弹性容器，里面的子元素会按照弹性布局的方式进行布局

弹性子元素：设置了display：flex这个元素为弹性容器的直接子元素

弹性主轴方向：默认主轴方向从左到右：flex-direction: row;行    按比例压缩

**主轴**

```
flex-direction：row:从左到右column :从上到下row-reverse:从右到左column-reverse:从下到上
```

主轴内容分布

```
flex-start:向主轴的开始位置靠拢center:居中justify-content: flex-end;向结束位置靠拢justify-content: space-around;平均分布 两边有间距，是中间的一半justify-content: space-between;平均分布，两边没有间距justify-content: space-evenly;平均分布，两边和中间间距一样
```

侧轴内容分布

```
align-items: flex-start;向侧轴的开始位置靠拢align-items: stretch;默认值 拉伸  如果设置高度，此拉伸无效
```

弹性换行

```
flex-wrap: nowrap;默认不换行align-content: flex-start;侧轴多行分布
```

排序问题

使用order number 默认从小到大  设置在子元素上

单独设置子元素侧轴的排布

```
align-self: center;子元素居中
```

### 移动端响应式

媒体查询

```
设定小于600px时的样式@media only screen and (max-width:600px) {				.d1{					width: 100%;				}			}	@media only screen and (min-width:600px) and (max-width:1200px){				.d1{					width: 50%;					background: pink;				}			}
```

```
vw:viewport width:100vw=100%viewport width
```

margin：`上左下右`

# 总结




## 单位

浏览器默认像素16px

px:像素单位

em:相对单位  2em=2*16px 相对于父元素的字体单位

rem:相对单位，相对于根（html）

vw:视窗的宽度  viewport  百分比宽度度  100vw

vh:视窗高度     viewport    百分比高度  100vh

