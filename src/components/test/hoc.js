import { Component } from "react"

/*
 * @Description: 
 * @Autor: 王成阳
 * @Date: 2021-11-24 09:07:43
 */
function getDisplayName(component) {
    return component.displayName || component.name || 'Component';
}
const withHeader = (title) => (WrappedComponent) => class HOC extends Component {
    static displayName = `HOC(${getDisplayName(WrappedComponent)})`
    render() {
        const newProps = {
            test: 'hoc属性代理'
        }
        return <div>
            <div className="demo-header">
                {title ? title : '我是标题'}
            </div>            
            <WrappedComponent {...this.props} {...newProps}/>
        </div>
    }
}
@withHeader('Hoc注解传参')
class Demo extends Component {
    render() {
        let props = this.props
        return (
            <div>
                <div>我是一个普通组件</div>
                <div>{props.test}</div>
            </div>
        )
    }
}

export {
    Demo as HocDemo
}