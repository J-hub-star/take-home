import React,{useRef,useEffect} from 'react'

export default function Datatable({items,renderHead,renderRow,loadMore}) {
    const ref =useRef(null);
    useEffect(()=>
    {
        document.addEventListener("scroll",handleScroll)
        return ()=>document.removeEventListener("scroll",handleScroll)
    },[])
    function handleScroll(e) {
        const cY = window.scrollY;
        const tbh = ref.current.offsetHeight;
        const thresh = 1000;
        if (tbh - cY - thresh < 0) loadMore();
    }
    return (
        <table>
            <thead>
                <tr>{renderHead()}  </tr>
            </thead>
            <tbody ref = {ref}>
                <td>
                    {items.map(row =>renderRow(row))}
                </td>
            </tbody>
        </table>
    )
}


