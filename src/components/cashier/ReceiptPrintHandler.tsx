import { Button, Space, Table } from 'antd';
import React, { RefObject, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { RowItem } from './BillItemTable';

type Props = {
    toogle: ()=>void
    data: RowItem[]
}
const columns = [
    { 
        title: 'No',
        dataIndex: 'ind',
        key: 'ind'
    },
    {
        title: 'Name',
        dataIndex: 'sales_service_item_name',
        key: 'name',
    },
    {
        title: 'Charge',
        dataIndex: 'charge',
        key: 'charge',
    },
    {
        title: 'Quantity',
        dataIndex: 'quantity',
        key: 'quantity',
    },
    {
        title: 'Unit',
        dataIndex: 'uom',
        key: 'uom',
    },
    {
        title: 'Sub Total',
        dataIndex: 'sub_total',
        key: 'sub_total',
    }
];
function ReceiptPrintHandler({toogle,data}:Props){
    const receiptRef = useRef() as RefObject<HTMLDivElement>
    const handlePrint = useReactToPrint({
        content: ()=>receiptRef.current
    })
    return(
        <React.Fragment>
            <Space>
                <Button type="primary" onClick={handlePrint}>Print</Button>
                <Button onClick={toogle}>Back</Button>
            </Space>
            <div ref={receiptRef} className="invoice-receipt">
                <p className="title">Dagon Lin Hospital</p>
                <p className='patient-info'>Name: Ko Htun Maung</p>
                <p className='patient-info'>Phone: 09876543212</p>
                <p className='patient-info'>Address: Yankin</p>
                <Table 
                columns={columns} 
                dataSource={data.map((x,ind)=>({
                    key: ind,
                    ind: ind+1,
                    ...x,
                    sales_service_item_name: x.sales_service_item.name,
                    charge: x.sales_service_item.charge,
                    unit: x.sales_service_item.uom
                }))} 
                pagination={false}
                summary={pageData => {
                    return (
                      <>
                        <Table.Summary.Row>
                          <Table.Summary.Cell index={1} colSpan={4}>Total:</Table.Summary.Cell>
                          <Table.Summary.Cell index={2}>{1000}</Table.Summary.Cell>
                        </Table.Summary.Row>
                        <Table.Summary.Row>
                          <Table.Summary.Cell index={2} colSpan={4}>Deposit:</Table.Summary.Cell>
                          <Table.Summary.Cell index={3}>{1000}</Table.Summary.Cell>
                        </Table.Summary.Row>
                        <Table.Summary.Row>
                          <Table.Summary.Cell index={3} colSpan={4}>Unpaid:</Table.Summary.Cell>
                          <Table.Summary.Cell index={2}>{1000}</Table.Summary.Cell>
                        </Table.Summary.Row>
                      </>
                    );
                  }}
            />
            </div>
        </React.Fragment>
    )
}

export default ReceiptPrintHandler