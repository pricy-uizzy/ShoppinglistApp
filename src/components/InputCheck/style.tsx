import styled from 'styled-components'; 

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    background: #3C9660;
    height: 667px;
    padding: 20px;
`

export const ContentList = styled.div`
    display: flex;
`

export const ContentIcon = styled.div`
    display: flex;
    gap: 4px;
`
export const ButtonRemove = styled.div`
    background: #447D5B;
    border-radius: 10px;
    border: 1px solid;
    /* padding: 2px; */
`
export const ButtonMinus = styled.div`
    background: #447D5B;
    border-radius: 10px;
    border: 1px solid;
    /* padding: 2px; */
`
export const ButtonPlus = styled.div`
    background: #447D5B;
    border-radius: 10px;
    border: 1px solid;
    /* padding: 2px; */
`


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
`

export const TitleTwo = styled.div`
    font-size: 16px;
    margin: 16px;
    font-weight: bold;
`

