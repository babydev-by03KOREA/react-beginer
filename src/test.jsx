/* REACT COMPONENT 만들 때 import
*  REACT 컴포넌트에선 XML 형식 값을 반환이 가능한데, 이를 JSX 라고 부릅니다! */
import React from 'react';
function Test({ color, name, isSpecial }) {
    return (
        <>
            <div style={{ color: color }}>
                {/* 3항 연산자 보다 단축 평가 논리 계산법 사용이 더 좋음 */}
                {/*{ isSpecial ? <b>*</b> : null }*/}
                { isSpecial && <b>*</b> }
                HELLO! REACT {name} WORLD!
            </div>
        </>
    );
}

Test.defaultProps = {
    name: 'DEFAULT'
}

/* 이 코드는 Test 라는 컴포넌트를 내보내겠다는 의미입니다.
*  이렇게 해주면 다른 컴포넌트에서 불러와서 사용이 가능합니다.[캡슐화!]*/
export default Test;
