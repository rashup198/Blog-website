import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";
//step1
export const AppContext = createContext();

export function AppContextProvider({childern}){

    const [loading, setLoading]= useState(false);
    const [posts, setPosts] = useState([]);
    const  [page, setPage]= useState(1);
    const [totalPages, setTotalPages]= useState(null);

    //data filling pending

    async function fetchBlogPosts(){
        setLoading(true);
        let url= `${baseUrl}?page=${page}`;
        console.log(url);
       try {
        const result= await fetch(url);
        const data= await result.json();
        console.log(data);
        setPage(data.page);
        setTotalPages(data.totalPages);
        setPosts(data.posts);

       } catch (error) {
        alert.log("Error while fetching data")
        setPage(1);
        setPosts([]);
        setTotalPages(null);
       }
       setLoading(false);
    }
        
    function handlePageChange(page){
        setPage(page);
         fetchBlogPosts(page)
        }



    const value={
        posts,
        setPosts,
        loading,
        setLoading,
        page,
        setPage,
        totalPages,
        setTotalPages,
        fetchBlogPosts,
        handlePageChange
    };

    

    //step2
    return <AppContext.Provider value={value}>
    {childern}
    </AppContext.Provider>
}
