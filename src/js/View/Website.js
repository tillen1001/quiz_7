import React from 'react';
//import LoginPage from '../View/LoginPage';
import SignIn from '../View/login';
import ToDoList from '../Controller/TodoList';

export default class Website extends React.Component{
    // initialize
    constructor(props){
        super(props);
        this.setRenderItem = this.setRenderItem.bind(this);
    }
    // mount component(render to DOM), only once
    componentDidMount(){}
    // unmount component, only once
    componentWillUnmount(){}

    setRenderItem(){
        if(this.props.LoginStatus){
            return (<ToDoList/>);
        }else{
            return (<SignIn onLogin={this.props.onLogin}/>);
        }
    }

    render(){
      return(
          <div>
            {this.setRenderItem()}
          </div>
      );
    }
}
  