import { createRouter, createWebHashHistory } from 'vue-router'
import DemoLayout from '../components/DemoLayout.vue'
import CssBoxModelDemo from '../components/CssBoxModelDemo.vue'
import SlotDemo from '../components/SlotDemo.vue'
import GridLayoutDemo from '../components/GridLayoutDemo.vue' // 新增导入

const routes = [
    {
        path: '/',
        name: 'DemoLayout',
        component: DemoLayout,
        children: [
            {
                path: 'box-model',
                name: 'CssBoxModelDemo',
                component: CssBoxModelDemo
            },
            {
                path: 'slot-demo',
                name: 'SlotDemo',
                component: SlotDemo
            },
            {
                path: 'grid-layout',
                name: 'GridLayoutDemo',
                component: GridLayoutDemo
            }
        ]
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router