import { defineNavbarConfig } from "vuepress-theme-hope";

export const zh = defineNavbarConfig([
  "/zh/",
  "/zh/home",
  { text: "指南", icon: "creative", link: "/zh/guide/" },
  {
    text: "博文",
    icon: "edit",
    prefix: "/zh/posts/",
    children: [
      {
        text: "文章 1-4",
        icon: "edit",
        prefix: "article/",
        children: [
          { text: "Docker学习", icon: "edit", link: "article1" },
          { text: "ElacticSearch", icon: "edit", link: "article2" },
          { text: "Redis学习", icon: "edit", link: "article3" },
          { text: "SpringSecurity", icon: "edit", link: "article4" },

        ],
      },
      {
        text: "文章 5-12",
        icon: "edit",
        children: [
          {
            text: "SpringCloud",
            icon: "edit",
            link: "article/article5",
          },
          {
            text: "网站跨域问题解决方法",
            icon: "edit",
            link: "article/article6",
          },
            {
                text: "设计模式",
                icon: "edit",
                link: "article/article7",
            },
            {
                text: "Spring学习",
                icon: "edit",
                link: "article/article8",
            },
        ],
      },
      { text: "前端学习", icon: "edit", link: "article9" },
      { text: "Swagger", icon: "edit", link: "article10" },
        { text: "Java基础知识", icon: "edit", link: "article11" },
        { text: "JavaScript", icon: "edit", link: "article12" },
    ],
  },
  {
    text: "主题文档",
    icon: "note",
    link: "https://vuepress-theme-hope.github.io/v2/zh/",
  },
]);
