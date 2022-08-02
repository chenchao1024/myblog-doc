---
icon: edit
date: 2022-01-06
category:
  - CategoryA
  - CategoryB
tag:
  - tag A
  - tag B
star: 10
---

# 网站跨域问题解决方法

## 网站结构  web系统开发

数据库访问层

业务逻辑层

控制层 控制页面跳转

微服务架构模式 专业的人做专业的事

前后端分离

前端------前端工程师  vue

后端------后端工程师  Go java php c#   调用接口

跨域问题是浏览器的一种安全策略,访问需要遵循同源策略:

发生了跨域的问题---可以请求到后端，但是无法获取到响应的结果

-----

## 同源策略

浏览器访问的地址:协议://ip:端口;

在该页面中 访问ajax请求协议://ip:端口;必须要与我们浏览器所访问的协议://ip:端口;

如果不一致的话，则会发生跨域的问题―浏览器触发保护机制获取不到该请求的响应结果

跨域的情况

1. 浏览器访问地址不一样

   http://www.xxx.com

   http://127.0.0.1

2. 协议ip都是一致的,但是端口不一致

   http://127.0.0.1:8081

   http://127.0.0.1

3. 协议端口都是一致的但是ip不一致

   http://192.168.108.128

   http://127.0.0.1

4. 协议不一样（http,https） 端口 ip一致

   https://127.0.0.1

   http://127.0.0.1

## 什么情况下不会发生跨域问题

---浏览器主要判断协议，ip，端口号，域名---

- 跨域解决方案jsonp———存在缺点：只能支持get请求，不支持post请求
- 使用注解 @CrossOrigin(由SpringMVC提供)

解决跨域的原理

就是在接口响应头允许前端跨域访问该接口:

```
HttpServletResponse response = (HttpServletResponse) RequestContextHolder.getRequestAttributes();
response.addHeader("Access-Control-Allow-Origin","*");
```

## 封装跨域注解

注解底层实现原理：aop+反射机制

AOP的通知

- 前置通知
- 后置通知
- 环绕通知
- 异常通知

项目比较小解决方法

- @CrossOrigin

- 过滤器----自己拦截每个springmvc请求

- 在每个接口上加上（

```
response.addHeader("Access-Control-Allow-Origin","*");
```

项目大的解决方法

使用nginx或者网关

基于nginx根据不同的项目名称转发保证前端和后端同源策略              

