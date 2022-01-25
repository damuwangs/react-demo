/*
* @Description: 
* @Autor: 王成阳
* @Date: 2021-12-06 09:53:39
*/
import React, { useState, useEffect } from "react"

function Hook(){
    //声明一个叫'count'的state变量
    const [count, setCount] = useState(0)

    // 相当于 componentDidMount 和 componentDidUpdate
    useEffect(() => {
        // 使用浏览器的API更新页面标题
        document.title = `you clicked ${count} times`
    })

    return(
        <div>
            <p>You click {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
    )
}
      
export {
    Hook
}