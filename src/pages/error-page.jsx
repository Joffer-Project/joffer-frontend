import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    const errorPageStyle = {
        textAlign: "center",
        marginTop: "50px",
        fontFamily: "Arial, sans-serif",
    };

    const headingStyle = {
        fontSize: "24px",
        fontWeight: "bold",
        textAlign: "center", 
    };
    
    const errorMessageStyle = {
        fontStyle: "italic",
    };

    return (
        <div id="error-page" style={errorPageStyle}>
            <h1 style={headingStyle}>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p style={errorMessageStyle}>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
}