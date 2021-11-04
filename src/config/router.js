/*
 * @Description: 
 * @Autor: 王成阳
 * @Date: 2021-11-04 09:46:05
 */
import {Sandwiches} from '../index.js'

const routes = [
    {
        path: "/sandwiches",
        component: Sandwiches
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
    }
]

export default routes