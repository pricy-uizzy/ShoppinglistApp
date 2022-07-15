import { Input, InputNumber, Form } from "antd";
import Button from "../commons/Button";

interface IForm{
    name: string
    onFinish: (values: any) => void
}

function FormComponent(params: IForm) {
    
    return (
        <Form name={params.name} onFinish={params.onFinish}>
            <Form.Item label="ITEM" name="nameItem" rules={[{ required: true, message: 'FILL IN THE FIELD' }]} >
                <Input placeholder="PLEASE INPUT YOUR ITEM!" />
            </Form.Item>
            
            <Form.Item label="QUANTIDADE" name="quantidade" rules={[{ required: true, message: 'PLEASE INPUT YOUR QUANTITY!' }]}>
                <InputNumber />
            </Form.Item>

            <Form.Item >
                <Button background="#041dff" type="submit" center>Sumbit</Button>
            </Form.Item>
        </Form>
    )
}

export default FormComponent;