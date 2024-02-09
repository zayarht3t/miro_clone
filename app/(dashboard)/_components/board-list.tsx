"use client";

import { EmptyBoard } from "./empty-boards";
import { EmptyFavorite } from "./empty-favorites";
import { EmptySearch } from "./empty-search";

interface BoardListProps {
    orgId: string;
    query: {
        search?: string;
        favorites?: string;
    }
}

export const BoardList = ({
    orgId,
    query
}: BoardListProps)=>{
    const data = [];

    if(!data?.length && query.search){
        return(
            <EmptySearch/>
        )
    }

    if(!data?.length && query.favorites){
        return(
            <EmptyFavorite/>
        )
    }

    if(!data?.length){
        return(
            <EmptyBoard/>
        )
    }
    return(
        <div>
            {JSON.stringify(query)}
        </div>
    )
}