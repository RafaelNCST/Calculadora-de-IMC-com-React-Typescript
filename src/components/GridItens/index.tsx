import { keyframes } from "styled-components"
import { Levels } from "../../helpers/calculateIMC"
import {GridStyled} from "./style"
import up from "../../../assets/up.png"
import down from "../../../assets/down.png"

type Props = {
    item: Levels
}

export const GridItens = ({item}: Props) => {
    return (
        <GridStyled bgColor={item.color}>
            <div className="gridIcon">
                <img src={item.icon === "up" ? up : down} alt="" width="35"/>
            </div>
            <div className="gridTitle"> {item.title} </div>

            {item.yourIMC &&
                <div className="yourIMC"> Seu IMC é de {item.yourIMC} kg/m² </div>
            }

            <div className="gridInfo"> 
                <>
                    IMC está entre <strong> {item.imc[0]} </strong> e <strong> {item.imc[1]} </strong>
                </>
            </div>
        </GridStyled>
    )
}