import { Form, Button, Select, InputNumber } from 'antd';
import { RefSelectProps } from 'rc-select';
import React, { useRef } from 'react';
import { RowItem } from './BillItemTable';

type Prop = {
    onSubmit: (item:RowItem) => void
}

const sales_service_items = [
    {id: 1, name: 'Dr. Moe Moe - Opd charge', charge: 10000, uom: 'head'},
    {id: 2, name: 'Urine REME', charge: 10000, uom: 'test'},
    {id: 3, name: 'Biogesis', charge: 90, uom: 'tab'},
]

function BillItemInputForm({onSubmit}:Prop){
    const {Option} = Select
    const [form] = Form.useForm()
    const selectRef = useRef<RefSelectProps>() as React.MutableRefObject<RefSelectProps>
    const quantityRef = useRef<HTMLInputElement>() as React.MutableRefObject<HTMLInputElement>

    const handleSubmit = () => {
        const data = form.getFieldsValue()
        const sales_service_item = sales_service_items.filter(x=>x.id===data.sales_service_item_id)[0]
        const rowItem:RowItem = {
            sales_service_item_id: data.sales_service_item_id,
            sales_service_item,
            quantity: data.quantity,
            sub_total: data.quantity * sales_service_item.charge
            
        }
        onSubmit(rowItem)
        selectRef.current?.focus()

    }

    const focusQuantity = () => quantityRef.current.focus()

    return(
        <React.Fragment>
        <div className="bill-input-form">
            <Form
                name="basic"
                layout='vertical'
                initialValues={{ remember: true }}
                autoComplete="off"
                onFinish={handleSubmit}
                form={form}
                
                >
                <Form.Item
                    label="Sales and Service Item"
                    name="sales_service_item_id"
                    rules={[{ required: true, message: 'Please select Item!' }]}
                >
                    <Select
                        showSearch
                        size='large'
                        onSelect={focusQuantity}
                        placeholder="Select an Item"
                        optionFilterProp="children"
                        filterOption={(input, option) => option!.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                        ref={selectRef}
                    >
                        <Option value={1}>Dr. Moe Moe - Opd charge</Option>
                        <Option value={2}>Urine REME</Option>
                        <Option value={3}>Biogesis</Option>
                    </Select>
                </Form.Item>

                <Form.Item
                    label="Quantity"
                    name="quantity"
                    rules={[{ required: true, message: 'Please input quantity!' }]}
                >
                    <InputNumber ref={quantityRef} type='number' size='large' min={0} style={{width: '100%'}}/>
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 18 }}>
                    <Button type="primary" htmlType="submit">Add</Button>
                </Form.Item>
            </Form>
        </div>
       
        </React.Fragment>
    )
}

export default BillItemInputForm