import { createRouter, createWebHistory } from "vue-router";
import EventList from "../views/EventList.vue";
import EventDetail from "../views/EventDetail.vue";
import AboutView from "../views/AboutView.vue";

const routes = [
  {
    path: "/",
    name: "EventList",
    component: EventList,
  },
  {
    path: "/events/:id",
    name: "EventDetail",
    props: true,
    component: EventDetail,
  },
  {
    path: "/about",
    name: "AboutView",
    component: AboutView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
