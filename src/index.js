/*
 * @Description: 项目入口
 * @Autor: 王成阳
 * @Date: 2021-10-28 14:35:33
 */
import React from 'react';
import ReactDOM from 'react-dom';
import "antd/dist/antd.css";
import { SysRouter } from './config/router';

ReactDOM.render(
<SysRouter />,
document.getElementById('root')
)