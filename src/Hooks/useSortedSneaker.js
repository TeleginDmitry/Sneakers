import React, { useMemo } from "react";


export const useSortedSneaker = (sneakers, sort) => {
    const sortedSneaker = useMemo(() => {
        if (sort) {
            return [...sneakers].filter((sneaker) => sneaker.desc.toLowerCase().includes(sort))
        }
        return sneakers
    })

    return sortedSneaker
}