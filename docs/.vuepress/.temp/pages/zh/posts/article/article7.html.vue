<template><h1 id="设计模式" tabindex="-1"><a class="header-anchor" href="#设计模式" aria-hidden="true">#</a> 设计模式</h1>
<p>设计原则：高内聚，低耦合</p>
<p>设计模式(Design Pattern）是前辈们对代码开发经验的总结，是解决特定问题的一系列套路</p>
<p>GoF23</p>
<p>它不是语法规定，而是一套用来提高代码可复用性、可维护性、可读性、稳健性以及安全性的解决方案。</p>
<h2 id="单例模式" tabindex="-1"><a class="header-anchor" href="#单例模式" aria-hidden="true">#</a> 单例模式</h2>
<p>当在高并发的情况下，假设一秒钟main方法执行了上千次/上万次user对象反复创建，对资源占用严重</p>
<blockquote>
<p>这就需要我们使用单例模式：只创建一个对象</p>
</blockquote>
<p>创建形式：饿汉式，懒汉式</p>
<h3 id="饿汉式" tabindex="-1"><a class="header-anchor" href="#饿汉式" aria-hidden="true">#</a> 饿汉式</h3>
<p>类加载时创建</p>
<p>创建的时机不一样</p>
<ul>
<li>
<p>私有化的静态属性</p>
</li>
<li>
<p>私有化构造方法（在别的类中不可以创建对象）</p>
</li>
<li>
<p>提供一个公开的静态的方法（返回1步骤中的对象属性）</p>
</li>
</ul>
<p>在其他类中创建对象时不可以new</p>
<h3 id="懒汉式" tabindex="-1"><a class="header-anchor" href="#懒汉式" aria-hidden="true">#</a> 懒汉式</h3>
<p>线程不安全</p>
<ul>
<li>私有化静态属性</li>
<li>私有化构造方法（再别的类中无法创建对象）</li>
<li>提供公开的静态的方法（返回1中对象属性）</li>
</ul>
<p>返回对象的方法在第一次被调用时才会创建对象，后续直接返回第一次调用的对象</p>
<p>调用时创建</p>
<p>升级版线程安全的懒汉式 synchronized，相对于降低效率</p>
<p>双检锁double-check</p>
<p>饿汉式，懒汉式（线程安全的，线程不安全，双重校验—double check）</p>
<h2 id="简单工厂模式" tabindex="-1"><a class="header-anchor" href="#简单工厂模式" aria-hidden="true">#</a> 简单工厂模式</h2>
<p>用途:主要解决接口选择的问题。在不同情况下创建不同的实现类对象</p>
<p>步骤</p>
<ul>
<li>一个接口多个实现</li>
<li>创建一个工厂类，工厂类中包含公开的静态的方法（返回值接口类型，方法包含参数:根据不同的情况）</li>
<li>方法体中分析不同的情况，创建不同的接口实现类对象</li>
<li>将创建的实现类对象返回出去</li>
</ul>
<h2 id="抽象工厂模式" tabindex="-1"><a class="header-anchor" href="#抽象工厂模式" aria-hidden="true">#</a> 抽象工厂模式</h2>
<p>一个工厂已经解决不了问题</p>
<p>理解：工厂的工厂  ，如何选择工厂</p>
<h2 id="观察者模式" tabindex="-1"><a class="header-anchor" href="#观察者模式" aria-hidden="true">#</a> 观察者模式</h2>
<p>解决的问题：当对象存在一对多时，一的对象发生改变时，所有依赖这个对象的其他对象都会得到通知</p>
<p>班级dept(一）对应学生student（多)班级地址改了;学生都应该得到通知;</p>
<p>观察者模式:定义对象之间的一种一对多依赖关系，使得每当一个对象状态发生改变时，其相关依赖对象都得到通知并被自动更新。</p>
<p>别名</p>
<ul>
<li>发布-订阅(Publish/Subscribe)模式</li>
<li>模型-视图(Model/View)模式</li>
<li>源-监听器(Source/Listener)模式</li>
<li>从属者(Dependents)模式</li>
</ul>
<hr>
<p><strong>开闭原则</strong>:对扩展开放，对修改关闭</p>
<p><strong>里氏替换原则</strong>:继承必须确保超类所拥有的性质在子类中仍然成立</p>
<p><strong>依赖倒置原则</strong>:要面向接口编程，不要面向实现编程。</p>
<p><strong>单一职责原则</strong>:控制类的粒度大小、将对象解耦、提高其内聚性。</p>
<p><strong>接口隔离原则</strong>:要为各个类建立它们需要的专用接口</p>
<p><strong>迪米特法则</strong>:只与你的直接朋友交谈，不跟“陌生人”说话。</p>
<p><strong>合成复用原则</strong>:尽量先使用组合或者聚合等关联关系来实现，其次才考虑使用继承关系来实现。</p>
</template>
