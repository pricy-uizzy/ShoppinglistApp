import { Container } from "./style"
import React, { createElement, useEffect, useState } from 'react';
import { Form, Input, Button, Checkbox, InputNumber } from 'antd';



interface Iitem{
    quantidade: number,
    novoItem: string,
    descricao?: string
}

function ShoppingList() {
    // useEffect(() => {
    //     if (process.browser) {
    //         const novoItem = document.getElementById("novoItem")
    //         const lista = document.getElementById("lista")

    //         novoItem?.addEventListener("submit", (evento) => {
    //             evento.preventDefault()

    //             criaElemento(evento.target.elements['item'].value, evento.target.elements['quantidade'].value)

    //         })

    //         function criaElemento(item, quantidade) {
    //             const novoItem = document.createElement('li')
    //             novoItem.classList.add("lista")

    //             const quantidadeItem = document.createElement('strong')
    //             quantidadeItem.innerHTML = quantidade

    //             novoItem.appendChild(quantidadeItem)
    //             novoItem.innerHTML += item

    //             lista?.appendChild(novoItem)

    //             // console.log(criaElemento);

    //         }
    //     }
    // }, [])

    const [itens, setItens] = useState<Iitem[]>([])
    console.clear();
    console.table(itens);

    const onFinish = (values: any) => {
        setItens([
            ...itens,
            values

        ])
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    function renderItem(item:Iitem){
        
        return(
            <li className="item">
                <strong>{item.quantidade}</strong>
                {item.novoItem}
                {item.descricao}
            </li>
        )
    }

    return (

        <Container>
            <Form
                name="basic"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item label="item" name="novoItem"rules={[{ required: true, message: 'Please input your item!' }]}>
                    <Input placeholder="Adicione um Item a lista"/>
                </Form.Item>

                <Form.Item label="descricao" name="descricao" >
                    <Input placeholder="Adicione uma descrição" />
                </Form.Item>

                <Form.Item label="quantidade" name="quantidade" rules={[{ required: true, message: 'Please input your quantidy!' }]}>
                    <InputNumber />
                </Form.Item>

                <Form.Item >
                    <Button htmlType="submit">Enviar</Button>
                </Form.Item>

            </Form>

            <ul className="lista">
                {itens.map(renderItem)}
            </ul>
        </Container>
    )
}

export default ShoppingList;


