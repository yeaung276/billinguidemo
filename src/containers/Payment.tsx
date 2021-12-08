import { Table, Tabs, Button } from 'antd';
import React, { useState } from 'react';
import HeaderBar from '../components/cashier/HeaderBar';

import Receipt from '../components/cashier/ReceiptPrintHandler';

function Payment(){
    enum Show {
        receipt,
        table
    }
    const [showForm, setShowForm] = useState<Show>(Show.table)

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

    if(showForm===Show.receipt) return <Receipt toogle={()=>setShowForm(Show.table)} data={[]}/>

    return(
        <React.Fragment>

            <HeaderBar title="Payment"/>
            <Tabs defaultActiveKey="1">
                <Tabs.TabPane tab="Outstanding" key="1">
                    <Button type="primary" onClick={()=>setShowForm(Show.receipt)}>Make Payment</Button>
                    <Table columns={columns} dataSource={[]} />
                </Tabs.TabPane>
                <Tabs.TabPane tab="Complete" key="2">
                    <Button type="primary" onClick={()=>setShowForm(Show.receipt)}>Detail</Button>
                    <Table columns={columns} dataSource={[]} />
                </Tabs.TabPane>
            </Tabs>
        </React.Fragment>
    )
}

export default Payment;