export default [
    {
        path: "/",
        name: "Home",
        meta: { title: "Home" },
        component: () => import("../views/Home/index.vue"),
    },
    {
        path: "/news",
        name: "News",
        meta: { title: "News" },
        component: () => import("../views/News/index.vue"),
    },
    {
        path: "/contact",
        name: "Contact",
        meta: { title: "Contact" },
        component: () => import("../views/Contact/index.vue"),
    },
    {
        path: "/faq",
        name: "FAQ",
        meta: { title: "FAQ" },
        component: () => import("../views/Faq/index.vue"),
    },
    {
        path: "/customs_clearance",
        name: "Customs Clearance",
        meta: { title: "Customs Clearance" },
        component: () => import("../views/CustomsClearance/index.vue"),
    },
    // {
    //     path: "/services",
    //     name: "Services",
    //     meta: { title: "Services" },
    //     component: () => import("../views/Services/index.vue"),
    // },
    // {
    //     path: "/services/section1",
    //     name: "section1",
    //     meta: { title: "section1" },
    //     component: () => import("../views/Services/section/section_01.vue"),
    // },
    {
        path: "/services/section2",
        name: "section2",
        meta: { title: "section2" },
        component: () => import("../views/Services/section/section_02.vue"),
    },
    {
        path: "/services/section3",
        name: "section3",
        meta: { title: "section3" },
        component: () => import("../views/Services/section/section_03.vue"),
    },
    {
        path: "/services/section4",
        name: "section4",
        meta: { title: "section4" },
        component: () => import("../views/Services/section/section_04.vue"),
    },
    {
        path: "/services/section5",
        name: "section5",
        meta: { title: "section5" },
        component: () => import("../views/Services/section/section_05.vue"),
    },
]