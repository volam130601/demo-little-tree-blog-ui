import { default as Home } from "~/pages/Home/Home";
import { default as Java } from "~/pages/Java/Java";
import { default as ReactJS } from "~/pages/ReactJS/ReactJS";

const publicRoutes = [
  { path: "/", component: Home },
  { path: "/categories/java", component: Java },
  { path: "/categories/react-js", component: ReactJS },
];

export { publicRoutes };
