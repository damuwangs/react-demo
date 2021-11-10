/*
 * @Description: 
 * @Autor: 王成阳
 * @Date: 2021-11-04 15:49:48
 */
import {Layout, Menu, Breadcrumb} from 'antd';
import {MenuUnfoldOutlined, MenuFoldOutlined, UserOutlined} from '@ant-design/icons';
import { routes, RouteWithSubRoutes} from '../config/route';
import { BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import Login from '@/components/system/login';
import React from 'react';
import '@/css/index.css';
const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;


function App() {
	return(
		<Router>
			<Route path="/" component={Login} />
			{/* <AppContent/> */}
		</Router>
	)
}

class AppContent extends React.Component {
	
	state = {
		collapsed: false,
	}
	
	toggle = () => {
		this.setState({
			collapsed: !this.state.collapsed,
		})
	}
	
	bindleTo = (e) => {
		console.log('菜单点击', e)
	}
	
	render() {
		return (
			<Layout>
				<Sider trigger={null} collapsible collapsed={this.state.collapsed}>
					<div className="logo" />
					<Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} onClick={this.bindleTo}>
						<Menu.Item key="1" icon={<UserOutlined />}>
							<Link to="/home">Home</Link>
						</Menu.Item>
						<Menu.Item key="2" icon={<UserOutlined />}>
							<Link to="/test">Test</Link>
						</Menu.Item>
						<SubMenu key="3" icon={<UserOutlined />} title="tacos">
							<Menu.Item key="4">
								<Link to="/tacos/bus">bus</Link>
							</Menu.Item>
							<Menu.Item key="5">
								<Link to="/tacos/cart">cart</Link>
							</Menu.Item>
						</SubMenu>
						<Menu.Item key="6" icon={<UserOutlined />}>
							<Link to="/sandwiches">sandwiches</Link>
						</Menu.Item>
					</Menu>
				</Sider>
				<Layout className="site-layout">
					<Header className="site-layout-background" style={{ padding: 0 }}>
						{React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, { className: 'trigger', onClick: this.toggle, })}
					</Header>
					<Breadcrumb style={{ margin: '16px 0' }}>
						<Breadcrumb.Item>Home</Breadcrumb.Item>
						<Breadcrumb.Item>List</Breadcrumb.Item>
						<Breadcrumb.Item>App</Breadcrumb.Item>
					</Breadcrumb>
					<Content className="site-layout-background" style={{ margin: '24px 16px', padding: 24, minHeight: 280, }}>
						<Switch>
							{routes.map((route, i) => (
								<RouteWithSubRoutes key={i} {...route} />
							))}
						</Switch>
					</Content>
				</Layout>
			</Layout>
		)
	}
}

export {
	App,
	AppContent
}