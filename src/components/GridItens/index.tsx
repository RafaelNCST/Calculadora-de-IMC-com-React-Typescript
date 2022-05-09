import { keyframes } from "styled-components"
import { Levels } from "../../helpers/calculateIMC"
import {GridStyled} from "./style"

type Props = {
    item: Levels
}

export const GridItens = ({item}: Props) => {
    return (
        <GridStyled style={{backgroundColor:item.color}}>
            <div className="gridIcon">
                <img src={item.icon === "up" ? "./assets/up.png" : "./assets/down.png"} alt="" width="35"/>
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