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
        "name": "????????????",
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
          "There???s nothing here.",
          "How did we get here?",
          "That???s a Four-Oh-Four.",
          "Looks like we've got some broken links."
        ],
        "back": "Go back",
        "home": "Take me home"
      }
    },
    "/zh/": {
      "blog": {
        "description": "?????????????????????",
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
            "text": "????????????",
            "icon": "creative",
            "prefix": "guide/",
            "link": "guide/",
            "children": "structure"
          },
          {
            "text": "??????",
            "icon": "note",
            "prefix": "posts/",
            "children": [
              {
                "text": "?????? 1-4",
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
                "text": "?????? 5-12",
                "icon": "note",
                "children": [
                  {
                    "text": "?????? 5-8",
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
                    "text": "?????? 9-12",
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
        "name": "????????????",
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
          "text": "??????",
          "icon": "creative",
          "link": "/zh/guide/"
        },
        {
          "text": "??????",
          "icon": "edit",
          "prefix": "/zh/posts/",
          "children": [
            {
              "text": "?????? 1-4",
              "icon": "edit",
              "prefix": "article/",
              "children": [
                {
                  "text": "Docker??????",
                  "icon": "edit",
                  "link": "article1"
                },
                {
                  "text": "ElacticSearch",
                  "icon": "edit",
                  "link": "article2"
                },
                {
                  "text": "Redis??????",
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
              "text": "?????? 5-12",
              "icon": "edit",
              "children": [
                {
                  "text": "SpringCloud",
                  "icon": "edit",
                  "link": "article/article5"
                },
                {
                  "text": "??????????????????????????????",
                  "icon": "edit",
                  "link": "article/article6"
                },
                {
                  "text": "????????????",
                  "icon": "edit",
                  "link": "article/article7"
                },
                {
                  "text": "Spring??????",
                  "icon": "edit",
                  "link": "article/article8"
                }
              ]
            },
            {
              "text": "????????????",
              "icon": "edit",
              "link": "article9"
            },
            {
              "text": "Swagger",
              "icon": "edit",
              "link": "article10"
            },
            {
              "text": "Java????????????",
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
          "text": "????????????",
          "icon": "note",
          "link": "https://vuepress-theme-hope.github.io/v2/zh/"
        }
      ],
      "footer": "????????????",
      "displayFooter": true,
      "lang": "zh-CN",
      "navbarLocales": {
        "langName": "????????????",
        "selectLangText": "????????????",
        "selectLangAriaLabel": "????????????"
      },
      "metaLocales": {
        "prev": "?????????",
        "next": "?????????",
        "lastUpdated": "???????????????",
        "contributors": "?????????",
        "editLink": "????????????"
      },
      "blogLocales": {
        "article": "??????",
        "articleList": "????????????",
        "category": "??????",
        "tag": "??????",
        "timeline": "?????????",
        "timelineTitle": "????????????",
        "all": "??????",
        "intro": "????????????",
        "star": "??????",
        "slides": "?????????",
        "encrypt": "??????"
      },
      "outlookLocales": {
        "themeColor": "?????????",
        "darkmode": "??????",
        "fullscreen": "??????"
      },
      "encryptLocales": {
        "title": "???????????????",
        "errorHint": "?????????????????????"
      },
      "routeLocales": {
        "404msg": [
          "?????????????????????",
          "?????????????????????????????????",
          "??? ??? ??? ??? ??? !",
          "??????????????????????????????????????????"
        ],
        "back": "???????????????",
        "home": "????????????"
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
