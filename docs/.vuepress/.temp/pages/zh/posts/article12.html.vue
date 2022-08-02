<template><h1 id="javascript学习" tabindex="-1"><a class="header-anchor" href="#javascript学习" aria-hidden="true">#</a> JavaScript学习</h1>
<h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2>
<p>JavaScript是一种属于网络的高级脚本语言,已经被广泛用于Web应用开发,常用来为网页添加各式各样的动态功能,为用户提供更流畅美观的浏览效果。通常JavaScript脚本是通过嵌入在HTML中来实现自身的功能的。</p>
<p><strong>组成</strong></p>
<ul>
<li>
<p><a href="https://baike.baidu.com/item/ECMAScript" target="_blank" rel="noopener noreferrer">ECMAScript<ExternalLinkIcon/></a>，描述了该语言的语法和基本<a href="https://baike.baidu.com/item/%E5%AF%B9%E8%B1%A1/2331271" target="_blank" rel="noopener noreferrer">对象<ExternalLinkIcon/></a>。</p>
</li>
<li>
<p><a href="https://baike.baidu.com/item/%E6%96%87%E6%A1%A3%E5%AF%B9%E8%B1%A1%E6%A8%A1%E5%9E%8B" target="_blank" rel="noopener noreferrer">文档对象模型<ExternalLinkIcon/></a>（DOM），描述处理网页内容的方法和接口。</p>
</li>
<li>
<p>浏览器对象模型（<a href="https://baike.baidu.com/item/BOM/1801" target="_blank" rel="noopener noreferrer">BOM<ExternalLinkIcon/></a>），描述与浏览器进行交互的<a href="https://baike.baidu.com/item/%E6%96%B9%E6%B3%95/3009367" target="_blank" rel="noopener noreferrer">方法<ExternalLinkIcon/></a>和<a href="https://baike.baidu.com/item/%E6%8E%A5%E5%8F%A3" target="_blank" rel="noopener noreferrer">接口<ExternalLinkIcon/></a>。</p>
</li>
</ul>
<p><strong>运行模式</strong></p>
<ol>
<li>
<p>是一种解释性脚本语言（代码不进行<a href="https://baike.baidu.com/item/%E9%A2%84%E7%BC%96%E8%AF%91" target="_blank" rel="noopener noreferrer">预编译<ExternalLinkIcon/></a>）。</p>
</li>
<li>
<p>主要用来向<a href="https://baike.baidu.com/item/HTML" target="_blank" rel="noopener noreferrer">HTML<ExternalLinkIcon/></a>（<a href="https://baike.baidu.com/item/%E6%A0%87%E5%87%86%E9%80%9A%E7%94%A8%E6%A0%87%E8%AE%B0%E8%AF%AD%E8%A8%80" target="_blank" rel="noopener noreferrer">标准通用标记语言<ExternalLinkIcon/></a>下的一个应用）页面添加交互行为。</p>
</li>
<li>
<p>可以直接嵌入HTML页面，但写成单独的<a href="https://baike.baidu.com/item/js/10687961" target="_blank" rel="noopener noreferrer">js<ExternalLinkIcon/></a>文件有利于结构和行为的<a href="https://baike.baidu.com/item/%E5%88%86%E7%A6%BB" target="_blank" rel="noopener noreferrer">分离<ExternalLinkIcon/></a>。</p>
</li>
<li>
<p>跨平台特性，在绝大多数浏览器的支持下，可以在多种平台下运行（如<a href="https://baike.baidu.com/item/Windows" target="_blank" rel="noopener noreferrer">Windows<ExternalLinkIcon/></a>、<a href="https://baike.baidu.com/item/Linux" target="_blank" rel="noopener noreferrer">Linux<ExternalLinkIcon/></a>、<a href="https://baike.baidu.com/item/Mac/173" target="_blank" rel="noopener noreferrer">Mac<ExternalLinkIcon/></a>、<a href="https://baike.baidu.com/item/Android/60243" target="_blank" rel="noopener noreferrer">Android<ExternalLinkIcon/></a>、<a href="https://baike.baidu.com/item/iOS/45705" target="_blank" rel="noopener noreferrer">iOS<ExternalLinkIcon/></a>等）。</p>
</li>
<li>
<p>JavaScript脚本语言同其他语言一样，有它自身的基本数据类型，表达式和<a href="https://baike.baidu.com/item/%E7%AE%97%E6%9C%AF%E8%BF%90%E7%AE%97%E7%AC%A6/9324947" target="_blank" rel="noopener noreferrer">算术运算符<ExternalLinkIcon/></a>及程序的基本程序框架。JavaScript提供了四种基本的数据类型和两种特殊数据类型用来处理数据和文字。而变量提供存放信息的地方，表达式则可以完成较复杂的信息处理。</p>
</li>
</ol>
<p><strong>特点</strong></p>
<ul>
<li><a href="https://baike.baidu.com/item/%E8%84%9A%E6%9C%AC%E8%AF%AD%E8%A8%80" target="_blank" rel="noopener noreferrer">脚本语言<ExternalLinkIcon/></a></li>
<li>基于对象</li>
<li>简单</li>
<li>动态性</li>
<li>跨平台性</li>
</ul>
<h2 id="基本语法" tabindex="-1"><a class="header-anchor" href="#基本语法" aria-hidden="true">#</a> 基本语法</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>alert():弹窗
document.write("xxx"):控制台生成
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>少用alert,会阻塞</p>
<h3 id="命名规则" tabindex="-1"><a class="header-anchor" href="#命名规则" aria-hidden="true">#</a> 命名规则</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>变量必须以字母开头
变量也能以 $ 和 _ 符号开头（不过我们不推荐这么做）
变量名称对大小写敏感（y 和 Y 是不同的变量）、
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="语法规则" tabindex="-1"><a class="header-anchor" href="#语法规则" aria-hidden="true">#</a> 语法规则</h3>
<p>输出</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>console.log()
console.err():输出错误
console。warn();弹出警告
var b=confirm("")弹框，是否确定，带有确定，取消
document.getElementById("demo").innerHTML="hello":js输出
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="跳转语法" tabindex="-1"><a class="header-anchor" href="#跳转语法" aria-hidden="true">#</a> 跳转语法</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>location.href="链接“：跳转到某一个页面
prompt("你是哪里人")带输入框的弹窗
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="数据类型" tabindex="-1"><a class="header-anchor" href="#数据类型" aria-hidden="true">#</a> 数据类型</h3>
<p><strong>值类型(基本类型)</strong>：字符串（String）、数字(Number)、布尔(Boolean)、对空（Null）、未定义（Undefined）、Symbol。</p>
<p><strong>引用数据类型</strong>：对象(Object)、数组(Array)、函数(Function)。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>typeof():查看类型
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>var length = 16;                                  // Number 通过数字字面量赋值
var points = x * 10;                              // Number 通过表达式字面量赋值
var lastName = "Johnson";                         // String 通过字符串字面量赋值
var cars = ["Saab", "Volvo", "BMW"];              // Array  通过数组字面量赋值
var person = {firstName:"John", lastName:"Doe"};  // Object 通过对象字面量赋值
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="数组定义与遍历" tabindex="-1"><a class="header-anchor" href="#数组定义与遍历" aria-hidden="true">#</a> 数组定义与遍历</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>var arr=new Array();
		arr[0]='张三';
		arr[1]='李四';
		arr[2]='王五';
		for(var i=0;i&lt;arr.length;i++){
			document.write(arr[i]+'&lt;br />')
		}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="对象" tabindex="-1"><a class="header-anchor" href="#对象" aria-hidden="true">#</a> 对象</h3>
<p>键值对通常写法为 <strong>name : value</strong> (键与值以冒号分割)。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>//定义对象
		var stu={
			username:'chen',
			password:'123456',
			id: 1,
			full:function(){
				return this.username+this.password
			}
		};
		document.write(stu.username)
		document.write(stu["password"]+"&lt;br />")
		document.write(stu.full())
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h3 id="变量声明" tabindex="-1"><a class="header-anchor" href="#变量声明" aria-hidden="true">#</a> 变量声明</h3>
<ul>
<li>JavaScript 变量的生命期从它们被声明的时间开始。</li>
<li>局部变量会在函数运行以后被删除。</li>
<li>全局变量会在页面关闭后被删除。</li>
</ul>
<h3 id="事件" tabindex="-1"><a class="header-anchor" href="#事件" aria-hidden="true">#</a> 事件</h3>
<p>HTML 事件可以是浏览器行为，也可以是用户行为。</p>
<p>以下是 HTML 事件的实例：</p>
<ul>
<li>HTML 页面完成加载</li>
<li>HTML input 字段改变时</li>
<li>HTML 按钮被点击</li>
</ul>
<table>
<thead>
<tr>
<th style="text-align:left">事件</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">onchange</td>
<td style="text-align:left">HTML 元素改变</td>
</tr>
<tr>
<td style="text-align:left">onclick</td>
<td style="text-align:left">用户点击 HTML 元素</td>
</tr>
<tr>
<td style="text-align:left">onmouseover</td>
<td style="text-align:left">用户在一个HTML元素上移动鼠标</td>
</tr>
<tr>
<td style="text-align:left">onmouseout</td>
<td style="text-align:left">用户从一个HTML元素上移开鼠标</td>
</tr>
<tr>
<td style="text-align:left">onkeydown</td>
<td style="text-align:left">用户按下键盘按键</td>
</tr>
<tr>
<td style="text-align:left">onload</td>
<td style="text-align:left">浏览器已完成页面的加载</td>
</tr>
</tbody>
</table>
<h3 id="字符串" tabindex="-1"><a class="header-anchor" href="#字符串" aria-hidden="true">#</a> 字符串</h3>
<p>字符串对象是一个object类型</p>
<p>不要创建 String 对象。它会拖慢执行速度，并可能产生其他副作用</p>
<p>=== 为绝对相等，即数据类型与值都必须相等。</p>
<p>条件运算符</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>variablename=(condition)?value1:value2voteable=(age&lt;18)?"年龄太小":"年龄已达到";
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>使用 constructor 属性来查看对象是否为数组 (包含字符串 &quot;Array&quot;):</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;p>判断是否为数组。&lt;/p>&lt;p id="demo">&lt;/p>&lt;script>var fruits = ["Banana", "Orange", "Apple", "Mango"];document.getElementById("demo").innerHTML = isArray(fruits);function isArray(myArray) {    return myArray.constructor.toString().indexOf("Array") > -1;}&lt;/script>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="作用域" tabindex="-1"><a class="header-anchor" href="#作用域" aria-hidden="true">#</a> 作用域</h3>
<p>如果在赋值操作时,没有声明变量,那么就会自动声明成全局变量并且进行赋值</p>
<p>闭包：当函数内部的变量被另外一个函数所引用，那么这个函数的变量将不会在执行完毕后销毁</p>
<h3 id="面向对象" tabindex="-1"><a class="header-anchor" href="#面向对象" aria-hidden="true">#</a> 面向对象</h3>
<p>对象存在堆中</p>
<p>构造函数创建对象</p>
<p>字面量创建对象：创建没有属性和方法的对象</p>
<p>student['name']：获取对象名</p>
<p>删除对象</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>delete.student.age
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>判断值是否在里面</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>'name' in studentt.hasOwnProperty('name')
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>栈里面放地址，堆里面放对象</p>
<h3 id="this关键字" tabindex="-1"><a class="header-anchor" href="#this关键字" aria-hidden="true">#</a> this关键字</h3>
<p>在调用函数每次都会向函数内部传递进一个隐含的参数，这个隐含的参数就是this , this指向的是一个对象</p>
<p>函数执行的上下文对象</p>
<p>函数是一个对象，保存的是内存地址</p>
<h3 id="类数组" tabindex="-1"><a class="header-anchor" href="#类数组" aria-hidden="true">#</a> 类数组</h3>
<p>arguments：获取传进来的参数，只在函数中使用，代表实参，是一个伪数组</p>
<hr/>
<h3 id="改变this的指向" tabindex="-1"><a class="header-anchor" href="#改变this的指向" aria-hidden="true">#</a> 改变this的指向</h3>
<h4 id="call-apply-通过call-apple可以使得在调用函数的时候修改this的指向" tabindex="-1"><a class="header-anchor" href="#call-apply-通过call-apple可以使得在调用函数的时候修改this的指向" aria-hidden="true">#</a> call/apply:通过call/apple可以使得在调用函数的时候修改this的指向</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>student.like.call(teacher,"唱","跳")student.like.apply(teacher,["唱","跳"])&lt;script type="text/javascript">		var student={			name:"chen",			like:function(){				console.log(this)				console.log(this.name+"喜欢打篮球")				for(var i=0;i&lt;arguments.length;i++){					console.log(this.name+arguments[i])				}			}		}		var teacher={			name:"chao"		}		var fn=student.like		//student.like() 		window.fn()		fn.call(teacher)		fn.apply(teacher)	&lt;/script>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="bind改变this指向" tabindex="-1"><a class="header-anchor" href="#bind改变this指向" aria-hidden="true">#</a> bind改变this指向</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>var student = {			name: "学生",			like: function() {				console.log(this.name + "喜欢打篮球")			}.bind(teacher)		}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="创建对象" tabindex="-1"><a class="header-anchor" href="#创建对象" aria-hidden="true">#</a> 创建对象</h3>
<h4 id="字面量方式" tabindex="-1"><a class="header-anchor" href="#字面量方式" aria-hidden="true">#</a> 字面量方式</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	var student = {			name: "小明",			age: 16,			school: "一中",			like: function() {				console.log(this.name + "喜欢打篮球")			}		}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="工厂模式" tabindex="-1"><a class="header-anchor" href="#工厂模式" aria-hidden="true">#</a> 工厂模式</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>function Student(name,age,likename) {			var student = {				name: name,				age: age,				school: "一中",				like: function() {					console.log(this.name + likename)				}			}			return student		}		var s1=Student("小红",18,"弹钢琴")		console.log(s1)		var s2=Student("小明",20,"打乒乓球")		console.log(s2)
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="构造函数创建对象" tabindex="-1"><a class="header-anchor" href="#构造函数创建对象" aria-hidden="true">#</a> 构造函数创建对象</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>var t1=new Teacher()
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="class创建对象" tabindex="-1"><a class="header-anchor" href="#class创建对象" aria-hidden="true">#</a> class创建对象</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>class Cat{		//定义构造函数		constructor(name,color,likename) {		    this.name=name;			this.color=color;			this.like=function(){				console.log(this.color+"的"+this.name+"喜欢"+likename)			}		}	}	var c1=new Cat("波斯猫","白色","毛球")	console.log(c1)
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>判断创建的对象是不是实例</p>
<p>instanceof</p>
<h3 id="原型prototype" tabindex="-1"><a class="header-anchor" href="#原型prototype" aria-hidden="true">#</a> 原型prototype</h3>
<hr>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;template>  &lt;div>    &lt;h1>天气&lt;/h1>    &lt;h2>城市：{{ city }}&lt;/h2>    &lt;h3>温度：{{ tmp }}℃&lt;/h3>    &lt;h3>天气状况：{{ cond }}&lt;/h3>    &lt;h3>风向：{{ wind }}&lt;/h3>    &lt;h3>天气指数：{{ brf }}&lt;/h3>    &lt;h3>更新时间：{{ time }}&lt;/h3>    &lt;router-link to="/about">进入about&lt;/router-link>  &lt;/div>&lt;/template>&lt;script>import axios from "axios";export default {  data() {    return {      city: null,      tmp: null,      wind: null,      cond: null,      brf: null,      time: null,    };  },  // 异步  async beforeMount() {    let key = "bd5c2bbed6ac44b9a504781e436299a8";    let httpUrl = `https://free-api.heweather.net/s6/weather/now?location=${this.$route.params.city}&amp;key=${key}`;    let res = await axios.get(httpUrl);    let data = res.data;    //this.city = data.HeWeather6[0].basic.location;    this.city = data.HeWeather6[0].basic.location;    this.cond = data.HeWeather6[0].now.cond_txt;    this.wind = data.HeWeather6[0].now.wind_dir;    this.tmp = data.HeWeather6[0].now.tmp;    this.time = data.HeWeather6[0].update.utc;    let url = `https://free-api.heweather.net/s6/weather/lifestyle?location=${this.$route.params.city}&amp;key=${key}`;    let res1 = await axios.get(url);    let data1 = res1.data;    this.brf = data1.HeWeather6[0].lifestyle[3].txt;    console.log(res1);    console.log(res);    //console.log(res);    //console.log(this.$route)  },};&lt;/script>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h1 id="es6" tabindex="-1"><a class="header-anchor" href="#es6" aria-hidden="true">#</a> ES6</h1>
<p>let和const解决了var变量穿透的问题，常量修改的问题</p>
<p>箭头函数规律</p>
<ul>
<li>去掉function</li>
<li>在括号后面加箭头</li>
<li>如果逻辑代码仅有return可以直接省去。(如果你逻辑体，你就不能省略)</li>
<li>如果参数只有一个，可以把括号也省去</li>
</ul>
<p>es6简写</p>
<ul>
<li>因为对象是key : value存在</li>
<li>如果key和变量的名字一致，可以指定义一次即可</li>
<li>如果value是一个函数，可以把‘<code>:function</code>去不去掉，只剩下()即可</li>
</ul>
<p>es6对象结构-其实就快速获取属性和方法的方式一种形式</p>
<p>map自带循环，并且会把处理的值回填对应的位置</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;script>        var arr=[1,2,3,4,5,6]        //map自带循环        var newArr=arr.map(function(el){            return el*2        })        console.log(newArr)    &lt;/script>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>npm : node package manager ,node包管理器</p>
<p>作用:</p>
<ul>
<li>快速构建nodejs工程   npm init</li>
<li>快速安装和依赖第三个模块</li>
</ul>
<p>npm install -g cnpm --registry=https://registry.npm.taobao.org</p>
<p>指定版本：npm install vue@3.0.2</p>
<p>卸载：npm uninstall  xxx</p>
<p>切换es5步骤</p>
<ul>
<li>安装babel:npm install -g babel-cli</li>
<li>查看版本号：babel --version</li>
<li>安装babel转换器：cnpm install --save-dev babel-preset-es2015</li>
<li>执行：babel src -d dist</li>
</ul>
<h2 id="commons-js规范" tabindex="-1"><a class="header-anchor" href="#commons-js规范" aria-hidden="true">#</a> Commons js规范</h2>
<p>导入工具类</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>//工具类const sum=function(a,b){    return a+b}const sub=function(a,b){    return a-b}const mul=function(a,b){    return a*b}const div=function(a,b){    return a/b}//导出给别人用module.exports={sum:sum,sub:sub,mul:mul,div:div}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>测试</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>const m=require("./四则运算.js")console.log(m.sum(1,2))
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="es6-1" tabindex="-1"><a class="header-anchor" href="#es6-1" aria-hidden="true">#</a> es6</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>export default {    getList() {        console.log('获取数据列表2')    },    save() {        console.log('保存数据2')    }}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>测试</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>import user from "./userApi2.js"user.getList()user.save()
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="什么是webpack" tabindex="-1"><a class="header-anchor" href="#什么是webpack" aria-hidden="true">#</a> 什么是Webpack</h2>
<p>Webpack 是一个前端资源加载/打包工具。它将根据模块的依赖关系进行静态分析，然后将这些模块按照指定的规则生成对应的静态资源。</p>
<p>js打包</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>const path = require("path"); //Node.js内置模块module.exports = {    entry: './src/main.js', //配置入口文件    output: {        path: path.resolve(__dirname, './dist'), //输出路径，__dirname：当前文件所在路径        filename: 'bundle.js' //输出文件    }}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>指令：webpack -w:监听</p>
<p>webpack -h:帮助</p>
<p>webpack.config.js</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>//导入path目录const path=require('path')//定义json打包规则module.exports={    entry:"./src/main.js",    output: {        path:path.resolve(__dirname,"./dist"),        filename:'bundle.js'    },    module: {        rules: [              {                  test: /\.css$/,    //打包规则应用到以css结尾的文件上                use: ['style-loader', 'css-loader']            }          ]      }}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></template>
