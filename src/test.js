import react from "react"
import { ThemeContext, themes } from "./theme-context"
import ThemeButton from "./themed-button"

/*
 * @Description: 
 * @Autor: 王成阳
 * @Date: 2021-10-28 15:05:11
 */
class Test extends react.Component{
  constructor(props){
    super(props)
    this.toggleTheme = () => {
      this.setState( (state) => ({
        theme: state.theme === themes.dark ? themes.light : themes.dark
      }))
    }

    this.state = {
      theme: themes.light,
      toggleTheme: this.toggleTheme      
    }
  }
  render(){
    return (
      <ThemeContext.Provider value={this.state}>
        <ThemeButton/>
      </ThemeContext.Provider>
    )
  }
}

export default Test