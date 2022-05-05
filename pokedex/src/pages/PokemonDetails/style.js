import styled from 'styled-components'

export const PageContainer = styled.div`
    max-width: 80vw;
    margin: auto;
    padding-top: 3%;
    padding-bottom: 3%;
   

`
export const InfoContainer = styled.div`
    display:flex;
    gap:20px;
    height: 60vh;
    display: flex;
    justify-content: center;
    
`
export const Img = styled.img`
    height: 80%;
`

export const InfoCenterDiv = styled.div`
    display: flex;
    max-width: 30%;
    min-width: 30%;
    flex-direction: column;
    justify-content: space-between;
`

export const ButtonContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 15px;
    font-size: 1.5rem;
    font-weight: bold;
    color:white;
    -webkit-text-stroke: 0.7px black;
    span{
        text-transform: capitalize;
    }
    button{
        font-size: 2rem;
        :hover{
            opacity: 85%;
            color:black;
        }
    }
`