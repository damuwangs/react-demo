/*
 * @Description: 
 * @Autor: 王成阳
 * @Date: 2021-11-04 15:49:48
 */
import {Layout, Menu, Breadcrumb} from 'antd';
import {MenuUnfoldOutlined, MenuFoldOutlined, UserOutlined, VideoCameraOutlined, UploadOutlined} from '@ant-design/icons';
import { routes, RouteWithSubRoutes } from './route';
import { BrowserRouter as Router, Switch, Link } from "react-router-dom";
import React from 'react';
import './index.css';
const { Header, Sider, Content } = Layout;

class App extends React.Component {
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
				<Router>
					<Sider trigger={null} collapsible collapsed={this.state.collapsed}>
						<div className="logo" />
						<Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} onClick={this.bindleTo}>
							<Menu.Item key="1" icon={<UserOutlined />}>
								<Link to="/Home">Home</Link>
							</Menu.Item>
							<Menu.Item key="2" icon={<UserOutlined />}>
								<Link to="/test">Test</Link>
							</Menu.Item>
							<Menu.Item key="3" icon={<VideoCameraOutlined />}>
								<Link to="/tacos">tacos</Link>
							</Menu.Item>
							<Menu.Item key="4" icon={<UploadOutlined />}>
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
				</Router>
			</Layout>
		)
	}
}

export default App