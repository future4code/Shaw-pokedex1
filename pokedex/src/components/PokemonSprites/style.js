import styled from 'styled-components'

export const SpritesContainer = styled.div`
    color: #423D3D;
    min-width: 30%;
    height: 100%; 
`
export const Fieldset = styled.fieldset`
    border: 2px solid #423D3D;
    padding: 0% 5%; 
    border-radius: 10px;
    display: flex;
    align-items: center ;
    justify-content: center;
    gap: 1.25rem;
    min-width: 100%;
    height: 100%;

    legend {
        font-size: 1.5rem;
        padding: 0.313rem;
        text-transform: capitalize;
    }
`

export const Img = styled.img`
    height: 90%;
    padding-bottom: 0.313rem;
`