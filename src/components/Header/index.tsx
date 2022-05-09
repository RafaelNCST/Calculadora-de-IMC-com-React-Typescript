import { HeaderStyle } from "./style"
import imagemLogo from "../../../assets/powered.png"

export const HeaderComponent = () => {
    return (
        <HeaderStyle>
            <img src={imagemLogo} alt=""></img>
        </HeaderStyle>
    )

}