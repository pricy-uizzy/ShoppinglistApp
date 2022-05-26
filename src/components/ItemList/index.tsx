import { Container, Title, List } from "./style";

interface IitemList {
   itens: 

}



function ItemList (params: IitemList){
    return(
        <Container>
            <Title>Shopping List</Title>
            <List> {params.nameItem} {params.quantidade} </List>
        </Container>
    )
}

export default ItemList;