import React from 'react';

class CCCounter2 extends React.Component{
    
    componentWillMount() {
        console.log('Component mounted');
    }

   
    componentDidMount() {
        console.log('componentDidmount runs counter');
    }


    componentDidUpdate(prevProps, prevState, snapshot){
        console.log(this.props.number, prevProps, prevState, snapshot);
        if(prevProps.number !== this.props.number){
            console.log("componentDidUpdate runs");
        }
    }

    componentWillUnmount(){
        console.log("componentWillUnmount runs");
    }

    render(){
        return(<>
        <h1>counter2 child</h1>
            <p>child this.props.number : {this.props.number}</p>
            <p>{JSON.stringify(this.props)}</p>
          
        </>
        )
    }
}

export default CCCounter2