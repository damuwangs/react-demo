import react from "react"

/*
 * @Description: 
 * @Autor: 王成阳
 * @Date: 2021-10-28 15:05:11
 */
function Test() {

  return (
    <div>
      <NameForm/>
    </div>
  )
}

function Input(props){
  return(
    <label>名字：
      <input type='text' value={props.value} onChange={props.onChange} />
    </label>
  )
}

class NameForm extends react.Component{
  constructor(props){
    super(props)
    this.state = {
      value: ''
    }
  }

  handleChange = (e) => {
    this.setState({value: e.target.value})
  }

  handleSubmit = (e) => {
    alert('提交的名字：' + this.state.value)
    e.preventDefault()
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <Input value={this.state.value} onChange={this.handleChange}/>
        <input type='submit' value='提交'/>
      </form>
    )
  }
}

export default Test