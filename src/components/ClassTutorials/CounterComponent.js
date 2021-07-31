import React from 'react';

class CounterComponent extends React.Component{

    state={
        counter:0
    }

    tick= () => {
        this.setState({
            counter:this.state.counter+1,
        });
    }

    componentDidMount(){
     this.timerID= setInterval(this.tick,1000)
    }

    componentWillUnmount(){
        clearInterval(this.timerID);
    }

    render(){
        //console.log("Render")
        return (
            <div>
                <h1>Timer : {this.state.counter}</h1>
            </div>
        )
    }
}

export default CounterComponent;