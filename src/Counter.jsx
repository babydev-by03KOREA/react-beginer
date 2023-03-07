import React, {useState} from 'react';

function Counter() {
    /** ES6 도입
     * useState 함수를 호출하면 배열을 반환하는데, 1번째 원소 number 은 현재 상태 값 변수이고,
     * 2번째 원소 setNumber 은 상태 값을 갱신해주는 [Setter 함수]이다.
     * useState 괄호 안의 값은 상태의 초기 값이다.
     * [상태 값 저장 변수, 상태 값 갱신 함수] = useState(상태 초기 값);
     * <원래는 이렇게 작성해야 합니다 / ES6 >
     * const numberState = useState(0);
     * const num = numberState[0];
     * const setNum = numberState[1];*/
    // 쉽게 생각해서 number 은 getter, setNumber 은 setter!
    const [number, setNumber] = useState(0);

    const onIncrease = () => {
        setNumber(number + 1);
    }
    const onDecrease = () => {
        setNumber(number - 1);
    }
    return (
        <div>
            <h1>{number}</h1>
            {/* 렌더링 시 함수 호출 주의! */}
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    );
}

export default Counter;
