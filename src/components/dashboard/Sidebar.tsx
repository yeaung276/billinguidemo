import React from 'react';
import { Layout, Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import logo from '../../logo/logo-light-icon.png';


function Sidebar(){
    return(
        <React.Fragment>
            <Layout.Sider
                breakpoint="lg"
                theme='light'
                style={{
                    overflow: 'auto',
                    height: '100vh',
                }}
                >
                <div className="logo main-theme">
                    <img alt='logo' src={logo}/>
                </div>
                {getNav()}
            </Layout.Sider>
        </React.Fragment>
    )
}

function Cashier(){
    const navigate = useNavigate()
    return(
        <Menu mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<UserOutlined />} onClick={()=>navigate('/dashboard/cashier/bills')}>Bills</Menu.Item>
        </Menu>
    )
}

function getNav(){
    const role = 'cashier'
    
    switch(role){
        case 'cashier':
            return <Cashier/>
        default: 
            return ''
    }
}

export default Sidebar;