<template><h1 id="springcloud" tabindex="-1"><a class="header-anchor" href="#springcloud" aria-hidden="true">#</a> SpringCloud</h1>
<p>微服务架构4个核心问题?</p>
<p>1．服务很多，客户端该怎么访问?</p>
<p>2．这么多服务?服务之间如何通信?</p>
<p>3．这么多服务?如何治理?</p>
<p>4．服务挂了怎么办?</p>
<p>解决方案:</p>
<p>spring cloud生态        springBoot</p>
<ol>
<li>
<p>spring cloud NetFlix一站式解决方案!</p>
<p>api网关，zuul组件</p>
<p>Feign—–httpClinet——-http通信方式，同步，阻塞</p>
<p>服务注册与发现:   Eureka</p>
<p>熔断机制：Hystrix</p>
</li>
<li>
<p>Apache Dubbo zookeeper半自动,需要整合别人的</p>
<p>Api:没有，找第三方组件，或者自己实现</p>
<p>Dubbo</p>
<p>服务注册与发现：zookeeper</p>
<p>没有熔断机制  借助 Hystrix</p>
</li>
<li>
<p>spring cloud Alibaba  一站式解决方案 更简单</p>
</li>
</ol>
<p>新概念：服务网格  Server Mesh</p>
<p>1.API:解决服务路由问题</p>
<p>2.通信：HTTP、RPC</p>
<p>3.注册和发现：高可用</p>
<p>4.熔断机制：服务降级，防止服务雪崩</p>
<p>ORM：All in one</p>
<p>根源：网络不可靠</p>
<hr>
<p>模块化：提倡将单一的应用程序划分成一组小的服务</p>
<p>SpringBoot专注于快速、方便的开发单个个体微服务，SpringCloud关注全局的服务治理框架</p>
<p>三大角色</p>
<ul>
<li>Eureka ServeF:提供服务的注册于发现。</li>
<li>Service Provider:将自身服务注册到Eureka中，从而使消费方能够找到。</li>
<li>Service Consumer:服务消费方从Eureka中获取注册服务列表，从而找到消费服务。</li>
</ul>
<hr>
<p>对比和Zookeeper区别</p>
<ol>
<li>回顾CAP原则
RDBMS (MySQL\Oracle\sqlServer) ===&gt; ACID</li>
</ol>
<p>NoSQL (Redis\MongoDB) ===&gt; CAP</p>
<ol start="2">
<li>ACID是什么？
A (Atomicity) 原子性
C (Consistency) 一致性
I (Isolation) 隔离性
D (Durability) 持久性</li>
<li>CAP是什么?
C (Consistency) 强一致性
A (Availability) 可用性
P (Partition tolerance) 分区容错性
CAP的三进二：CA、AP、CP</li>
</ol>
<p>CAP理论的核心
一个分布式系统不可能同时很好的满足一致性，可用性和分区容错性这三个需求
根据CAP原理，将NoSQL数据库分成了满足CA原则，满足CP原则和满足AP原则三大类
CA：单点集群，满足一致性，可用性的系统，通常可扩展性较差
CP：满足一致性，分区容错的系统，通常性能不是特别高</p>
<p><mark>AP：满足可用性，分区容错的系统，通常可能对一致性要求低一些</mark></p>
<ul>
<li>Zookeeper 保证的是 CP —&gt; 满足一致性，分区容错的系统，通常性能不是特别高</li>
<li>Eureka 保证的是 AP —&gt; 满足可用性，分区容错的系统，通常可能对一致性要求低一些</li>
</ul>
<p>注册和查询服务</p>
<p>注： Eureka可以很好的应对因网络故障导致部分节点失去联系的情况，而不会像zookeeper那样使整个注册服务瘫痪</p>
<hr>
<p>Ribbon：负载均衡(基于客户端)
6.1 负载均衡以及Ribbon
Ribbon是什么？</p>
<p>Spring Cloud Ribbon 是基于Netflix Ribbon 实现的一套客户端负载均衡的工具。
简单的说，Ribbon 是 Netflix 发布的开源项目，主要功能是提供客户端的软件负载均衡算法，将 Netflix 的中间层服务连接在一起。Ribbon 的客户端组件提供一系列完整的配置项，如：连接超时、重试等。简单的说，就是在配置文件中列出 LoadBalancer (简称LB：负载均衡 ) 后面所有的及其，Ribbon 会自动的帮助你基于某种规则 (如简单轮询，随机连接等等) 去连接这些机器。我们也容易使用 Ribbon 实现自定义的负载均衡算法！</p>
<p>实现方式：轮询，随机</p>
<p>LVS：Linux Virtual Server:Linux虚拟机服务</p>
<p>ribbon是服务消费方</p>
<h2 id="feign-负载均衡-基于服务端" tabindex="-1"><a class="header-anchor" href="#feign-负载均衡-基于服务端" aria-hidden="true">#</a> Feign：负载均衡(基于服务端)</h2>
<ol>
<li>微服务名字 【ribbon】</li>
<li>接口和注解 【feign】</li>
</ol>
<h2 id="hystrix-服务熔断" tabindex="-1"><a class="header-anchor" href="#hystrix-服务熔断" aria-hidden="true">#</a> Hystrix：服务熔断</h2>
<blockquote>
<p>分布式系统面临的问题</p>
</blockquote>
<p>复杂分布式体系结构中的应用程序有数十个依赖关系，每个依赖关系在某些时候将不可避免失败！</p>
<p>8.1 服务雪崩
多个微服务之间调用的时候，假设微服务A调用微服务B和微服务C，微服务B和微服务C又调用其他的微服务，这就是所谓的“扇出”，如果扇出的链路上某个微服务的调用响应时间过长，或者不可用，对微服务A的调用就会占用越来越多的系统资源，进而引起系统崩溃，所谓的“雪崩效应”。</p>
<p>服务熔断</p>
<p>服务降级</p>
<h2 id="zuul路由网关" tabindex="-1"><a class="header-anchor" href="#zuul路由网关" aria-hidden="true">#</a> Zuul路由网关</h2>
<p>Zull包含了对请求的路由(用来跳转的)和过滤两个最主要功能：</p>
<p>其中路由功能负责将外部请求转发到具体的微服务实例上，是实现外部访问统一入口的基础，而过滤器功能则负责对请求的处理过程进行干预，是实现请求校验，服务聚合等功能的基础。Zuul和Eureka进行整合，将Zuul自身注册为Eureka服务治理下的应用，同时从Eureka中获得其他服务的消息，也即以后的访问微服务都是通过Zuul跳转后获得</p>
</template>
