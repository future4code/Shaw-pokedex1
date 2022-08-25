import React, { useEffect, useState} from 'react'
import axios from 'axios'
import { base_url } from '../../constants/constants'
import { HomeContainer, HomeMain, LoaderContainer } from './style'
import Card from '../../components/Card/Card'
import Header from '../../components/Header/Header'
import Footer from "../../components/Footer/Footer"
import { Grid, Spinner, Stack } from "@chakra-ui/react";
import {
    Pagination,
    usePagination,
    PaginationPage,
    PaginationNext,
    PaginationPrevious,
    PaginationPageGroup,
    PaginationContainer,
    PaginationSeparator,
} from "@ajna/pagination";
import { MdOutlineArrowForwardIos, MdOutlineArrowBackIosNew } from 'react-icons/md'

const HomePage = () => {

    const [pokemonList, setPokemonList] = useState([])
    const [loading, setLoading] = useState(true)


    // constants
    const outerLimit = 2;
    const innerLimit = 2;
    const pokemonsTotal = 898;

    // pagination hook
    const {
        pages,
        pagesCount,
        offset,
        currentPage,
        setCurrentPage,
        isDisabled,
    } = usePagination({
        total: pokemonsTotal,
        limits: {
            outer: outerLimit,
            inner: innerLimit,
        },
        initialState: {
            pageSize: 21,
            isDisabled: false,
            currentPage: 1,
        },
    });


    const getAllPokemon = (pageSize, offset) => {
        setLoading(true)
        const url = `${base_url}pokemon/?limit=${pageSize}&offset=${offset}`
        axios.get(url)
            .then((res) => {
                setPokemonList(res.data.results)
                setLoading(false)
            })
            .catch((error) => console.error("App =>", error));
    }

    useEffect(() => {
        if (currentPage === 43) {
            getAllPokemon(16, offset)
        } else {
            getAllPokemon(21, offset)
        }
    }, [currentPage, offset]);

    // handlers
    const handlePageChange = (nextPage) => {
        setCurrentPage(nextPage);
    };

    const renderPokemon = () => {
        let render =[]
        render = pokemonList.map((poke) => {
            return <Card pokeName={poke.name} page={"home"} id={poke.id}/>
        })

        return render
    }

    return (
        <HomeContainer>
            <Header page={"home"} />
            <HomeMain>
                <Stack
                    display={'flex'}
                    flexDirection={'column'}
                    gap={'20px'}
                    align='center'
                >
                    <Pagination
                        pagesCount={pagesCount}
                        currentPage={currentPage}
                        isDisabled={isDisabled}
                        onPageChange={handlePageChange}
                    >
                        <PaginationContainer
                            align="center"
                            justify="space-between"
                            p={4}
                            w="60vw"
                        >
                            <PaginationPrevious
                                _hover={{
                                    bg: "gray.400",
                                }}
                                bg="gray.300"
                                borderRadius='50%'
                                w={7}
                                h={9}
                                
                            >
                                <MdOutlineArrowBackIosNew />
                            </PaginationPrevious>
                            <PaginationPageGroup
                                isInline
                                align="center"
                                separator={
                                    <PaginationSeparator
                                        isDisabled
                                        bg="gray.200"
                                        fontSize="sm"
                                        w={7}
                                        h={7}
                                        jumpSize={11}
                                        borderRadius='50%'
                                    />
                                }
                            >
                                {pages.map((page) => (
                                    <PaginationPage
                                        w={7}
                                        h={7}
                                        borderRadius='50%'
                                        bg="gray.300"
                                        key={`pagination_page_${page}`}
                                        page={page}
                                        fontSize="sm"
                                        _hover={{
                                            bg: "gray.500",
                                        }}

                                        _current={{
                                            bg: "gray.700",
                                            fontSize: "sm",
                                            w: 7,
                                            h: 7,
                                            color: 'white'
                                        }}
                                    />
                                ))}
                            </PaginationPageGroup>
                            <PaginationNext
                                _hover={{
                                    bg: "gray.400",
                                }}
                                borderRadius='50%'
                                bg="gray.300"
                                w={7}
                                h={9}
                            >
                                <MdOutlineArrowForwardIos />
                            </PaginationNext>
                        </PaginationContainer>
                    </Pagination>
                    {!loading ?

                        <Grid
                            gap={10}
                            mt={20}
                            px={20}
                            templateColumns="repeat(3, 18rem)"
                            templateRows="auto"
                        >
                            {renderPokemon()}
                        </Grid>
                    :
                    <LoaderContainer>
                        <Spinner
                            thickness='4px'
                            speed='0.65s'
                            emptyColor='gray.200'
                            color='red.500'
                            size='xl'
                        />
                    </LoaderContainer>
                    }
                </Stack>
            </HomeMain>
            <Footer />
        </HomeContainer>
    )
}


export default HomePage


