import { Container, ContainerForm, ContentIcon, ContentList, Title, TitleTwo, ItemLista, ButtonCart, Footer, Total, TotalNum } from "./style"
import React, { createElement, useEffect, useState } from 'react';
import { InputNumber, Modal, Badge, Space, Checkbox } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import { v4 as uuidv4 } from 'uuid';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faCircleMinus, faCirclePlus, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import Button from "../commons/Button";
import FormComponent from "../Form";
import ButtonsContent from "../ButtonsContent";


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



    const [modalVisible, setModalVisible] = useState(false);


    function renderItem(item: Iitem) {

        return (
            <ContentList className="item">
                <Checkbox checked={item.check} id={item.id} onChange={onChange}>
                    {item.nameItem}
                </Checkbox>
                <ContentIcon>
                    <strong>{item.quantidade}</strong>
                    <ButtonsContent
                        id={item.id}
                        onMinus={onMinus}
                        onPlus={onPlus}
                        onRemove={onRemove}
                    />
                </ContentIcon>
                {item.check && <InputNumber
                    keyboard
                    formatter={value => `R$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    parser={value => value!.replace(/\$\s?|(,*)/g, '')}
                    onChange={(value: string) => {
                        onChangeValor(item.id, parseFloat(value));
                        console.log(value)
                    }}
                />}
                {/* {item.descricao} */}
            </ContentList>
        )
    }

    function calculaValor() {
        let itensFIltrados = itens.filter((item) => item.check);
        if (itensFIltrados.length == 0) return 0;
        return itensFIltrados.map((item) => item.valor ? item.quantidade * item.valor : 0).reduce((previousValue, currentValue) => previousValue + currentValue)
    }



    return (

        <Container>
            <style global jsx>{`
                  .ant-modal-footer {
                    border-top: none !important;
                }
            `}</style>

            <div>
                <FormComponent name="basic" onFinish={onFinish} />
            </div>

            <div>
                <div>
                    <Title>SHOPPINGLIST</Title>
                    <ItemLista className="lista">
                        {itens.filter((item) => !item.check).map(renderItem)}
                    </ItemLista>
                </div>
            </div>

            <Badge count={itens.filter((item) => item.check).length} style={{ top: -11, right: -150 }}>
                <ButtonCart onClick={() => setModalVisible(true)}> <FontAwesomeIcon icon={faCartShopping} />  </ButtonCart>
            </Badge>

            <Modal
                style={{ width: 250, height: 515 }}
                closable={false}
                centered
                visible={modalVisible}
                footer={[<Button onClick={() => setModalVisible(false)}>OK</Button>]}
            >
                <TitleTwo>IN THE BAG</TitleTwo>

                <ItemLista>
                    {itens.filter((item) => item.check).map(renderItem)}
                </ItemLista>
                <Footer>
                    <Total>TOTAL:</Total>
                    <TotalNum>{calculaValor()} </TotalNum>
                </Footer>
            </Modal>


        </Container>
    )
}

export default ShoppingList;
