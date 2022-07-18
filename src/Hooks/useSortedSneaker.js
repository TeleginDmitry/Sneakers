import React, { useMemo } from "react";




export const useSorterSneaker = (sneakers, query) => {
    const sortedSneakers = useMemo(() => {
        if (query) {
            return [...sneakers].sort((a, b) => a[query].localeCompare(b[query]))
        } 
        return sneakers
      }, [query, sneakers])

      return sortedSneakers
}


export const useSneaker = (sneaker, sort, query) => {
    const sortedSneakers = useSorterSneaker(sneaker, query)
    const sortedAndSearchedSneakers = useMemo(() => {
        return sortedSneakers.filter(el => el.desc.toLowerCase().includes(sort.toLowerCase()))
      }, [sort, sortedSneakers])
    
    return sortedAndSearchedSneakers
}