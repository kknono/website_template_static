import './index.css'
import App from './App.vue';
import routes from 'pages-generated';



import { ViteSSG } from 'vite-ssg';

export const createApp =ViteSSG(
  App,
  { routes },
  ({ app, router, routes, isClient, initialState }) => {
    


  }
);

 
 