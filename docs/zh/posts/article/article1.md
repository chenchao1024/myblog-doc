---
icon: edit
date: 2022-01-01
category:
  - CategoryA
tag:
  - tag A
  - tag B
---

# Docker学习

弱小和无知不是生存的障碍，傲慢才是



阿里云加速器

```
sudo mkdir -p /etc/docker
sudo tee /etc/docker/daemon.json <<-'EOF'
{
  "registry-mirrors": ["https://46fksnli.mirror.aliyuncs.com"]
}
EOF
sudo systemctl daemon-reload
sudo systemctl restart docker



https://46fksnli.mirror.aliyuncs.com
```



## 简介



==docker是什么？==

Docker 是一个[开源](https://baike.baidu.com/item/开源/20720669)的应用容器引擎，让开发者可以打包他们的应用以及依赖包到一个可移植的[镜像](https://baike.baidu.com/item/镜像/1574)中，然后发布到任何流行的 [Linux](https://baike.baidu.com/item/Linux)或[Windows](https://baike.baidu.com/item/Windows/165458) 机器上，也可以实现[虚拟化](https://baike.baidu.com/item/虚拟化/547949)。容器是完全使用[沙箱](https://baike.baidu.com/item/沙箱/393318)机制，相互之间不会有任何接口

==将应用和环境打包成一个镜像==

开发 — 运维 问题: 项目在我的电脑上可以运行!版本更新,导致服务不可用!对于运维来说,考验就十分大

环境配置是十分的麻烦.每一个机器都要部署环境(集群Redis, ES, Hadoop…)! 费时费力

- java – apk – 发布(应用商店) --使用者使用apk-- 安装即用
- java — jar(环境) — 打包上线自带环境(镜像) —(Docker仓库: 商店) — 下载我们发布的镜像 — 直接运行即可

Docker是基于Go语言开发的开源项目!

 ==为什么要使用 Docker==

作为一种新兴的虚拟化方式，Docker 跟传统的虚拟化方式相比具有众多的优势。

首先，Docker 容器的启动可以在秒级实现，这相比传统的虚拟机方式要快得多。其次，Docker 对系统资源的利用率很高，一台主机上可以同时运行数千个 Docker 容器。

容器除了运行其中应用外，基本不消耗额外的系统资源，使得应用的性能很高，同时系统的开销尽量小。传统虚拟机方式运行 10 个不同的应用就要起 10 个虚拟机，而Docker 只需要启动 10 个隔离的应用即可

Docker核心思想：相互隔离的，通过隔离机制，可以将服务器利用到极致

<hr/>



虚拟机技术缺点:

```
1. 资源占用十分多
2. 冗余技术多
3. 启动很慢
```

==容器化技术不是一个完整的操作系统==

Docker是一种虚拟化技术

> 官网: https://www.docker.com/
>
> 文档地址: https://docs.docker.com/get-docker/
>
> 仓库地址: https://hub.docker.com/
>
> 画图工具：draw.io



比较Docker和虚拟机技术的不同

- 传统的虚拟机,虚拟出一条硬件,运行一个完整的操作系统,然后在这个系统上安装和运行软件
- 容器内的应用直接运行在宿主机的内容,容器是没有自己的内核的,也没有虚拟我们的硬件,所以就轻便了
- 每个容器间都是互相隔离的,每一个容器内都有一个属于自己的文件系统,互不影响

>DevOps(开发，运维)

- 更快速的交付和部署

  传统: 一堆帮助文档,安装程序

  Docker: 一键运行打包镜像发布测试

  

- 更便捷的升级和扩缩容

  使用了Docker之后,我们部署应用就像搭积木一样!

  项目打包为一个镜像,扩展,服务器A!服务器B

  

- 更简单的系统运维

  在容器化之后,我们开发,测试环境都是高度一致的

  

- 更高效的计算资源利用:

  Docker是内核级别的虚拟化, 可以在一个物理机上运行很多的容器实例! 服务器的性能可以被压榨到极致	

## Docker安装

### Docker的基本组成

- 镜像：（image）

docker镜像好比一个模板,可以通过这个模板来创建容器服务,tomcat镜像===>run ==>tomcat01容器(提供服务器)

通过这个镜像可以创建多个容器(最终服务运行或者项目运行就是在容器中的)

- 容器：（contains）

Docker利用容器技术,独立运行一个或者一个组应用,通过镜像来创建的

启动,停止,删除,基本命令!

- 仓库：（repository）

仓库就是存放镜像的地方!

仓库分为共有仓库和私有仓库

### 安装Docker

```
uname -r:查看版本
cat /etc/os-release：查看配置
```

先卸载旧版本

```
yum remove docker \
                  docker-client \
                  docker-client-latest \
                  docker-common \
                  docker-latest \
                  docker-latest-logrotate \
                  docker-logrotate \
                  docker-engine
```

需要的安装包

```
yum install -y yum-utils
```

 设置镜像仓库

```
 yum-config-manager --add-repo  \
 http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
```

更新yum软件包索引

```
yum makecache fast
```

安装最新版docker引擎（社区版）

```
yum install docker-ce docker-ce-cli containerd.io
```

启动docker

```
 systemctl start docker
```

查看版本

```
docker version
```

测试helloworld

```
docker run hello-world
```

查看下载的helloworld镜像

```
docker images
```

卸载docker

```
yum remove docker-ce docker-ce-cli containerd.io：卸载依赖 rm -rf /var/lib/docker：删除目录 rm -rf /var/lib/containerd
```

## Docker原理


Docker是一个C/S结构的系统

DockerServer接收到Docker-Client的指令,就会执行这个命令

## Docker基本命令

帮助命令

```bash
docker version:显示docker帮助信息docker info:显示系统信息，镜像，容器docker --help:帮助命令
```

帮助命令地址

镜像命令

```
docker images --helpREPOSITORY 镜像的仓库名TAG 镜像的标签IMAGE ID 镜像IDCREATED 镜像创建时间SIZE 镜像的大小#可选项Options:  -a, --all             #列出所有镜像  -q, --quiet           #只显示镜像ID
```

搜索命令

```
docker search xxx
```

下载镜像

```
docker pull mysql:5.7
```

镜像卸载

```
docker rmi -f  id id:批量删除docker rmi -f $(docker -ap) 删除全部
```

### 容器命令



```
docker run  [可选参数] image参数说明--name=""  容器名字 用于区分容器-d         后台方式运行-it        使用交互方式运行,进入容器查看内容-p	       指定容器的端口 -p 80:8080  主机端口:容器端口-P(大写)    随机指定端口
```

测试

```
docker run -it centos /bin/bashexit:退出docker ps:列出所有运行的容器docker ps -a:查看运行过的容器docker ps -n=?:查看最近创建的容器docker ps -q:只显示容器的编号
```

### 退出容器

```
exit :直接容器停止并退出ctrl + p + q 直接退出容器
```

### 删除容器

```
docker rmi 容器iddocker rmi -f[递归] $(docker ps -aq) :递归删除所有的容器docker ps -a | xargs docker rm :递归删除所有的容器
```

### 启动和停止容器的操作

```shell
docker start 容器id  #启动容器docker restart 容器id  #重启容器docker stop 容器id	#停止当前正在运行的容器docker kill 容器id 	#强制停止当前容器
```

### 后台启动容器

```
docker run -d 镜像名
```

### 日志查看

```
docker logs -tf --tail 10 id:查看i为什么的10条日志   显示全部的
```

### 查看容器的进程信息

```
docker top id
```

查看镜像元数据

```
docker inspect id
```

### 进入当前正在运行的容器

```
docker exec -it id  /bin/bash:交互进行 进入容器后开启新的终端docker attach id :进入容器正在执行的终端
```

### 从容器中拷贝文件

```
docker cp id:容器内路径docker cp 90d81c8bc9ec:/home/test.java /homedocker ps -a:查看所有的容器
```

### 小试牛刀

搜索镜像

```
docker search nginx
```

拉取镜像 

```
docker pull nginx
```

启动

```
docker run -d --name nginx0	1  -p 3302:80  nginx:  -d：后台运行   --name:取名字 curl localhost:3302whereis nginx:寻找nginx配置文件 
```

部署Tomcat需要将webapps.dist中内容复制到webapps中

```
docker exec -it tomcat3  /bin/bash：进入容器cp webapps.dist/* webappsdocker run -d --name elasticsearch -p 9200:9200 -p 9300:9300 -e ES_JAVA_OPTS= "-Xms64m -Xmx 512m"  elasticsearch:7.6.2docker stats：查看cpu状态
```

### 可视化面板

Docker图形化界面使用

安装命令

```
docker run -d -p 9100:9000 \--restart=always -v /var/run/docker.sock:/var/run/docker.sock --privileged=true portainer/portainer
```

### commit镜像

```
docker commit 提交一个容器成为一个新的副本docker commit -m="提交的描述信息" -a="作者" 容器ID 目标镜像名:[tag]docker exec -it cfa56974f7c7：进入到容器docker run -it  -p 8080:8080 tomcat：启动容器docker commit -a="chen" -m="add webapps" cfa56974f7c7   tomcat1:1.0：提交操作 
```

## 容器数据卷

需求: 数据可以持久化            需求: mysql数据可以存储在本地!

容器之间可以有一个数据共享的技术!      

 Docker 容器中产生的数据,同步到本地!目录的挂载,将容器内的目录挂载到Linux上面!

> 方式一：用命令来挂载	双向绑定，将数据保存到本地

```
docker run -it -v 主机目录: 容器内目录  -p 主机端口: 容器端口docker run -it -v /home/ceishi:/home  centos /bin/bash    前面的路径是主机路径，后面是容器路径docker inspect 容器id:查看是否挂载成功
```

### 	MYSQL持久化

获取镜像

```
docker pull mysql:5.7
```

```
docker run -d -p 3306:3306 -v /home/mysql/conf:/etc/mysql/conf.d -v /home/mysql/data:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=123456 --name mysql mysql:5.7-d  后台运行-p  端口映射-v  挂载	-e  环境配置--name 容器名
```

即使容器被删了，挂载到本地的数据卷依旧不会丢失，这就是数 据持久化技术

### 具名和匿名挂载

匿名挂载

/:是绝对目录开头 

```
-v 容器内路径docker -run -P -name nginx01 -v /etc/nginx nginxdocker volume ls：查看所有挂载的本地镜像docker volume inspect 名字：查看具名或匿名挂载的具体位置
```

具名挂载

```
docker run -d -P --name nginx2  -v  juming-nginx:/etc/nginx nginx
```



 

```
如何确定是具名挂载还是匿名挂载,还是指定路径挂载-v 容器内路径：匿名挂载 -v 卷名:容器内路径：具名挂载-v 宿主机路径 : 容器内路径 指定路径挂载
```

### 初识DockerFile

用来构建docker镜像的构建文件，命令参数脚本

通过脚本生成镜像，镜像是一层一层的，每个命令都是一层

```bash
创建一个dockerfile文件,名字可以随机 建议 dockerfile文件中的内容	FROM centosVOLUME ["volume01","volume02"]CMD echo "---end---"CMD /bin/hash
```

```
docker build -f /home/docker-test-volume/dockerfile1  -t   chen/centos:1.0 .:打包生成镜像
```

```
docker inspect 41fc262c9781：查看数据是否挂载成功   容器id
```


### 数据卷容器

容器和容器之间同步

利用父容器给其他容器共享数据  

启动，继承

在docker1中建立的文件都可以在docker2容器中同步

 --volumes-from可以实现容器间的数据共享

```
docker run -it --name docker1 chen/centos :父容器docker run -it --name docker2    --volumes-from docker1  chen/centos
```

是一种拷贝的概念

多个数据库实现数据共享

结论：容器之间配置信息的传递，数据卷容器的生命周期一直持续到没有人使用为止



### DockerFile构建

是用来构建docker镜像的文件，命令参数脚本

构建步骤

1. 编写一个dockerfile文件
2. docker build构建成为一个镜像
3. docker run运行镜像
4. docker push 发布镜像



1. 每个保留关键字(指令)都是必须要大写
2. 执行从上到下顺序执行
3. ‘#’ 表示注释
4. 每一个指令都会创建提交一个新的镜像层,并提交 !


```
FROM 	基础镜像, 一切从这里开始构建MAINTAINER  镜像是谁写的, 姓名+邮箱RUN #镜像构建的时候需要运行的命令ADD  步骤, tomcat镜像,压缩包! 添加内容WORKDIR  镜像的工作目录VOLUME  挂载的目录EXPOSE  暴露端口配置RUN 运行CMD  指定这个容器启动的时候要运行的命令,只有最后一个会生效,可被替代ENTRYPOINT # 指定这个容器启动的时候要运行的命令,可以追加命令ONBUILD  当构建一个被继承 DockerFile 这个时候就会运行ONBUILD的指令,触发指令COPY		类似ADD,将我们文件拷贝到镜像中ENV 	 构建的时候设置环境变量! 
```

dockerfile是面向开发的,我们以后要发布项目,做镜像就需要编写dockerfile文件,这个文件十分简单

Docker镜像 逐渐成为了一个企业交付的标准,必须要掌握 !

步骤: 开发,部署,上线,运维…缺一不可

DockerFIle: 构建文件,定义了一切的步骤 ,源代码

DockerImages: 通过DockerFile构建生成的镜像,最终发布运行的产品,原来是一个jar,war

Docker容器: 容器就是镜像运行起来提供服务的

步骤：

1.创建自己的centos

```
FROM centosMAINTAINER  chen<2776895893@qq.com>ENV MYPATH  /usr/localWORKDIR  $MYPATHRUN yum  -y  install vimRUN yum -y install net-toolsEXPOSE  80CMD echo  $MYPATHCMD echo "----end----"CMD /bin/bash
```

2.通过文件构造自己的镜像

```
docker build -f mycentos  -t  mycentos7 .
```

```
docker history   镜像id:查看镜像的构造过程
```

### Tomcat镜像实战

1.准备Tomcat压缩包，jdk

2.编写dockerfile文件

```
FROM centosMAINTAINER   chen<2776895893@qq.com>COPY readme.txt /usr/local/readme.txtADD jdk-8u301-linux-x64.tar.gz  /usr/local/ADD apache-tomcat-9.0.53.tar.gz  /usr/local/RUN yum -y install vim ENV  MYPATH /usr/localWORKDIR   $MYPATHENV JAVA_HOME /usr/local/jdk1.8.0_301ENV CLASSPATH  $JAVA_HOME/lib/dt.jar:$JAVA_HOME/tools.jarENV  CATALINA_HOME /usr/local/apache-tomcat-9.0.53ENV CATALINA_BASH /usr/local/apache-tomcat-9.0.53ENV PATH $PATH:$JAVA_HOME/bin:$CATALINA_HOME/lib:$CATALINA_HOME/binEXPOSE 8080CMD /usr/local/apache-tomcat-9.0.53/bin/startup.sh && tail -F /usr/local/apache-tomcat-9.0.53/bin/logs/catalina.out
```

2.构建镜像

```
 docker build -t mytomcat .
```

3.启动镜像

```
docker run -d -p 9090:8080 --name chentomcat  -v /home/chenstudy/chen/build/tomcat/test:/usr/local/apache-tomcat-9.0.53/webapps/test  -v /home/chenstudy/chen/build/tomcat/tomcatlogs/:/usr/local/apache-tomcat-9.0.53/logs  mytomcat
```

4.测试访问

```
localhost:9090
```

5.发布项目

在test目录下建WEBINF文件


web.xml页面

```
<?xml version="1.0" encoding="UTF-8"?><web-app xmlns="http://xmlns.jcp.org/xml/ns/javaee"         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"         xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/javaee                      http://xmlns.jcp.org/xml/ns/javaee/web-app_4_0.xsd"         version="4.0"         metadata-complete="true"></web-app>
```

jsp页面

```
<%@ page language="java" contentType="text/html; charset=UTF-8"    pageEncoding="UTF-8"%><!DOCTYPE html><html><head><meta charset="utf-8"><title>hello chen</title></head><body>Hello World!<br/><%System.out.println("----my test log----");%></body></html>
```

访问

```
192.168.108.129:9090/test
```

发布自己的镜像

登录

```
docker login -u kyriechenseven
```


提交镜像

```
docker push chen/mytomcat:1.0
```

提交不上解决方法

```
docker tag 镜像id  kuangshen/tomcat : 1.0
```

## Docker网络

容器编排，集群部署，流水线

ip addr包含以下地址

- 本地回环地址
- 服务器地址
- docker0地址

```
docker exec -it 容器id ip addr：查看容器的网卡
```

linux可以ping通容器内部

> 原理

我们每启动一个docker容器,docker就会给docker容器分配一个ip,我们只要安装了docker,就会有一个网卡docker0,桥接模式,使用的技术是evth-pair技术

Docker中所有的网络接口都是虚拟的,虚拟的转发效率高

### link

```
 docker exec -it tomcat02 ping tomcat01 docker exec -it tomcat02 ping tomcat03 docker run -d --name tomcat03 --link tomcat02 tomcat:正向可以ping通，反向不能 docker exec -it tomcat03 ping tomcat02
```

### 自定义网络

```
dockernetwork ls:显示网卡
```

**网络模式**

- bridge : 桥接 docker 大桥
- none: 不配置网络
- host: 和宿主机共享网络
- container: 容器内网络联通

```
直接启动的命令 --net brodge,默认docker0docker run -d -P --name tomcat01 --net bridge tomcatdocker network create --driver bridge --subnet 192.168.0.0/16 --gateway 192.168.0.1 mynet：自定义网络docker network ls：网络列表docker inspect mynet:查看网络
```

### 网络连通

部署redis集群

```
docker network create --subnet 172.38.0.0/16 redis:创建网卡docker network ls:查看服务docker inspect redis
```

通过脚本创建六个redis配置



```
for port in $(seq 1 6);\do \mkdir -p /mydata/redis/node-${port}/conftouch /mydata/redis/node-${port}/conf/redis.confcat << EOF >> /mydata/redis/node-${port}/conf/redis.confport 6379bind 0.0.0.0cluster-enabled yescluster-config-file nodes.confcluster-node-timeout 5000cluster-announce-ip 172.38.0.1${port}cluster-announce-port 6379cluster-announce-bus-port 16379appendonly yesEOFdone
```

```
通过脚本运行六个redisfor port in $(seq 1 6);\do \docker run -p 637${port}:6379 -p 1637${port}:16379 --name redis-${port} \-v /mydata/redis/node-${port}/data:/data \-v /mydata/redis/node-${port}/conf/redis.conf:/etc/redis/redis.conf \-d --net redis --ip 172.38.0.1${port} redis:5.0.9-alpine3.11 redis-server /etc/redis/redis.conf done#停止redis并删除容器for port in $(seq 1 6);\do \docker stop redis-${port}; \docker rm redis-${port};done
```

在cmd中运行jar包

```
java -jar dockerfile-0.0.1-SNAPSHOT.jar
```

springboot生成镜像

```
docker run -d -P --name chen-springboot-web helloidea：启动curl localhost:49155/hello：运行
```

```
docker run  -it  -d -p 9099:80  --name mynginx01 -v /usr/local/nginx/conf/nginx.conf:/etc/nginx/nginx.conf  -v /usr/local/nginx/logs:/var/log/nginx -v /usr/local/nginx/conf.d/default.conf:/etc/nginx/conf.d/default.conf nginx9099 root   /usr/share/nginx/html;
```

