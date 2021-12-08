import { Col, Row, Table } from 'antd';

export type RowItem = {
    sales_service_item_id: number
    sales_service_item: {
        name: string
        charge: number
        uom: string
    }
    quantity: number
    sub_total: number
    
}

type Props = {
    data: RowItem[]
    onRemove: (id:RowItem) => void
}


function BillItemTable({data,onRemove}:Props){
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
        },
        {
            title: 'Actions',
            key: 'actions',
            render: (row:any)=><p onClick={()=>onRemove(row)} className="remove-action">remove</p>
        }
        
      ];
    return(
        <div style={{padding: '1rem'}}>
            <Row>
                <Col span={20}><p style={{fontWeight: 'bold'}}>Bill Items</p></Col>
                <Col span={4}><p style={{fontWeight: 'bold'}}>Total: <span>{data.reduce((p,v)=>p+v.sub_total,0)}</span>MMK</p></Col>
            </Row>
            
            <Table scroll={{ y: 420 }} columns={columns} dataSource={data.map((x,ind)=>({
                key: ind,
                ind: ind+1,
                ...x,
                sales_service_item_name: x.sales_service_item.name,
                charge: x.sales_service_item.charge,
                unit: x.sales_service_item.uom
            }))}/>
        </div>
    )
}

export default BillItemTable;