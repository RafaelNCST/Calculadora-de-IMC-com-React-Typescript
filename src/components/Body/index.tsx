import * as Style from "./style"
import { GridItens } from "../GridItens"
import { useState } from "react"
import { levels, calculateIMC, Levels } from "../../helpers/calculateIMC"
import arrowImg from "../../../assets/leftarrow.png";

export const Body = () => {

    const [height, setHeight] = useState<number>(0);
    const [weight, setWeight] = useState<number>(0);
    const [toShow, setToShow] = useState<Levels | null>(null);
    const [warningOpacity, setWarningOpacity] = useState<number>(0)

    const handleClickCalculate = () => {
        if(height && weight){
            setToShow(calculateIMC(weight, height));
            setWarningOpacity(0);
        }else{
            setWarningOpacity(1);
        }
    }

    const handleClickBackButton = () => {
        setToShow(null);
        setHeight(0);
        setWeight(0);
    }

    return (
        <Style.BodyStyle>
            <div className="containerLeft">
                <h1>Calcule o seu IMC.</h1>
                <p> 
                    IMC é a sigla para índice de massa corpórea, parâmetro adotado pela 
                    Organização Mundial da Saúde para calcular o peso ideal de cada pessoa.
                </p>
                <input 
                    className="inputAltura" 
                    type="number" 
                    placeholder="Digite a sua altura. Ex 1.5 (Em Metros)"
                    value={height > 0 ? height : ""}
                    onChange={e => setHeight(parseFloat(e.target.value))}
                    disabled={toShow ? true : false}
                    >
                </input>
                <input 
                    className="inputPeso"
                    type="number" 
                    placeholder="Digite o seu peso. Ex 75.3 (em KG)"
                    value={weight > 0 ? weight : ""}
                    onChange={e => setWeight(parseFloat(e.target.value))}
                    disabled={toShow ? true : false}
                    >
                </input>

                <div className="warningMessage" style={{opacity:warningOpacity}}> Digite Números válidos </div>

                <button onClick={handleClickCalculate} disabled={toShow ? true : false}>Calcular</button>
            </div>
            {!toShow &&
                <div className="ContainerRight">
                    <div className="Grid">
                        {levels.map((item, key) => (
                            <GridItens key={key} item={item}></GridItens>
                        ))} 
                    </div>
                </div>
            }
            {toShow &&
                <div className="ContainerRight">
                    <div className="GridSolo">
                        <div className="rightArrow" onClick={handleClickBackButton}>
                            <img src={arrowImg} alt="" width="30px"/>
                        </div>
                        <GridItens item={toShow}></GridItens>
                    </div>
                </div>
            }
        </Style.BodyStyle>
    )
}