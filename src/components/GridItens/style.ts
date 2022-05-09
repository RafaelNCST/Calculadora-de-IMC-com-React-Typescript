import styled from "styled-components";

export const GridStyled = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    padding: 20px;
    color: white;
    flex-direction: column;

    .gridIcon{
        border-radius: 50%;
        width: 70px;
        height: 70px;
        background-color: rgba(0,0,0,0.1);
        display: flex; 
        justify-content: center;
        align-items: center;
    }

    .gridTitle{
        color: white;
        font-size: 23px;
        margin-top: 5px;
        font-weight: bolder;
    }

    .yourIMC{
        margin:10px 0 50px 0;
        font-size: 17px;
    }

    .gridInfo{
        font-size: 12px;
        margin-top: 14px;
    }


`