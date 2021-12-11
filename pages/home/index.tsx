import * as React from "react"
import Cookies from "cookies-ts";

const Home: React.FC = ()=> {
    const deleteCookie: any = ()=>{
        const cookies = new Cookies();
        cookies.remove('token')
    }
    return(
        <>
            <h1>Logado</h1>
            <button type='button' onClick={deleteCookie}>Fuck karina</button>
        </>
    )
}

// @ts-ignore
export default Home