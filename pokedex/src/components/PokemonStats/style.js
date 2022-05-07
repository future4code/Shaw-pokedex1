import styled from 'styled-components'

export const StatName = styled.span`
    font-weight: bold;
`

export const StatsContainer = styled.div`
    color: #423D3D;
    width: 30%;
    height: 100%;
`

export const FieldsetForm = styled.fieldset`
    border: 2px solid #423D3D;
    font-size: 1.1rem;
    padding: 3% 5% 5% 5%;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100%;

    legend {
        font-size: 1.5rem;
        padding: 0.313rem;
    }

    div {
        p {
            font-size: 0.8rem;
        }
    }
`