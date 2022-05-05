import useRequestData from '../../hook/useRequestData'
import { Badge } from '@chakra-ui/react'
import {typesPt} from '../../theme/pokemonTypeColors'
import {WeaknessCointer} from './style'



const PokeWeakness = (props) => {
    
    const url1 = props.types[0].type.url
    const url2 = props.types[1] ? props.types[1].type.url : url1
    const datas1 =  useRequestData({}, url1)
    const datas2 = useRequestData({}, url2)
  
    let renderWeakness

    if(datas1.damage_relations && datas2.damage_relations){

        console.log(datas1.damage_relations.double_damage_from)
        let pokemonWeakness = [] 
        const weaknessType1 = datas1.damage_relations.double_damage_from.map((item)=>{
            pokemonWeakness = [...pokemonWeakness, item.name]
        })
        const weaknessType2 = props.types[1] && datas2.damage_relations.double_damage_from.map((item)=>{
            pokemonWeakness = [...pokemonWeakness, item.name]
        })
        
        const teste = pokemonWeakness.reduce((unico, item) => {
            return unico.includes(item) ? unico : [...unico, item]
        }, []);
       
        console.log(pokemonWeakness)
        
        renderWeakness = teste.map((weak, index)=>{
            return<Badge key={index} variant={weak}>{typesPt[weak]}</Badge>
        })
        
     
    }
    return(
        <>
            <WeaknessCointer>
            <legend>Fraquezas</legend>
                {renderWeakness}
            </WeaknessCointer>
            
        </>
    )
}

export default PokeWeakness