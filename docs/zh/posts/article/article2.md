---
icon: edit
date: 2022-01-02
category:
  - CategoryA
tag:
  - tag A
  - tag B
star: true
---

# ElacticSearch

## 什么是Elasticsearch？

Elasticsearch是一个基于[Lucene](https://baike.baidu.com/item/Lucene/6753302)的搜索服务器。它提供了一个分布式多用户能力的[全文搜索引擎](https://baike.baidu.com/item/全文搜索引擎/7847410)，基于RESTful web接口。Elasticsearch是用Java语言开发的，并作为Apache许可条款下的开放源码发布，是一种流行的企业级搜索引擎。Elasticsearch用于[云计算](https://baike.baidu.com/item/云计算/9969353)中，能够达到实时搜索，稳定，可靠，快速，安装使用方便。官方客户端在Java、.NET（C#）、PHP、Python、Apache Groovy、Ruby和许多其他语言中都是可用的。根据DB-Engines的排名显示，Elasticsearch是最受欢迎的企业搜索引擎，其次是Apache Solr，也是基于Lucene。

搜索 全文搜索引擎

库，表，记录

Lucene是一套信息检索工具包 ---- jar包!不包含搜索引擎系统

包含的︰索引结构!读写索引的工具!排序，搜索规则....工具类

## Lucene和Elasticsearch关系？

ElacticSearch是基于Lucene做了一些封装和增强

ElacticSearch默认端口是9200

ElacticSearch通信地址：9300

elasticsearch head默认端口：9100

kibana默认端口：5601

存在跨域问题

elasticsearch.yml

```
http.cors.enabled: true 
http.cors.allow-origin: "*"
```

ELK是Elasticsearch、Logstash、Kibana三大开源框架（日志分析架构技术栈）

收集清洗数据-->搜索，存储--> Kibana

Elasticsearch是面向文档的

最小单元是文档（row对应数据库中以一行记录)

倒排索引查找文档

## 常用索引指令

ik分词器

IK提供了两个分词算法:ik_smart和ik_max_word，其中ik_smart为最少切分，ik_max_word为最细粒度划分

```
GET _analyze
{
  "analyzer": "ik_max_word",
  "text": "中国共产党"
}
```


### 创建一个索引PUT

```
PUT /test1/type1/1 库名(索引名)/类型名/文档id
{
"name": "躺着数星星",
"age": 20
}
```


- 字符串类型

  text 、 keyword

- 数值类型

  long, integer, short, byte, double, flfloat, half_flfloat, scaled_flfloat

- 日期类型

  date

- 布尔值类型

  boolean

- 二进制类型

  binary

设计一个库（索引规则）

```
PUT /test2
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
```

### 可以获取具体的信息，GET

```
GET /test2
```

查看默认信息

如果自己的文档字段没有指定，那么es就会给我们默认配置字段类型

```
PUT /test3/_doc/1
{
  "name": "躺着数星星",
  "age": 20,
  "birth": "2000-10-20"
}

GET /test3
```

获取数据库健康值

```
GET /_cat/health
```

查看所有信息

```
GET _cat/indices?v
```

### 修改索引PUT

```
PUT /test1/type1/1{  "name" :"躺着数星星",  "age": 22  }  直接修改
```

POST修改

```
POST /test3/_doc/1/_update   {  "doc": {    "age":22  }}
```

### 删除索引DELETE

```
DELETE /test1
```

通过DELETE命令实现删除、根据你的请求来判断是删除索引还是删除文档记录

## 文档基本操作

### 条件查询

```
GET /chen/user/_search?q=name:躺着数星星
```

## 花式查询

### 查询的参数体是一个json体	

```
GET chen/user/_search{  "query": {    "match": {      "name": "躺着数星星"    }  }}
```

hit :索引和文档的信息查询的结果总数，然后就是查询出来的具体的文档

### 信息过滤

```
GET chen/user/_search{  "query": {    "match": {      "name": "詹姆斯"    }  },  "_source": ["tags"]}
```

### 排序

```
GET chen/user/_search{  "query": {    "match": {      "name": "詹姆斯"    }  }, "sort": [   {     "_id": {        "order": "desc"    //降序  asc 升序     }   } ]}
```

### 分页查询

```
GET chen/user/_search{  "query": {    "match": {      "name": "詹姆斯"    }  }, "sort": [   {     "_id": {       "order": "desc"     }   }    ],  "from": 0,    //从第0条数据开始  "size": 1    //查询1条信息	}
```

bool值进行多条件精确查询

### must命令（and) 所有条件都要符合

```
GET chen/user/_search{  "query": {    "bool":{      "must": [        {          "match": {            "name": "詹姆斯"          }        },        {          "match": {            "desc": "小皇帝"          }        }      ]    }  }}
```

### should命令（or)

```
GET chen/user/_search{  "query": {    "bool":{      "should": [        {          "match": {            "name": "詹姆斯"          }        },        {          "match": {            "desc": "小皇帝"          }        }      ]    }  }}
```

### must_not

```
GET chen/user/_search{  "query": {    "bool":{      "must_not": [        {          "match": {            "name": "詹姆斯"          }        },        {          "match": {            "desc": "小皇帝"          }        }      ]    }  }}
```

### filter 使用filter进行数据过滤

```
GET chen/user/_search{  "query": {    "bool":{      "must_not": [        {          "match": {            "name": "詹姆斯"          }        }      ],      "filter": {        "range": {          "age": {            "gte": 1,            "lte": 3          }        }      }    }  }}
```

### 匹配多个条件

```
GET chen/user/_search{  "query": {    "match": {      "tags": "交友 运动"    }  }}
```

### 精确查询

term查询是直接通过倒排索引指定的词条进程精确查找

关于分词

- term ，直接查询精确的
- match，会使用分词器解析!(先分析文档，然后在通过分析的文档进行查询!)

keyword字段类型不会被分词器解析

### 多个值匹配的精确查询

```
GET testdb/_search{  "query": {    "bool": {      "should": [        {          "term": {              "t1": "22"                     }        },{                            "term": {                          "t1": "33"                     }        }            ]    }  }}
```

### 高亮查询

```
GET chen/user/_search{  "query": {    "match": {      "name": "詹姆斯"    }  },  "highlight": {    "fields": {      "name":{}    }  }}
```

### 自定义高亮条件

```
GET chen/user/_search{  "query": {    "match": {      "name": "詹姆斯"    }  },  "highlight": {    "pre_tags": "<p class='key' style='color:red'>",     "post_tags": "</p>",     "fields": {      "name":{}    }  }}
```

## Springboot操作es

### 修改es版本

```
 <properties>        <java.version>1.8</java.version>        <!--自定义版本-->        <elasticsearch.version>7.6.1</elasticsearch.version>    </properties>    
```

需要导入的依赖

```
<dependencies>        <!--解析网页  爬电影 tika-->        <dependency>            <groupId>org.jsoup</groupId>            <artifactId>jsoup</artifactId>            <version>1.10.2</version>        </dependency>        <dependency>            <groupId>com.alibaba</groupId>            <artifactId>fastjson</artifactId>            <version>1.2.70</version>        </dependency>        <dependency>            <groupId>org.springframework.boot</groupId>            <artifactId>spring-boot-starter-data-elasticsearch</artifactId>        </dependency>        <dependency>            <groupId>org.springframework.boot</groupId>            <artifactId>spring-boot-starter-thymeleaf</artifactId>        </dependency>        <dependency>            <groupId>org.springframework.boot</groupId>            <artifactId>spring-boot-starter-web</artifactId>        </dependency>        <dependency>            <groupId>org.springframework.boot</groupId>            <artifactId>spring-boot-devtools</artifactId>            <scope>runtime</scope>            <optional>true</optional>        </dependency>        <dependency>            <groupId>org.springframework.boot</groupId>            <artifactId>spring-boot-configuration-processor</artifactId>            <optional>true</optional>        </dependency>        <dependency>            <groupId>org.projectlombok</groupId>            <artifactId>lombok</artifactId>            <optional>true</optional>        </dependency>        <dependency>            <groupId>org.springframework.boot</groupId>            <artifactId>spring-boot-starter-test</artifactId>            <scope>test</scope>        </dependency>    </dependencies>
```



### 创建索引

```
 @Autowired    @Qualifier("restHighLevelClient")  //指定  高级客户端    private RestHighLevelClient client;   //测试索引的请求 Request    @Test    void testCreateIndex() throws IOException {        //创建索引请求        CreateIndexRequest request = new CreateIndexRequest("chen_index");        //执行创建请求  IndicesClient        CreateIndexResponse createIndexResponse = client.indices().create(request, RequestOptions.DEFAULT);        System.out.println(createIndexResponse);    }
```

### 获取索引,判断是否存在

```
 @Test    void testExistIndex() throws IOException {        GetIndexRequest request = new GetIndexRequest("chen_index");        boolean exists = client.indices().exists(request, RequestOptions.DEFAULT);        System.out.println(exists);    }
```

### 删除索引

```
@Test    void testDeleteIndex() throws IOException {        DeleteIndexRequest request = new DeleteIndexRequest("chen_index");        AcknowledgedResponse delete = client.indices().delete(request, RequestOptions.DEFAULT);        System.out.println(delete);    }
```

### 添加文档

```
@Test    void testAddDocument() throws IOException {        //创建对象        User user = new User("chen", 20);        //创建请求        IndexRequest request = new IndexRequest("chen_index");        //规则        request.id("1");        request.timeout(TimeValue.timeValueSeconds(1)); //延迟 超时        request.timeout("1s");        //将数据放入请求 json数据         request.source(JSON.toJSONString(user), XContentType.JSON);  //转换为json        //客户端发送请求        IndexResponse indexResponse = client.index(request, RequestOptions.DEFAULT);        System.out.println(indexResponse.toString());        System.out.println(indexResponse.status());    }
```

### 获取文档记录

```
@Test    void testGetDocument() throws IOException {        GetRequest getRequest = new GetRequest("chen_index","1");        GetResponse getReponse = client.get(getRequest, RequestOptions.DEFAULT);        System.out.println(getReponse.getSourceAsString());        System.out.println(getReponse);    }
```

### 更新文档信息

```
@Testvoid testUpdateDocument() throws IOException {    UpdateRequest updateRequest = new UpdateRequest("chen_index","1");   updateRequest.timeout("1s");    User user = new User("zhangsan", 23);    updateRequest.doc(JSON.toJSONString(user),XContentType.JSON);    UpdateResponse update = client.update(updateRequest, RequestOptions.DEFAULT);    System.out.println(update);    System.out.println(update.status());}
```

### 删除文档记录

```
void testDeleteDocument() throws IOException {       DeleteRequest request = new DeleteRequest("chen_index", "1");       request.timeout("1s");       DeleteResponse delete = client.delete(request, RequestOptions.DEFAULT);       System.out.println(delete.status());   }
```

### 批量插入数据

```
@Test    void tsetBulkRequest() throws IOException {        BulkRequest bulkRequest = new BulkRequest();        bulkRequest.timeout("10s");        ArrayList<User> userList = new ArrayList<>();        userList.add(new User("chen1", 18));        userList.add(new User("chen2", 18));        userList.add(new User("chen3", 18));        userList.add(new User("chen4", 18));        userList.add(new User("chen5", 18));        //批处理请求        for (int i = 0; i < userList.size(); i++) {            bulkRequest.add(new IndexRequest("chen_index")                    .id("" + (i + 1))                    .source(JSON.toJSONString(userList.get(i)), XContentType.JSON)            );        }        BulkResponse bulk = client.bulk(bulkRequest, RequestOptions.DEFAULT);        System.out.println(bulk.hasFailures());    }
```

### 搜索

```
 @Test    void testSearchRequest() throws IOException {        SearchRequest searchRequest=new SearchRequest("chen_index");        //构建搜索条件        SearchSourceBuilder searchSourceBuilder = new SearchSourceBuilder();        TermQueryBuilder termQueryBuilder = QueryBuilders.termQuery("name", "chen1");//匹配查询条件        //QueryBuilders.matchAllQuery();//查询所有        searchSourceBuilder.query(termQueryBuilder);        searchSourceBuilder.timeout(new TimeValue(60, TimeUnit.SECONDS));        //分页        /*searchSourceBuilder.from();        searchSourceBuilder.size();*/        searchRequest.source(searchSourceBuilder);        SearchResponse search = client.search(searchRequest, RequestOptions.DEFAULT);        System.out.println(JSON.toJSONString(search.getHits()));        for (SearchHit hit : search.getHits().getHits()) {            System.out.println(hit.getSourceAsMap());        }    }
```

- SearchRequest搜索请求
- SearchsourceBuilder条件构造
- HighlightBuiLder构建高亮
- TermQueryBuiLlder精确查询

https://github.com/fanjianhai/CODE/tree/main/SpringBoot/springboot-11-elasticsearch-jd

爬取数据︰(获取请求返回的页面信息，筛选出我们想要的数据）

parse和stringfy区别

> **一：JSON.parse()【从一个字符串中解析出json对象】
> 
> **
>
> 例子：
>
> //定义一个字符串
>
> var data='{"name":"goatling"}'
>
> //解析对象
>
> JSON.parse(data)
>
> 结果是：
>
> name:"goatling"
>
> **二：JSON.stringify()【从一个对象中解析出字符串】**
>
> var data={name:'goatling'}
>
> JSON.stringify(data)
>
> 结果是：
>
> '{"name":"goatling"}'

解析网页

```
 String url = "https://search.jd.com/Search?keyword="+"keywords";        //解析网页        Document document = Jsoup.parse(new URL(url), 3000);  //就是返回的js页面对象        Element element = document.getElementById("J_goodsList");        //获取所有的li元素  标签        Elements elements = element.getElementsByTag("li");        //获取元素中的内容 el就是每一个li标签  attr获取属性  eq(0)获取第一个  text文档        for (Element el : elements) {            String img = el.getElementsByTag("img").eq(0).attr("data-lazy-img");            String price = el.getElementsByClass("p-price").eq(0).text();            String title = el.getElementsByClass("p-name").eq(0).text();            System.out.println(img);            System.out.println(price);            System.out.println(title);        }
```

axios通信

```
 axios.get(xxx").then(response=>{                                   });
```

contentService进行封装

```
package com.chen.service;import com.alibaba.fastjson.JSON;import com.chen.pojo.Content;import com.chen.utils.HtmlParseUtil;import org.elasticsearch.action.bulk.BulkRequest;import org.elasticsearch.action.bulk.BulkResponse;import org.elasticsearch.action.index.IndexRequest;import org.elasticsearch.action.search.SearchRequest;import org.elasticsearch.action.search.SearchResponse;import org.elasticsearch.client.RequestOptions;import org.elasticsearch.client.RestHighLevelClient;import org.elasticsearch.common.text.Text;import org.elasticsearch.common.unit.TimeValue;import org.elasticsearch.common.xcontent.XContentType;import org.elasticsearch.index.query.QueryBuilders;import org.elasticsearch.index.query.TermQueryBuilder;import org.elasticsearch.search.SearchHit;import org.elasticsearch.search.builder.SearchSourceBuilder;import org.elasticsearch.search.fetch.subphase.highlight.HighlightBuilder;import org.elasticsearch.search.fetch.subphase.highlight.HighlightField;import org.springframework.beans.factory.annotation.Autowired;import org.springframework.beans.factory.annotation.Qualifier;import org.springframework.stereotype.Service;import java.io.IOException;import java.util.ArrayList;import java.util.List;import java.util.Map;import java.util.concurrent.TimeUnit;@Service@SuppressWarnings("all")public class ContentService {    @Autowired    @Qualifier("restHighLevelClient")    private RestHighLevelClient client;    //解析数据放入es索引库中    public Boolean parseContent(String keywords) throws IOException {        List<Content> contents = new HtmlParseUtil().pareseJD(keywords);        //插入到es        BulkRequest bulkRequest = new BulkRequest();        bulkRequest.timeout("2m");        for (int i = 0; i < contents.size(); i++) {            bulkRequest.add(new IndexRequest("jd_goods")                    .source(JSON.toJSONString(contents.get(i)), XContentType.JSON));        }        BulkResponse bulk = client.bulk(bulkRequest, RequestOptions.DEFAULT);        return !bulk.hasFailures();    }    //获取这些数据的搜索功能    public List<Map<String, Object>> searchPage(String keyword, int pageNo, int pageSize) throws IOException {        if (pageNo <= 1) {            pageNo = 1;        }        //条件搜索        SearchRequest searchRequest = new SearchRequest("jd_goods");        SearchSourceBuilder sourceBuilder = new SearchSourceBuilder();        //分页        sourceBuilder.from(pageNo);        sourceBuilder.size(pageSize);        //精准匹配关键字        TermQueryBuilder termQueryBuilder = QueryBuilders.termQuery("title", keyword);        sourceBuilder.query(termQueryBuilder);        sourceBuilder.timeout(new TimeValue(60, TimeUnit.SECONDS));        //高亮        HighlightBuilder highlightBuilder = new HighlightBuilder();        highlightBuilder.requireFieldMatch(false);//关闭多个高亮显示        highlightBuilder.preTags("<span style='color:red'>");        highlightBuilder.postTags("</span>");        highlightBuilder.field("title");        sourceBuilder.highlighter(highlightBuilder);        //执行搜索        searchRequest.source(sourceBuilder);        SearchResponse searchResponse = client.search(searchRequest,       RequestOptions.DEFAULT);        //解析结果        ArrayList<Map<String, Object>> list = new ArrayList<>();        for (SearchHit hit : searchResponse.getHits().getHits()) {            //解析高亮字段 获取字段  将原来的字段换为我们高亮的字段            Map<String, HighlightField> highlightFields = hit.getHighlightFields();            HighlightField title = highlightFields.get("title");            Map<String, Object> sourceAsMap = hit.getSourceAsMap();            if (title != null) {                Text[] fragments = title.fragments();                String n_title = "";                for (Text fragment : fragments) {                    n_title += fragment;                }                sourceAsMap.put("title",n_title);            }            list.add(hit.getSourceAsMap());        }        return list;    }}
```

