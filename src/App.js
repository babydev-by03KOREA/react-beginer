/* 컴포넌트는 일종의 UI 조각입니다. 쉽게 재사용이 가능합니다.
* [CLASS Type 컴포넌트]
* import React, { Component } from "react";*/
/* [FUNCTION TYPE 컴포넌트] */
import React from "react";
import Test from './test';
/* CSS 불러오기 */
import './App.css';
import Wrapper from "./wrapper";
import Counter from "./Counter";
import InputSample from "./InputSample";

function App() {
    const name = 'react.js';
    const style = {
        /* vanilla: background-color */
        backgroundColor: 'black',
        color: 'aqua',
        /* vanilla: font-size, default: px */
        fontSize: 24,
        /* 다른 단위 사용 시 문자열로 작성 */
        padding: '1rem',
    };
    return (
        /*<Wrapper>
            <div style={style}>{name}</div>
            {/!* class가 아닌 className *!/}
            <Test
                // 열리는 태그 내부에서는 이렇게 작성도 가능해유!
                name="properties"
                color="tomato"
                // isSpecial={true} > True 작성하지 않고 isSpecial 만 작성하면 자동으로 true
                isSpecial
            />
            <Test
                color="pink"
                isSpecial={false}
            />
            <div className="gray-box"></div>
        </Wrapper>*/
        <InputSample/>
    );
}

export default App;
