import React from 'react';
import ReactDOM from 'react-dom/client';

import "bootstrap/dist/css/bootstrap.min.css";


import SimpleCounter from './components/SimpleCounter';

const root = ReactDOM.createRoot(document.getElementById('root'));


let counter = 0;


const renderCounter = () => {
    root.render(
        <React.StrictMode>
            <SimpleCounter seconds={counter} />
        </React.StrictMode>
    );
};


renderCounter();

setInterval(() => {
    counter += 1;
    renderCounter();
}, 1000);
