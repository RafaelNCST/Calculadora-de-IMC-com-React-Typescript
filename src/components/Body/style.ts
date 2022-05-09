import styled from "styled-components";

export const BodyStyle = styled.div`
    max-width: 900px;
    margin: auto;
    display: flex;
    color: #535e94;

    .containerLeft{
        flex:1;
        margin-right: 40px;

        h1{
            font-size: 40px;
            margin: 0;
        }

        p{
            margin-top: 20px;
            font-size: 16px;
            margin-bottom: 10px;
        }

        input{
            background: none;
            width: 100%;
            border: none;
            border-bottom: 1px solid gray;
            font-size: 14px;
            outline: none;
            padding: 10px;
            margin-bottom: 20px;

            :disabled{
                opacity: 0.5;;
            }
            
        }

        .inputAltura{
            margin-top: 30px;
        }

        .inputPeso{
            margin-top: 15px;
        }

        .warningMessage{
            font-size: 15px;
            color: red;
            width: 100%;
            padding-left: 10px;
            transition: all ease-in-out .3s;
        }

        button{
            background-color: #227c9d;
            border-radius: 5px;
            border: none;
            width: 400px;
            padding: 15px;
            color: white;
            width: 100%;
            margin-top: 40px;
            cursor: pointer;
            transition: all ease .3s;

            :hover{
                opacity: 0.7;
            }

            :disabled{
                opacity: 0.5;
                cursor: auto;
            }
        }
    }

    .ContainerRight{
        flex: 1;
        margin-left: 40px;
        display: flex;
        position: relative;

        .Grid{
            flex:1;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;

            @media (max-width: 450px){
                grid-template-columns: 1fr;
            }
        }

        .GridSolo{
            flex:1;
            display: flex;
        }

        .rightArrow{
            position:absolute;
            border-radius: 50%;
            background-color: #227C9D;
            width: 70px;
            height: 70px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            margin-left: -35px;
            margin-top: 145px;
            transition: all ease-in-out .3s;

            :hover{
                background-color: #164f63;
            }
        }
    }

    @media (max-width: 770px){
        flex-direction: column;
        padding: 0px 40px;

        .containerLeft{
            margin-right: 0px;
            margin-bottom: 50px;
        }

        .ContainerRight{
            margin-left: 0px;

            .rightArrow{
                border-radius: 10px;
                margin-left: 0px;
                margin-top: 0px;
            }
        }
    }
`