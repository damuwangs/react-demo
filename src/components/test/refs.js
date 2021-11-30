import React from "react";

/*
 * @Description: 
 * @Autor: 王成阳
 * @Date: 2021-11-30 10:26:52
 */
class refs extends React.Component{
    render(){
        return(
            <div>
                <AutoFocusTextInput/>
            </div>
        )
    }
}

// 为DOM元素添加ref
class CustomTextInput extends React.Component{
    constructor(){
        super()
        // 创建一个ref来存储textInput的DOM元素
        this.textInput = React.createRef()
    }

    focusTextInput = (text) => {
        // 通过current来访问DOM节点
        // this.textInput.current.focus()
        if (text) {
            this.textInput.current.value = text
        } else {
            this.textInput.current.value = '为class组件添加Ref'            
        }
    }

    render(){
        // 告诉React我们想把<input/>关联到
        // 构造器里创建的'textInput上'
        return(
            <div>
                <input type='text' ref={this.textInput}/>
                <input type='button' value='点击获取输入框焦点' onClick={() => this.focusTextInput('为DOM元素添加ref')} />
            </div>
        )
    }
}

// 为class组件添加Ref
class AutoFocusTextInput extends React.Component{
    constructor(){
        super()
        this.textInput = React.createRef()
    }

    componentDidMount(){
        this.textInput.current.focusTextInput('为class组件添加Ref')
    }

    render(){
        return(
            <CustomTextInput ref={this.textInput} />
        )
    }
}

export {
    refs
}