import React, { useReducer, useEffect } from "react";
function ReducerDemo() {
    const [count, dispatch] = useReducer((state, action) => {
        switch (action) {
            case "add":
                return state + 1;
            case "sub":
                return state - 1;
            default:
                return state;
        }
    }, 0);
    useEffect(() => {
        document.title = "计数器";
    });
    return (
        <div>
            <p>现在的值是：{count}</p>
            <button
                onClick={() => {
                    dispatch("add");
                }}
            >
                add
            </button>
            <button
                onClick={() => {
                    dispatch("sub");
                }}
            >
                sub
            </button>
        </div>
    );
}
export default ReducerDemo;
