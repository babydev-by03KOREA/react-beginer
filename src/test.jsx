/* REACT COMPONENT 만들 때 import
*  REACT 컴포넌트에선 XML 형식 값을 반환이 가능한데, 이를 JSX 라고 부릅니다! */
import React from 'react';
function Test() {
    return (
        <>
            <div>HELLO! REACT TEST.JSX WORLD!</div>
        </>
    );
}

/* 이 코드는 Test 라는 컴포넌트를 내보내겠다는 의미입니다.
*  이렇게 해주면 다른 컴포넌트에서 불러와서 사용이 가능합니다.[캡슐화!]*/
export default Test;
