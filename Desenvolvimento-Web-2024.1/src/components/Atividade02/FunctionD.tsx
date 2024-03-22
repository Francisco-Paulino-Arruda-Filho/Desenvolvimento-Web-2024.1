import ThemeContext from "./MeuContexto"
import { useContext } from "react";

const FunctionD = () => {
    // ✅ Recommended way
    const theme = useContext(ThemeContext);
    return (
        <div style={{backgroundColor: theme.bkgD }}>
            <h1>Função D</h1>
        </div>
    )
}

export default FunctionD