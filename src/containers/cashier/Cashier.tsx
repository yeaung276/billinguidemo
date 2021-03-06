import { Space, Table, Tabs, Button } from 'antd';
import React, { useState } from 'react';
import BillForm from './BillForm';

import Receipt from '../../components/cashier/ReceiptPrintHandler';
import HeaderBar from '../../components/cashier/HeaderBar';

function Cashier(){
    enum Show {
        receipt,
        form,
        table
    }
    const [showForm, setShowForm] = useState<Show>(Show.form)

const columns = [
    {
        title: 'Bill Id',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: 'Patient Name',
        dataIndex: 'patient_name',
        key: 'name',
    },
    {
        title: 'Patient Phone',
        dataIndex: 'phone',
        key: 'phone',
    },
    {
        title: 'Total Amount',
        dataIndex: 'total',
        key: 'total',
    },
    {
        title: 'Total Amount',
        dataIndex: 'total_amount',
        key: 'total_amount',
    }
]
    if(showForm===Show.form) return <BillForm toogle={()=>setShowForm(Show.table)}/>

    if(showForm===Show.receipt) return <Receipt toogle={()=>setShowForm(Show.table)} data={[]}/>

    return(
        <React.Fragment>
            <HeaderBar
                buttons={
                    <Space>
                        <Button type="primary" onClick={()=>setShowForm(Show.form)}>New</Button>
                        <Button type="primary" onClick={()=>setShowForm(Show.form)}>Edit</Button>
                        <Button type="primary" onClick={()=>setShowForm(Show.receipt)}>Detail</Button>
                    </Space>
                }
                title="Cashier"
            />
                
            <Tabs defaultActiveKey="1">
                <Tabs.TabPane tab="Drafted" key="1">
                    <Table columns={columns} dataSource={[]} />
                </Tabs.TabPane>
                <Tabs.TabPane tab="Printed" key="2">
                    <Table columns={columns} dataSource={[]} />
                </Tabs.TabPane>
            </Tabs>
        </React.Fragment>
    )
}

export default Cashier;