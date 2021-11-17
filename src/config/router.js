/*
* @Description: 路由
* @Autor: 王成阳
* @Date: 2021-11-11 11:28:34
*/
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Test, Tacos, Bus, Cart, Sandwiches, Home } from "@/components/test/test";
import { Login, NotFund} from '@/components/system/index';
import { SLayOut } from "@/components/layout";

/**
 * @description: 系统菜单路由
 * @param {*}
 * @return {*}
 */
function SysRouter() {
    return (
        <Router>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/" component={SLayOut} />
                <Route path="*" component={NotFund} />
            </Switch>
        </Router>
    )
}

/**
 * @description: 内容区域路由
 * @param {*}
 * @return {*}
 */
function ContentRouter() {
    return (
        <div>
            <Switch>
                <Route path="/home" component={Home} />
                <Route path="/test" component={Test} />
                <Route path="/tacos" component={Tacos}/>
                <Route path="/sandwiches" component={Sandwiches} />        
                <Route path="*" component={NotFund} />
            </Switch>
            <Route path="/tacos/bus" component={Bus} />
            <Route path="/tacos/cart" component={Cart} />
        </div>
    )
}

export {
    SysRouter,
    ContentRouter
} 