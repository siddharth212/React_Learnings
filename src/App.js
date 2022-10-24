import React,{Component} from 'react';
import './App.css';
import './Person/Person.css';
import Person from './Person/Person'

class App extends Component{
  state={
    persons:
    [{id:'asd1',name:"Max",age:21},
    {id:'asd2',name:"Manu",age:24},
    {id:'asd3',name:"Jessy",age:27}],
    otherState:'some other value',
    showPersons:true
  }

  // switchNameHandler = (newName)=>{
  //   console.log("i'am clicked");
  //   this.setState({persons:
  //     [{name:newName,age:21},
  //     {name:"Michal",age:28},
  //     {name:"Jessy ",age:20}]})
  // }

  deletePersonHandler = (personIndex)=>{
    //const persons = this.state.persons.slice();
    const persons =[...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons:persons})

  }

  nameChangedHandler = (event, id)=>{
    const personIndex = this.state.persons.findIndex(p=>{return p.id ===id});
    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;

    const persons = [...this.state.persons]
    persons[personIndex] = person;
    this.setState({persons:persons});
  }

  hidePersonsHandler = ()=>{
    const doesShow = this.state.showPersons
    this.setState({showPersons:!doesShow})
  }

  render(){

    const style={
      backgroundColor:'white',
      font:'inherit',
      border:'1px solid blue',
      padding:'8px',
      cursor:'pointer'
    }

    let Persons= null;

    if(this.state.showPersons){
      // Persons = (<div>
      //   <Person 
      //   name={this.state.persons[0].name} 
      //   age={this.state.persons[0].age}/>

      //   <Person 
      //   name={this.state.persons[1].name} 
      //   age={this.state.persons[1].age} 
      //   click={this.switchNameHandler.bind(this,'josephine')}
      //   changed = {this.nameChangedHandler}>My Hobbies: Racing
      //   </Person>

      //   <Person name={this.state.persons[2].name} 
      //   age={this.state.persons[2].age}/>
      //   </div>)

        Persons = (
          <div>
            {this.state.persons.map((person,index)=>{
              return <Person 
              click={()=>{this.deletePersonHandler(index)}}
              name = {person.name} 
              age= {person.age}
              key={person.id}
              changed={(event)=>{this.nameChangedHandler(event,person.id)}}/>
            })
          }
          </div>
          
        )
        
    }



    return (
      <div className="App">
        <h1>Hi i'am a React App</h1>
        <h3>Hey this really works </h3>
        {/* <Person name="Max" age="21"/>
        <Person name="Manu" age="24"/>
        <Person name="Jessy" age="27"/>  */}

        <button style={style} onClick={()=>{this.switchNameHandler('Maximillian!!')}}>Switch Persons</button>
        <button style={style} onClick={this.hidePersonsHandler}>Toggle Persons</button>
        {Persons}
        
      </div>

      //React.createElement('div',{className:'App'},React.createElement('h1',null,'Hi it works now'))
    );
  }
}
  
export default App;


//UseState Hook functional component
// const App = props =>{

//   const [personsState,setPersonsState] = useState({
//          persons:
//          [{name:"Max",age:21},
//          {name:"Manu",age:24},
//          {name:"Jessy",age:27}],

//          otherState:'some other value'
//        });

//   const switchNameHandler =()=> {
//   console.log("i'am clicked");
//   setPersonsState(
//     {persons:
//     [{name:"Maximillian",age:21},
//      {name:"Michal",age:28},
//      {name:"Jessy ",age:20}]})

//     }

//     return (
//       <div className="App">
//         <h1>Hi i'am a React App</h1>
//         <h3>Hey this really works </h3>
//         {/* <Person name="Max" age="21"/>
//         <Person name="Manu" age="24"/>
//         <Person name="Jessy" age="27"/>  */}
//         <button onClick={switchNameHandler}>Switch Persons</button>

//         <Person name={personsState.persons[0].name} age={personsState.persons[0].age}></Person>
//         <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My Hobbies: Racing</Person>
//         <Person name={personsState.persons[2].name} age={personsState.persons[2].age}></Person>
//       </div>

//       //React.createElement('div',{className:'App'},React.createElement('h1',null,'Hi it works now'))
//     );
//   }

// export default App;
