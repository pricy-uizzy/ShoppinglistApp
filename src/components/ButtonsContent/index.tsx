import { faCircleMinus, faCirclePlus, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CheckboxChangeEvent } from "antd/es/checkbox";
import { useEffect, useState } from "react";
import Button from "../commons/Button";
import { Buttons } from "./style";

interface IButtons {
    onMinus: (id: string) => void
    onPlus: (id: string) => void
    onRemove: (id: string) => void
    id: string

}


function ButtonsContent(params: IButtons) {

    return (
        <Buttons>
            <Button onClick={() => params.onMinus(params.id)} variant="minus" center background="#447D5B" > <FontAwesomeIcon icon={faCircleMinus} /> </Button>
            
            <Button onClick={() => params.onPlus(params.id)} variant="plus" center background="#447D5B"> <FontAwesomeIcon icon={faCirclePlus} />  </Button>
            <Button onClick={() => params.onRemove(params.id)} variant="delete" center background="#447D5B"> <FontAwesomeIcon icon={faTrashCan} /></Button>
        </Buttons>
    )

}

export default ButtonsContent;