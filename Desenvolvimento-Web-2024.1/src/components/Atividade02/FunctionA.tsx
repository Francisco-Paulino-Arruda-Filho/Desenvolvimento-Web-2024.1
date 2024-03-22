import ThemeContext from "./MeuContexto"
import FunctionB from "./FunctionB";
import FunctionC from "./FunctionC";
import FunctionD from "./FunctionD";

const FunctionA = () => {
    const cores = {
        bkgA: "green",
        bkgB: "red",
        bkgC: "yellow",
        bkgD: "blue",
    };
    return(
        <>
            <div style={{backgroundColor: cores.bkgA}} >
                <h1>Função A</h1>
            </div>
            <ThemeContext.Provider value={cores} >
                <FunctionB/>
                <FunctionC/>
                <FunctionD/>
            </ThemeContext.Provider>
        </>
    )
}

export default FunctionA