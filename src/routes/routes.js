import config from "~/config";
import Home from "~/pages/Home/Home";
import Java from "~/pages/Java/Java";
import ReactJS from "~/pages/ReactJS/ReactJS";

const publicRoutes = [
  { path: config.routes.home, component: Home },
  { path: config.routes.java, component: Java },
  { path: config.routes.reactjs, component: ReactJS },
];

export { publicRoutes };
