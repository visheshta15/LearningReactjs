import React from 'react';

class CCCounter extends React.Component{
    
    // Executed just before the React Component is about to mount on the Dom, execute before render
    componentWillMount() {
        console.log('Component mounted');
    }

    // Invoked immediately after the component is mounted to DOM tree
    // Now will have access to all the DOM nodes hence any initialization which requires DOM nodes should be done here
    // Best place for setting timers and handling Ajax request
    componentDidMount() {
        console.log('componentDidmount runs counter');
    }



    


    shouldComponentUpdate(newProps, newState) {
        // this.prop --> old prop 
        if (this.props.number > 5) {
            console.log('shouldComponentUpdate:', newProps);
                return true;
            } else {
                 return false;
            }
    }

    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     console.log('Previous value destroyed:', prevProps);
    //     console.log('Updated');
    // }


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
            <h1>{this.props.number}</h1>
            <p>{JSON.stringify(this.props)}</p>
            {/* <p>{JSON.stringify(this)}</p> */}
        </>
        )
    }
}

export default CCCounter