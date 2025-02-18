import { useEffect } from "react";
import HomePage from "./pages/homePage.js";

function App() {
    useEffect(() => {
        document.body.style.margin = 0;
    }, []);
    return (
        <>
            <HomePage></HomePage>
        </>
    );
}

export default App;
