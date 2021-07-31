import React from 'react';
import AlertComponent from './AlertComponent';
import CounterComponent from './CounterComponent';
import HelloWorld from './HelloWorld';
import NameAgeComponent from './NameAgeComponent';
import NameComponent from './NameComponent';
import NameFunctionComponent from './NameFunctionCompment';


class UseCaseOne extends React.Component{

    render(){
        return(
            <center>
            <h3>UseCase-1 | Components,Props and States</h3>
            <hr/>
        
            <HelloWorld />
            <hr/>
            <h4>Single Props</h4>
            <NameComponent name='Omega'/>
            <hr />
            <h4>Multi Props</h4>
            <NameComponent name="Epsilon" message="Hey Omega, how are you"/>
            <hr />
            <h4>Function Component</h4>
            <NameFunctionComponent name="Zartab" message="Hello Omega"/>
            <h4>Counter -State</h4>
            <CounterComponent />
            <h4>Event Component</h4>
            <AlertComponent />
            <hr />
            <NameAgeComponent />
            </center>
        )
    }
}

export default UseCaseOne;