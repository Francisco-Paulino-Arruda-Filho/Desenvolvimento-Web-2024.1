import ThemeContext from "./MeuContexto"
import { useContext } from "react";

const FunctionB = () => {
    // ✅ Recommended way
    const theme = useContext(ThemeContext);
    return (
        <div style={{backgroundColor: theme.bkgB }}>
            <h1>Função B</h1>
        </div>
    )
}

export default FunctionB