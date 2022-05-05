import styled from 'styled-components'

export const StatsContainer = styled.div`
    color:#423D3D;
    width: 30%;
    height: 100%;
`
export const StatName = styled.span`
    font-weight: bold;
`

export const FieldsetForm = styled.fieldset`
    border: 2px solid #423D3D;
    font-size: 1.1rem;
    padding: 5%;
    border-radius: 10px;
    display:flex;
    flex-direction: column;
    gap:20px;
    height: 100%;
    legend{
        font-size: 1.5rem;
        padding:5px ;
    }
    div{
        p{
            font-size: 0.8rem;
        }
    }
`