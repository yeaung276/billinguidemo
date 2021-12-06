import React from 'react';
import { Layout, Popover, Menu } from 'antd';
import Icon,{ LogoutOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router';
import { setting } from '../../logo/icons';

const Content = () => {
    const navigate = useNavigate()
    const logout = ()=>{
        navigate('/logout')
    }
    return(
        <Menu mode="inline">
            <Menu.Item key="logout" onClick={logout} icon={<LogoutOutlined />}>Logout</Menu.Item>
        </Menu>
    )
}

function Navbar(){
    return(
        <React.Fragment>
            <Layout.Header className="main-theme" style={{ padding: 0 }}>
                <div className='setting'>
                    <Popover title="Menu" content={Content} placement='bottomLeft'><Icon component={setting}/></Popover>
                </div>
            </Layout.Header>
        </React.Fragment>
    )
}

export default Navbar;