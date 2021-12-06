import React from 'react';
import { Layout } from 'antd';
import Sidebar from '../components/dashboard/Sidebar';
import Navbar from '../components/dashboard/Navbar';
import OnerFooter from '../components/dashboard/Footer';
import OnerContent from './Content';

function Dashboard(){
    return(
        <React.Fragment>
            <Layout style={{height: '100vh'}}>
                <Sidebar/>
                <Layout>
                    <Navbar/>
                    <OnerContent/>
                    <OnerFooter/>
                </Layout>
            </Layout>
        </React.Fragment>
    )
}

export default Dashboard;