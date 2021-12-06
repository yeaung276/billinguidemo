import { Button, Col, Row } from 'antd';
import React, { useState } from 'react';
import BillItemInputForm from '../../components/cashier/BillItemInputForm';
import BillItemTable, { RowItem } from '../../components/cashier/BillItemTable';
import PatientInfo from '../../components/cashier/PatientInfo';
import Receipt from '../../components/cashier/ReceiptPrintHandler';

function Cashier(){

    const [rowItem, setRowItem] = useState<RowItem[]>([])
    const [showReceiptPrint, setShowReceiptPrint] = useState(false)

    const add = (rowItem:RowItem) => {
        setRowItem(prev=> [rowItem,...prev])
    }

    const remove = (item:RowItem) => {
        setRowItem(prev=>prev.filter(x=>x.sales_service_item_id!==item.sales_service_item_id))
    }

    const toogleReceiptPrint = () => setShowReceiptPrint(prev=>!prev)

    if(showReceiptPrint) return <Receipt toogle={toogleReceiptPrint} data={rowItem}/>

    return(
        <React.Fragment>
            <PatientInfo/>
            <Row>
                <Col span={8}>
                    <BillItemInputForm onSubmit={add} />
                    <Button type='primary' block onClick={toogleReceiptPrint}>Print Invoice</Button>
                </Col>
                <Col span={16}>
                    <BillItemTable data={rowItem} onRemove={remove}/>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default Cashier;