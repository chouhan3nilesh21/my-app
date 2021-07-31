import React from 'react';


class NameAgeComponent extends React.Component{

    state={
        name:'Zartab',
        age:31
    }

    updateName =()=>{
        this.setState({
            name:this.state.name.concat(' Nakhwa')
        })
    }

    render(){
        return(
        <div>
            <h4>Name: {this.state.name}</h4>
            <h4>Age: {this.state.age}</h4>
            <br />
            <button onClick={this.updateName}>Click</button>
        </div>
        );
    }

}

export default NameAgeComponent;