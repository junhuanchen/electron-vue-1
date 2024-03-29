import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: require('@/view/home').default,
            redirect: "/heisou/video",
            children: [
                {
                    path: "heisou",
                    component: require("@/view/heisou/index").default,
                    children: [
                        // 视频
                        {
                            path: "video",
                            component: require("@/view/heisou/video").default,
                            meta: { menuIndex: 0, index: 0 }
                        },
                        // 竞品监控
                        {
                            path: "monitor",
                            component: require("@/view/heisou/monitor").default,
                            meta: { menuIndex: 0, index: 1 }
                        }
                    ]
                },
                {
                    path: "heihao",
                    component: require("@/view/heihao/index").default,
                    children: [
                        // 黑号查询
                        {
                            path: "search",
                            component: require("@/view/heihao/search").default,
                            meta: { menuIndex: 1, index: 0 }
                        },
                        // 举报黑号
                        {
                            path: "report",
                            component: require("@/view/heihao/report").default,
                            meta: { menuIndex: 1, index: 1 }
                        },
                        // 举报记录
                        {
                            path: "reportHistory",
                            component: require("@/view/heihao/reportHistory").default,
                            meta: { menuIndex: 1, index: 2 }
                        }
                    ]
                },
                {
                    path: "liuliang",
                    component: require("@/view/liuliang/index").default,
                    children: [
                        // 流量
                        {
                            path: "flow",
                            component: require("@/view/liuliang/flow").default,
                            meta: { menuIndex: 2, index: 0 }
                        },
                        // 收藏
                        {
                            path: "favorite",
                            component: require("@/view/liuliang/favorite").default,
                            meta: { menuIndex: 2, index: 1 }
                        },
                        // 加购
                        {
                            path: "plusPurchase",
                            component: require("@/view/liuliang/plusPurchase").default,
                            meta: { menuIndex: 2, index: 2 }
                        }
                    ]
                }
            ]
        },
        {
            path: '*',
            redirect: '/'
        }
    ]
})
