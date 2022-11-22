import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'antd/dist/antd.min'
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <React.StrictMode>  关闭严格模式，方便API调试
    <App/>
    // </React.StrictMode>
);


