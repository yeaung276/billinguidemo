import React from 'react';
import { Layout } from 'antd';
import { Route, Routes } from 'react-router';
import { Navigate } from 'react-router-dom';
import Cashier from './cashier/Cashier';
import MessagingContext from '../hoc/Messaging'
import Payment from './Payment';
// import RedirectWithRole from '../components/dashboard/RedirectWithRole'

function OnerContent(){
    return(
        <React.Fragment>
            <Layout.Content>
                <div className='content-wrapper'>
                    <Routes>
                        <Route path='/cashier' element={<Cashier/>}/>
                        <Route path='/payment' element={<Payment/>}/>
                        <Route path='/' element={<Navigate to="/cashier"/>} />
                    </Routes> 
                </div>
            </Layout.Content>
        </React.Fragment>
    )
}

export default MessagingContext(OnerContent)