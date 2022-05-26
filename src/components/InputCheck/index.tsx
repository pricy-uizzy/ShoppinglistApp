import { Container, ContainerForm, ContentIcon, ContentList, Title, ButtonRemove, ButtonMinus, ButtonPlus, TitleTwo } from "./style"
import React, { createElement, useEffect, useState } from 'react';
import { Form, Input, Button, Checkbox, InputNumber } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import { v4 as uuidv4 } from 'uuid';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleMinus, faCirclePlus, faTrashCan } from "@fortawesome/free-solid-svg-icons";

interface Iitem {
    id: string
    check: boolean
    quantidade: number,
    nameItem: string,
    descricao?: string
    valor: number,
}

function ShoppingList() {
    const [itens, setItens] = useState<Iitem[]>([])
    console.log(itens)

    useEffect(() => {
        let localItens = localStorage.getItem("itens");
        if (localItens) {
            localItens = JSON.parse(localItens);
            //@ts-ignore
            setItens(localItens);
        }
    }, [])

    useEffect(() => {
        if (itens.length > 0)
            localStorage.setItem("itens", JSON.stringify(itens))
    }, [itens])

    const onFinish = (values: any) => {
        setItens([
            ...itens,
            {
                ...values,
                check: false,
                id: uuidv4()
            }

        ])
    }

    const onChange = (e: CheckboxChangeEvent) => {
        // console.log(`checked = ${e.target.checked}; id = ${e.target.id}`);
        setItens(itens.map((item) => {
            if (item.id == e.target.id) {
                return {
                    ...item,
                    check: e.target.checked
                }
            }
            return item;
        }));
    };

    //Logica Botao de Minus
    const onRemove = (id: string) => {
        // if (window.confirm("Quer mesmo remover?"))
        setItens(itens.filter(item => {
            return item.id != id
        }));
    };

    //Logica Botao de Plus
    const onPlus = (id: string) => {
        setItens(itens.map((item) => {
            if (item.id == id) {
                return {
                    ...item,
                    quantidade: item.quantidade + 1
                }
            }
            return item;
        }));

    }

    const onMinus = (id: string) => {
        setItens(itens.map((item) => {
            if (item.id == id) {
                return {
                    ...item,
                    quantidade: item.quantidade - 1
                }
            }
            return item;
        }))
    }

    const onChangeValor = (id: string, valor: number) => {
        setItens(itens.map((item) => {
            if (item.id == id) {
                return {
                    ...item,
                    valor: valor
                }
            }
            return item;
        }))
    }

    function renderItem(item: Iitem) {

        return (
            <ContentList className="item">
                <Checkbox checked={item.check} id={item.id} onChange={onChange}>
                    {item.nameItem}
                </Checkbox>
                <ContentIcon>
                    <ButtonRemove onClick={() => onRemove(item.id)}> <FontAwesomeIcon icon={faTrashCan} /> </ButtonRemove>
                    <ButtonMinus onClick={() => onMinus(item.id)}> <FontAwesomeIcon icon={faCircleMinus} /> </ButtonMinus>
                    <strong>{item.quantidade}</strong>
                    <ButtonPlus onClick={() => onPlus(item.id)}> <FontAwesomeIcon icon={faCirclePlus} /> </ButtonPlus>

                </ContentIcon>
                {item.check && <InputNumber
                    formatter={value => `R$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    parser={value => value!.replace(/\$\s?|(,*)/g, '')}
                    onChange={(value: string) => {
                        onChangeValor(item.id, parseFloat(value));
                    }}
                />}
                {/* {item.descricao} */}
            </ContentList>
        )
    }

    function calculaValor() {
        let itensFIltrados = itens.filter((item) => item.check);
        if (itensFIltrados.length == 0) return 0;
        return itensFIltrados.map((item) => item.valor ? item.valor : 0).reduce((previousValue, currentValue) => previousValue + currentValue)
    }

    return (

        <Container>
            
            <ContainerForm>
                <Form
                    name="basic"
                    onFinish={onFinish}
                >
                    <Form.Item label="Item" name="nameItem" rules={[{ required: true, message: 'Please input your item!' }]}>
                        <Input placeholder="Adicione um Item a lista" />
                    </Form.Item>

                    {/* <Form.Item label="descricao" name="descricao" >
                    <Input placeholder="Adicione uma descrição" />
                    </Form.Item> */}

                    <Form.Item label="Quantidade" name="quantidade" rules={[{ required: true, message: 'Please input your quantidy!' }]}>
                        <InputNumber />
                    </Form.Item>

                    <Form.Item >
                        <Button htmlType="submit">Enviar</Button>
                    </Form.Item>
                </Form>
            </ContainerForm>

            <div>
                <div>
                <Title>ShoppingList</Title>
                    <ul className="lista">
                        {itens.filter((item) => !item.check).map(renderItem)}
                    </ul>
                </div>

                <div style={{ width: 250 }}>
                    <TitleTwo>In the bag</TitleTwo>
                    <ul>
                    {itens.filter((item) => item.check).map(renderItem)}
                    </ul>
                    <p><strong>Total:</strong>{calculaValor()}</p>
                </div>
            </div>
        </Container>
    )
}

export default ShoppingList;
