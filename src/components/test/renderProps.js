
/*
* @Description: 
* @Autor: 王成阳
* @Date: 2021-12-02 09:08:13
*/
import React from "react"
import tomcat from '@/img/tomcat.jpg'

class RenderProps extends React.Component{
    render(){
        return(
            <>
                <Mouse render={
                    mouse => (
                        <Cat mouse={mouse}/>
                    )
                }/>
            </>
        )
    }
}

class Cat extends React.Component{
    render(){
        const mouse = this.props.mouse
        return(
            <img src={tomcat} style={{position:'absolute', left:mouse.x, top:mouse.y, width:'100px'}} alt= ""/>
        )
    }
}

class Mouse extends React.Component{
    constructor(){
        super()
        this.state = {
            x: 250,
            y: 150
        }
    }

    handleMouseMove = (event) => {
        this.setState({
            x: event.clientX,
            y: event.clientY
        })
    }

    render(){
        return(
            <div style={{height:'100vh'}} onMouseMove={this.handleMouseMove}>
                {this.props.render(this.state)}
            </div>
        )
    }
}

export{
    RenderProps
}