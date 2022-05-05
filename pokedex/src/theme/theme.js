import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
    components: {
        Progress: {

            variants: {
                normal: {
                    filledTrack: {
                        bg: '#9099a0',
                        borderRadius: '10px'
                    }
                },
                bug: {
                    filledTrack: {
                        bg: '#8FC12C',
                        borderRadius: '10px'
                    }
                },
                electric: {
                    filledTrack: {
                        bg: '#F3D13B',
                        borderRadius: '10px'
                    }
                },
                fighting: {
                    filledTrack: {
                        bg: '#CD4069',
                        borderRadius: '10px'
                    }
                },
                ghost: {
                    filledTrack: {
                        bg: '#5268AB',
                        borderRadius: '10px'
                    }
                },
                psychic: {
                    filledTrack: {
                        bg: '#F87176',
                        borderRadius: '10px'
                    }
                },
                flying: {
                    filledTrack: {
                        bg: '#92A9DE',
                        borderRadius: '10px'
                    }
                },
                steel: {
                    filledTrack: {
                        bg: '#5A8EA1',
                        borderRadius: '10px'
                    }
                },
                ice: {
                    filledTrack: {
                        bg: '#74CEBF',
                        borderRadius: '10px'
                    }
                },
                poison: {
                    filledTrack: {
                        bg: '#AB6AC8',
                        borderRadius: '10px'
                    }
                },
                fire: {
                    filledTrack: {
                        bg: '#FE9C54',
                        borderRadius: '10px'
                    }
                },
                dragon: {
                    filledTrack: {
                        bg: '#0A6CC4',
                        borderRadius: '10px'
                    }
                },
                ground: {
                    filledTrack: {
                        bg: '#D97745',
                        borderRadius: '10px'
                    }
                },
                water: {
                    filledTrack: {
                        bg: '#4C8FD5',
                        borderRadius: '10px'
                    }
                },
                dark: {
                    filledTrack: {
                        bg: '#5A5266',
                        borderRadius: '10px'
                    }
                },
                rock: {
                    filledTrack: {
                        bg: '#C6B78A',
                        borderRadius: '10px'
                    }
                },
                grass: {
                    filledTrack: {
                        bg: '#63BB5A',
                        borderRadius: '10px'
                    }
                },
                fairy: {
                    filledTrack: {
                        bg: '#EB8EE5',
                        borderRadius: '10px'
                    }
                }

            },
        },
        Badge: {

            variants: {
                moves: {
                    bg: '#DFDFDF',
                    borderRadius: '10px',
                    fontWeight:'500',
                    fontSize:'0.9rem',
                    textTransform: 'capitalize',
                    display:'flex',
                    alignItems:'center',
                    justifyContent:'center',
                    minWidth: '90px',
                    maxHeight: '20px'
                },
                normal: {

                    bg: '#9099a0',
                    borderRadius: '10px',
                    padding: '0px 10px',
                    fontWeight:'500',
                    fontSize:'0.9rem',
                    textTransform: 'capitalize',
                    display:'flex',
                    alignItems:'center',
                    justifyContent:'center'
                },
                bug: {

                    bg: '#8FC12C',
                    borderRadius: '10px',
                    padding: '0px 10px',
                    fontWeight:'500',
                    fontSize:'0.9rem',
                    textTransform: 'capitalize',
                    color: '#DFDFDF',
                    display:'flex',
                    alignItems:'center',
                    justifyContent:'center'
                },
                electric: {

                    bg: '#F3D13B',
                    borderRadius: '10px',
                    padding: '0px 10px',
                    fontWeight:'500',
                    fontSize:'0.9rem',
                    textTransform: 'capitalize',
                    display:'flex',
                    alignItems:'center',
                    justifyContent:'center'
                },
                fighting: {

                    bg: '#CD4069',
                    borderRadius: '10px',
                    padding: '0px 10px',
                    fontWeight:'500',
                    fontSize:'0.9rem',
                    textTransform: 'capitalize',
                    color: '#DFDFDF',
                    display:'flex',
                    alignItems:'center',
                    justifyContent:'center'
                },
                ghost: {

                    bg: '#5268AB',
                    borderRadius: '10px',
                    padding: '0px 10px',
                    fontWeight:'500',
                    fontSize:'0.9rem',
                    textTransform: 'capitalize',
                    color: '#DFDFDF',
                    display:'flex',
                    alignItems:'center',
                    justifyContent:'center'
                },
                psychic: {

                    bg: '#F87176',
                    borderRadius: '10px',
                    padding: '0px 10px',
                    fontWeight:'500',
                    fontSize:'0.9rem',
                    textTransform: 'capitalize',
                    color: '#DFDFDF',
                    display:'flex',
                    alignItems:'center',
                    justifyContent:'center'
                },
                flying: {

                    bg: '#92A9DE',
                    borderRadius: '10px',
                    padding: '0px 10px',
                    fontWeight:'500',
                    fontSize:'0.9rem',
                    textTransform: 'capitalize',
                    display:'flex',
                    alignItems:'center',
                    justifyContent:'center'
                },
                steel: {

                    bg: '#5A8EA1',
                    borderRadius: '10px',
                    padding: '0px 10px',
                    fontWeight:'500',
                    fontSize:'0.9rem',
                    textTransform: 'capitalize',
                    color: '#DFDFDF',
                    display:'flex',
                    alignItems:'center',
                    justifyContent:'center'
                },
                ice: {

                    bg: '#74CEBF',
                    borderRadius: '10px',
                    padding: '0px 10px',
                    fontWeight:'500',
                    fontSize:'0.9rem',
                    textTransform: 'capitalize',
                    display:'flex',
                    alignItems:'center',
                    justifyContent:'center'
                },
                poison: {

                    bg: '#AB6AC8',
                    borderRadius: '10px',
                    padding: '0px 10px',
                    fontWeight:'500',
                    fontSize:'0.9rem',
                    textTransform: 'capitalize',
                    color: '#DFDFDF',
                    display:'flex',
                    alignItems:'center',
                    justifyContent:'center'
                },
                fire: {

                    bg: '#FE9C54',
                    borderRadius: '10px',
                    padding: '0px 10px',
                    fontWeight:'500',
                    fontSize:'0.9rem',
                    textTransform: 'capitalize',
                    display:'flex',
                    alignItems:'center',
                    justifyContent:'center'
                },
                dragon: {

                    bg: '#0A6CC4',
                    borderRadius: '10px',
                    padding: '0px 10px',
                    color: '#DFDFDF',
                    fontWeight:'500',
                    fontSize:'0.9rem',
                    textTransform: 'capitalize',
                    display:'flex',
                    alignItems:'center',
                    justifyContent:'center'
                },
                ground: {

                    bg: '#D97745',
                    borderRadius: '10px',
                    padding: '0px 10px',
                    color: '#DFDFDF',
                    fontWeight:'500',
                    fontSize:'0.9rem',
                    textTransform: 'capitalize',
                    display:'flex',
                    alignItems:'center',
                    justifyContent:'center'
                },
                water: {

                    bg: '#4C8FD5',
                    borderRadius: '10px',
                    padding: '0px 10px',
                    fontWeight:'500',
                    fontSize:'0.9rem',
                    textTransform: 'capitalize',
                    color: '#DFDFDF',
                    display:'flex',
                    alignItems:'center',
                    justifyContent:'center',
                    
                },
                dark: {

                    bg: '#5A5266',
                    borderRadius: '10px',
                    padding: '0px 10px',
                    fontWeight:'500',
                    fontSize:'0.9rem',
                    textTransform: 'capitalize',
                    color: '#DFDFDF',
                    display:'flex',
                    alignItems:'center',
                    justifyContent:'center'
                },
                rock: {

                    bg: '#C6B78A',
                    borderRadius: '10px',
                    padding: '0px 10px',
                    fontWeight:'500',
                    fontSize:'0.9rem',
                    textTransform: 'capitalize',
                    display:'flex',
                    alignItems:'center',
                    justifyContent:'center'
                },
                grass: {

                    bg: '#63BB5A',
                    borderRadius: '10px',
                    padding: '0px 10px',
                    fontWeight:'500',
                    fontSize:'0.9rem',
                    textTransform: 'capitalize',
                    color: '#DFDFDF',
                    display:'flex',
                    alignItems:'center',
                    justifyContent:'center'
                },
                fairy: {

                    bg: '#EB8EE5',
                    borderRadius: '10px',
                    padding: '0px 10px',
                    fontWeight:'500',
                    fontSize:'0.9rem',
                    textTransform: 'capitalize',
                    display:'flex',
                    alignItems:'center',
                    justifyContent:'center'
                }


            },
        },
    },
})

export default theme