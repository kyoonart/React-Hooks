import React, { useRef } from "react";
function Demo() {
    const Input = useRef(null);
    const inputClicks = () => {
        Input.current.value = "hello jspang";
        console.log(Input);
    };
    return (
        <div>
            <input type="text" ref={Input} />
            <button onClick={inputClicks}>wenzi</button>
        </div>
    );
}
export default Demo;
