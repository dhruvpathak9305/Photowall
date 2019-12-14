import React,{Component } from "react";
import Title from './Title';
import List from './List'

class Main extends Component{
    render() {
      return (
          <div>
            <Title title={"Todos"}/>
           <List tasks={["first item", "second item", "third item"]}/>
          </div>
          
      )
    }
  }
  export default Main