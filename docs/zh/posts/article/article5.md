---
icon: edit
date: 2022-01-05
category:
  - CategoryA
  - CategoryB
tag:
  - tag A
  - tag B
---

# SpringCloud

微服务架构4个核心问题?

1．服务很多，客户端该怎么访问?

2．这么多服务?服务之间如何通信?

3．这么多服务?如何治理?

4．服务挂了怎么办?

解决方案:

spring cloud生态        springBoot

1. spring cloud NetFlix一站式解决方案!

   api网关，zuul组件

   Feign—–httpClinet——-http通信方式，同步，阻塞

   服务注册与发现:   Eureka

   熔断机制：Hystrix

   

2. Apache Dubbo zookeeper半自动,需要整合别人的

   Api:没有，找第三方组件，或者自己实现

   Dubbo

   服务注册与发现：zookeeper 

   没有熔断机制  借助 Hystrix

   

3. spring cloud Alibaba  一站式解决方案 更简单

   

新概念：服务网格  Server Mesh

1.API:解决服务路由问题

2.通信：HTTP、RPC

3.注册和发现：高可用

4.熔断机制：服务降级，防止服务雪崩

ORM：All in one

根源：网络不可靠   

-----

模块化：提倡将单一的应用程序划分成一组小的服务


SpringBoot专注于快速、方便的开发单个个体微服务，SpringCloud关注全局的服务治理框架


三大角色

- Eureka ServeF:提供服务的注册于发现。
- Service Provider:将自身服务注册到Eureka中，从而使消费方能够找到。
- Service Consumer:服务消费方从Eureka中获取注册服务列表，从而找到消费服务。

-------

 对比和Zookeeper区别

1. 回顾CAP原则
   RDBMS (MySQL\Oracle\sqlServer) ===> ACID

NoSQL (Redis\MongoDB) ===> CAP

2. ACID是什么？
   A (Atomicity) 原子性
   C (Consistency) 一致性
   I (Isolation) 隔离性
   D (Durability) 持久性
3. CAP是什么?
   C (Consistency) 强一致性
   A (Availability) 可用性
   P (Partition tolerance) 分区容错性
   CAP的三进二：CA、AP、CP


 CAP理论的核心
一个分布式系统不可能同时很好的满足一致性，可用性和分区容错性这三个需求
根据CAP原理，将NoSQL数据库分成了满足CA原则，满足CP原则和满足AP原则三大类
CA：单点集群，满足一致性，可用性的系统，通常可扩展性较差
CP：满足一致性，分区容错的系统，通常性能不是特别高

==AP：满足可用性，分区容错的系统，通常可能对一致性要求低一些==

- Zookeeper 保证的是 CP —> 满足一致性，分区容错的系统，通常性能不是特别高
- Eureka 保证的是 AP —> 满足可用性，分区容错的系统，通常可能对一致性要求低一些

注册和查询服务

注： Eureka可以很好的应对因网络故障导致部分节点失去联系的情况，而不会像zookeeper那样使整个注册服务瘫痪 

------



 Ribbon：负载均衡(基于客户端)
6.1 负载均衡以及Ribbon
Ribbon是什么？

Spring Cloud Ribbon 是基于Netflix Ribbon 实现的一套客户端负载均衡的工具。
简单的说，Ribbon 是 Netflix 发布的开源项目，主要功能是提供客户端的软件负载均衡算法，将 Netflix 的中间层服务连接在一起。Ribbon 的客户端组件提供一系列完整的配置项，如：连接超时、重试等。简单的说，就是在配置文件中列出 LoadBalancer (简称LB：负载均衡 ) 后面所有的及其，Ribbon 会自动的帮助你基于某种规则 (如简单轮询，随机连接等等) 去连接这些机器。我们也容易使用 Ribbon 实现自定义的负载均衡算法！

实现方式：轮询，随机

LVS：Linux Virtual Server:Linux虚拟机服务

ribbon是服务消费方

## Feign：负载均衡(基于服务端)

1. 微服务名字 【ribbon】
2. 接口和注解 【feign】

## Hystrix：服务熔断

> 分布式系统面临的问题

复杂分布式体系结构中的应用程序有数十个依赖关系，每个依赖关系在某些时候将不可避免失败！

8.1 服务雪崩
 多个微服务之间调用的时候，假设微服务A调用微服务B和微服务C，微服务B和微服务C又调用其他的微服务，这就是所谓的“扇出”，如果扇出的链路上某个微服务的调用响应时间过长，或者不可用，对微服务A的调用就会占用越来越多的系统资源，进而引起系统崩溃，所谓的“雪崩效应”。

服务熔断

服务降级

## Zuul路由网关

 Zull包含了对请求的路由(用来跳转的)和过滤两个最主要功能：

 其中路由功能负责将外部请求转发到具体的微服务实例上，是实现外部访问统一入口的基础，而过滤器功能则负责对请求的处理过程进行干预，是实现请求校验，服务聚合等功能的基础。Zuul和Eureka进行整合，将Zuul自身注册为Eureka服务治理下的应用，同时从Eureka中获得其他服务的消息，也即以后的访问微服务都是通过Zuul跳转后获得
