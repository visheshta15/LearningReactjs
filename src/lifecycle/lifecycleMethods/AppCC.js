import React from 'react'
import CCCounter from './CCCounter'
import CCCounter2 from './CCCounter2';
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            num: 0,
            count : 0
        };
    }

    handleInc(){
        // this.setState((prevstate) => (
        //     {num : prevstate.num +1}
        // ))

        this.setState({num: this.state.num + 3})
    }
    
    

    
    start = () => {
        this.setState({
        // count: this.state.count + 1
        num: this.state.num + 1
        });
    }

    // Since it is a static method, we cannot access 'this' keyword within this method. Hence we cannot call setState method. 
    // This method returns an object which will be the updated state and return null if there is no state update
    static getDerivedStateFromProps(props, state) {
        return {num: props.num, count: props.count}
        console.log("getDerivedStateFromProps : ", props.num,state.num)
    }

    // provide initial value or fetch data from api
    componentDidMount() {
        console.log('componentDidmount runs App');
        // this.interval = setInterval(this.start, 2000);
    }


    render(){
        return (
            <>  
                <h1>Class component</h1>
                <button onClick={this.handleInc.bind(this)}> INC</button>
                <h5>parrent this.state.num : {this.state.num}</h5>
                <h5>parrent this.state.count : {this.state.count}</h5>
                {/* <CCCounter number={this.state.num} /> */}
                <CCCounter2 number={this.state.num} />

                {/* Error: Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops. */}
                {/* {this.setState({count : this.state.count + 1 })} */}
            </>
        )
    }
}

export default App