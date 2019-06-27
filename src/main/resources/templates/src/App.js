import React from 'react';
import Top from "./containers/Top";
import Mid from "./containers/Mid";
import Bot from "./containers/Bot";

const App = () => {
    return (
        <div className='app'>
            <Top/>
            <Mid/>
            <Bot/>
        </div>
    );
};

export default App;