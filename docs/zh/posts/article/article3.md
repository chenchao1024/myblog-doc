---
icon: edit
date: 2022-01-03
category:
  - CategoryA
  - CategoryB
tag:
  - tag A
  - tag B
---

# Redis
NoSQL概述
NoSQL=not only SQL(不仅仅是sql)

泛指非关系型数据库

关系型数据库：表格，行，列



## NoSQL特点

1.方便扩展（数据之间没有关系，很好扩展）

2.大数据量高性能（Redis一秒读取8万次，读取11行）

3.数据类型是多样性的（不需要设计数据库）

4.传统RDBMS和NoSQL

```
传统的RDBMS
-结构化组织
SQL
-数据和关系都存在单独的表中
-严格的一致性
-基础事务
```



```
Nosql
-不仅仅数数据
-没有固定的查询语句
-键值对存储，列存储，文档存储，图形数据库
-最终一致性
-CAP定理和BASE
-高性能，高可用，高可扩
```

```
大数据下的3V和3高
大数据时代的3v：主要描述问题的
1.海量
2.多样
3.实时

大数据时代的3v：主要对程序的要求
1.高可用
2.高并发
3.高性能
```



# Linux命令

https://www.bootschool.net/ascii：banner

/etc/motd

chgrp：更改文件属组

```bash
  chgrp [-R] 属组名 文件名
```

chown：更改文件属主，也可以同时更改文件属组

```bash
chown [–R] 属主名 文件名
chown [-R] 属主名：属组名 文件名
```

chmod：更改文件9个属性

```bash
chmod [-R] xyz 文件或目录   771(124)
```

tac与cat命令刚好相反，文件内容从最后一行开始显示，可以看出 tac 是 cat 的倒着写

```bash
tac filename
```

nl  显示行号

```bash
nl [-bnw] 文件
```

more  一页一页翻动

```bash
more filename
```

less  一页一页翻动，以下实例输出/etc/man.config文件的内容

head  取出文件前面几行

```bash
head [-n number] 文件选项与参数：-n 后面接数字，代表显示几行的意思！默认的情况中，显示前面 10 行！若要显示前 20 行，就得要这样：
```

tail  取出文件后面几行

```bash
tail [-n number] 文件-n ：后面接数字，代表显示几行的意思
```

Linux 链接分两种，一种被称为硬链接（Hard Link），另一种被称为符号链接（Symbolic Link）。

情况下，**ln** 命令产生硬链接。

```bash
[root@kuangshen /]# cd /home[root@kuangshen home]# touch f1  # 创建一个测试文件f1[root@kuangshen home]# lsf1[root@kuangshen home]# ln f1 f2      # 创建f1的一个硬连接文件f2[root@kuangshen home]# ln -s f1 f3   # 创建f1的一个符号连接文件f3[root@kuangshen home]# ls -li        # -i参数显示文件的inode节点信息397247 -rw-r--r-- 2 root  root     0 Mar 13 00:50 f1397247 -rw-r--r-- 2 root  root     0 Mar 13 00:50 f2397248 lrwxrwxrwx 1 root  root     2 Mar 13 00:50 f3 -> f1
```

 echo 字符串输出  >> f1 输出到 f1文件

```bash
echo "I am f1 file" >>f1
```



## vim编辑器

```bash
h 或 向左箭头键(←)	光标向左移动一个字符j 或 向下箭头键(↓)	光标向下移动一个字符k 或 向上箭头键(↑)	光标向上移动一个字符l 或 向右箭头键(→)	光标向右移动一个字符[Ctrl] + [f]	屏幕『向下』移动一页，相当于 [Page Down]按键 (常用)[Ctrl] + [b]	屏幕『向上』移动一页，相当于 [Page Up] 按键 (常用)[Ctrl] + [d]	屏幕『向下』移动半页[Ctrl] + [u]	屏幕『向上』移动半页+	光标移动到非空格符的下一行-	光标移动到非空格符的上一行n< space>	那个 n 表示『数字』，例如 20 。按下数字后再按空格键，光标会向右移动这一行的 n 个字符。0 或功能键[Home]	这是数字『 0 』：移动到这一行的最前面字符处 (常用)$ 或功能键[End]	移动到这一行的最后面字符处(常用)H	光标移动到这个屏幕的最上方那一行的第一个字符M	光标移动到这个屏幕的中央那一行的第一个字符L	光标移动到这个屏幕的最下方那一行的第一个字符G	移动到这个档案的最后一行(常用)nG	n 为数字。移动到这个档案的第 n 行。例如 20G 则会移动到这个档案的第 20 行(可配合 :set nu)gg	移动到这个档案的第一行，相当于 1G 啊！(常用)n< Enter>	n 为数字。光标向下移动 n 行(常用)
```

```bash
搜索替换	 /word	向光标之下寻找一个名称为 word 的字符串。例如要在档案内搜寻 vbird 这个字符串，就输入 /vbird 即可！(常用)?word	向光标之上寻找一个字符串名称为 word 的字符串。n	这个 n 是英文按键。代表重复前一个搜寻的动作。举例来说， 如果刚刚我们执行 /vbird 去向下搜寻 vbird 这个字符串，则按下 n 后，会向下继续搜寻下一个名称为 vbird 的字符串。如果是执行 ?vbird 的话，那么按下 n 则会向上继续搜寻名称为 vbird 的字符串！N	这个 N 是英文按键。与 n 刚好相反，为『反向』进行前一个搜寻动作。例如 /vbird 后，按下 N 则表示『向上』搜寻 vbird 
```



## 账号管理

添加账号 useradd

```bash
useradd 选项 用户名  useradd -m chao
```

删除账号

```bash
userdel -r chao
```

修改帐号

```bash
usermod 选项 用户名
```

```bash
查找文件：ls -l | grep "sudo"/var/spool/mail/root  创建新用户存在的目录设置密码： passwd 用户名    -l 锁定口令，即禁用账号。-u 口令解锁。-d 使账号无口令。-f 强迫用户下次登录时修改口令。删除用户：userdel -r  用户名
```

用户组管理

```bash
groupadd 选项 用户组增加组：groupadd -g 101 group2输出组： groupdel group1
```

修改用户组的属性使用groupmod命令

```bash
groupmod 选项 用户组此命令将组group2的组标识号修改为102。groupmod -g 102 group2 将组group2的标识号改为10000，组名修改为group3。groupmod –g 10000 -n group3 group2
```



## 磁盘管理

```bash
Linux磁盘管理常用命令为 df、du。df ：列出文件系统的整体磁盘使用量du：检查磁盘空间使用量-a ：列出所有的文件系统，包括系统特有的 /proc 等文件系统；-k ：以 KBytes 的容量显示各文件系统；-m ：以 MBytes 的容量显示各文件系统；-h ：以人们较易阅读的 GBytes, MBytes, KBytes 等格式自行显示；-H ：以 M=1000K 取代 M=1024K 的进位方式；-T ：显示文件系统类型, 连同该 partition 的 filesystem 名称 (例如 ext3) 也列出；-i ：不用硬盘容量，而以 inode 的数量来显示
```



```bash
 将容量结果以易读的容量格式显示出来 df -h 将系统内的所有特殊文件格式及名称都列出来df -aT将 /etc 底下的可用的磁盘容量以易读的容量格式显示df -h /etc
```

```bash
du [-ahskm] 文件或目录名称将文件的容量也列出来du -a检查根目录底下每个目录所占用的容量du -sm /*
```

磁盘挂载与卸除

```bash
mount [-t 文件系统] [-L Label名] [-o 额外选项] [-n]  装置文件名  挂载点mount /dev/hdc6 /mnt/hdc6
```

磁盘卸载命令 umount 

```bash
umount [-fn] 装置文件名或挂载点
```



# Redis学习

## redis启动和关闭

```bash
目标路径：cd /usr/local/bin启动：redis-server chenconfig/redis.conf        redis-cli  -p 6379关闭：shutdown查看所有值：keys  *查看开启的进程:ps -ef|grep xxx查找：find / -name xxx复制文件：cp /opt/redis/redis.conf  chenredis解压安装包：tar -zxvf  xxx安装gcc环境:yum install gcc-c++     查看版本号：gcc  -v   make命令：make  install移动文件：mv redis.conf   /optfirewall-cmd --state#关闭防火墙systemctl stop firewalld.service查看所有端口号：netstat -aptn1、开放端口firewall-cmd --zone=public --add-port=5672/tcp --permanent # 开放5672端口firewall-cmd --zone=public --remove-port=5672/tcp --permanent #关闭5672端口firewall-cmd --reload # 配置立即生效2、查看防火墙所有开放的端口firewall-cmd --zone=public --list-ports3.、关闭防火墙如果要开放的端口太多，嫌麻烦，可以关闭防火墙，安全性自行评估systemctl stop firewalld.service4、查看防火墙状态firewall-cmd --state5、查看监听的端口netstat -lnpt6、检查端口被哪个进程占用netstat -lnpt |grep 5672
```



## redis常用命令

```bash
切换数据库：select x(数字)默认有16个数据库查看数据库大小：dbsize清空全部：flushall   清空当前数据库：flushdb redis是单线程的，基于内存操作地的设置密码：config set requirepass获取密码：config get requirepass
```



## redis五大基本数据类型

### **Redis-key类型**

```bash
判断key是否存在：exists xxx移动key：move name 1设置过期： expire name 10(10秒)查看当前key的剩余时间：ttl name查看当前key的类型：type key
```



### **string类型**

```bash
key后追加：append key " "获取字符串的长度：strlen key浏览量加一：incr key浏览量减一：decr key浏览量加10：incrby key 10截取字符串：getrange key 0 10替换值：setrange key 1 value 设置过期时间：setex key 10 " "不存在设置： setnx key value设置多个值：mset key value key2 value2 批量获取多个值：mget k1 k2 k3设置user：1对象 json来保存：mset user:1:name chen user:1:age 2获取user：mget user:1:name  user:1:age如果不存在值，则返回niu,如果存在值，获取原来的值，并设置新的值:getset key value
```



### List类型

所有的list都是由L开头（是双端队列）（key是list集合）

Redis不区分大小写

```bash
添加值：LPUSH key value   RPUSH key value获取值：LRANGE list 0 -1(取值时倒着来的)  移除：LPOP key(移除左边第一个)  RPOP key (移除右边第一个)获取指定下标的元素的值：Lindex key index返回key的长度：LLEN key 移除指定的值：LREM key count(移除的个数) value通过下标截取指定的长度：LTRIM LIST 0(开始的位置)  2(截取的位置)移除列表最后一个元素，将他移动到新的列表中：rpoplpush list list2替换指定下标的值：lset key index value(如果列表不存在就会报错)在指定位置插入值：LINSERT key before(word在之前)|after(word在之后) "word" value小结他实际上是一个链表，before Node after , left , right 都可以插入值如果key不存在，创建新的链表如果key存在，新增内容如果移除了所有值，空链表，也代表不存在!在两边插入或者改动值，效率高!中间元素，相对来说效率会低一点
```



### Set类型

set中的值不能重复且无序的(key是set)

```bash
添加一个值：sadd key value查看值：SISMEMBERS key判断是否存在以这个值：smember key value获取set集合内容的个数:scard key移除指定的元素：srem key value随机筛选元素：SRANDMEMBER key [count(筛选的次数)]随机移除元素：spop key将一个指定的值移动到另外一个集合：smove key key1 value(移动的值)查找2个set集合不同的元素：sdiff key1 key2(显示的是key1中与key2不同的元素)查看2个set的交集：sinter key1 key2查看2个set的并集：sunion key1 key2例如：微博，bilibili六度分割理论
```



### Hash类型

存储的是key-map,这是一个map集合,和string没有区别

```bash
添加一个值：hset key field value (是一个map集合)      hset myhhash fileld chen获取值：hget key fileld                             hget myhhash fileld添加多个值：hmset key field1 hello field2 world     hmset myhash field1 hello field2 world获取多个值：hmget key field1 field2                 hmget myhash field1 field2获取所有值：hgetall key删除某一个值：hdel field获取共有多少键值对：hlen key判断hash某一个值是否存在：hexists key field只获取所有的字段：hkeys key只获取所有的值：hvals key自增：hincrby key field count(增加的个数)添加值的另一种写法：hset user:1 name chenhash更适合存储对象，string更适合存储字符串
```



### Zset类型

是一个有序集合，在set基础上增加了一个值(类似于List集合)(多一个计数位)

```bash
添加一个值：zadd key score(数字，便于排序)  value获取值：zrange key min max按照大小排序：ZRANGEBYSCORE key -inf +inf (从小到大  负无穷，正无穷)  [withscores](附带成绩)移除元素：zrem key value获取集合中的个数：zcard key 按照从大到小排序：ZREVRANGE key 0 -1获取区间的成员数量：zcount key 1 3案列：set排序 工资表排序 排行榜应用实现
```



## 三种特殊数据类型

### geospatial( [地理空间](http://www.redis.cn/commands/geoadd.html))

地理位置(两极无法添加)底层是(Zset)

获得当前定位

```bash
指定单位的参数 unit 必须是以下单位的其中一个：m 表示单位为米。km 表示单位为千米。mi 表示单位为英里。ft 表示单位为英尺。
```



```bash
添加地理位置：geoadd china:city 116.40 39.90 beijing获取地理位置：geopos china:city beijing定位2地之间的距离：geodist key beijing chongqin km找附近的人，以经纬度寻找：georadius china:city 110 30 1000 km(寻找周围半径为1000km的城市)            georadius china:city 120 30 500 km withcoord withdist  count 2以城市寻找：georadiusbymember china:city beijing 1000 km获取成员经纬坐标的geohash表示：geohash china:city beijing shanghai  (返回字符串越近，距离越近)查看全部元素：zrange key 0 -1移除指定元素：zrem key value
```



### Hyperloglog(基数统计)

不重复的元素，是一个基数统计算法

```bash
添加元素：PFadd key a b c  统计存在的元素（不重复）PFcount key合并分支:PFmerge key(生成的目标) key1 key2
```



### Bitmaps(位存储)

```bash
添加状态：setbit key offset(标志位)  value(0或1)    setbit m 0 1查看某一天的值：getbit key offset统计操作：bitcount key  
```



## Redis基本事务

Redis单条命令式保存原子性的，但是事务不保证原子性

Redis没有隔离级别的概念

Redis事务本质：一组命令的集合，一个事务的所有命令都会被序列化，顺序执行

一次性，顺序性，排他性

Redis事务

- 开启事务（multi）
- 命令入队
- 执行事务(exec)

```bash
开启事务：127.0.0.1:6379> multiOK127.0.0.1:6379(TX)> set k1 v1QUEUED127.0.0.1:6379(TX)> set k2 v2QUEUED127.0.0.1:6379(TX)> get k1QUEUED127.0.0.1:6379(TX)> get k2QUEUED127.0.0.1:6379(TX)> exec1) OK2) OK3) "v1"4) "v2"放弃事务：discard
```

编译型异常

运行时异常



## 监控

悲观锁：什么时候都会出错，无论做什么都会加锁

乐观锁什么时候都不会出错，无论做什么都不会加锁，更新数据的时候去判断一下，在此期间是否有人修改过这个数据



## Jedis



## Redis持久化

RDB（Redis Database)

优点：

1. 适合大规模数据恢复
2. 对数据完整性要求不高

缺点：

1. 需要一定的时间间隔，redis意外宕机，最后一次修改数据就没了
2. fork进程时，会占用一定的内存空间

AOF(Append Only File)

将我们所有的命令都记录下来，恢复的时候把文件执行一遍，默认文件无限制追加

aof有错误redis启动不起来

redis提供了redis-check-aof --fix  appendonly.aof

优点：

1. 每一次修改都同步，文件完整性会更好
2. 每秒同步一次，可能丢失一秒数据
3. 从不同步，效率最高的

缺点：

1. 相对于数据文件来说，aof远大于rdb 修复速度慢
2. aof运行速度比rdb慢

## Redis发布订阅

是一种消息通信模式

```bash
订阅频道：subscribe channel(频道名称)发送信息：publish channel  message
```

## Redis主从复制

读写分离，一主二从

作用：

1. 数据冗余：主从复制实现了数据的热备份，是持久化之外的一种数据冗余的方式。
2. 故障恢复：当主节点故障时，从节点可以暂时替代主节点提供服务，是一种服务冗余的方式
3. 负载均衡：在主从复制的基础上，配合读写分离，由主节点进行写操作，从节点进行读操作，分担服务器的负载；尤其是在多读少写的场景下，通过多个从节点分担负载，提高并发量。
4. 高可用基石：主从复制还是哨兵和集群能够实施的基础。 

```
查看主从复制的信息：info replication
```

集群搭建

端口     pid    log名字   rdb 

```bash
配置从机：slaveof host port 手动配置成为主机：slaveof no one  
```

全量复制

增量复制

层层链路

## 哨兵模式

```bash
配置哨兵：sentinel monitor myredis 127.0.0.1  6379  1     sentinel.conf启动项目：redis-sentinel chenconfig/sentinel.conf
```

数字1表示 ：当一个哨兵主观认为主机断开，就可以客观认为主机故障，然后开始选举新的主机。

哨兵的作用：

- 通过发送命令，让Redis服务器返回监控其运行状态，包括主服务器和从服务器。
- 当哨兵监测到master宕机，会自动将slave切换成master，然后通过**发布订阅模式**通知其他的从服务器，修改配置文件，让它们切换主机。

优点：

1. 哨兵集群，基于主从复制模式，所有主从复制的优点，它都有
2. 主从可以切换，故障可以转移，系统的可用性更好
3. 哨兵模式是主从模式的升级，手动到自动，更加健壮

缺点：

1. Redis不好在线扩容，集群容量一旦达到上限，在线扩容就十分麻烦
2. 实现哨兵模式的配置其实是很麻烦的，里面有很多配置项

## 缓存穿透与雪崩

### 缓存穿透（查不到）

**布隆过滤器**

对所有可能查询的参数以Hash的形式存储，以便快速确定是否存在这个值，在控制层先进行拦截校验，校验不通过直接打回，减轻了存储系统的压力。

**缓存空对象**

一次请求若在缓存和数据库中都没找到，就在缓存中方一个空对象用于处理后续这个请求。

缓存击穿（量太大，缓存过期）

 相较于缓存穿透，缓存击穿的目的性更强，一个存在的key，在缓存过期的一刻，同时有大量的请求，这些请求都会击穿到DB，造成瞬时DB请求量大、压力骤增。这就是缓存被击穿，只是针对其中某个key的缓存不可用而导致击穿，但是其他的key依然可以使用缓存响应。

### 缓存击穿（量太大，缓存过期）

设置热点数据永不过期

这样就不会出现热点数据过期的情况，但是当Redis内存空间满的时候也会清理部分数据，而且此种方案会占用空间，一旦热点数据多了起来，就会占用部分空间。

加互斥锁(分布式锁)

在访问key之前，采用SETNX（set if not exists）来设置另一个短期key来锁住当前key的访问，访问结束再删除该短期key。保证同时刻只有一个线程访问。这样对锁的要求就十分高。


### 缓存雪崩

redis高可用

这个思想的含义是，既然redis有可能挂掉，那我多增设几台redis，这样一台挂掉之后其他的还可以继续工作，其实就是搭建的集群

限流降级

这个解决方案的思想是，在缓存失效后，通过加锁或者队列来控制读数据库写缓存的线程数量。比如对某个key只允许一个线程查询数据和写缓存，其他线程等待。

数据预热

数据加热的含义就是在正式部署之前，我先把可能的数据先预先访问一遍，这样部分可能大量访问的数据就会加载到缓存中。在即将发生大并发访问前手动触发加载缓存不同的key，设置不同的过期时间，让缓存失效的时间点尽量均匀。
