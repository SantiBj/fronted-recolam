import { useState } from "react";


export function usePaginate(){
    const [page, setPage] = useState(1);

    function nextPage(){
        setPage(page+1)
    }

    function prevPage() {
        setPage(page-1)
    }

    return {
        page,
        nextPage,
        prevPage
    }
}