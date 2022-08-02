import{_ as n,g as s}from"./app.276e6fe4.js";const e={},r=s(`<h1 id="spingsecurity" tabindex="-1"><a class="header-anchor" href="#spingsecurity" aria-hidden="true">#</a> SpingSecurity</h1><p>SpringSecurity\u662F\u4E00\u4E2A\u6846\u67B6\uFF0C\u5B83\u5173\u6CE8\u4E8E\u4E3AJava\u5E94\u7528\u7A0B\u5E8F\u63D0\u4F9B\u8EAB\u4EFD\u9A8C\u8BC1\u548C\u6388\u6743\u3002\u4E0E\u6240\u6709Spring\u9879\u76EE\u4E00\u6837\uFF0CSpring\u5B89\u5168\u6027\u7684\u771F\u6B63\u5A01\u529B\u5728\u4E8E\u5B83\u53EF\u4EE5\u591A\u4E48\u5BB9\u6613\u5730\u6269\u5C55\u4EE5\u6EE1\u8DB3\u5B9A\u5236\u9700\u6C42</p><p>Spring Security\u662F\u4E00\u4E2A\u529F\u80FD\u5F3A\u5927\u4E14\u9AD8\u5EA6\u53EF\u5B9A\u5236\u7684\u8EAB\u4EFD\u9A8C\u8BC1\u548C\u8BBF\u95EE\u63A7\u5236\u6846\u67B6\u3002\u5B83\u662F\u4FDD\u62A4\u57FA\u4E8ESpring\u7684\u5E94\u7528\u7A0B\u5E8F\u7684\u4E8B\u5B9E\u6807\u51C6\u3002</p><p>\u8BA4\u8BC1\u548C\u6388\u6743</p><p>\u5E38\u89C1\u7684http\u7801</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>405:\u8BF7\u6C42\u65B9\u5F0F\u4E0D\u4E00\u81F4\uFF0Cpost\uFF0Cget\uFF0C\u6EE5\u7528

415\uFF1A\u4E0D\u652F\u6301\u5A92\u4F53\u7C7B\u578B\uFF0C\u7C7B\u578B\u4E0D\u5339\u914D

403\uFF1A\u6743\u9650\u4E0D\u5141\u8BB8

401\uFF1A\u672A\u6388\u6743

500\uFF1A\u540E\u53F0\u4EE3\u7801\u9519\u8BEF

404\uFF1A\u8BF7\u6C42\u8DEF\u5F84\u4E0D\u5B58\u5728
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>Spring Security\u662F\u9488\u5BF9Spring\u9879\u76EE\u7684\u5B89\u5168\u6846\u67B6\uFF0C\u4E5F\u662FSpring Boot\u5E95\u5C42\u5B89\u5168\u6A21\u5757\u9ED8\u8BA4\u7684\u6280\u672F\u9009\u578B\uFF0C\u4ED6\u53EF\u4EE5\u5B9E\u73B0\u5F3A\u5927\u7684Web\u5B89\u5168\u63A7\u5236\uFF0C\u5BF9\u4E8E\u5B89\u5168\u63A7\u5236\uFF0C\u6211\u4EEC\u4EC5\u9700\u8981\u5F15\u5165spring-boot-starter-security\u6A21\u5757\uFF0C\u8FDB\u884C\u5C11\u91CF\u7684\u914D\u7F6E\uFF0C\u5373\u53EF\u5B9E\u73B0\u5F3A\u5927\u7684\u5B89\u5168\u7BA1\u7406</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package com.chen.config;

import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    //\u6388\u6743
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        //\u9996\u9875\u6240\u6709\u4EBA\u53EF\u4EE5\u8BBF\u95EE\uFF0C\u529F\u80FD\u9875\u53EA\u6709\u5BF9\u5E94\u6709\u5168\u5411\u7684\u4EBA\u624D\u80FD\u8BBF\u95EE
        //\u94FE\u5F0F\u7F16\u7A0B http\u8BA4\u8BC1\u8BF7\u6C42  \u6DFB\u52A0\u4E00\u4E2A\u5730\u5740 \u9009\u62E9\u6240\u6709\u4EBA
        //\u8BF7\u6C42\u6388\u6743\u7684\u89C4\u5219     //\u53EA\u6709vip*\u4E0B\u7684\u624D\u53EF\u4EE5\u8BBF\u95EE
        http.authorizeRequests().antMatchers(&quot;/&quot;).permitAll()
                .antMatchers(&quot;/level1/**&quot;).hasRole(&quot;vip1&quot;)
                .antMatchers(&quot;/level2/**&quot;).hasRole(&quot;vip2&quot;)
                .antMatchers(&quot;/level3/**&quot;).hasRole(&quot;vip3&quot;);

        //\u6CA1\u6709\u6743\u9650\u9ED8\u8BA4\u4F1A\u8DF3\u5230\u767B\u5F55\u9875\u9762
        http.formLogin();
    }


    //\u8BA4\u8BC1
    //\u5BC6\u7801\u672A\u52A0\u5BC6  \u53CD\u7F16\u8BD1\u4E3Aclass\u6587\u4EF6
    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        //\u5185\u5B58\u4E2D\u8BA4\u8BC1   \u5BF9\u5BC6\u7801\u8FDB\u884C\u52A0\u5BC6\uFF0C\u5426\u5219\u8DF3\u8F6C\u62A5500\u9519\u8BEF 
     auth.inMemoryAuthentication().passwordEncoder(new BCryptPasswordEncoder())
     //\u8D4B\u4E88\u7528\u6237\u5BF9\u5E94\u7684\u6743\u9650
             .withUser(&quot;chenchao&quot;).password(new BCryptPasswordEncoder().encode(&quot;123456&quot;)).roles(&quot;vip2&quot;,&quot;vip3&quot;)
             .and()
             .withUser(&quot;admin&quot;).password(new BCryptPasswordEncoder().encode(&quot;123456&quot;)).roles(&quot;vip1&quot;,&quot;vip2&quot;,&quot;vip3&quot;)
             .and()
             .withUser(&quot;guest&quot;).password(new BCryptPasswordEncoder().encode(&quot;123456&quot;)).roles(&quot;vip1&quot;);
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br></div></div><p>\u8BA4\u8BC6SpringSecurity Spring Security \u662F\u9488\u5BF9Spring\u9879\u76EE\u7684\u5B89\u5168\u6846\u67B6\uFF0C\u4E5F\u662FSpring Boot\u5E95\u5C42\u5B89\u5168\u6A21\u5757\u9ED8\u8BA4\u7684\u6280\u672F\u9009\u578B\uFF0C\u4ED6\u53EF\u4EE5\u5B9E\u73B0\u5F3A\u5927\u7684Web\u5B89\u5168\u63A7\u5236\uFF0C\u5BF9\u4E8E\u5B89\u5168\u63A7\u5236\uFF0C\u6211\u4EEC\u4EC5\u9700\u8981\u5F15\u5165 spring-boot-starter-security \u6A21\u5757\uFF0C\u8FDB\u884C\u5C11\u91CF\u7684\u914D\u7F6E\uFF0C\u5373\u53EF\u5B9E\u73B0\u5F3A\u5927\u7684\u5B89\u5168\u7BA1\u7406\uFF01</p><p>\u8BB0\u4F4F\u51E0\u4E2A\u7C7B\uFF1A</p><p>WebSecurityConfigurerAdapter\uFF1A\u81EA\u5B9A\u4E49Security\u7B56\u7565</p><p>AuthenticationManagerBuilder\uFF1A\u81EA\u5B9A\u4E49\u8BA4\u8BC1\u7B56\u7565</p><p>@EnableWebSecurity\uFF1A\u5F00\u542FWebSecurity\u6A21\u5F0F</p><p>Spring Security\u7684\u4E24\u4E2A\u4E3B\u8981\u76EE\u6807\u662F \u201C\u8BA4\u8BC1\u201D \u548C \u201C\u6388\u6743\u201D\uFF08\u8BBF\u95EE\u63A7\u5236\uFF09\u3002</p><p>\u201C\u8BA4\u8BC1\u201D\uFF08Authentication\uFF09</p><p>\u8EAB\u4EFD\u9A8C\u8BC1\u662F\u5173\u4E8E\u9A8C\u8BC1\u60A8\u7684\u51ED\u636E\uFF0C\u5982\u7528\u6237\u540D/\u7528\u6237ID\u548C\u5BC6\u7801\uFF0C\u4EE5\u9A8C\u8BC1\u60A8\u7684\u8EAB\u4EFD\u3002</p><p>\u8EAB\u4EFD\u9A8C\u8BC1\u901A\u5E38\u901A\u8FC7\u7528\u6237\u540D\u548C\u5BC6\u7801\u5B8C\u6210\uFF0C\u6709\u65F6\u4E0E\u8EAB\u4EFD\u9A8C\u8BC1\u56E0\u7D20\u7ED3\u5408\u4F7F\u7528\u3002</p><p>\u201C\u6388\u6743\u201D \uFF08Authorization\uFF09</p><p>\u6388\u6743\u53D1\u751F\u5728\u7CFB\u7EDF\u6210\u529F\u9A8C\u8BC1\u60A8\u7684\u8EAB\u4EFD\u540E\uFF0C\u6700\u7EC8\u4F1A\u6388\u4E88\u60A8\u8BBF\u95EE\u8D44\u6E90\uFF08\u5982\u4FE1\u606F\uFF0C\u6587\u4EF6\uFF0C\u6570\u636E\u5E93\uFF0C\u8D44\u91D1\uFF0C\u4F4D\u7F6E\uFF0C\u51E0\u4E4E\u4EFB\u4F55\u5185\u5BB9\uFF09\u7684\u5B8C\u5168\u6743\u9650\u3002</p>`,19);function a(p,i){return r}var u=n(e,[["render",a]]);export{u as default};
