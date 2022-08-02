<template><h1 id="前端汇总" tabindex="-1"><a class="header-anchor" href="#前端汇总" aria-hidden="true">#</a> 前端汇总</h1>
<h2 id="html" tabindex="-1"><a class="header-anchor" href="#html" aria-hidden="true">#</a> HTML</h2>
<h3 id="超文本标记语言-超越文本" tabindex="-1"><a class="header-anchor" href="#超文本标记语言-超越文本" aria-hidden="true">#</a> 超文本标记语言（超越文本）</h3>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>网页 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">></span></span>                          主体 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>                               头部 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
网页标题 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>                        段落 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>                                字体 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>font</span><span class="token punctuation">></span></span>
换行 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>                          图片 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token punctuation">/></span></span>                            水平线 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hr</span> <span class="token punctuation">/></span></span>
超链接 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span><span class="token punctuation">></span></span>                           文本标题<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span> --- <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h6</span><span class="token punctuation">></span></span>                     预格式 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>pre</span><span class="token punctuation">></span></span>
无序列表 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>                    有序列表 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol</span><span class="token punctuation">></span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>             定义列表 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dl</span><span class="token punctuation">></span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dt</span><span class="token punctuation">></span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dd</span><span class="token punctuation">></span></span>
空格 <span class="token entity named-entity" title="&nbsp;">&amp;nbsp;</span>                          左尖括号 <span class="token entity named-entity" title="&lt;">&amp;lt;</span>                             右尖括号 <span class="token entity named-entity" title="&gt;">&amp;gt;</span>
表格 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>table</span><span class="token punctuation">></span></span>                         行 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">></span></span>                                   单元格 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">></span></span>
背景颜色 bgcolor                      背景图片 background                        边框 border
宽度 width                            高度height                                颜色 color
图片路径 src                           图片提示字 title                 图片加载失败提示字 alt
字体大小 size                         字体样式 face                           水平对齐 align
链接地址 href                         链接方式 target                      列表符号类型 type
单元格外边距 cellspacing               单元格内边距 cellpadding          单元格垂直对齐 valign
跨行 rowspan                          跨列 colspan


表格标题 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>caption</span><span class="token punctuation">></span></span>                   表格表头<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">></span></span>                        表格分段头部 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>thead</span><span class="token punctuation">></span></span>
表格分段主体 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tbody</span><span class="token punctuation">></span></span>                 表格分段尾部 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tfoot</span><span class="token punctuation">></span></span>                         表单 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span><span class="token punctuation">></span></span>
表单控件 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span><span class="token punctuation">></span></span>                    下拉列表 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span><span class="token punctuation">></span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span><span class="token punctuation">></span></span>             文本域 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>textarea</span><span class="token punctuation">></span></span> 
框架集 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>frameset</span><span class="token punctuation">></span></span>                   子框架 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>frame</span><span class="token punctuation">></span></span>                         内嵌框架 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>iframe</span><span class="token punctuation">></span></span>
表单提交目的地 action                 表单提交方式 method                        控件类型 type
表单最大输入字符 maxlength             控件默认值 value                           文本框 text
密码框 password                      重置 reset                                  提交submit
隐藏域 hidden                        多选框 checkbox                           单选框 radio 
文件上传 file                        普通按钮 button                       图片提交按钮 image
只读 readonly                       下拉默认选中 selected             单选多选默认选中 checked
框架滚动条 scrolling                  框架边框 frameborder               框架固定大小 noresize
框架名 name     

内部样式标签 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br></div></div><p>head标签一般用于说明一些信息，不直接显示在页面上</p>
<p>body标签一般页面内容，直接显示在页面上</p>
<p>flex弹性布局</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>ul>li{xxx$}*5(快捷tab)
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>div标签：容器标签</p>
<p>自定义没有默认样式</p>
<h3 id="表单标签" tabindex="-1"><a class="header-anchor" href="#表单标签" aria-hidden="true">#</a> <strong>表单标签</strong></h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>form表单  action:将表单数据提交到什么地址
提交的方法：get post
get提交方法将数据提交到链接地址上，不安全，效率高  例如：搜素数据
post提交方法将数据放置到请求的body里面，不直接显示，效率低，可以提交表单数据比较大，例如 登录表单
定义输入标签类型：type
提交数据名称：name
提交数据的输入框的值：value
预置文字：placeholder
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;form action="https://www.baidu.com/s" method="get">
			&lt;input type="text" name="wd" placeholder="请输入要搜素的名称" id="" value="" />
			&lt;input type="submit"  value="搜素" />
&lt;/form>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="滤镜" tabindex="-1"><a class="header-anchor" href="#滤镜" aria-hidden="true">#</a> 滤镜</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>居中操作：img{
width: 400px; 
height: auto;
display: block;
margin: 0 auto;
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>utf-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text/css<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
			<span class="token selector">img</span> <span class="token punctuation">{</span>
				<span class="token property">width</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
				<span class="token property">height</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
				<span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
				<span class="token property">margin</span><span class="token punctuation">:</span> 0 auto<span class="token punctuation">;</span>
				<span class="token property">transition</span><span class="token punctuation">:</span> all 3s<span class="token punctuation">;</span>
			<span class="token punctuation">}</span>

			<span class="token comment">/* 鼠标悬浮 */</span>
			<span class="token selector">img:hover</span> <span class="token punctuation">{</span>
				<span class="token property">-webkit-filter</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
			<span class="token punctuation">}</span>

			<span class="token selector">.img1</span> <span class="token punctuation">{</span>
				<span class="token comment">/* 滤镜属性
				设置灰度  1是百分之百灰 0是正常  3秒过渡  2 曝光
				*/</span>
				<span class="token property">-webkit-filter</span><span class="token punctuation">:</span> <span class="token function">grayscale</span><span class="token punctuation">(</span>1<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>


			<span class="token selector">.img2</span> <span class="token punctuation">{</span>
				<span class="token comment">/* 滤镜属性
				亮度
				*/</span>
				<span class="token property">-webkit-filter</span><span class="token punctuation">:</span> <span class="token function">brightness</span><span class="token punctuation">(</span>0.5<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>

			<span class="token selector">.img3</span> <span class="token punctuation">{</span>

				<span class="token comment">/* 褐色属性 
				0是正常
				1是百分之百褐色
				*/</span>
				<span class="token property">-webkit-filter</span><span class="token punctuation">:</span> <span class="token function">sepia</span><span class="token punctuation">(</span>1<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>

			<span class="token selector">.img4</span> <span class="token punctuation">{</span>
				<span class="token comment">/* 模糊度
				blur
				*/</span>
				<span class="token property">-webkit-filter</span><span class="token punctuation">:</span> <span class="token function">blur</span><span class="token punctuation">(</span>5px<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>


			<span class="token selector">.img5</span> <span class="token punctuation">{</span>
				<span class="token comment">/* 对比度 、
				1正常
				0,没有任何对比度 灰色
				*/</span>
				<span class="token property">-webkit-filter</span><span class="token punctuation">:</span> <span class="token function">contrast</span><span class="token punctuation">(</span>0.5<span class="token punctuation">)</span><span class="token punctuation">;</span>

			<span class="token punctuation">}</span>

			<span class="token selector">.img6</span> <span class="token punctuation">{</span>
				<span class="token comment">/* 
			 饱和度
			 0变灰
			 */</span>
				<span class="token property">-webkit-filter</span><span class="token punctuation">:</span> <span class="token function">saturate</span><span class="token punctuation">(</span>2<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>

			<span class="token selector">.img7</span> <span class="token punctuation">{</span>
				<span class="token comment">/* 反相 胶片底色
			*/</span>
				<span class="token property">-webkit-filter</span><span class="token punctuation">:</span> <span class="token function">invert</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>

			<span class="token selector">.img8</span> <span class="token punctuation">{</span>
				<span class="token comment">/* 
			 色相旋转360度
			 */</span>
				<span class="token property">-webkit-filter</span><span class="token punctuation">:</span> <span class="token function">hue-rotate</span><span class="token punctuation">(</span>0deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>

			<span class="token selector">.img9</span> <span class="token punctuation">{</span>
				<span class="token property">-webkit-filter</span><span class="token punctuation">:</span> <span class="token function">blur</span><span class="token punctuation">(</span>10px<span class="token punctuation">)</span> <span class="token function">brightness</span><span class="token punctuation">(</span>20<span class="token punctuation">)</span> <span class="token function">grayscale</span><span class="token punctuation">(</span>1<span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token property">transition</span><span class="token punctuation">:</span> all 15s<span class="token punctuation">;</span>
			<span class="token punctuation">}</span>

			<span class="token selector">.img9:hover</span> <span class="token punctuation">{</span>
				<span class="token property">-webkit-filter</span><span class="token punctuation">:</span> <span class="token function">blur</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span> <span class="token punctuation">(</span>1<span class="token punctuation">)</span> <span class="token function">grayscale</span><span class="token punctuation">(</span>1<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>


	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>img1<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>img/jjy.jpg<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>img2<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>img/jjy.jpg<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>img3<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>img/jjy.jpg<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>img4<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>img/jjy.jpg<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>img5<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>img/jjy.jpg<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>img6<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>img/jjy.jpg<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>img7<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>img/jjy.jpg<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>img8<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>img/jjy.jpg<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>img9<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>img/jjy.jpg<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br></div></div><h2 id="css样式" tabindex="-1"><a class="header-anchor" href="#css样式" aria-hidden="true">#</a> CSS样式</h2>
<p>锚记点</p>
<p>定义<a href="#name"></a></p>
<p><a href="top"></a></p>
<ul>
<li>锚记</li>
<li>发邮件</li>
<li>页面跳转</li>
</ul>
<p>盒子模型</p>
<p>margin</p>
<p>padding</p>
<p>border</p>
<p>标签选择器</p>
<p>id选择器：只针对页面当中某一个元素进行修改</p>
<p>类选择器：只针对页面中一些控件，不规定是同一类型的，且需设置为同一样式的</p>
<p>组合选择器：以逗号进行分割，可以自由组合</p>
<ul>
<li>头部样式</li>
<li>外联样式</li>
<li>内嵌样式</li>
</ul>
<p>设置样式的3种方法(层叠样式表)就近原则</p>
<ol>
<li>
<p>通过syle标签设置样式</p>
</li>
<li>
<p>通过style属性设置样式(优先级最高)</p>
</li>
<li>
<p>通过css文件设置样式</p>
<p>注意：谁在后面优先级高，id比class优先级高 继承的样式&lt;浏览器模式的样式&lt;标签样式&lt;class&lt;id&lt;style属性里的样式</p>
<p>提高优先级：!important</p>
</li>
</ol>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>.d1{
	color: pink;
	font-size: 100px;
}

body .d1{
	color: #FFC0CB;
}
div.d1{
	color: #FFC0CB;
}既是div又是class
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="属性选择器" tabindex="-1"><a class="header-anchor" href="#属性选择器" aria-hidden="true">#</a> 属性选择器</h3>
<p>属性名称：单独选择某个属性</p>
<p>[属性名称=属性值]：选择这个属性具体的某个值的元素</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;!DOCTYPE html>
&lt;html>
	&lt;head>
		&lt;meta charset="utf-8">
		&lt;title>&lt;/title>
		&lt;style type="text/css">
			[data-src]{
				width: 200px;
				height: 200px;
				background: #FFC0CB;
			}
			[data-src="a"]{
				border: 1px solid aquamarine;
			}
		&lt;/style>
	&lt;/head>
	&lt;body>
		&lt;div>&lt;/div>
		&lt;div>&lt;/div>
		&lt;div>&lt;/div>
		&lt;!-- 自定义属性 -->
		&lt;div data-src="a">&lt;/div>
		&lt;div data-src="b">&lt;/div>
	&lt;/body>
&lt;/html>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><h3 id="子元素选择器" tabindex="-1"><a class="header-anchor" href="#子元素选择器" aria-hidden="true">#</a> 子元素选择器</h3>
<p>第几个元素语法</p>
<p>元素：nth-child()</p>
<p>最后一个元素语法</p>
<p>元素：last-child</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;!DOCTYPE html>&lt;html>	&lt;head>		&lt;meta charset="utf-8">		&lt;title>&lt;/title>		&lt;!-- &lt;style type="text/css">		/* 选中第二个元素 */			li:nth-child(2){				background: #FFC0CB;			}			/* 选中最后一个子元素 */			li:last-child{				background: #7FFFD4;			}		&lt;/style> -->						&lt;style type="text/css">				/* 继承 */			/* .parent div{				width: 200px;				height: 200px;				background: #FFC0CB;			} */						/* 直接子元素 */			.parent>div{				width: 200px;				height: 200px;				background: #FFC0CB;			}		&lt;/style>	&lt;body>	&lt;/head>		&lt;ul>			&lt;li>新闻内容1&lt;/li>			&lt;li>新闻内容2&lt;/li>			&lt;li>新闻内容3&lt;/li>			&lt;li>新闻内容4&lt;/li>			&lt;li>新闻内容5&lt;/li>		&lt;/ul>		&lt;div class="parent">			&lt;div class="child">				&lt;div class="suzi">&lt;/div>			&lt;/div>		&lt;/div>	&lt;/body>&lt;/html>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;!DOCTYPE html>&lt;html>	&lt;head>		&lt;meta charset="utf-8">		&lt;title>&lt;/title>		&lt;style type="text/css">		/* 选中后面的元素 */			.n+div{				width: 200px;				height: 200px;				background: #FFC0CB;				color: #7FFFD4;			}		&lt;/style>	&lt;/head>	&lt;body>		&lt;div>&lt;/div>		&lt;div>&lt;/div>		&lt;div class="n">&lt;/div>		&lt;div>helloworld&lt;/div>		&lt;div>helloworld&lt;/div>	&lt;/body>&lt;/html>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="伪元素" tabindex="-1"><a class="header-anchor" href="#伪元素" aria-hidden="true">#</a> 伪元素</h3>
<p>:before:在元素内部创建一个最前面假的子元素</p>
<p>:after：在元素内部最后面创建一个假的子元素</p>
<p>行元素没有宽高</p>
<p>创建伪元素content必须写</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;!DOCTYPE html>&lt;html>	&lt;head>		&lt;meta charset="utf-8">		&lt;title>&lt;/title>		&lt;style type="text/css">			#id1 {				width: 0;				height: 0;				/* background: gainsboro; */				/* border: 20px solid #7FFFD4; */				border-top: 40px solid transparent;				border-bottom: 40px solid transparent;				border-left: 40px solid yellowgreen;				border-right: 40px solid transparent;			}			.chat {				width: 400px;				line-height: 100px;				padding: 30px;				font-size: 30px;				background: greenyellow;				margin: 0 auto;				border-radius: 30px;				position: relative;			}			.chat:before {				content: "";				display: inline-block;				width: 0px;				height: 0px;								border-top: 40px solid transparent;				border-bottom: 40px solid transparent;				border-left: 80px solid transparent;				border-right: 80px solid greenyellow;				position: absolute;				left: -160px;				top: 40px;			}			.chat:after {				content: "";			}		&lt;/style>	&lt;/head>	&lt;body>		&lt;div id="id1">		&lt;/div>		&lt;div class="chat">吃饭&lt;/div>	&lt;/body>&lt;/html>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>效果图：</p>
<h3 id="浮动" tabindex="-1"><a class="header-anchor" href="#浮动" aria-hidden="true">#</a> 浮动</h3>
<ul>
<li>可以解决文字包围图片的问题</li>
<li>可以解决莫名其妙的间隔问题</li>
<li>浮动可以解决向左，向右进行排版对齐</li>
</ul>
<p>浮动：可以设置元素，脱离正常的文档流，或者向左向右，靠近父元素的边缘或者是设置了浮动的其他元素的边缘靠拢</p>
<p>浮动高度塌陷问题</p>
<p>解决方法</p>
<ol>
<li>设定父元素高度</li>
<li>清除左右浮动：clear:both</li>
<li>伪元素清除浮动</li>
</ol>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;!DOCTYPE html>&lt;html>	&lt;head>		&lt;meta charset="utf-8">		&lt;title>&lt;/title>		&lt;style type="text/css">			.parent{				width: 600px;				/* height: 600px; */				margin: 0 auto;				background: lightgreen;				/* font-size: 0; */			}			.child{				display: inline-block;				width: 200px;				height: 200px;				background: #7FFFD4;				float: left;			}			/* .clear{				clear: both;			} */			.clear:after{				content: "";				display: block;				clear: both;							}		&lt;/style>			&lt;/head>	&lt;body>				&lt;div class="parent clear">			&lt;div class="child">&lt;/div>			&lt;div class="child">&lt;/div>			&lt;div class="child">&lt;/div>			&lt;!-- &lt;div class="clear">&lt;/div> -->					&lt;/div>		&lt;p>helloworld&lt;/p>	&lt;/body>&lt;/html>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>效果</p>
<p>box-shadow属性接收一个由5个参数组成的值，每个值的意思如下：</p>
<ul>
<li>h-shadow: 水平阴影的位置</li>
<li>v-shadow:垂直阴影的位置</li>
<li>blur：模糊距离</li>
<li>spread：阴影的尺寸</li>
<li>color：阴影的颜色</li>
</ul>
<h3 id="文字属性" tabindex="-1"><a class="header-anchor" href="#文字属性" aria-hidden="true">#</a> 文字属性</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>font-size:字体大小font-family：字体类型font-weight：字体粗细（100~900）color：字体颜色text-aligntext-align:字体排布（默认向左）line-height:文字行高text-shadow:文字阴影  水平偏移距  垂直偏移距 模糊度 阴影颜色
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="过渡动画" tabindex="-1"><a class="header-anchor" href="#过渡动画" aria-hidden="true">#</a> 过渡动画</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>transition-property: width;：过渡属性transition-duration: ;：过渡周期transition-timing-function: ease;：整个过渡动画变化的速度 默认值从慢到快在慢下来  linear(平均速度) transition-delay:设置延迟时间
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;!DOCTYPE html>&lt;html>	&lt;head>		&lt;meta charset="utf-8">		&lt;title>&lt;/title>				&lt;style type="text/css">			.d1{				width: 200px;				height: 100px;				background: #90EE90;				/* transition: width 2s; */				transition-property: width,background-color;				transition-duration: 2s,10s;				transition-timing-function: ease;				/* transition-delay: 3s; */			}						.d1:hover{				width: 800px;				height: 100px;				background: pink;			}					&lt;/style> 	&lt;/head>	&lt;body>		&lt;div class="d1">			&lt;/div>	&lt;/body>&lt;/html>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="转换" tabindex="-1"><a class="header-anchor" href="#转换" aria-hidden="true">#</a> 转换</h3>
<p>2D动画</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>transform: translate();：移动transform: rotate(30deg);：旋转perspective: 100px;：透明度
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;!DOCTYPE html>&lt;html>	&lt;head>		&lt;meta charset="utf-8">		&lt;title>&lt;/title>		&lt;link rel="stylesheet" type="text/css" href="css/style.css"/>		&lt;style type="text/css">						img{						transition: all 3s;		}		img:hover{			-webkit-filter: none;		}				.img1{			-webkit-filter: blur(1px);;		}						.img2{			-webkit-filter: contrast(1);		}						body{			perspective: 1000px;/* 			background: pink; */								}		.lifang:hover{			transform: rotate3d(1,1,1,720deg);				}			.lifang{				width: 200px;				height: 200px;				margin: 250px auto;				position: relative;				/* 保留3d */				transform-style: preserve-3d;					transition: all 8s;					animation: rotate linear 10s infinite;								}												@-webkit-keyframes rotate {              			        from {			            transform: rotateX(0deg) rotateY(0deg);			        }			        to {			            transform: rotateX(360deg) rotateY(360deg);			        }			    }									.page{				width: 200px;				height: 200px;				position: absolute;				left: 0;				top: 0;				/* 设置透明度 */				opacity: 0.9;			}						.front{			background-image: url(img/img6.jpg);				background-size: 100% auto ;				transform: translateZ(100px);			}						.back{			background-image: url(img/img2.jpg);				background-size: 100% auto;				transform: translateZ(-100px);			}			.right{			background-image: url(img/img.jpg);				background-size:auto 100% ;				transform: rotateY(90deg) translateZ(100px);			}			.left{			background-image: url(img/img3.jpg);				background-size: 100% auto;				transform: rotateY(-90deg) translateZ(100px);			}			.top{			background-image: url(img/img5.jpg);				background-size: 100% auto;				transform: rotateX(90deg) translateZ(100px);			}			.bottom{			background-image: url(img/img4.jpg);				background-size: 100% auto;				transform: rotateX(-90deg) translateZ(100px);			}		&lt;/style>	&lt;/head>	&lt;body>		&lt;section class="showcase">			&lt;div class="video-container">				&lt;video src="img/video.mov" autoplay muted loop>&lt;/video>			 		   	&lt;!-- &lt;a href="https://baike.baidu.com/item/%E5%91%A8%E6%9D%B0%E4%BC%A6/129156?fr=aladdin">	&lt;img  class="img2" src="img/zjl.jpg" style="width: 32%; height: auto; float: left; " />&lt;/a>		&lt;a href="https://baike.baidu.com/item/%E8%94%A1%E5%BE%90%E5%9D%A4/8511458?fr=aladdin">&lt;img class="img1" src="img/cxk2.jpg" style="float: right; width: 29%; height: auto;"/>&lt;/a> -->		&lt;!-- &lt;img class="img3" src="img/pyy.jpg" style="width: 32%; height: auto; margin-left:100px;"/> -->		&lt;div class="lifang">			&lt;div class="page front">&lt;/div>			&lt;div class="page back">&lt;/div>			&lt;div class="page left">&lt;/div>			&lt;div class="page right">&lt;/div>			&lt;div class="page top">&lt;/div>			&lt;div class="page bottom">&lt;/div>					&lt;/div>				&lt;/div>					&lt;/section>			&lt;/body>&lt;/html>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>效果</p>
<p>margin顺序：上右下左</p>
<h3 id="输入框" tabindex="-1"><a class="header-anchor" href="#输入框" aria-hidden="true">#</a> 输入框</h3>
<p>同一个选项name要相同，name值相同为同一选项，只有一个内容会被选中</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>radio：单选框checkbox:复选框label：可绑定选项框id hidden:隐藏输入框html{ overflow-x:hidden; overflow-y:hidden;}：去滚动条
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="定位" tabindex="-1"><a class="header-anchor" href="#定位" aria-hidden="true">#</a> 定位</h3>
<ol>
<li>
<p>固定定位（根据浏览器的位置进行定位,会脱离正常的文档流，必须配合left，right，top，bottom才能定位到浏览器具体位置上）fixed</p>
</li>
<li>
<p>相对定位（相对于自己当前的位置,不会脱离文档流）relative</p>
<p>注：left就是以左边作为参考系，向右走，以此类推</p>
</li>
<li>
<p>默认定位（默认情况，不做定位）</p>
</li>
<li>
<p>绝对定位（相对于设置了父元素或祖先元素进行定位，会脱离正常的文档流）absolute</p>
</li>
<li>
<p>粘性定位新出模式，一般不兼容）sticky</p>
</li>
</ol>
<h3 id="动画" tabindex="-1"><a class="header-anchor" href="#动画" aria-hidden="true">#</a> 动画</h3>
<p>关键字：animation</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>animation-name:动画名称animation-duration：动画周期animation-timing-function：速度  默认ease 线性linear 也可以设置贝塞尔曲线 ease-in ease-outanimation-delay:延迟时间animation-iteration-count: 3 ;循环次数  无限次：infiniteanimation-direction:模式，方向 默认值:normal    奇数次正常运动，偶数次反方向：alternate    反方向：reverse偶数次正常运动，奇数次反方向alternate-reverseanimation-fill-mode: forwards;让动画保留最后一帧的效果animation: lxw 2s steps(16) infinite;一步一步
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>.id1{				width: 200px;				height: 200px;				background: skyblue;				animation: donghua1 3s; 			}						@keyframes donghua1{				/* from{}				to{} */				0%{					transform: translate(0,0);									}				33.3%{					transform: translate(500px,0);				}				100%{					transform: translate(500px,400px);				}			}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="字体图标" tabindex="-1"><a class="header-anchor" href="#字体图标" aria-hidden="true">#</a> 字体图标</h3>
<p>优点:占用带宽小，不会失真，可以随意调节字体大小和颜色。</p>
<p>图片:比较占用带宽，放大有可能会产生失真的效果，图片改变颜色不方便。</p>
<p><code>Unicode </code>是字体在网页端最原始的应用方式，特点是：</p>
<ul>
<li>支持按字体的方式去动态调整图标大小，颜色等等。</li>
<li>默认情况下不支持多色，直接添加多色图标会自动去色。</li>
</ul>
<blockquote>
<p>注意：新版 iconfont 支持两种方式引用多色图标：SVG symbol 引用方式和彩色字体图标模式。（使用彩色字体图标需要在「编辑项目」中开启「彩色」选项后并重新生成。）</p>
</blockquote>
<p>第一步：拷贝项目下面生成的 <code>@font-face</code></p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token atrule"><span class="token rule">@font-face</span></span> <span class="token punctuation">{</span>  <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">'iconfont'</span><span class="token punctuation">;</span>  <span class="token property">src</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">'iconfont.woff2?t=1631457828849'</span><span class="token punctuation">)</span></span> <span class="token function">format</span><span class="token punctuation">(</span><span class="token string">'woff2'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>       <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">'iconfont.woff?t=1631457828849'</span><span class="token punctuation">)</span></span> <span class="token function">format</span><span class="token punctuation">(</span><span class="token string">'woff'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>       <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">'iconfont.ttf?t=1631457828849'</span><span class="token punctuation">)</span></span> <span class="token function">format</span><span class="token punctuation">(</span><span class="token string">'truetype'</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>第二步：定义使用 iconfont 的样式</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.iconfont</span> <span class="token punctuation">{</span>  <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">"iconfont"</span> <span class="token important">!important</span><span class="token punctuation">;</span>  <span class="token property">font-size</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>  <span class="token property">font-style</span><span class="token punctuation">:</span> normal<span class="token punctuation">;</span>  <span class="token property">-webkit-font-smoothing</span><span class="token punctuation">:</span> antialiased<span class="token punctuation">;</span>  <span class="token property">-moz-osx-font-smoothing</span><span class="token punctuation">:</span> grayscale<span class="token punctuation">;</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>第三步：挑选相应图标并获取字体编码，应用于页面</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>iconfont<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token entity" title="&#x33;">&amp;#x33;</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><blockquote>
<p>&quot;iconfont&quot; 是你项目下的 font-family。可以通过编辑项目查看，默认是 &quot;iconfont&quot;。</p>
</blockquote>
<p>兼容性支持IE6以上</p>
<p><code>font-class</code> 引用</p>
<p>font-class 是 Unicode 使用方式的一种变种，主要是解决 Unicode 书写不直观，语意不明确的问题。</p>
<p>与 Unicode 使用方式相比，具有如下特点：</p>
<ul>
<li>相比于 Unicode 语意明确，书写更直观。可以很容易分辨这个 icon 是什么。</li>
<li>因为使用 class 来定义图标，所以当要替换图标时，只需要修改 class 里面的 Unicode 引用。</li>
</ul>
<p>使用步骤如下：</p>
<p>第一步：引入项目下面生成的 fontclass 代码：</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>./iconfont.css<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>第二步：挑选相应图标并获取类名，应用于页面：</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>iconfont icon-xxx<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>兼容性IE8以上   含有伪元素</p>
<p><code>Symbol</code> 引用</p>
<p>这是一种全新的使用方式，应该说这才是未来的主流，也是平台目前推荐的用法。相关介绍可以参考这篇<a href="">文章</a> 这种用法其实是做了一个 SVG 的集合，与另外两种相比具有如下特点：</p>
<ul>
<li>支持多色图标了，不再受单色限制。</li>
<li>通过一些技巧，支持像字体那样，通过 <code>font-size</code>, <code>color</code> 来调整样式。</li>
<li>兼容性较差，支持 IE9+，及现代浏览器。</li>
<li>浏览器渲染 SVG 的性能一般，还不如 png。</li>
</ul>
<p>使用步骤如下：</p>
<p>第一步：引入项目下面生成的 symbol 代码：</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>./iconfont.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>第二步：加入通用 CSS 代码（引入一次就行）：</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css"><span class="token selector">.icon</span> <span class="token punctuation">{</span>  <span class="token property">width</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span>  <span class="token property">height</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span>  <span class="token property">vertical-align</span><span class="token punctuation">:</span> -0.15em<span class="token punctuation">;</span>  <span class="token property">fill</span><span class="token punctuation">:</span> currentColor<span class="token punctuation">;</span>  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span><span class="token punctuation">}</span></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>第三步：挑选相应图标并获取类名，应用于页面：</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>icon<span class="token punctuation">"</span></span> <span class="token attr-name">aria-hidden</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>use</span> <span class="token attr-name"><span class="token namespace">xlink:</span>href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#icon-xxx<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>use</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>兼容性IE9以上</p>
<h3 id="弹性布局" tabindex="-1"><a class="header-anchor" href="#弹性布局" aria-hidden="true">#</a> 弹性布局</h3>
<p>弹性容器：设置了display：flex这个元素为弹性容器，里面的子元素会按照弹性布局的方式进行布局</p>
<p>弹性子元素：设置了display：flex这个元素为弹性容器的直接子元素</p>
<p>弹性主轴方向：默认主轴方向从左到右：flex-direction: row;行    按比例压缩</p>
<p><strong>主轴</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>flex-direction：row:从左到右column :从上到下row-reverse:从右到左column-reverse:从下到上
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>主轴内容分布</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>flex-start:向主轴的开始位置靠拢center:居中justify-content: flex-end;向结束位置靠拢justify-content: space-around;平均分布 两边有间距，是中间的一半justify-content: space-between;平均分布，两边没有间距justify-content: space-evenly;平均分布，两边和中间间距一样
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>侧轴内容分布</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>align-items: flex-start;向侧轴的开始位置靠拢align-items: stretch;默认值 拉伸  如果设置高度，此拉伸无效
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>弹性换行</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>flex-wrap: nowrap;默认不换行align-content: flex-start;侧轴多行分布
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>排序问题</p>
<p>使用order number 默认从小到大  设置在子元素上</p>
<p>单独设置子元素侧轴的排布</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>align-self: center;子元素居中
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="移动端响应式" tabindex="-1"><a class="header-anchor" href="#移动端响应式" aria-hidden="true">#</a> 移动端响应式</h3>
<p>媒体查询</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>设定小于600px时的样式@media only screen and (max-width:600px) {				.d1{					width: 100%;				}			}	@media only screen and (min-width:600px) and (max-width:1200px){				.d1{					width: 50%;					background: pink;				}			}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>vw:viewport width:100vw=100%viewport width
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>margin：<code>上左下右</code></p>
<h1 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h1>
<h2 id="单位" tabindex="-1"><a class="header-anchor" href="#单位" aria-hidden="true">#</a> 单位</h2>
<p>浏览器默认像素16px</p>
<p>px:像素单位</p>
<p>em:相对单位  2em=2*16px 相对于父元素的字体单位</p>
<p>rem:相对单位，相对于根（html）</p>
<p>vw:视窗的宽度  viewport  百分比宽度度  100vw</p>
<p>vh:视窗高度     viewport    百分比高度  100vh</p>
</template>
