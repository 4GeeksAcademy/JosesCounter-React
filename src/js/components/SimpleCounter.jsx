import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

// Single digit component
const Digit = ({ number }) => {
    return (
        <div className="bg-dark text-white border border-primary rounded d-flex
         justify-content-center align-items-center p-4 mx-2 display-3">
            {number}
        </div>
    );
};

const SimpleCounter = ({ seconds }) => {
    return (
        <div className="bg-dark p-3 mt-5 text-center text-primary">

            {/* FLEX ROW */}
            <div className="d-flex justify-content-center align-items-center">

                {/* Clock box, same style as digits */}
                <div className="bg-dark text-white border border-primary rounded d-flex justify-content-center
                 align-items-center p-4 mx-2 display-3">
                    <i className="fas fa-clock"></i>
                </div>

                <Digit number={Math.floor(seconds / 100000) % 10} />
                <Digit number={Math.floor(seconds / 10000) % 10} />
                <Digit number={Math.floor(seconds / 1000) % 10} />
                <Digit number={Math.floor(seconds / 100) % 10} />
                <Digit number={Math.floor(seconds / 10) % 10} />
                <Digit number={seconds % 10} />

            </div>

            {/* Total seconds */}
            <div className="mt-3 text-center text-primary">
                <span>Seconds: {seconds}</span>
            </div>

        </div>
    );
};

export default SimpleCounter;
