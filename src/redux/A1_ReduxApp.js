import {Component} from 'react'
import {connect} from 'react-redux'

class A1_ReduxApp extends Component {
    constructor(props){
        super(props)
        this.state = {
            username : ""
        }
    }
    handleOnchange = (e) =>{
        this.setState({username : e.target.value})
    }

    handleClick = () =>{
        // this.props.dispatch({
        //     type : 'ADD_USER',
        //     payload : this.state.username
        // })
        this.props.addUser(this.state.username)
        this.setState({username : ' '})
    }

    render(){
        console.log(this.props)
        return (
            <div>
                <input type="text" value={this.state.username} onChange={this.handleOnchange} />
                <button onClick={this.handleClick}>Add user</button>
                <ul>

                </ul>
            </div>
        )
    }
}
// The mapStateToProps and mapDispatchToProps deals with your Redux store’s state and dispatch, respectively. state and dispatch will be supplied to your mapStateToProps or mapDispatchToProps functions as the first argument.

// mapStateToProps is called every time when state changes , they cache props , dont do unnecessary renders as 'state' (which is global state ) is not changed
const mapStateToProps = (state, ownProps) => {
    console.log('mapStateToProps', state, ownProps)
    const extraInput = {color : 'red'}
    return {
        users : state,
        extraInput
    }
}


// const mapDispatchToProps = (dispatch) => {
//     return {
//         addUser: (username) => dispatch({
//             type: "ADD_USER",
//             payload: username
//         })
//     }
// }

// alternative : action creator, can move outside the component , the function return the action
const addUser = (username) => {
    return { type: "ADD_USER", payload: username }
}
const mapDispatchToProps = {
    addUser
}

export default connect(mapStateToProps, mapDispatchToProps)(A1_ReduxApp)
// The connect() function connects a React component to a Redux store.
// the connect is a function that returns a higher order component --> It does not modify the component class passed to it; instead, it returns a new, connected component class that wraps the component you passed in.

// It provides its connected component with the pieces of the data it needs from the store, and the functions it can use to dispatch actions to the store.

// connect read in store.getState to get the global state, them call mapStateToProps and give state to it 