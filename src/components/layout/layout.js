/*
 * @Description: 
 * @Autor: 王成阳
 * @Date: 2021-11-04 15:49:48
 */
import { Layout, Menu, Breadcrumb, Dropdown } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined, MinusOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
import React from 'react';

import { ContentRouter } from '@/config/router.js'
import logo from '@/img/logo.png'
import '@/css/layout/index.css';
const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;
const menu = (
	<Menu>
		<Menu.Item key="3">修改密码</Menu.Item>
		<Menu.Divider />
		<Menu.Item key="0">
			<Link to="/login">退出登录</Link>
		</Menu.Item>
	</Menu>
)

class SLayOut extends React.Component {

	state = {
		collapsed: false // 菜单收缩与展开
	}

 /**
  * @description: 菜单收缩与展开
  * @param {*}
  * @return {*}
  */	
	toggle = () => {
		this.setState({
			collapsed: !this.state.collapsed,
		})
	}

 /**
  * @description: 菜单点击
  * @param {*}
  * @return {*}
  */	
	bindleTo = (e) => {
		console.log('菜单点击', e)
	}

	render() {
		return (
			<Layout>
				
				<Sider trigger={null} collapsible collapsed={this.state.collapsed}>
					{/* logo */}
					<div className="logo" >
						<img src={logo} style={{width:'30%',textAlign:'center'}} alt= "" />
					</div>
					{/* 左侧menu - BEGIN*/}
					<Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} onClick={this.bindleTo}>
						<Menu.Item key="1" icon={<MinusOutlined />}>
							<Link to="/home">Home</Link>
						</Menu.Item>
						<Menu.Item key="2" icon={<MinusOutlined />}>
							<Link to="/test">Test</Link>
						</Menu.Item>
						<SubMenu key="3" icon={<MinusOutlined />} title="tacos">
							<Menu.Item key="4">
								<Link to="/tacos/bus">bus</Link>
							</Menu.Item>
							<Menu.Item key="5">
								<Link to="/tacos/cart">cart</Link>
							</Menu.Item>
						</SubMenu>
						<Menu.Item key="6" icon={<MinusOutlined />}>
							<Link to="/sandwiches">sandwiches</Link>
						</Menu.Item>
						<Menu.Item key="7" icon={<MinusOutlined />}>
							<Link to="/notfund">NotFund</Link>
						</Menu.Item>
						<Menu.Item key="8" icon={<MinusOutlined />}>
							<Link to="/hoc">Hoc</Link>
						</Menu.Item>
						<Menu.Item key="9" icon={<MinusOutlined />}>
							<Link to="/refs">refs</Link>
						</Menu.Item>
					</Menu>
					{/* 左侧menu - END*/}
				</Sider>
				<Layout className="site-layout">
					<div className='head'>
						<div className='headItem'>
							{/* 菜单收缩按钮 */}
							<Header className="site-layout-background" style={{ padding: '2px 0px 0px 0px' }}>
								{React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, { className: 'trigger', onClick: this.toggle, })}
							</Header>
							{/* 面包屑 */}
							<Breadcrumb>
								<Breadcrumb.Item>Home</Breadcrumb.Item>
								<Breadcrumb.Item>List</Breadcrumb.Item>
								<Breadcrumb.Item>App</Breadcrumb.Item>
							</Breadcrumb>
						</div>
						<div>
							{/* 退出登录/修改密码下拉 */}
							<Dropdown overlay={menu} trigger={['hover']}>
								<span className="dropName">DaMuWang</span>
							</Dropdown>
						</div>
					</div>
					<Content className="site-layout-background" style={{ margin: '24px 16px', padding: 24, minHeight: 280, }}>
						{/* 内容区域 */}
						<ContentRouter />
					</Content>
				</Layout>
			</Layout>
		)
	}
}

export default SLayOut
