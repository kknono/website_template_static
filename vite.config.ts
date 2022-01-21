import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VitePages from "vite-plugin-pages";
import { resolve } from "path";
import fs from "fs-extra";
import matter from "gray-matter";
const path = require('path')

export default defineConfig({
  resolve:{
    alias: {
      "@": path.resolve(__dirname, "./src")
    },
  },
  server:{
    host:'0.0.0.0'
  },
  plugins: [vue(),
    VitePages({
      extensions: ["vue", "md"],
      //默认访问文件夹下的index.vue界面
      dirs: [
        { dir: "src/views", baseRoute: "" }
      ],
      extendRoute(route) {
        const path = resolve(__dirname, route.component.slice(1));
        const md = fs.readFileSync(path, "utf-8");
        const { data } = matter(md);
        route.meta = Object.assign(route.meta || {}, { frontmatter: data });
        return route;
      },
    })
  ]
})
