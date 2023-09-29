import { useEffect, useState } from "react";


export function usePaginate(initialPage=1){
    const [page, setPage] = useState(initialPage);


    function nextPage(){
        setPage(page+1)
    }

    function prevPage() {
        setPage(page-1)
    }

    return {
        page,
        setPage,
        nextPage,
        prevPage
    }
}