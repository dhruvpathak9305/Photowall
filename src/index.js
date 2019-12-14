import React,{Component } from "react";
import ReactDOM from "react-dom";

// var tasks = ["first item", "second item", "third item"];

// const element =<ol>
//     <li>First item</li>
//     <li>Second item</li>
//     <li>Third item</li>
// </ol>

//To run js code inside the html tag in jsx you have to warp it inside {}
// const element =<ol>
//      <li>{tasks[0]}</li>
//     <li>{tasks[1]}</li>
//     <li>{tasks[2]}</li>
//  </ol>

// const element = (
//   <ol>
//     {tasks.map((item, index) => (
//       <li key={index}>{item}</li>
//     ))}
//   </ol>
// );

//Title was hard coded 
// class Title extends Component{
//   render() {
//     return <h1>Title</h1>;
//   }
// }

//Task array was hard coded
// class List extends Component{
//     render() {
//       return (<ol>
//         {tasks.map((item, index) => (
//           <li key={index}>{item}</li>
//         ))}
//       </ol>)
//     }
//   }


  //Task array was hard coded
//   class Main extends Component{
//     render() {
//       return (
//           <div>
//             <Title/>
//           <List/>
//           </div>
          
//       )
//     }
//   }

// Title is passed as props 
class Title extends Component{
  render() {
    return <h1>{this.props.title}</h1>;
  }
}

//Task is pass as the the props to the List Component
class List extends Component{
    render() {
      return (<ol>
        {this.props.tasks.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>)
    }
  }
//Now we are passing the task array as props to the List component.
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

ReactDOM.render(<Main/>, document.getElementById("root"));
