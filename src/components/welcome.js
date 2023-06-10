import React from 'react';
import ConsumeCatalogAPI from './api';
import Message from './message'

function Welcome() {

    let score = 88;

    const alienShip=()=>{
        return (
            <div>Im from Mars!</div>
        )
    }

    const buttonClicked=()=>{
        console.log('Button Clicked')
    }

    return (
    <div>
        <div>
            <h1>Welcome!</h1>
            <ol>
                <li>One</li>
                <li>Two</li>
            </ol>
        </div>
        <div>
            <h1>Score: {score}</h1>
        </div>
        <div>
            <h1>Coming from Mars: {alienShip()}</h1>
        </div>
        <div>
            <button onClick={buttonClicked}>Click</button>
        </div>
        <div>
            <Message msg= "Hello from Mars"></Message>
            <Message msg= "Hello from Saturn"></Message>
            <Message msg= "Hello from IIS"></Message>
            <Message msg= "Learn to live from Saturn"></Message>
            <Message msg= "Learn to live on diet pill"> </Message>
        </div>

        <div>
            <ConsumeCatalogAPI></ConsumeCatalogAPI>
        </div>
    </div>
     );
}

export default Welcome;