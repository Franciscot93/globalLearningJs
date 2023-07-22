import { useRouteError } from "react-router-dom";


export default function ErrorPage(){
    const error=useRouteError()
    console.log(error)


    return(
        <div className="mt-5 text-center text-4xl text-slate-300 justify-center items-center">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    )
}