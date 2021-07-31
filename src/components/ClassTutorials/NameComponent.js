import React,{Component} from 'react'


class NameComponent extends Component{

    render(){

        console.log('props',this.props);
        let message=this.props.message ? this.props.message:'Hello,Hi';

        // if(this.props.message){
        //     message=this.props.message;
        // }
        // else{
        //     message="Hello Hi";
        // }

        const {name}=this.props;

       
        return (
            <div>
                Hey, my name is {name}.
                <br/>
                Message: {message}
            </div>
        )
    }
}

export default NameComponent;