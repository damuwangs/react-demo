/*
 * @Description: 
 * @Autor: 王成阳
 * @Date: 2021-11-10 14:10:15
 */
import { Form, Input, Button, Checkbox } from 'antd';
import '@/css/system/login.css'
import { withRouter } from 'react-router-dom';
import React from 'react';

class Login extends React.Component{
    onFinish = (values) => {
        console.log('Success:', values);
    };

    onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    render(){
        return (
            <div className='loginBj'>
                <Form
                    name="basic"
                    labelAlign='right'
                    initialValues={{ remember: true }}
                    onFinish={this.onFinish}
                    onFinishFailed={this.onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="账号"
                        name="username"
                        rules={[{ required: true, message: '请输入账号' }]}
                    >
                        <Input />
                    </Form.Item>
    
                    <Form.Item
                        label="密码"
                        name="password"
                        rules={[{ required: true, message: '请输入密码' }]}
                    >
                        <Input.Password />
                    </Form.Item>
    
                    <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>
    
                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="submit">
                            登录
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}

export default withRouter(Login)
