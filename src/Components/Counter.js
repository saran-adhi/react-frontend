import "./CounterCss.css";
import { useState } from 'react';
import {PropTypes} from 'prop-types'
export default function Counter({ by }) {

    const [count, setcount] = useState(by)
    const increment = () => {
        // console.log("Increment by 1")
        setcount(count + by)
    }
    const decrement = () => {
        // console.log("Increment by 1")
        setcount(count - by)
    }
    return (
        <div className="counter">
            <p>{count}</p>
            <button
                className="buttonStyle"
                onClick={increment}
            // style={buttonStyle}
            >+{by}
            </button>
            <button
                className="buttonStyle"
                onClick={decrement}
            // style={buttonStyle}
            >-{by}
            </button>
        </div>
    );
}

Counter.propTypes={
    by:PropTypes.number
}