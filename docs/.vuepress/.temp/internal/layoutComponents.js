import { defineAsyncComponent } from 'vue'

export const layoutComponents = {
  "404": defineAsyncComponent(() => import("D:/Users/chenchao/Desktop/myblog/myblog-doc/node_modules/vuepress-theme-hope/lib/client/layouts/404.js")),
  "Layout": defineAsyncComponent(() => import("D:/Users/chenchao/Desktop/myblog/myblog-doc/node_modules/vuepress-theme-hope/lib/client/layouts/Layout.js")),
  "Slide": defineAsyncComponent(() => import("vuepress-plugin-md-enhance/lib/client/SlidePage.js")),
  "Blog": defineAsyncComponent(() => import("D:/Users/chenchao/Desktop/myblog/myblog-doc/node_modules/vuepress-theme-hope/lib/client/module/blog/layouts/Blog.js")),
}
