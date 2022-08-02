---
icon: edit
date: 2022-01-12
category:
  - CategoryA
  - CategoryB
tag:
  - tag A
  - tag B
star: true
---

# JavaScript学习

## 简介

JavaScript是一种属于网络的高级脚本语言,已经被广泛用于Web应用开发,常用来为网页添加各式各样的动态功能,为用户提供更流畅美观的浏览效果。通常JavaScript脚本是通过嵌入在HTML中来实现自身的功能的。  

**组成**

- [ECMAScript](https://baike.baidu.com/item/ECMAScript)，描述了该语言的语法和基本[对象](https://baike.baidu.com/item/对象/2331271)。 

- [文档对象模型](https://baike.baidu.com/item/文档对象模型)（DOM），描述处理网页内容的方法和接口。 

- 浏览器对象模型（[BOM](https://baike.baidu.com/item/BOM/1801)），描述与浏览器进行交互的[方法](https://baike.baidu.com/item/方法/3009367)和[接口](https://baike.baidu.com/item/接口)。

  

**运行模式**

1. 是一种解释性脚本语言（代码不进行[预编译](https://baike.baidu.com/item/预编译)）。 

2. 主要用来向[HTML](https://baike.baidu.com/item/HTML)（[标准通用标记语言](https://baike.baidu.com/item/标准通用标记语言)下的一个应用）页面添加交互行为。 

3. 可以直接嵌入HTML页面，但写成单独的[js](https://baike.baidu.com/item/js/10687961)文件有利于结构和行为的[分离](https://baike.baidu.com/item/分离)。 

4. 跨平台特性，在绝大多数浏览器的支持下，可以在多种平台下运行（如[Windows](https://baike.baidu.com/item/Windows)、[Linux](https://baike.baidu.com/item/Linux)、[Mac](https://baike.baidu.com/item/Mac/173)、[Android](https://baike.baidu.com/item/Android/60243)、[iOS](https://baike.baidu.com/item/iOS/45705)等）。

5. JavaScript脚本语言同其他语言一样，有它自身的基本数据类型，表达式和[算术运算符](https://baike.baidu.com/item/算术运算符/9324947)及程序的基本程序框架。JavaScript提供了四种基本的数据类型和两种特殊数据类型用来处理数据和文字。而变量提供存放信息的地方，表达式则可以完成较复杂的信息处理。

   

**特点**

- [脚本语言](https://baike.baidu.com/item/脚本语言)
- 基于对象
- 简单
- 动态性
- 跨平台性

## 基本语法

```
alert():弹窗
document.write("xxx"):控制台生成
```

少用alert,会阻塞

### 命名规则

```
变量必须以字母开头
变量也能以 $ 和 _ 符号开头（不过我们不推荐这么做）
变量名称对大小写敏感（y 和 Y 是不同的变量）、
```

### 语法规则

输出

```
console.log()
console.err():输出错误
console。warn();弹出警告
var b=confirm("")弹框，是否确定，带有确定，取消
document.getElementById("demo").innerHTML="hello":js输出
```

### 跳转语法

```
location.href="链接“：跳转到某一个页面
prompt("你是哪里人")带输入框的弹窗
```

### 数据类型

**值类型(基本类型)**：字符串（String）、数字(Number)、布尔(Boolean)、对空（Null）、未定义（Undefined）、Symbol。

**引用数据类型**：对象(Object)、数组(Array)、函数(Function)。

```
typeof():查看类型
```

```
var length = 16;                                  // Number 通过数字字面量赋值
var points = x * 10;                              // Number 通过表达式字面量赋值
var lastName = "Johnson";                         // String 通过字符串字面量赋值
var cars = ["Saab", "Volvo", "BMW"];              // Array  通过数组字面量赋值
var person = {firstName:"John", lastName:"Doe"};  // Object 通过对象字面量赋值
```

### 数组定义与遍历

```
var arr=new Array();
		arr[0]='张三';
		arr[1]='李四';
		arr[2]='王五';
		for(var i=0;i<arr.length;i++){
			document.write(arr[i]+'<br />')
		}
```

### 对象

键值对通常写法为 **name : value** (键与值以冒号分割)。

```
//定义对象
		var stu={
			username:'chen',
			password:'123456',
			id: 1,
			full:function(){
				return this.username+this.password
			}
		};
		document.write(stu.username)
		document.write(stu["password"]+"<br />")
		document.write(stu.full())
```

### 变量声明

- JavaScript 变量的生命期从它们被声明的时间开始。
- 局部变量会在函数运行以后被删除。
- 全局变量会在页面关闭后被删除。

### 事件

HTML 事件可以是浏览器行为，也可以是用户行为。

以下是 HTML 事件的实例：

- HTML 页面完成加载
- HTML input 字段改变时
- HTML 按钮被点击

| 事件        | 描述                         |
| :---------- | :--------------------------- |
| onchange    | HTML 元素改变                |
| onclick     | 用户点击 HTML 元素           |
| onmouseover | 用户在一个HTML元素上移动鼠标 |
| onmouseout  | 用户从一个HTML元素上移开鼠标 |
| onkeydown   | 用户按下键盘按键             |
| onload      | 浏览器已完成页面的加载       |

### 字符串

字符串对象是一个object类型

 不要创建 String 对象。它会拖慢执行速度，并可能产生其他副作用 

=== 为绝对相等，即数据类型与值都必须相等。

条件运算符

```
variablename=(condition)?value1:value2voteable=(age<18)?"年龄太小":"年龄已达到";
```

使用 constructor 属性来查看对象是否为数组 (包含字符串 "Array"):

```
<p>判断是否为数组。</p><p id="demo"></p><script>var fruits = ["Banana", "Orange", "Apple", "Mango"];document.getElementById("demo").innerHTML = isArray(fruits);function isArray(myArray) {    return myArray.constructor.toString().indexOf("Array") > -1;}</script>
```

### 作用域

如果在赋值操作时,没有声明变量,那么就会自动声明成全局变量并且进行赋值

闭包：当函数内部的变量被另外一个函数所引用，那么这个函数的变量将不会在执行完毕后销毁

### 面向对象

对象存在堆中

构造函数创建对象

字面量创建对象：创建没有属性和方法的对象

student['name']：获取对象名

删除对象

```
delete.student.age
```

判断值是否在里面

```
'name' in studentt.hasOwnProperty('name')
```

栈里面放地址，堆里面放对象

### this关键字

在调用函数每次都会向函数内部传递进一个隐含的参数，这个隐含的参数就是this , this指向的是一个对象

函数执行的上下文对象

函数是一个对象，保存的是内存地址

### 类数组 

arguments：获取传进来的参数，只在函数中使用，代表实参，是一个伪数组

<hr/>

### 改变this的指向

#### call/apply:通过call/apple可以使得在调用函数的时候修改this的指向

```
student.like.call(teacher,"唱","跳")student.like.apply(teacher,["唱","跳"])<script type="text/javascript">		var student={			name:"chen",			like:function(){				console.log(this)				console.log(this.name+"喜欢打篮球")				for(var i=0;i<arguments.length;i++){					console.log(this.name+arguments[i])				}			}		}		var teacher={			name:"chao"		}		var fn=student.like		//student.like() 		window.fn()		fn.call(teacher)		fn.apply(teacher)	</script>
```

#### bind改变this指向

```
var student = {			name: "学生",			like: function() {				console.log(this.name + "喜欢打篮球")			}.bind(teacher)		}
```

### 创建对象

#### 字面量方式

```
	var student = {			name: "小明",			age: 16,			school: "一中",			like: function() {				console.log(this.name + "喜欢打篮球")			}		}
```

#### 工厂模式

```
function Student(name,age,likename) {			var student = {				name: name,				age: age,				school: "一中",				like: function() {					console.log(this.name + likename)				}			}			return student		}		var s1=Student("小红",18,"弹钢琴")		console.log(s1)		var s2=Student("小明",20,"打乒乓球")		console.log(s2)
```

#### 构造函数创建对象

```
var t1=new Teacher()
```

#### class创建对象

```
class Cat{		//定义构造函数		constructor(name,color,likename) {		    this.name=name;			this.color=color;			this.like=function(){				console.log(this.color+"的"+this.name+"喜欢"+likename)			}		}	}	var c1=new Cat("波斯猫","白色","毛球")	console.log(c1)
```

判断创建的对象是不是实例

instanceof

### 原型prototype

---

```
<template>  <div>    <h1>天气</h1>    <h2>城市：{{ city }}</h2>    <h3>温度：{{ tmp }}℃</h3>    <h3>天气状况：{{ cond }}</h3>    <h3>风向：{{ wind }}</h3>    <h3>天气指数：{{ brf }}</h3>    <h3>更新时间：{{ time }}</h3>    <router-link to="/about">进入about</router-link>  </div></template><script>import axios from "axios";export default {  data() {    return {      city: null,      tmp: null,      wind: null,      cond: null,      brf: null,      time: null,    };  },  // 异步  async beforeMount() {    let key = "bd5c2bbed6ac44b9a504781e436299a8";    let httpUrl = `https://free-api.heweather.net/s6/weather/now?location=${this.$route.params.city}&key=${key}`;    let res = await axios.get(httpUrl);    let data = res.data;    //this.city = data.HeWeather6[0].basic.location;    this.city = data.HeWeather6[0].basic.location;    this.cond = data.HeWeather6[0].now.cond_txt;    this.wind = data.HeWeather6[0].now.wind_dir;    this.tmp = data.HeWeather6[0].now.tmp;    this.time = data.HeWeather6[0].update.utc;    let url = `https://free-api.heweather.net/s6/weather/lifestyle?location=${this.$route.params.city}&key=${key}`;    let res1 = await axios.get(url);    let data1 = res1.data;    this.brf = data1.HeWeather6[0].lifestyle[3].txt;    console.log(res1);    console.log(res);    //console.log(res);    //console.log(this.$route)  },};</script>
```

# ES6

let和const解决了var变量穿透的问题，常量修改的问题

箭头函数规律

- 去掉function
- 在括号后面加箭头
- 如果逻辑代码仅有return可以直接省去。(如果你逻辑体，你就不能省略)
- 如果参数只有一个，可以把括号也省去

 es6简写

- 因为对象是key : value存在
- 如果key和变量的名字一致，可以指定义一次即可
- 如果value是一个函数，可以把‘`:function`去不去掉，只剩下()即可

es6对象结构-其实就快速获取属性和方法的方式一种形式

map自带循环，并且会把处理的值回填对应的位置

```
<script>        var arr=[1,2,3,4,5,6]        //map自带循环        var newArr=arr.map(function(el){            return el*2        })        console.log(newArr)    </script>
```

 npm : node package manager ,node包管理器

作用:

- 快速构建nodejs工程   npm init
- 快速安装和依赖第三个模块


npm install -g cnpm --registry=https://registry.npm.taobao.org

指定版本：npm install vue@3.0.2

卸载：npm uninstall  xxx

切换es5步骤

- 安装babel:npm install -g babel-cli
- 查看版本号：babel --version
- 安装babel转换器：cnpm install --save-dev babel-preset-es2015
- 执行：babel src -d dist

## Commons js规范

导入工具类

```
//工具类const sum=function(a,b){    return a+b}const sub=function(a,b){    return a-b}const mul=function(a,b){    return a*b}const div=function(a,b){    return a/b}//导出给别人用module.exports={sum:sum,sub:sub,mul:mul,div:div}
```

测试

```
const m=require("./四则运算.js")console.log(m.sum(1,2))
```

## es6

```
export default {    getList() {        console.log('获取数据列表2')    },    save() {        console.log('保存数据2')    }}
```

测试  

```
import user from "./userApi2.js"user.getList()user.save()
```

## 什么是Webpack

Webpack 是一个前端资源加载/打包工具。它将根据模块的依赖关系进行静态分析，然后将这些模块按照指定的规则生成对应的静态资源。

js打包

```
const path = require("path"); //Node.js内置模块module.exports = {    entry: './src/main.js', //配置入口文件    output: {        path: path.resolve(__dirname, './dist'), //输出路径，__dirname：当前文件所在路径        filename: 'bundle.js' //输出文件    }}
```

指令：webpack -w:监听

webpack -h:帮助

webpack.config.js

```
//导入path目录const path=require('path')//定义json打包规则module.exports={    entry:"./src/main.js",    output: {        path:path.resolve(__dirname,"./dist"),        filename:'bundle.js'    },    module: {        rules: [              {                  test: /\.css$/,    //打包规则应用到以css结尾的文件上                use: ['style-loader', 'css-loader']            }          ]      }}
```

