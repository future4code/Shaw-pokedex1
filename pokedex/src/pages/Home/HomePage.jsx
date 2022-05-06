import React, {useEffect, useState } from 'react'
import axios from 'axios'
import { base_url } from '../../constants/constants'
import { HomeContainer } from './style'
import Card from '../../components/Card/Card'
import Header from '../../components/Header/Header'
import Footer from "../../components/Footer/Footer"
import { Grid, Stack } from "@chakra-ui/react";
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
    const [pokemonsTotal, setPokemonsTotal] = useState(undefined);

    // constants
    const outerLimit = 2;
    const innerLimit = 2;

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

    const getAllPokemon = (pageSize,offset) => {
        const url = `${base_url}pokemon/?limit=${pageSize}&offset=${offset}`
        axios.get(url)
            .then((res) => {
                setPokemonList(res.data.results)
                setPokemonsTotal(res.data.count);
            })
            .catch((error) => console.error("App =>", error));
    }

    useEffect(() => {
        getAllPokemon(21, offset)
    }, [currentPage, offset]);

    // handlers
    const handlePageChange = (nextPage) => {
        setCurrentPage(nextPage);
        console.log("request new data with ->", nextPage);
    };

    return (
        <div>
            <Header page={"home"} />
            <HomeContainer>
                <Stack>
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
                            w="full"
                        >
                            <PaginationPrevious
                                _hover={{
                                    bg: "gray.400",
                                }}
                                bg="gray.300"
                                borderRadius='50%'
                                w={7}
                                h={9}
                                onClick={() => console.warn("I'm clicking the previous")}
                            >
                                <MdOutlineArrowBackIosNew />
                            </PaginationPrevious>
                            <PaginationPageGroup
                                isInline
                                align="center"
                                separator={
                                    <PaginationSeparator
                                        isDisabled
                                        onClick={() => console.warn("I'm clicking the separator")}
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
                                        onClick={() => console.warn("Im clicking the page")}
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
                                onClick={() => console.warn("I'm clicking the next")}
                            >
                                <MdOutlineArrowForwardIos />
                            </PaginationNext>
                        </PaginationContainer>
                    </Pagination>
                    <Grid
                        gap={3}
                        mt={20}
                        px={20}
                        templateColumns="repeat(3, 18rem)"
                        templateRows="auto"
                    >
                        {pokemonList?.map((poke) => {
                            return <Card pokeName={poke.name} />
                        })}
                    </Grid>
                </Stack>
             </HomeContainer>
             <Footer />
        </div>
    )
}


export default HomePage


