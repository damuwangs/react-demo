/*
 * @Description: 
 * @Autor: 王成阳
 * @Date: 2021-11-04 16:12:52
 */
import { Route } from "react-router-dom";
import { Test, Tacos, Bus, Cart, Sandwiches, Home} from "./test";


const routes = [
    //首页
    {
        path: "/Home",
        component: Home
    },    
    {
        path: "/test",
        component: Test
    },
    {
        path: "/tacos",
        component: Tacos,
        routes: [
            {
                path: "/tacos/bus",
                component: Bus
            },
            {
                path: "/tacos/cart",
                component: Cart
            }
        ]
    },
    {
        path: "/sandwiches",
        component: Sandwiches
    }
]

/**
 * @description: 展示子路由
 * @param {*}
 * @return {*}
 */
const RouteWithSubRoutes = (route) => {
    return (
        <Route
            path={route.path}
            render={props => (
                <route.component {...props} routes={route.routes} />
            )}
        />
    )
}

export { routes, RouteWithSubRoutes }