import react from "react"
import { Link} from "react-router-dom"
import { ThemeContext, themes } from "./theme-context"
import ThemeButton from "./themed-button"
/*
 * @Description: 
 * @Autor: 王成阳
 * @Date: 2021-10-28 15:05:11
 */
function Home() {
	return(
		<div>我是首页</div>
	)
}

class Test extends react.Component {
	constructor(props) {
		super(props)
		this.toggleTheme = () => {
			this.setState((state) => ({
				theme: state.theme === themes.dark ? themes.light : themes.dark
			}))
		}

		this.state = {
			theme: themes.light,
			toggleTheme: this.toggleTheme
		}
	}
	render() {
		return (
			<ThemeContext.Provider value={this.state}>
				<ThemeButton /> 
			</ThemeContext.Provider>
		)
	}
}

function Tacos({ routes }) {
    return (
        <div>
            <h2>Tacos</h2>
            <ul>
                <li>
                    <Link to="/tacos/bus">Bus</Link>
                </li>
                <li>
                    <Link to="/tacos/cart">Cart</Link>
                </li>
            </ul>
        </div>
    );
}

function Bus() {
    return <h3>Bus</h3>;
}

function Cart() {
    return <h3>Cart</h3>;
}

function Sandwiches() {
    return <h2>Sandwiches</h2>;
}

export {
	Home,
	Test,
	Tacos,
	Bus,
	Cart,
	Sandwiches
}