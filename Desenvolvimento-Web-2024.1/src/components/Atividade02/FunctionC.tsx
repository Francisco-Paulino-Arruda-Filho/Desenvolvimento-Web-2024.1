import ThemeContext from "./MeuContexto"
import { useContext } from "react";

const FunctionC = () => {
    // ✅ Recommended way
    const theme = useContext(ThemeContext);
    return (
        <div style={{backgroundColor: theme.bkgC }}>
            <h1>Função C</h1>
        </div>
    )
}

export default FunctionC