export const themeData = {
  "blog": {
    "medias": {
      "Baidu": "https://example.com",
      "Bitbucket": "https://example.com",
      "Dingding": "https://example.com",
      "Discord": "https://example.com",
      "Dribbble": "https://example.com",
      "Email": "https://example.com",
      "Evernote": "https://example.com",
      "Facebook": "https://example.com",
      "Flipboard": "https://example.com",
      "Gitee": "https://example.com",
      "GitHub": "https://example.com",
      "Gitlab": "https://example.com",
      "Gmail": "https://example.com",
      "Instagram": "https://example.com",
      "Lines": "https://example.com",
      "Linkedin": "https://example.com",
      "Pinterest": "https://example.com",
      "Pocket": "https://example.com",
      "QQ": "https://example.com",
      "Qzone": "https://example.com",
      "Reddit": "https://example.com",
      "Rss": "https://example.com",
      "Steam": "https://example.com",
      "Twitter": "https://example.com",
      "Wechat": "https://example.com",
      "Weibo": "https://example.com",
      "Whatsapp": "https://example.com",
      "Youtube": "https://example.com",
      "Zhihu": "https://example.com"
    }
  },
  "encrypt": {
    "config": {
      "/guide/encrypt.html": [
        "$2a$10$8S6vmTFzzHVnE2cIez0opuaDV2ssyu0NdSGwQ/6Mm6VBja0hbmYe."
      ],
      "/zh/guide/encrypt.html": [
        "$2a$10$RzxmdVXPXKMfV70AXIvp6uEgzIhUU22yhHdf53eD5bqAilhkvf2WC"
      ]
    }
  },
  "pure": false,
  "iconPrefix": "iconfont icon-",
  "darkmode": "auto-switch",
  "themeColor": {
    "red": "#e74c3c",
    "blue": "#3498db",
    "green": "#3eaf7c",
    "orange": "#f39c12",
    "purple": "#8e44ad"
  },
  "fullscreen": true,
  "locales": {
    "/": {
      "blog": {
        "description": "A FrontEnd programmer",
        "intro": "/intro.html"
      },
      "repoDisplay": true,
      "navbarIcon": true,
      "navbarAutoHide": "mobile",
      "hideSiteNameonMobile": true,
      "sidebar": {
        "/": [
          "",
          "home",
          "slide",
          {
            "icon": "creative",
            "text": "Guide",
            "prefix": "guide/",
            "link": "guide/",
            "children": "structure"
          },
          {
            "text": "Articles",
            "icon": "note",
            "prefix": "posts/",
            "children": [
              {
                "text": "Articles 1-4",
                "icon": "note",
                "collapsable": true,
                "prefix": "article/",
                "children": [
                  "article1",
                  "article2",
                  "article3",
                  "article4"
                ]
              },
              {
                "text": "Articles 5-12",
                "icon": "note",
                "children": [
                  {
                    "text": "Articles 5-8",
                    "icon": "note",
                    "collapsable": true,
                    "prefix": "article/",
                    "children": [
                      "article5",
                      "article6",
                      "article7",
                      "article8"
                    ]
                  },
                  {
                    "text": "Articles 9-12",
                    "icon": "note",
                    "children": [
                      "article9",
                      "article10",
                      "article11",
                      "article12"
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      "sidebarIcon": true,
      "headerDepth": 2,
      "author": {
        "name": "小陈博客",
        "url": "https://mrhope.site"
      },
      "repo": "https://github.com/vuepress-theme-hope/vuepress-theme-hope",
      "docsDir": "demo/src",
      "pageInfo": [
        "Author",
        "Original",
        "Date",
        "Category",
        "Tag",
        "ReadingTime"
      ],
      "navbar": [
        "/",
        "/home",
        {
          "text": "Guide",
          "icon": "creative",
          "link": "/guide/"
        },
        {
          "text": "Posts",
          "icon": "edit",
          "prefix": "/posts/",
          "children": [
            {
              "text": "Articles 1-4",
              "icon": "edit",
              "prefix": "article/",
              "children": [
                {
                  "text": "Article 1",
                  "icon": "edit",
                  "link": "article1"
                },
                {
                  "text": "Article 2",
                  "icon": "edit",
                  "link": "article2"
                },
                "article3",
                "article4"
              ]
            },
            {
              "text": "Articles 5-12",
              "icon": "edit",
              "children": [
                {
                  "text": "Article 5",
                  "icon": "edit",
                  "link": "article/article5"
                },
                {
                  "text": "Article 6",
                  "icon": "edit",
                  "link": "article/article6"
                },
                "article/article7",
                "article/article8"
              ]
            },
            {
              "text": "Article 9",
              "icon": "edit",
              "link": "article9"
            },
            {
              "text": "Article 10",
              "icon": "edit",
              "link": "article10"
            },
            "article11",
            "article12"
          ]
        },
        {
          "text": "Theme Docs",
          "icon": "note",
          "link": "https://vuepress-theme-hope.github.io/v2/"
        }
      ],
      "footer": "Default footer",
      "displayFooter": true,
      "lang": "en-US",
      "navbarLocales": {
        "langName": "English",
        "selectLangText": "Language",
        "selectLangAriaLabel": "Select language"
      },
      "metaLocales": {
        "prev": "Prev",
        "next": "Next",
        "lastUpdated": "Last update",
        "contributors": "Contributors",
        "editLink": "Edit this page"
      },
      "blogLocales": {
        "article": "Articles",
        "articleList": "Article List",
        "category": "Category",
        "tag": "Tags",
        "timeline": "Timeline",
        "timelineTitle": "Yesterday Once More!",
        "all": "All",
        "intro": "Personal Intro",
        "star": "Star",
        "slides": "Slides",
        "encrypt": "Encrypted"
      },
      "outlookLocales": {
        "themeColor": "Theme Color",
        "darkmode": "Theme Mode",
        "fullscreen": "Full Screen"
      },
      "encryptLocales": {
        "title": "Please enter password",
        "errorHint": "Please enter the correct password!"
      },
      "routeLocales": {
        "404msg": [
          "There’s nothing here.",
          "How did we get here?",
          "That’s a Four-Oh-Four.",
          "Looks like we've got some broken links."
        ],
        "back": "Go back",
        "home": "Take me home"
      }
    },
    "/zh/": {
      "blog": {
        "description": "一个前端开发者",
        "intro": "https://blog.csdn.net/qq_55362295?spm=1001.2014.3001.5343"
      },
      "repoDisplay": true,
      "navbarIcon": true,
      "navbarAutoHide": "mobile",
      "hideSiteNameonMobile": true,
      "sidebar": {
        "/zh/": [
          "",
          "home",
          "slide",
          {
            "text": "如何使用",
            "icon": "creative",
            "prefix": "guide/",
            "link": "guide/",
            "children": "structure"
          },
          {
            "text": "文章",
            "icon": "note",
            "prefix": "posts/",
            "children": [
              {
                "text": "文章 1-4",
                "icon": "note",
                "collapsable": true,
                "prefix": "article/",
                "children": [
                  "article1",
                  "article2",
                  "article3",
                  "article4"
                ]
              },
              {
                "text": "文章 5-12",
                "icon": "note",
                "children": [
                  {
                    "text": "文章 5-8",
                    "icon": "note",
                    "collapsable": true,
                    "prefix": "article/",
                    "children": [
                      "article5",
                      "article6",
                      "article7",
                      "article8"
                    ]
                  },
                  {
                    "text": "文章 9-12",
                    "icon": "note",
                    "children": [
                      "article9",
                      "article10",
                      "article11",
                      "article12"
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      "sidebarIcon": true,
      "headerDepth": 2,
      "author": {
        "name": "小陈博客",
        "url": "https://mrhope.site"
      },
      "repo": "https://github.com/vuepress-theme-hope/vuepress-theme-hope",
      "docsDir": "demo/src",
      "pageInfo": [
        "Author",
        "Original",
        "Date",
        "Category",
        "Tag",
        "ReadingTime"
      ],
      "navbar": [
        "/zh/",
        "/zh/home",
        {
          "text": "指南",
          "icon": "creative",
          "link": "/zh/guide/"
        },
        {
          "text": "博文",
          "icon": "edit",
          "prefix": "/zh/posts/",
          "children": [
            {
              "text": "文章 1-4",
              "icon": "edit",
              "prefix": "article/",
              "children": [
                {
                  "text": "Docker学习",
                  "icon": "edit",
                  "link": "article1"
                },
                {
                  "text": "ElacticSearch",
                  "icon": "edit",
                  "link": "article2"
                },
                {
                  "text": "Redis学习",
                  "icon": "edit",
                  "link": "article3"
                },
                {
                  "text": "SpringSecurity",
                  "icon": "edit",
                  "link": "article4"
                }
              ]
            },
            {
              "text": "文章 5-12",
              "icon": "edit",
              "children": [
                {
                  "text": "SpringCloud",
                  "icon": "edit",
                  "link": "article/article5"
                },
                {
                  "text": "网站跨域问题解决方法",
                  "icon": "edit",
                  "link": "article/article6"
                },
                {
                  "text": "设计模式",
                  "icon": "edit",
                  "link": "article/article7"
                },
                {
                  "text": "Spring学习",
                  "icon": "edit",
                  "link": "article/article8"
                }
              ]
            },
            {
              "text": "前端学习",
              "icon": "edit",
              "link": "article9"
            },
            {
              "text": "Swagger",
              "icon": "edit",
              "link": "article10"
            },
            {
              "text": "Java基础知识",
              "icon": "edit",
              "link": "article11"
            },
            {
              "text": "JavaScript",
              "icon": "edit",
              "link": "article12"
            }
          ]
        },
        {
          "text": "主题文档",
          "icon": "note",
          "link": "https://vuepress-theme-hope.github.io/v2/zh/"
        }
      ],
      "footer": "联系我们",
      "displayFooter": true,
      "lang": "zh-CN",
      "navbarLocales": {
        "langName": "简体中文",
        "selectLangText": "选择语言",
        "selectLangAriaLabel": "选择语言"
      },
      "metaLocales": {
        "prev": "上一页",
        "next": "下一页",
        "lastUpdated": "上次编辑于",
        "contributors": "贡献者",
        "editLink": "编辑此页"
      },
      "blogLocales": {
        "article": "文章",
        "articleList": "文章列表",
        "category": "分类",
        "tag": "标签",
        "timeline": "时间轴",
        "timelineTitle": "昨日不在",
        "all": "全部",
        "intro": "个人介绍",
        "star": "收藏",
        "slides": "幻灯片",
        "encrypt": "加密"
      },
      "outlookLocales": {
        "themeColor": "主题色",
        "darkmode": "外观",
        "fullscreen": "全屏"
      },
      "encryptLocales": {
        "title": "请输入密码",
        "errorHint": "请输入正确密码"
      },
      "routeLocales": {
        "404msg": [
          "这里什么也没有",
          "我们是怎么来到这儿的？",
          "这 是 四 零 四 !",
          "看起来你访问了一个失效的链接"
        ],
        "back": "返回上一页",
        "home": "带我回家"
      }
    }
  }
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
