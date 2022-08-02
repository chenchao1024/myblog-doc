<template><h1 id="elacticsearch" tabindex="-1"><a class="header-anchor" href="#elacticsearch" aria-hidden="true">#</a> ElacticSearch</h1>
<h2 id="什么是elasticsearch" tabindex="-1"><a class="header-anchor" href="#什么是elasticsearch" aria-hidden="true">#</a> 什么是Elasticsearch？</h2>
<p>Elasticsearch是一个基于<a href="https://baike.baidu.com/item/Lucene/6753302" target="_blank" rel="noopener noreferrer">Lucene<ExternalLinkIcon/></a>的搜索服务器。它提供了一个分布式多用户能力的<a href="https://baike.baidu.com/item/%E5%85%A8%E6%96%87%E6%90%9C%E7%B4%A2%E5%BC%95%E6%93%8E/7847410" target="_blank" rel="noopener noreferrer">全文搜索引擎<ExternalLinkIcon/></a>，基于RESTful web接口。Elasticsearch是用Java语言开发的，并作为Apache许可条款下的开放源码发布，是一种流行的企业级搜索引擎。Elasticsearch用于<a href="https://baike.baidu.com/item/%E4%BA%91%E8%AE%A1%E7%AE%97/9969353" target="_blank" rel="noopener noreferrer">云计算<ExternalLinkIcon/></a>中，能够达到实时搜索，稳定，可靠，快速，安装使用方便。官方客户端在Java、.NET（C#）、PHP、Python、Apache Groovy、Ruby和许多其他语言中都是可用的。根据DB-Engines的排名显示，Elasticsearch是最受欢迎的企业搜索引擎，其次是Apache Solr，也是基于Lucene。</p>
<p>搜索 全文搜索引擎</p>
<p>库，表，记录</p>
<p>Lucene是一套信息检索工具包 ---- jar包!不包含搜索引擎系统</p>
<p>包含的︰索引结构!读写索引的工具!排序，搜索规则....工具类</p>
<h2 id="lucene和elasticsearch关系" tabindex="-1"><a class="header-anchor" href="#lucene和elasticsearch关系" aria-hidden="true">#</a> Lucene和Elasticsearch关系？</h2>
<p>ElacticSearch是基于Lucene做了一些封装和增强</p>
<p>ElacticSearch默认端口是9200</p>
<p>ElacticSearch通信地址：9300</p>
<p>elasticsearch head默认端口：9100</p>
<p>kibana默认端口：5601</p>
<p>存在跨域问题</p>
<p>elasticsearch.yml</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>http.cors.enabled: true 
http.cors.allow-origin: "*"
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>ELK是Elasticsearch、Logstash、Kibana三大开源框架（日志分析架构技术栈）</p>
<p>收集清洗数据--&gt;搜索，存储--&gt; Kibana</p>
<p>Elasticsearch是面向文档的</p>
<p>最小单元是文档（row对应数据库中以一行记录)</p>
<p>倒排索引查找文档</p>
<h2 id="常用索引指令" tabindex="-1"><a class="header-anchor" href="#常用索引指令" aria-hidden="true">#</a> 常用索引指令</h2>
<p>ik分词器</p>
<p>IK提供了两个分词算法:ik_smart和ik_max_word，其中ik_smart为最少切分，ik_max_word为最细粒度划分</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>GET _analyze
{
  "analyzer": "ik_max_word",
  "text": "中国共产党"
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="创建一个索引put" tabindex="-1"><a class="header-anchor" href="#创建一个索引put" aria-hidden="true">#</a> 创建一个索引PUT</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>PUT /test1/type1/1 库名(索引名)/类型名/文档id
{
"name": "躺着数星星",
"age": 20
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ul>
<li>
<p>字符串类型</p>
<p>text 、 keyword</p>
</li>
<li>
<p>数值类型</p>
<p>long, integer, short, byte, double, flfloat, half_flfloat, scaled_flfloat</p>
</li>
<li>
<p>日期类型</p>
<p>date</p>
</li>
<li>
<p>布尔值类型</p>
<p>boolean</p>
</li>
<li>
<p>二进制类型</p>
<p>binary</p>
</li>
</ul>
<p>设计一个库（索引规则）</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>PUT /test2
{
  "mappings": {
    "properties": {
      "name": {
        "type": "text"
      },
      "age": {
        "type": "long"
      },
      "birthday": {
        "type": "date"
      }
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h3 id="可以获取具体的信息-get" tabindex="-1"><a class="header-anchor" href="#可以获取具体的信息-get" aria-hidden="true">#</a> 可以获取具体的信息，GET</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>GET /test2
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>查看默认信息</p>
<p>如果自己的文档字段没有指定，那么es就会给我们默认配置字段类型</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>PUT /test3/_doc/1
{
  "name": "躺着数星星",
  "age": 20,
  "birth": "2000-10-20"
}

GET /test3
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>获取数据库健康值</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>GET /_cat/health
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>查看所有信息</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>GET _cat/indices?v
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="修改索引put" tabindex="-1"><a class="header-anchor" href="#修改索引put" aria-hidden="true">#</a> 修改索引PUT</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>PUT /test1/type1/1{  "name" :"躺着数星星",  "age": 22  }  直接修改
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>POST修改</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>POST /test3/_doc/1/_update   {  "doc": {    "age":22  }}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="删除索引delete" tabindex="-1"><a class="header-anchor" href="#删除索引delete" aria-hidden="true">#</a> 删除索引DELETE</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>DELETE /test1
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>通过DELETE命令实现删除、根据你的请求来判断是删除索引还是删除文档记录</p>
<h2 id="文档基本操作" tabindex="-1"><a class="header-anchor" href="#文档基本操作" aria-hidden="true">#</a> 文档基本操作</h2>
<h3 id="条件查询" tabindex="-1"><a class="header-anchor" href="#条件查询" aria-hidden="true">#</a> 条件查询</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>GET /chen/user/_search?q=name:躺着数星星
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="花式查询" tabindex="-1"><a class="header-anchor" href="#花式查询" aria-hidden="true">#</a> 花式查询</h2>
<h3 id="查询的参数体是一个json体" tabindex="-1"><a class="header-anchor" href="#查询的参数体是一个json体" aria-hidden="true">#</a> 查询的参数体是一个json体</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>GET chen/user/_search{  "query": {    "match": {      "name": "躺着数星星"    }  }}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>hit :索引和文档的信息查询的结果总数，然后就是查询出来的具体的文档</p>
<h3 id="信息过滤" tabindex="-1"><a class="header-anchor" href="#信息过滤" aria-hidden="true">#</a> 信息过滤</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>GET chen/user/_search{  "query": {    "match": {      "name": "詹姆斯"    }  },  "_source": ["tags"]}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="排序" tabindex="-1"><a class="header-anchor" href="#排序" aria-hidden="true">#</a> 排序</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>GET chen/user/_search{  "query": {    "match": {      "name": "詹姆斯"    }  }, "sort": [   {     "_id": {        "order": "desc"    //降序  asc 升序     }   } ]}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="分页查询" tabindex="-1"><a class="header-anchor" href="#分页查询" aria-hidden="true">#</a> 分页查询</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>GET chen/user/_search{  "query": {    "match": {      "name": "詹姆斯"    }  }, "sort": [   {     "_id": {       "order": "desc"     }   }    ],  "from": 0,    //从第0条数据开始  "size": 1    //查询1条信息	}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>bool值进行多条件精确查询</p>
<h3 id="must命令-and-所有条件都要符合" tabindex="-1"><a class="header-anchor" href="#must命令-and-所有条件都要符合" aria-hidden="true">#</a> must命令（and) 所有条件都要符合</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>GET chen/user/_search{  "query": {    "bool":{      "must": [        {          "match": {            "name": "詹姆斯"          }        },        {          "match": {            "desc": "小皇帝"          }        }      ]    }  }}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="should命令-or" tabindex="-1"><a class="header-anchor" href="#should命令-or" aria-hidden="true">#</a> should命令（or)</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>GET chen/user/_search{  "query": {    "bool":{      "should": [        {          "match": {            "name": "詹姆斯"          }        },        {          "match": {            "desc": "小皇帝"          }        }      ]    }  }}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="must-not" tabindex="-1"><a class="header-anchor" href="#must-not" aria-hidden="true">#</a> must_not</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>GET chen/user/_search{  "query": {    "bool":{      "must_not": [        {          "match": {            "name": "詹姆斯"          }        },        {          "match": {            "desc": "小皇帝"          }        }      ]    }  }}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="filter-使用filter进行数据过滤" tabindex="-1"><a class="header-anchor" href="#filter-使用filter进行数据过滤" aria-hidden="true">#</a> filter 使用filter进行数据过滤</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>GET chen/user/_search{  "query": {    "bool":{      "must_not": [        {          "match": {            "name": "詹姆斯"          }        }      ],      "filter": {        "range": {          "age": {            "gte": 1,            "lte": 3          }        }      }    }  }}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="匹配多个条件" tabindex="-1"><a class="header-anchor" href="#匹配多个条件" aria-hidden="true">#</a> 匹配多个条件</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>GET chen/user/_search{  "query": {    "match": {      "tags": "交友 运动"    }  }}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="精确查询" tabindex="-1"><a class="header-anchor" href="#精确查询" aria-hidden="true">#</a> 精确查询</h3>
<p>term查询是直接通过倒排索引指定的词条进程精确查找</p>
<p>关于分词</p>
<ul>
<li>term ，直接查询精确的</li>
<li>match，会使用分词器解析!(先分析文档，然后在通过分析的文档进行查询!)</li>
</ul>
<p>keyword字段类型不会被分词器解析</p>
<h3 id="多个值匹配的精确查询" tabindex="-1"><a class="header-anchor" href="#多个值匹配的精确查询" aria-hidden="true">#</a> 多个值匹配的精确查询</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>GET testdb/_search{  "query": {    "bool": {      "should": [        {          "term": {              "t1": "22"                     }        },{                            "term": {                          "t1": "33"                     }        }            ]    }  }}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="高亮查询" tabindex="-1"><a class="header-anchor" href="#高亮查询" aria-hidden="true">#</a> 高亮查询</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>GET chen/user/_search{  "query": {    "match": {      "name": "詹姆斯"    }  },  "highlight": {    "fields": {      "name":{}    }  }}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="自定义高亮条件" tabindex="-1"><a class="header-anchor" href="#自定义高亮条件" aria-hidden="true">#</a> 自定义高亮条件</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>GET chen/user/_search{  "query": {    "match": {      "name": "詹姆斯"    }  },  "highlight": {    "pre_tags": "&lt;p class='key' style='color:red'>",     "post_tags": "&lt;/p>",     "fields": {      "name":{}    }  }}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="springboot操作es" tabindex="-1"><a class="header-anchor" href="#springboot操作es" aria-hidden="true">#</a> Springboot操作es</h2>
<h3 id="修改es版本" tabindex="-1"><a class="header-anchor" href="#修改es版本" aria-hidden="true">#</a> 修改es版本</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code> &lt;properties>        &lt;java.version>1.8&lt;/java.version>        &lt;!--自定义版本-->        &lt;elasticsearch.version>7.6.1&lt;/elasticsearch.version>    &lt;/properties>    
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>需要导入的依赖</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;dependencies>        &lt;!--解析网页  爬电影 tika-->        &lt;dependency>            &lt;groupId>org.jsoup&lt;/groupId>            &lt;artifactId>jsoup&lt;/artifactId>            &lt;version>1.10.2&lt;/version>        &lt;/dependency>        &lt;dependency>            &lt;groupId>com.alibaba&lt;/groupId>            &lt;artifactId>fastjson&lt;/artifactId>            &lt;version>1.2.70&lt;/version>        &lt;/dependency>        &lt;dependency>            &lt;groupId>org.springframework.boot&lt;/groupId>            &lt;artifactId>spring-boot-starter-data-elasticsearch&lt;/artifactId>        &lt;/dependency>        &lt;dependency>            &lt;groupId>org.springframework.boot&lt;/groupId>            &lt;artifactId>spring-boot-starter-thymeleaf&lt;/artifactId>        &lt;/dependency>        &lt;dependency>            &lt;groupId>org.springframework.boot&lt;/groupId>            &lt;artifactId>spring-boot-starter-web&lt;/artifactId>        &lt;/dependency>        &lt;dependency>            &lt;groupId>org.springframework.boot&lt;/groupId>            &lt;artifactId>spring-boot-devtools&lt;/artifactId>            &lt;scope>runtime&lt;/scope>            &lt;optional>true&lt;/optional>        &lt;/dependency>        &lt;dependency>            &lt;groupId>org.springframework.boot&lt;/groupId>            &lt;artifactId>spring-boot-configuration-processor&lt;/artifactId>            &lt;optional>true&lt;/optional>        &lt;/dependency>        &lt;dependency>            &lt;groupId>org.projectlombok&lt;/groupId>            &lt;artifactId>lombok&lt;/artifactId>            &lt;optional>true&lt;/optional>        &lt;/dependency>        &lt;dependency>            &lt;groupId>org.springframework.boot&lt;/groupId>            &lt;artifactId>spring-boot-starter-test&lt;/artifactId>            &lt;scope>test&lt;/scope>        &lt;/dependency>    &lt;/dependencies>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="创建索引" tabindex="-1"><a class="header-anchor" href="#创建索引" aria-hidden="true">#</a> 创建索引</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code> @Autowired    @Qualifier("restHighLevelClient")  //指定  高级客户端    private RestHighLevelClient client;   //测试索引的请求 Request    @Test    void testCreateIndex() throws IOException {        //创建索引请求        CreateIndexRequest request = new CreateIndexRequest("chen_index");        //执行创建请求  IndicesClient        CreateIndexResponse createIndexResponse = client.indices().create(request, RequestOptions.DEFAULT);        System.out.println(createIndexResponse);    }
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="获取索引-判断是否存在" tabindex="-1"><a class="header-anchor" href="#获取索引-判断是否存在" aria-hidden="true">#</a> 获取索引,判断是否存在</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code> @Test    void testExistIndex() throws IOException {        GetIndexRequest request = new GetIndexRequest("chen_index");        boolean exists = client.indices().exists(request, RequestOptions.DEFAULT);        System.out.println(exists);    }
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="删除索引" tabindex="-1"><a class="header-anchor" href="#删除索引" aria-hidden="true">#</a> 删除索引</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>@Test    void testDeleteIndex() throws IOException {        DeleteIndexRequest request = new DeleteIndexRequest("chen_index");        AcknowledgedResponse delete = client.indices().delete(request, RequestOptions.DEFAULT);        System.out.println(delete);    }
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="添加文档" tabindex="-1"><a class="header-anchor" href="#添加文档" aria-hidden="true">#</a> 添加文档</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>@Test    void testAddDocument() throws IOException {        //创建对象        User user = new User("chen", 20);        //创建请求        IndexRequest request = new IndexRequest("chen_index");        //规则        request.id("1");        request.timeout(TimeValue.timeValueSeconds(1)); //延迟 超时        request.timeout("1s");        //将数据放入请求 json数据         request.source(JSON.toJSONString(user), XContentType.JSON);  //转换为json        //客户端发送请求        IndexResponse indexResponse = client.index(request, RequestOptions.DEFAULT);        System.out.println(indexResponse.toString());        System.out.println(indexResponse.status());    }
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="获取文档记录" tabindex="-1"><a class="header-anchor" href="#获取文档记录" aria-hidden="true">#</a> 获取文档记录</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>@Test    void testGetDocument() throws IOException {        GetRequest getRequest = new GetRequest("chen_index","1");        GetResponse getReponse = client.get(getRequest, RequestOptions.DEFAULT);        System.out.println(getReponse.getSourceAsString());        System.out.println(getReponse);    }
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="更新文档信息" tabindex="-1"><a class="header-anchor" href="#更新文档信息" aria-hidden="true">#</a> 更新文档信息</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>@Testvoid testUpdateDocument() throws IOException {    UpdateRequest updateRequest = new UpdateRequest("chen_index","1");   updateRequest.timeout("1s");    User user = new User("zhangsan", 23);    updateRequest.doc(JSON.toJSONString(user),XContentType.JSON);    UpdateResponse update = client.update(updateRequest, RequestOptions.DEFAULT);    System.out.println(update);    System.out.println(update.status());}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="删除文档记录" tabindex="-1"><a class="header-anchor" href="#删除文档记录" aria-hidden="true">#</a> 删除文档记录</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>void testDeleteDocument() throws IOException {       DeleteRequest request = new DeleteRequest("chen_index", "1");       request.timeout("1s");       DeleteResponse delete = client.delete(request, RequestOptions.DEFAULT);       System.out.println(delete.status());   }
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="批量插入数据" tabindex="-1"><a class="header-anchor" href="#批量插入数据" aria-hidden="true">#</a> 批量插入数据</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>@Test    void tsetBulkRequest() throws IOException {        BulkRequest bulkRequest = new BulkRequest();        bulkRequest.timeout("10s");        ArrayList&lt;User> userList = new ArrayList&lt;>();        userList.add(new User("chen1", 18));        userList.add(new User("chen2", 18));        userList.add(new User("chen3", 18));        userList.add(new User("chen4", 18));        userList.add(new User("chen5", 18));        //批处理请求        for (int i = 0; i &lt; userList.size(); i++) {            bulkRequest.add(new IndexRequest("chen_index")                    .id("" + (i + 1))                    .source(JSON.toJSONString(userList.get(i)), XContentType.JSON)            );        }        BulkResponse bulk = client.bulk(bulkRequest, RequestOptions.DEFAULT);        System.out.println(bulk.hasFailures());    }
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="搜索" tabindex="-1"><a class="header-anchor" href="#搜索" aria-hidden="true">#</a> 搜索</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code> @Test    void testSearchRequest() throws IOException {        SearchRequest searchRequest=new SearchRequest("chen_index");        //构建搜索条件        SearchSourceBuilder searchSourceBuilder = new SearchSourceBuilder();        TermQueryBuilder termQueryBuilder = QueryBuilders.termQuery("name", "chen1");//匹配查询条件        //QueryBuilders.matchAllQuery();//查询所有        searchSourceBuilder.query(termQueryBuilder);        searchSourceBuilder.timeout(new TimeValue(60, TimeUnit.SECONDS));        //分页        /*searchSourceBuilder.from();        searchSourceBuilder.size();*/        searchRequest.source(searchSourceBuilder);        SearchResponse search = client.search(searchRequest, RequestOptions.DEFAULT);        System.out.println(JSON.toJSONString(search.getHits()));        for (SearchHit hit : search.getHits().getHits()) {            System.out.println(hit.getSourceAsMap());        }    }
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul>
<li>SearchRequest搜索请求</li>
<li>SearchsourceBuilder条件构造</li>
<li>HighlightBuiLder构建高亮</li>
<li>TermQueryBuiLlder精确查询</li>
</ul>
<p>https://github.com/fanjianhai/CODE/tree/main/SpringBoot/springboot-11-elasticsearch-jd</p>
<p>爬取数据︰(获取请求返回的页面信息，筛选出我们想要的数据）</p>
<p>parse和stringfy区别</p>
<blockquote>
<p>**一：JSON.parse()【从一个字符串中解析出json对象】</p>
<p>**</p>
<p>例子：</p>
<p>//定义一个字符串</p>
<p>var data='{&quot;name&quot;:&quot;goatling&quot;}'</p>
<p>//解析对象</p>
<p>JSON.parse(data)</p>
<p>结果是：</p>
<p>name:&quot;goatling&quot;</p>
<p><strong>二：JSON.stringify()【从一个对象中解析出字符串】</strong></p>
<p>var data={name:'goatling'}</p>
<p>JSON.stringify(data)</p>
<p>结果是：</p>
<p>'{&quot;name&quot;:&quot;goatling&quot;}'</p>
</blockquote>
<p>解析网页</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code> String url = "https://search.jd.com/Search?keyword="+"keywords";        //解析网页        Document document = Jsoup.parse(new URL(url), 3000);  //就是返回的js页面对象        Element element = document.getElementById("J_goodsList");        //获取所有的li元素  标签        Elements elements = element.getElementsByTag("li");        //获取元素中的内容 el就是每一个li标签  attr获取属性  eq(0)获取第一个  text文档        for (Element el : elements) {            String img = el.getElementsByTag("img").eq(0).attr("data-lazy-img");            String price = el.getElementsByClass("p-price").eq(0).text();            String title = el.getElementsByClass("p-name").eq(0).text();            System.out.println(img);            System.out.println(price);            System.out.println(title);        }
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>axios通信</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code> axios.get(xxx").then(response=>{                                   });
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>contentService进行封装</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>package com.chen.service;import com.alibaba.fastjson.JSON;import com.chen.pojo.Content;import com.chen.utils.HtmlParseUtil;import org.elasticsearch.action.bulk.BulkRequest;import org.elasticsearch.action.bulk.BulkResponse;import org.elasticsearch.action.index.IndexRequest;import org.elasticsearch.action.search.SearchRequest;import org.elasticsearch.action.search.SearchResponse;import org.elasticsearch.client.RequestOptions;import org.elasticsearch.client.RestHighLevelClient;import org.elasticsearch.common.text.Text;import org.elasticsearch.common.unit.TimeValue;import org.elasticsearch.common.xcontent.XContentType;import org.elasticsearch.index.query.QueryBuilders;import org.elasticsearch.index.query.TermQueryBuilder;import org.elasticsearch.search.SearchHit;import org.elasticsearch.search.builder.SearchSourceBuilder;import org.elasticsearch.search.fetch.subphase.highlight.HighlightBuilder;import org.elasticsearch.search.fetch.subphase.highlight.HighlightField;import org.springframework.beans.factory.annotation.Autowired;import org.springframework.beans.factory.annotation.Qualifier;import org.springframework.stereotype.Service;import java.io.IOException;import java.util.ArrayList;import java.util.List;import java.util.Map;import java.util.concurrent.TimeUnit;@Service@SuppressWarnings("all")public class ContentService {    @Autowired    @Qualifier("restHighLevelClient")    private RestHighLevelClient client;    //解析数据放入es索引库中    public Boolean parseContent(String keywords) throws IOException {        List&lt;Content> contents = new HtmlParseUtil().pareseJD(keywords);        //插入到es        BulkRequest bulkRequest = new BulkRequest();        bulkRequest.timeout("2m");        for (int i = 0; i &lt; contents.size(); i++) {            bulkRequest.add(new IndexRequest("jd_goods")                    .source(JSON.toJSONString(contents.get(i)), XContentType.JSON));        }        BulkResponse bulk = client.bulk(bulkRequest, RequestOptions.DEFAULT);        return !bulk.hasFailures();    }    //获取这些数据的搜索功能    public List&lt;Map&lt;String, Object>> searchPage(String keyword, int pageNo, int pageSize) throws IOException {        if (pageNo &lt;= 1) {            pageNo = 1;        }        //条件搜索        SearchRequest searchRequest = new SearchRequest("jd_goods");        SearchSourceBuilder sourceBuilder = new SearchSourceBuilder();        //分页        sourceBuilder.from(pageNo);        sourceBuilder.size(pageSize);        //精准匹配关键字        TermQueryBuilder termQueryBuilder = QueryBuilders.termQuery("title", keyword);        sourceBuilder.query(termQueryBuilder);        sourceBuilder.timeout(new TimeValue(60, TimeUnit.SECONDS));        //高亮        HighlightBuilder highlightBuilder = new HighlightBuilder();        highlightBuilder.requireFieldMatch(false);//关闭多个高亮显示        highlightBuilder.preTags("&lt;span style='color:red'>");        highlightBuilder.postTags("&lt;/span>");        highlightBuilder.field("title");        sourceBuilder.highlighter(highlightBuilder);        //执行搜索        searchRequest.source(sourceBuilder);        SearchResponse searchResponse = client.search(searchRequest,       RequestOptions.DEFAULT);        //解析结果        ArrayList&lt;Map&lt;String, Object>> list = new ArrayList&lt;>();        for (SearchHit hit : searchResponse.getHits().getHits()) {            //解析高亮字段 获取字段  将原来的字段换为我们高亮的字段            Map&lt;String, HighlightField> highlightFields = hit.getHighlightFields();            HighlightField title = highlightFields.get("title");            Map&lt;String, Object> sourceAsMap = hit.getSourceAsMap();            if (title != null) {                Text[] fragments = title.fragments();                String n_title = "";                for (Text fragment : fragments) {                    n_title += fragment;                }                sourceAsMap.put("title",n_title);            }            list.add(hit.getSourceAsMap());        }        return list;    }}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></template>
