import { useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const error = useRouteError()
    console.log(error)
    return (
        <div>
            <h2>Ooops...</h2>
            <p>{error.status}</p>
            <p>{error.data}</p>
            <p>{error.statusText}</p>

            {
                error.status === 404 && <div>
                    <h3>Page not Found !!</h3>

                    <p> Go Back where yor are from !!!</p>
                </div>
            }
        </div>
    );
};

export default ErrorPage;