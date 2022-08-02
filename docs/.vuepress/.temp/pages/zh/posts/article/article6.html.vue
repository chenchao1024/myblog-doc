<template><h1 id="网站跨域问题解决方法" tabindex="-1"><a class="header-anchor" href="#网站跨域问题解决方法" aria-hidden="true">#</a> 网站跨域问题解决方法</h1>
<h2 id="网站结构-web系统开发" tabindex="-1"><a class="header-anchor" href="#网站结构-web系统开发" aria-hidden="true">#</a> 网站结构  web系统开发</h2>
<p>数据库访问层</p>
<p>业务逻辑层</p>
<p>控制层 控制页面跳转</p>
<p>微服务架构模式 专业的人做专业的事</p>
<p>前后端分离</p>
<p>前端------前端工程师  vue</p>
<p>后端------后端工程师  Go java php c#   调用接口</p>
<p>跨域问题是浏览器的一种安全策略,访问需要遵循同源策略:</p>
<p>发生了跨域的问题---可以请求到后端，但是无法获取到响应的结果</p>
<hr>
<h2 id="同源策略" tabindex="-1"><a class="header-anchor" href="#同源策略" aria-hidden="true">#</a> 同源策略</h2>
<p>浏览器访问的地址:协议://ip:端口;</p>
<p>在该页面中 访问ajax请求协议://ip:端口;必须要与我们浏览器所访问的协议://ip:端口;</p>
<p>如果不一致的话，则会发生跨域的问题―浏览器触发保护机制获取不到该请求的响应结果</p>
<p>跨域的情况</p>
<ol>
<li>
<p>浏览器访问地址不一样</p>
<p>http://www.xxx.com</p>
<p>http://127.0.0.1</p>
</li>
<li>
<p>协议ip都是一致的,但是端口不一致</p>
<p>http://127.0.0.1:8081</p>
<p>http://127.0.0.1</p>
</li>
<li>
<p>协议端口都是一致的但是ip不一致</p>
<p>http://192.168.108.128</p>
<p>http://127.0.0.1</p>
</li>
<li>
<p>协议不一样（http,https） 端口 ip一致</p>
<p>https://127.0.0.1</p>
<p>http://127.0.0.1</p>
</li>
</ol>
<h2 id="什么情况下不会发生跨域问题" tabindex="-1"><a class="header-anchor" href="#什么情况下不会发生跨域问题" aria-hidden="true">#</a> 什么情况下不会发生跨域问题</h2>
<p>---浏览器主要判断协议，ip，端口号，域名---</p>
<ul>
<li>跨域解决方案jsonp———存在缺点：只能支持get请求，不支持post请求</li>
<li>使用注解 @CrossOrigin(由SpringMVC提供)</li>
</ul>
<p>解决跨域的原理</p>
<p>就是在接口响应头允许前端跨域访问该接口:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>HttpServletResponse response = (HttpServletResponse) RequestContextHolder.getRequestAttributes();
response.addHeader("Access-Control-Allow-Origin","*");
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="封装跨域注解" tabindex="-1"><a class="header-anchor" href="#封装跨域注解" aria-hidden="true">#</a> 封装跨域注解</h2>
<p>注解底层实现原理：aop+反射机制</p>
<p>AOP的通知</p>
<ul>
<li>前置通知</li>
<li>后置通知</li>
<li>环绕通知</li>
<li>异常通知</li>
</ul>
<p>项目比较小解决方法</p>
<ul>
<li>
<p>@CrossOrigin</p>
</li>
<li>
<p>过滤器----自己拦截每个springmvc请求</p>
</li>
<li>
<p>在每个接口上加上（</p>
</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>response.addHeader("Access-Control-Allow-Origin","*");
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>项目大的解决方法</p>
<p>使用nginx或者网关</p>
<p>基于nginx根据不同的项目名称转发保证前端和后端同源策略</p>
</template>
