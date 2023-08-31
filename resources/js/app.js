import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/vue3'
import { ZiggyVue } from 'ziggy'
// import MainLayout from './Layouts/MainLayout.vue'
import '../css/app.css'
createInertiaApp({

  resolve: async (name) => {
    const pages = import.meta.glob('./Pages/**/*.vue')

    return (await pages[`./Pages/${name}.vue`]())
  
    // const page = await pages[`./Pages/${name}.vue`]()
    // page.default.la
    // return pageyout = page.default.layout || MainLayout

  },
  setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) })
      .use(plugin)
      .use(ZiggyVue)
      .mount(el)
  },
})
