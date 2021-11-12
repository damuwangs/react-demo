/*
 * @Description: 
 * @Autor: 王成阳
 * @Date: 2021-11-02 14:47:21
 */
import react from "react";
import { ThemeContext } from "./theme-context";

class ThemeButton extends react.Component{
    render(){
        return(
            <ThemeContext.Consumer>
                {({theme, toggleTheme}) => (
                    <button onClick={toggleTheme} style={{background: theme.background}}>
                    点击
                    </button>
                )}
            </ThemeContext.Consumer>
        )
    }    
        
}
export default ThemeButton