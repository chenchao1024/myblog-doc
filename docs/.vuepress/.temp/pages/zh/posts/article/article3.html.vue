<template><h1 id="redis" tabindex="-1"><a class="header-anchor" href="#redis" aria-hidden="true">#</a> Redis</h1>
<p>NoSQL概述
NoSQL=not only SQL(不仅仅是sql)</p>
<p>泛指非关系型数据库</p>
<p>关系型数据库：表格，行，列</p>
<h2 id="nosql特点" tabindex="-1"><a class="header-anchor" href="#nosql特点" aria-hidden="true">#</a> NoSQL特点</h2>
<p>1.方便扩展（数据之间没有关系，很好扩展）</p>
<p>2.大数据量高性能（Redis一秒读取8万次，读取11行）</p>
<p>3.数据类型是多样性的（不需要设计数据库）</p>
<p>4.传统RDBMS和NoSQL</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>传统的RDBMS
-结构化组织
SQL
-数据和关系都存在单独的表中
-严格的一致性
-基础事务
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>Nosql
-不仅仅数数据
-没有固定的查询语句
-键值对存储，列存储，文档存储，图形数据库
-最终一致性
-CAP定理和BASE
-高性能，高可用，高可扩
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>大数据下的3V和3高
大数据时代的3v：主要描述问题的
1.海量
2.多样
3.实时

大数据时代的3v：主要对程序的要求
1.高可用
2.高并发
3.高性能
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h1 id="linux命令" tabindex="-1"><a class="header-anchor" href="#linux命令" aria-hidden="true">#</a> Linux命令</h1>
<p>https://www.bootschool.net/ascii：banner</p>
<p>/etc/motd</p>
<p>chgrp：更改文件属组</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>  <span class="token function">chgrp</span> <span class="token punctuation">[</span>-R<span class="token punctuation">]</span> 属组名 文件名
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>chown：更改文件属主，也可以同时更改文件属组</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">chown</span> <span class="token punctuation">[</span>–R<span class="token punctuation">]</span> 属主名 文件名
<span class="token function">chown</span> <span class="token punctuation">[</span>-R<span class="token punctuation">]</span> 属主名：属组名 文件名
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>chmod：更改文件9个属性</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">chmod</span> <span class="token punctuation">[</span>-R<span class="token punctuation">]</span> xyz 文件或目录   <span class="token number">771</span><span class="token punctuation">(</span><span class="token number">124</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>tac与cat命令刚好相反，文件内容从最后一行开始显示，可以看出 tac 是 cat 的倒着写</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">tac</span> filename
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>nl  显示行号</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">nl</span> <span class="token punctuation">[</span>-bnw<span class="token punctuation">]</span> 文件
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>more  一页一页翻动</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">more</span> filename
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>less  一页一页翻动，以下实例输出/etc/man.config文件的内容</p>
<p>head  取出文件前面几行</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">head</span> <span class="token punctuation">[</span>-n number<span class="token punctuation">]</span> 文件选项与参数：-n 后面接数字，代表显示几行的意思！默认的情况中，显示前面 <span class="token number">10</span> 行！若要显示前 <span class="token number">20</span> 行，就得要这样：
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>tail  取出文件后面几行</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">tail</span> <span class="token punctuation">[</span>-n number<span class="token punctuation">]</span> 文件-n ：后面接数字，代表显示几行的意思
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Linux 链接分两种，一种被称为硬链接（Hard Link），另一种被称为符号链接（Symbolic Link）。</p>
<p>情况下，<strong>ln</strong> 命令产生硬链接。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@kuangshen /<span class="token punctuation">]</span><span class="token comment"># cd /home[root@kuangshen home]# touch f1  # 创建一个测试文件f1[root@kuangshen home]# lsf1[root@kuangshen home]# ln f1 f2      # 创建f1的一个硬连接文件f2[root@kuangshen home]# ln -s f1 f3   # 创建f1的一个符号连接文件f3[root@kuangshen home]# ls -li        # -i参数显示文件的inode节点信息397247 -rw-r--r-- 2 root  root     0 Mar 13 00:50 f1397247 -rw-r--r-- 2 root  root     0 Mar 13 00:50 f2397248 lrwxrwxrwx 1 root  root     2 Mar 13 00:50 f3 -> f1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>echo 字符串输出  &gt;&gt; f1 输出到 f1文件</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">"I am f1 file"</span> <span class="token operator">>></span>f1
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="vim编辑器" tabindex="-1"><a class="header-anchor" href="#vim编辑器" aria-hidden="true">#</a> vim编辑器</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>h 或 向左箭头键<span class="token punctuation">(</span>←<span class="token punctuation">)</span>	光标向左移动一个字符j 或 向下箭头键<span class="token punctuation">(</span>↓<span class="token punctuation">)</span>	光标向下移动一个字符k 或 向上箭头键<span class="token punctuation">(</span>↑<span class="token punctuation">)</span>	光标向上移动一个字符l 或 向右箭头键<span class="token punctuation">(</span>→<span class="token punctuation">)</span>	光标向右移动一个字符<span class="token punctuation">[</span>Ctrl<span class="token punctuation">]</span> + <span class="token punctuation">[</span>f<span class="token punctuation">]</span>	屏幕『向下』移动一页，相当于 <span class="token punctuation">[</span>Page Down<span class="token punctuation">]</span>按键 <span class="token punctuation">(</span>常用<span class="token punctuation">)</span><span class="token punctuation">[</span>Ctrl<span class="token punctuation">]</span> + <span class="token punctuation">[</span>b<span class="token punctuation">]</span>	屏幕『向上』移动一页，相当于 <span class="token punctuation">[</span>Page Up<span class="token punctuation">]</span> 按键 <span class="token punctuation">(</span>常用<span class="token punctuation">)</span><span class="token punctuation">[</span>Ctrl<span class="token punctuation">]</span> + <span class="token punctuation">[</span>d<span class="token punctuation">]</span>	屏幕『向下』移动半页<span class="token punctuation">[</span>Ctrl<span class="token punctuation">]</span> + <span class="token punctuation">[</span>u<span class="token punctuation">]</span>	屏幕『向上』移动半页+	光标移动到非空格符的下一行-	光标移动到非空格符的上一行n<span class="token operator">&lt;</span> space<span class="token operator">></span>	那个 n 表示『数字』，例如 <span class="token number">20</span> 。按下数字后再按空格键，光标会向右移动这一行的 n 个字符。0 或功能键<span class="token punctuation">[</span>Home<span class="token punctuation">]</span>	这是数字『 <span class="token number">0</span> 』：移动到这一行的最前面字符处 <span class="token punctuation">(</span>常用<span class="token punctuation">)</span>$ 或功能键<span class="token punctuation">[</span>End<span class="token punctuation">]</span>	移动到这一行的最后面字符处<span class="token punctuation">(</span>常用<span class="token punctuation">)</span>H	光标移动到这个屏幕的最上方那一行的第一个字符M	光标移动到这个屏幕的中央那一行的第一个字符L	光标移动到这个屏幕的最下方那一行的第一个字符G	移动到这个档案的最后一行<span class="token punctuation">(</span>常用<span class="token punctuation">)</span>nG	n 为数字。移动到这个档案的第 n 行。例如 20G 则会移动到这个档案的第 <span class="token number">20</span> 行<span class="token punctuation">(</span>可配合 :set nu<span class="token punctuation">)</span>gg	移动到这个档案的第一行，相当于 1G 啊！<span class="token punctuation">(</span>常用<span class="token punctuation">)</span>n<span class="token operator">&lt;</span> Enter<span class="token operator">></span>	n 为数字。光标向下移动 n 行<span class="token punctuation">(</span>常用<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>搜索替换	 /word	向光标之下寻找一个名称为 word 的字符串。例如要在档案内搜寻 vbird 这个字符串，就输入 /vbird 即可！<span class="token punctuation">(</span>常用<span class="token punctuation">)</span>?word	向光标之上寻找一个字符串名称为 word 的字符串。n	这个 n 是英文按键。代表重复前一个搜寻的动作。举例来说， 如果刚刚我们执行 /vbird 去向下搜寻 vbird 这个字符串，则按下 n 后，会向下继续搜寻下一个名称为 vbird 的字符串。如果是执行 ?vbird 的话，那么按下 n 则会向上继续搜寻名称为 vbird 的字符串！N	这个 N 是英文按键。与 n 刚好相反，为『反向』进行前一个搜寻动作。例如 /vbird 后，按下 N 则表示『向上』搜寻 vbird 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="账号管理" tabindex="-1"><a class="header-anchor" href="#账号管理" aria-hidden="true">#</a> 账号管理</h2>
<p>添加账号 useradd</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">useradd</span> 选项 用户名  <span class="token function">useradd</span> -m chao
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>删除账号</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">userdel</span> -r chao
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>修改帐号</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">usermod</span> 选项 用户名
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>查找文件：ls -l <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">"sudo"</span>/var/spool/mail/root  创建新用户存在的目录设置密码： <span class="token function">passwd</span> 用户名    -l 锁定口令，即禁用账号。-u 口令解锁。-d 使账号无口令。-f 强迫用户下次登录时修改口令。删除用户：userdel -r  用户名
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>用户组管理</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">groupadd</span> 选项 用户组增加组：groupadd -g <span class="token number">101</span> group2输出组： <span class="token function">groupdel</span> group1
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>修改用户组的属性使用groupmod命令</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">groupmod</span> 选项 用户组此命令将组group2的组标识号修改为102。groupmod -g <span class="token number">102</span> group2 将组group2的标识号改为10000，组名修改为group3。groupmod –g <span class="token number">10000</span> -n group3 group2
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="磁盘管理" tabindex="-1"><a class="header-anchor" href="#磁盘管理" aria-hidden="true">#</a> 磁盘管理</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>Linux磁盘管理常用命令为 df、du。df ：列出文件系统的整体磁盘使用量du：检查磁盘空间使用量-a ：列出所有的文件系统，包括系统特有的 /proc 等文件系统；-k ：以 KBytes 的容量显示各文件系统；-m ：以 MBytes 的容量显示各文件系统；-h ：以人们较易阅读的 GBytes, MBytes, KBytes 等格式自行显示；-H ：以 <span class="token assign-left variable">M</span><span class="token operator">=</span>1000K 取代 <span class="token assign-left variable">M</span><span class="token operator">=</span>1024K 的进位方式；-T ：显示文件系统类型, 连同该 partition 的 filesystem 名称 <span class="token punctuation">(</span>例如 ext3<span class="token punctuation">)</span> 也列出；-i ：不用硬盘容量，而以 inode 的数量来显示
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code> 将容量结果以易读的容量格式显示出来 <span class="token function">df</span> -h 将系统内的所有特殊文件格式及名称都列出来df -aT将 /etc 底下的可用的磁盘容量以易读的容量格式显示df -h /etc
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">du</span> <span class="token punctuation">[</span>-ahskm<span class="token punctuation">]</span> 文件或目录名称将文件的容量也列出来du -a检查根目录底下每个目录所占用的容量du -sm /*
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>磁盘挂载与卸除</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">mount</span> <span class="token punctuation">[</span>-t 文件系统<span class="token punctuation">]</span> <span class="token punctuation">[</span>-L Label名<span class="token punctuation">]</span> <span class="token punctuation">[</span>-o 额外选项<span class="token punctuation">]</span> <span class="token punctuation">[</span>-n<span class="token punctuation">]</span>  装置文件名  挂载点mount /dev/hdc6 /mnt/hdc6
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>磁盘卸载命令 umount</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">umount</span> <span class="token punctuation">[</span>-fn<span class="token punctuation">]</span> 装置文件名或挂载点
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h1 id="redis学习" tabindex="-1"><a class="header-anchor" href="#redis学习" aria-hidden="true">#</a> Redis学习</h1>
<h2 id="redis启动和关闭" tabindex="-1"><a class="header-anchor" href="#redis启动和关闭" aria-hidden="true">#</a> redis启动和关闭</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>目标路径：cd /usr/local/bin启动：redis-server chenconfig/redis.conf        redis-cli  -p <span class="token number">6379</span>关闭：shutdown查看所有值：keys  *查看开启的进程:ps -ef<span class="token operator">|</span><span class="token function">grep</span> xxx查找：find / -name xxx复制文件：cp /opt/redis/redis.conf  chenredis解压安装包：tar -zxvf  xxx安装gcc环境:yum <span class="token function">install</span> gcc-c++     查看版本号：gcc  -v   make命令：make  install移动文件：mv redis.conf   /optfirewall-cmd --state<span class="token comment">#关闭防火墙systemctl stop firewalld.service查看所有端口号：netstat -aptn1、开放端口firewall-cmd --zone=public --add-port=5672/tcp --permanent # 开放5672端口firewall-cmd --zone=public --remove-port=5672/tcp --permanent #关闭5672端口firewall-cmd --reload # 配置立即生效2、查看防火墙所有开放的端口firewall-cmd --zone=public --list-ports3.、关闭防火墙如果要开放的端口太多，嫌麻烦，可以关闭防火墙，安全性自行评估systemctl stop firewalld.service4、查看防火墙状态firewall-cmd --state5、查看监听的端口netstat -lnpt6、检查端口被哪个进程占用netstat -lnpt |grep 5672</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="redis常用命令" tabindex="-1"><a class="header-anchor" href="#redis常用命令" aria-hidden="true">#</a> redis常用命令</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>切换数据库：select x<span class="token punctuation">(</span>数字<span class="token punctuation">)</span>默认有16个数据库查看数据库大小：dbsize清空全部：flushall   清空当前数据库：flushdb redis是单线程的，基于内存操作地的设置密码：config <span class="token builtin class-name">set</span> requirepass获取密码：config get requirepass
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="redis五大基本数据类型" tabindex="-1"><a class="header-anchor" href="#redis五大基本数据类型" aria-hidden="true">#</a> redis五大基本数据类型</h2>
<h3 id="redis-key类型" tabindex="-1"><a class="header-anchor" href="#redis-key类型" aria-hidden="true">#</a> <strong>Redis-key类型</strong></h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>判断key是否存在：exists xxx移动key：move name <span class="token number">1</span>设置过期： expire name <span class="token number">10</span><span class="token punctuation">(</span><span class="token number">10</span>秒<span class="token punctuation">)</span>查看当前key的剩余时间：ttl name查看当前key的类型：type key
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="string类型" tabindex="-1"><a class="header-anchor" href="#string类型" aria-hidden="true">#</a> <strong>string类型</strong></h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>key后追加：append key <span class="token string">" "</span>获取字符串的长度：strlen key浏览量加一：incr key浏览量减一：decr key浏览量加10：incrby key <span class="token number">10</span>截取字符串：getrange key <span class="token number">0</span> <span class="token number">10</span>替换值：setrange key <span class="token number">1</span> value 设置过期时间：setex key <span class="token number">10</span> <span class="token string">" "</span>不存在设置： setnx key value设置多个值：mset key value key2 value2 批量获取多个值：mget k1 k2 k3设置user：1对象 json来保存：mset user:1:name chen user:1:age <span class="token number">2</span>获取user：mget user:1:name  user:1:age如果不存在值，则返回niu,如果存在值，获取原来的值，并设置新的值:getset key value
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="list类型" tabindex="-1"><a class="header-anchor" href="#list类型" aria-hidden="true">#</a> List类型</h3>
<p>所有的list都是由L开头（是双端队列）（key是list集合）</p>
<p>Redis不区分大小写</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>添加值：LPUSH key value   RPUSH key value获取值：LRANGE list <span class="token number">0</span> -1<span class="token punctuation">(</span>取值时倒着来的<span class="token punctuation">)</span>  移除：LPOP key<span class="token punctuation">(</span>移除左边第一个<span class="token punctuation">)</span>  RPOP key <span class="token punctuation">(</span>移除右边第一个<span class="token punctuation">)</span>获取指定下标的元素的值：Lindex key index返回key的长度：LLEN key 移除指定的值：LREM key count<span class="token punctuation">(</span>移除的个数<span class="token punctuation">)</span> value通过下标截取指定的长度：LTRIM LIST <span class="token number">0</span><span class="token punctuation">(</span>开始的位置<span class="token punctuation">)</span>  <span class="token number">2</span><span class="token punctuation">(</span>截取的位置<span class="token punctuation">)</span>移除列表最后一个元素，将他移动到新的列表中：rpoplpush list list2替换指定下标的值：lset key index value<span class="token punctuation">(</span>如果列表不存在就会报错<span class="token punctuation">)</span>在指定位置插入值：LINSERT key before<span class="token punctuation">(</span>word在之前<span class="token punctuation">)</span><span class="token operator">|</span>after<span class="token punctuation">(</span>word在之后<span class="token punctuation">)</span> <span class="token string">"word"</span> value小结他实际上是一个链表，before Node after , left , right 都可以插入值如果key不存在，创建新的链表如果key存在，新增内容如果移除了所有值，空链表，也代表不存在<span class="token operator">!</span>在两边插入或者改动值，效率高<span class="token operator">!</span>中间元素，相对来说效率会低一点
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="set类型" tabindex="-1"><a class="header-anchor" href="#set类型" aria-hidden="true">#</a> Set类型</h3>
<p>set中的值不能重复且无序的(key是set)</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>添加一个值：sadd key value查看值：SISMEMBERS key判断是否存在以这个值：smember key value获取set集合内容的个数:scard key移除指定的元素：srem key value随机筛选元素：SRANDMEMBER key <span class="token punctuation">[</span>count<span class="token punctuation">(</span>筛选的次数<span class="token punctuation">)</span><span class="token punctuation">]</span>随机移除元素：spop key将一个指定的值移动到另外一个集合：smove key key1 value<span class="token punctuation">(</span>移动的值<span class="token punctuation">)</span>查找2个set集合不同的元素：sdiff key1 key2<span class="token punctuation">(</span>显示的是key1中与key2不同的元素<span class="token punctuation">)</span>查看2个set的交集：sinter key1 key2查看2个set的并集：sunion key1 key2例如：微博，bilibili六度分割理论
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="hash类型" tabindex="-1"><a class="header-anchor" href="#hash类型" aria-hidden="true">#</a> Hash类型</h3>
<p>存储的是key-map,这是一个map集合,和string没有区别</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>添加一个值：hset key field value <span class="token punctuation">(</span>是一个map集合<span class="token punctuation">)</span>      hset myhhash fileld chen获取值：hget key fileld                             hget myhhash fileld添加多个值：hmset key field1 hello field2 world     hmset myhash field1 hello field2 world获取多个值：hmget key field1 field2                 hmget myhash field1 field2获取所有值：hgetall key删除某一个值：hdel field获取共有多少键值对：hlen key判断hash某一个值是否存在：hexists key field只获取所有的字段：hkeys key只获取所有的值：hvals key自增：hincrby key field count<span class="token punctuation">(</span>增加的个数<span class="token punctuation">)</span>添加值的另一种写法：hset user:1 name chenhash更适合存储对象，string更适合存储字符串
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="zset类型" tabindex="-1"><a class="header-anchor" href="#zset类型" aria-hidden="true">#</a> Zset类型</h3>
<p>是一个有序集合，在set基础上增加了一个值(类似于List集合)(多一个计数位)</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>添加一个值：zadd key score<span class="token punctuation">(</span>数字，便于排序<span class="token punctuation">)</span>  value获取值：zrange key min max按照大小排序：ZRANGEBYSCORE key -inf +inf <span class="token punctuation">(</span>从小到大  负无穷，正无穷<span class="token punctuation">)</span>  <span class="token punctuation">[</span>withscores<span class="token punctuation">]</span><span class="token punctuation">(</span>附带成绩<span class="token punctuation">)</span>移除元素：zrem key value获取集合中的个数：zcard key 按照从大到小排序：ZREVRANGE key <span class="token number">0</span> -1获取区间的成员数量：zcount key <span class="token number">1</span> <span class="token number">3</span>案列：set排序 工资表排序 排行榜应用实现
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="三种特殊数据类型" tabindex="-1"><a class="header-anchor" href="#三种特殊数据类型" aria-hidden="true">#</a> 三种特殊数据类型</h2>
<h3 id="geospatial-地理空间" tabindex="-1"><a class="header-anchor" href="#geospatial-地理空间" aria-hidden="true">#</a> geospatial( <a href="http://www.redis.cn/commands/geoadd.html" target="_blank" rel="noopener noreferrer">地理空间<ExternalLinkIcon/></a>)</h3>
<p>地理位置(两极无法添加)底层是(Zset)</p>
<p>获得当前定位</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>指定单位的参数 unit 必须是以下单位的其中一个：m 表示单位为米。km 表示单位为千米。mi 表示单位为英里。ft 表示单位为英尺。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>添加地理位置：geoadd china:city <span class="token number">116.40</span> <span class="token number">39.90</span> beijing获取地理位置：geopos china:city beijing定位2地之间的距离：geodist key beijing chongqin km找附近的人，以经纬度寻找：georadius china:city <span class="token number">110</span> <span class="token number">30</span> <span class="token number">1000</span> km<span class="token punctuation">(</span>寻找周围半径为1000km的城市<span class="token punctuation">)</span>            georadius china:city <span class="token number">120</span> <span class="token number">30</span> <span class="token number">500</span> km withcoord withdist  count <span class="token number">2</span>以城市寻找：georadiusbymember china:city beijing <span class="token number">1000</span> km获取成员经纬坐标的geohash表示：geohash china:city beijing shanghai  <span class="token punctuation">(</span>返回字符串越近，距离越近<span class="token punctuation">)</span>查看全部元素：zrange key <span class="token number">0</span> -1移除指定元素：zrem key value
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="hyperloglog-基数统计" tabindex="-1"><a class="header-anchor" href="#hyperloglog-基数统计" aria-hidden="true">#</a> Hyperloglog(基数统计)</h3>
<p>不重复的元素，是一个基数统计算法</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>添加元素：PFadd key a b c  统计存在的元素（不重复）PFcount key合并分支:PFmerge key<span class="token punctuation">(</span>生成的目标<span class="token punctuation">)</span> key1 key2
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="bitmaps-位存储" tabindex="-1"><a class="header-anchor" href="#bitmaps-位存储" aria-hidden="true">#</a> Bitmaps(位存储)</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>添加状态：setbit key offset<span class="token punctuation">(</span>标志位<span class="token punctuation">)</span>  value<span class="token punctuation">(</span><span class="token number">0</span>或1<span class="token punctuation">)</span>    setbit m <span class="token number">0</span> <span class="token number">1</span>查看某一天的值：getbit key offset统计操作：bitcount key  
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="redis基本事务" tabindex="-1"><a class="header-anchor" href="#redis基本事务" aria-hidden="true">#</a> Redis基本事务</h2>
<p>Redis单条命令式保存原子性的，但是事务不保证原子性</p>
<p>Redis没有隔离级别的概念</p>
<p>Redis事务本质：一组命令的集合，一个事务的所有命令都会被序列化，顺序执行</p>
<p>一次性，顺序性，排他性</p>
<p>Redis事务</p>
<ul>
<li>开启事务（multi）</li>
<li>命令入队</li>
<li>执行事务(exec)</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>开启事务：127.0.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>></span> multiOK127.0.0.1:6379<span class="token punctuation">(</span>TX<span class="token punctuation">)</span><span class="token operator">></span> <span class="token builtin class-name">set</span> k1 v1QUEUED127.0.0.1:6379<span class="token punctuation">(</span>TX<span class="token punctuation">)</span><span class="token operator">></span> <span class="token builtin class-name">set</span> k2 v2QUEUED127.0.0.1:6379<span class="token punctuation">(</span>TX<span class="token punctuation">)</span><span class="token operator">></span> get k1QUEUED127.0.0.1:6379<span class="token punctuation">(</span>TX<span class="token punctuation">)</span><span class="token operator">></span> get k2QUEUED127.0.0.1:6379<span class="token punctuation">(</span>TX<span class="token punctuation">)</span><span class="token operator">></span> exec1<span class="token punctuation">)</span> OK2<span class="token punctuation">)</span> OK3<span class="token punctuation">)</span> <span class="token string">"v1"</span><span class="token number">4</span><span class="token punctuation">)</span> <span class="token string">"v2"</span>放弃事务：discard
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>编译型异常</p>
<p>运行时异常</p>
<h2 id="监控" tabindex="-1"><a class="header-anchor" href="#监控" aria-hidden="true">#</a> 监控</h2>
<p>悲观锁：什么时候都会出错，无论做什么都会加锁</p>
<p>乐观锁什么时候都不会出错，无论做什么都不会加锁，更新数据的时候去判断一下，在此期间是否有人修改过这个数据</p>
<h2 id="jedis" tabindex="-1"><a class="header-anchor" href="#jedis" aria-hidden="true">#</a> Jedis</h2>
<h2 id="redis持久化" tabindex="-1"><a class="header-anchor" href="#redis持久化" aria-hidden="true">#</a> Redis持久化</h2>
<p>RDB（Redis Database)</p>
<p>优点：</p>
<ol>
<li>适合大规模数据恢复</li>
<li>对数据完整性要求不高</li>
</ol>
<p>缺点：</p>
<ol>
<li>需要一定的时间间隔，redis意外宕机，最后一次修改数据就没了</li>
<li>fork进程时，会占用一定的内存空间</li>
</ol>
<p>AOF(Append Only File)</p>
<p>将我们所有的命令都记录下来，恢复的时候把文件执行一遍，默认文件无限制追加</p>
<p>aof有错误redis启动不起来</p>
<p>redis提供了redis-check-aof --fix  appendonly.aof</p>
<p>优点：</p>
<ol>
<li>每一次修改都同步，文件完整性会更好</li>
<li>每秒同步一次，可能丢失一秒数据</li>
<li>从不同步，效率最高的</li>
</ol>
<p>缺点：</p>
<ol>
<li>相对于数据文件来说，aof远大于rdb 修复速度慢</li>
<li>aof运行速度比rdb慢</li>
</ol>
<h2 id="redis发布订阅" tabindex="-1"><a class="header-anchor" href="#redis发布订阅" aria-hidden="true">#</a> Redis发布订阅</h2>
<p>是一种消息通信模式</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>订阅频道：subscribe channel<span class="token punctuation">(</span>频道名称<span class="token punctuation">)</span>发送信息：publish channel  message
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="redis主从复制" tabindex="-1"><a class="header-anchor" href="#redis主从复制" aria-hidden="true">#</a> Redis主从复制</h2>
<p>读写分离，一主二从</p>
<p>作用：</p>
<ol>
<li>数据冗余：主从复制实现了数据的热备份，是持久化之外的一种数据冗余的方式。</li>
<li>故障恢复：当主节点故障时，从节点可以暂时替代主节点提供服务，是一种服务冗余的方式</li>
<li>负载均衡：在主从复制的基础上，配合读写分离，由主节点进行写操作，从节点进行读操作，分担服务器的负载；尤其是在多读少写的场景下，通过多个从节点分担负载，提高并发量。</li>
<li>高可用基石：主从复制还是哨兵和集群能够实施的基础。</li>
</ol>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>查看主从复制的信息：info replication
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>集群搭建</p>
<p>端口     pid    log名字   rdb</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>配置从机：slaveof <span class="token function">host</span> port 手动配置成为主机：slaveof no one  
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>全量复制</p>
<p>增量复制</p>
<p>层层链路</p>
<h2 id="哨兵模式" tabindex="-1"><a class="header-anchor" href="#哨兵模式" aria-hidden="true">#</a> 哨兵模式</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>配置哨兵：sentinel monitor myredis <span class="token number">127.0</span>.0.1  <span class="token number">6379</span>  <span class="token number">1</span>     sentinel.conf启动项目：redis-sentinel chenconfig/sentinel.conf
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>数字1表示 ：当一个哨兵主观认为主机断开，就可以客观认为主机故障，然后开始选举新的主机。</p>
<p>哨兵的作用：</p>
<ul>
<li>通过发送命令，让Redis服务器返回监控其运行状态，包括主服务器和从服务器。</li>
<li>当哨兵监测到master宕机，会自动将slave切换成master，然后通过<strong>发布订阅模式</strong>通知其他的从服务器，修改配置文件，让它们切换主机。</li>
</ul>
<p>优点：</p>
<ol>
<li>哨兵集群，基于主从复制模式，所有主从复制的优点，它都有</li>
<li>主从可以切换，故障可以转移，系统的可用性更好</li>
<li>哨兵模式是主从模式的升级，手动到自动，更加健壮</li>
</ol>
<p>缺点：</p>
<ol>
<li>Redis不好在线扩容，集群容量一旦达到上限，在线扩容就十分麻烦</li>
<li>实现哨兵模式的配置其实是很麻烦的，里面有很多配置项</li>
</ol>
<h2 id="缓存穿透与雪崩" tabindex="-1"><a class="header-anchor" href="#缓存穿透与雪崩" aria-hidden="true">#</a> 缓存穿透与雪崩</h2>
<h3 id="缓存穿透-查不到" tabindex="-1"><a class="header-anchor" href="#缓存穿透-查不到" aria-hidden="true">#</a> 缓存穿透（查不到）</h3>
<p><strong>布隆过滤器</strong></p>
<p>对所有可能查询的参数以Hash的形式存储，以便快速确定是否存在这个值，在控制层先进行拦截校验，校验不通过直接打回，减轻了存储系统的压力。</p>
<p><strong>缓存空对象</strong></p>
<p>一次请求若在缓存和数据库中都没找到，就在缓存中方一个空对象用于处理后续这个请求。</p>
<p>缓存击穿（量太大，缓存过期）</p>
<p>相较于缓存穿透，缓存击穿的目的性更强，一个存在的key，在缓存过期的一刻，同时有大量的请求，这些请求都会击穿到DB，造成瞬时DB请求量大、压力骤增。这就是缓存被击穿，只是针对其中某个key的缓存不可用而导致击穿，但是其他的key依然可以使用缓存响应。</p>
<h3 id="缓存击穿-量太大-缓存过期" tabindex="-1"><a class="header-anchor" href="#缓存击穿-量太大-缓存过期" aria-hidden="true">#</a> 缓存击穿（量太大，缓存过期）</h3>
<p>设置热点数据永不过期</p>
<p>这样就不会出现热点数据过期的情况，但是当Redis内存空间满的时候也会清理部分数据，而且此种方案会占用空间，一旦热点数据多了起来，就会占用部分空间。</p>
<p>加互斥锁(分布式锁)</p>
<p>在访问key之前，采用SETNX（set if not exists）来设置另一个短期key来锁住当前key的访问，访问结束再删除该短期key。保证同时刻只有一个线程访问。这样对锁的要求就十分高。</p>
<h3 id="缓存雪崩" tabindex="-1"><a class="header-anchor" href="#缓存雪崩" aria-hidden="true">#</a> 缓存雪崩</h3>
<p>redis高可用</p>
<p>这个思想的含义是，既然redis有可能挂掉，那我多增设几台redis，这样一台挂掉之后其他的还可以继续工作，其实就是搭建的集群</p>
<p>限流降级</p>
<p>这个解决方案的思想是，在缓存失效后，通过加锁或者队列来控制读数据库写缓存的线程数量。比如对某个key只允许一个线程查询数据和写缓存，其他线程等待。</p>
<p>数据预热</p>
<p>数据加热的含义就是在正式部署之前，我先把可能的数据先预先访问一遍，这样部分可能大量访问的数据就会加载到缓存中。在即将发生大并发访问前手动触发加载缓存不同的key，设置不同的过期时间，让缓存失效的时间点尽量均匀。</p>
</template>
