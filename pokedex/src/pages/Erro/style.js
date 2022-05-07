import styled from "styled-components";

export const ErroDiv = styled.div`
    height: 88vh;
    background: url(${props => props.imagem});
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: auto;
    background-color: rgb(230, 230, 230);

    p{
        font-size: 2.5rem;
        display: flex;
        padding: 8% 0 0 4%;
    }
` 