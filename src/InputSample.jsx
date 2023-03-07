import React, { useState } from 'react';

function InputSample() {
    // text > 현재상태값변수(GETTER) / setText 상태 값을 갱신(SETTER)
    // [GETTER, SETTER] = useState(defaultV);
    const [text, setText] = useState('');

    const onChange = (e) => {
        setText(e.target.value);
    }

    const onReset = () => {
        setText('');
    }

    return(
        <div>
            <input onChange={onChange} value={text} />
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: {text}</b>
            </div>
        </div>
    );
}

export default InputSample;
