---
icon: edit
date: 2022-01-04
category:
  - CategoryA
  - CategoryB
tag:
  - tag A
  - tag B
---

# SpingSecurity

SpringSecurity是一个框架，它关注于为Java应用程序提供身份验证和授权。与所有Spring项目一样，Spring安全性的真正威力在于它可以多么容易地扩展以满足定制需求

Spring Security是一个功能强大且高度可定制的身份验证和访问控制框架。它是保护基于Spring的应用程序的事实标准。

认证和授权

常见的http码

```
405:请求方式不一致，post，get，滥用

415：不支持媒体类型，类型不匹配

403：权限不允许

401：未授权

500：后台代码错误

404：请求路径不存在
```

Spring Security是针对Spring项目的安全框架，也是Spring Boot底层安全模块默认的技术选型，他可以实现强大的Web安全控制，对于安全控制，我们仅需要引入spring-boot-starter-security模块，进行少量的配置，即可实现强大的安全管理

```
package com.chen.config;

import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    //授权
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        //首页所有人可以访问，功能页只有对应有全向的人才能访问
        //链式编程 http认证请求  添加一个地址 选择所有人
        //请求授权的规则     //只有vip*下的才可以访问
        http.authorizeRequests().antMatchers("/").permitAll()
                .antMatchers("/level1/**").hasRole("vip1")
                .antMatchers("/level2/**").hasRole("vip2")
                .antMatchers("/level3/**").hasRole("vip3");

        //没有权限默认会跳到登录页面
        http.formLogin();
    }


    //认证
    //密码未加密  反编译为class文件
    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        //内存中认证   对密码进行加密，否则跳转报500错误 
     auth.inMemoryAuthentication().passwordEncoder(new BCryptPasswordEncoder())
     //赋予用户对应的权限
             .withUser("chenchao").password(new BCryptPasswordEncoder().encode("123456")).roles("vip2","vip3")
             .and()
             .withUser("admin").password(new BCryptPasswordEncoder().encode("123456")).roles("vip1","vip2","vip3")
             .and()
             .withUser("guest").password(new BCryptPasswordEncoder().encode("123456")).roles("vip1");
    }
}

```

认识SpringSecurity
Spring Security 是针对Spring项目的安全框架，也是Spring Boot底层安全模块默认的技术选型，他可以实现强大的Web安全控制，对于安全控制，我们仅需要引入 spring-boot-starter-security 模块，进行少量的配置，即可实现强大的安全管理！

记住几个类：

WebSecurityConfigurerAdapter：自定义Security策略

AuthenticationManagerBuilder：自定义认证策略

@EnableWebSecurity：开启WebSecurity模式

Spring Security的两个主要目标是 “认证” 和 “授权”（访问控制）。

“认证”（Authentication）

身份验证是关于验证您的凭据，如用户名/用户ID和密码，以验证您的身份。

身份验证通常通过用户名和密码完成，有时与身份验证因素结合使用。

“授权” （Authorization）

授权发生在系统成功验证您的身份后，最终会授予您访问资源（如信息，文件，数据库，资金，位置，几乎任何内容）的完全权限。
