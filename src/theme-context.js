import react from "react"

/*
 * @Description: 
 * @Autor: 王成阳
 * @Date: 2021-11-02 14:47:10
 */
export const themes = {
    light: {
        foreground: '#000000',
        background: '#eeeeee'
    },
    dark: {
        foreground: '#ffffff',
        background: '#222222'
    }
}

export const ThemeContext = react.createContext({
    theme: themes.dark,
    toggleTheme: () => {}
})