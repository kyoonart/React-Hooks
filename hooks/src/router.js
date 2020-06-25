import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
function Index() {
    useEffect(() => {
        console.log("useEffect => index");
    });
    return <h2>jsPang.com</h2>;
}
function List() {
    useEffect(() => {
        console.log("useEffect => List");
    });
    return <h2>List-Page</h2>;
}
// 要考试了 改天学
function Example() {
    const [count, setCount] = useState(0);
    const [sex, setSex] = useState("man");
    const [work, setWork] = useState("soft");
    const [work, setWork] = useState("soft");
    return (
        <div>
            <p>You clicked {count} times</p>
            <button
                onClick={() => {
                    setCount(count + 1);
                }}
            >
                click me
            </button>
            <Router>
                <ul>
                    <li>
                        <Link to="/" exact component={Index}>
                            首页
                        </Link>
                    </li>
                    <li>
                        <Link to="/list/" exact component={List}>
                            列表++
                        </Link>
                    </li>
                </ul>
            </Router>
        </div>
    );
}
export default Example;
