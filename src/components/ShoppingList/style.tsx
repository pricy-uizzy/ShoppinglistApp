import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    /* background: #b4c0b9; */
    height: 667px;
    padding: 20px;
    border: 5px solid #999898;
    border-radius: 5px;
  
`

export const ContentList = styled.div`
    display: flex;
    justify-content: space-between;
    .ant-input-number {
        border-radius: 16px;
    }
`

export const ContentIcon = styled.div`
    display: flex;
    gap: 4px;
`
// export const ButtonRemove = styled.div`
//     background: #447D5B;
//     border-radius: 100%;
//     border: 1px solid;
//     width: 30px;
//     height: 30px;
//     text-align: center;
//     padding: 2px;
// `
// export const ButtonMinus = styled.div`
//     background: #447D5B;
//     border-radius: 100%;
//     border: 1px solid;
//     width: 30px;
//     height: 30px;
//     text-align: center;
//     padding: 2px;
// `
// export const ButtonPlus = styled.div`
//     background: #447D5B;
//     border-radius: 100%;
//     border: 1px solid;
//     width: 30px;
//     height: 30px;
//     text-align: center;
//     padding: 2px;
// `


export const ContainerForm = styled.div`
    display: flex;
    .ant-form .ant-form-item .ant-form-item-label, 
    .ant-form .ant-form-item .ant-form-item-control {
    display: contents;
}
.ant-form .ant-form-item {
    gap: 14px;
    padding: 4px;
    font-weight: bold;
}
.ant-btn{
    height: 35px;
    width: 243px;
    border-radius: 15px;
}
.ant-input{
    border-radius: 15px;
}
.ant-input-number{
    border-radius: 15px;
}
`
export const Title = styled.div`
    font-size: 16px;
    margin: 16px;
    font-weight: bold;
    color: #1c4a4a;
    text-align: center;
`

export const TitleTwo = styled.div`
    font-size: 16px;
    margin: 16px;
    font-weight: bold;
    color: #1c4a4a;
    text-align: center;
`

export const ItemLista = styled.div`
    width: 335px;
    height: 311px;
    overflow: auto;
    display: flex;
    flex-direction: column;
    gap: 6px;
    .ant-checkbox + span {
    padding-right: 8px;
    padding-left: 8px;
    font-size: 16px;
    text-decoration: underline;
    color: #436a81;
}
`

export const ButtonCart = styled.div`
    align-items: center;
    justify-content: center;
    display: flex;
    position: fixed;
    bottom: 40px;
    right: 33px;
    width: 44px;
    height: 44px;
    border: 1px solid #82877b;
    border-radius: 100%;
    padding: 4px;
    text-align: center;
    font-size: 20px;
    color: #FFFF;
    background: #82877b;
    box-shadow: -1px 4px 5px black;
`

export const Footer = styled.div`
    display: flex;
    justify-content: center;
    gap: 16px;
`

export const Total = styled.div`
    font-size: 20px;
`

export const TotalNum = styled.div`
    font-size: 20px;
`