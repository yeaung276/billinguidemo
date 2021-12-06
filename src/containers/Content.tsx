import React from 'react';
import { Layout } from 'antd';
// import { Route, Routes } from 'react-router'
import Cashier from './cashier/Cashier';
import MessagingContext from '../hoc/Messaging'
// import RedirectWithRole from '../components/dashboard/RedirectWithRole'

function OnerContent(){
    return(
        <React.Fragment>
            <Layout.Content>
                <div className='content-wrapper'>
                    {/* <Routes>
                        <Route path='/dashboard/cashier/*' element={<Cashier/>}/>
                        <Route path='/dashboard' element={<RedirectWithRole/>}/>
                    </Routes>  */}
                    <Cashier/>
                </div>
            </Layout.Content>
        </React.Fragment>
    )
}

export default MessagingContext(OnerContent)