export const data = {
  "key": "v-35371a8a",
  "path": "/zh/posts/article/article7.html",
  "title": "设计模式",
  "lang": "zh-CN",
  "frontmatter": {
    "icon": "edit",
    "date": "2022-01-07T00:00:00.000Z",
    "category": [
      "CategoryA",
      "CategoryB"
    ],
    "tag": [
      "tag A",
      "tag B"
    ],
    "summary": "设计模式 设计原则：高内聚，低耦合 设计模式(Design Pattern）是前辈们对代码开发经验的总结，是解决特定问题的一系列套路 GoF23 它不是语法规定，而是一套用来提高代码可复用性、可维护性、可读性、稳健性以及安全性的解决方案。 单例模式 当在高并发的情况下，假设一秒钟main方法执行了上千次/上万次user对象反复创建，对资源占用严重\r\" 这就需",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://vuepress-theme-hope-v2-demo.mrhope.site/zh/posts/article/article7.html"
        }
      ],
      [
        "meta",
        {
          "property": "og:site_name",
          "content": "我的博客"
        }
      ],
      [
        "meta",
        {
          "property": "og:title",
          "content": "设计模式"
        }
      ],
      [
        "meta",
        {
          "property": "og:type",
          "content": "article"
        }
      ],
      [
        "meta",
        {
          "property": "og:locale",
          "content": "zh-CN"
        }
      ],
      [
        "meta",
        {
          "property": "og:locale:alternate",
          "content": "en-US"
        }
      ],
      [
        "meta",
        {
          "property": "article:tag",
          "content": "tag A"
        }
      ],
      [
        "meta",
        {
          "property": "article:tag",
          "content": "tag B"
        }
      ],
      [
        "meta",
        {
          "property": "article:published_time",
          "content": "2022-01-07T00:00:00.000Z"
        }
      ]
    ]
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "单例模式",
      "slug": "单例模式",
      "children": [
        {
          "level": 3,
          "title": "饿汉式",
          "slug": "饿汉式",
          "children": []
        },
        {
          "level": 3,
          "title": "懒汉式",
          "slug": "懒汉式",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "简单工厂模式",
      "slug": "简单工厂模式",
      "children": []
    },
    {
      "level": 2,
      "title": "抽象工厂模式",
      "slug": "抽象工厂模式",
      "children": []
    },
    {
      "level": 2,
      "title": "观察者模式",
      "slug": "观察者模式",
      "children": []
    }
  ],
  "readingTime": {
    "minutes": 2.87,
    "words": 862
  },
  "filePathRelative": "zh/posts/article/article7.md"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
