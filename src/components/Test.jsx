import { Button, Container, Row, Col } from "reactstrap";
import React from 'react'

function Test() {
    const[handleInput,setHandleInput] = React.useState([]);
    const[saveTodo,setSaveTodo] = React.useState([{"todoName":'Hikush',"status": false},{"todoName":'Coshgun',"status": false}]);
    const[done,setDone] = React.useState(!true);
    const[update,setUpdate] = React.useState({});
    const[activeUpdate,setActiveUpdate] = React.useState(false);
    const[index,setIndex] = React.useState(-1);
  console.log(done);
    function handleChange(event) {
        const {name,value} = event.target;
        setHandleInput({[name]:value});
        
        
    }
    function onUpdateChange(event) {
      const {name,value} = event.target;
      setUpdate({[name]:value})
      
    }
    function saveUpdate() {
     const list = [...saveTodo]
     list.splice(index,1,update);
     setSaveTodo(list);
     setActiveUpdate(false)
     
    }

    function saveTodoUI(event) {
         setSaveTodo([...saveTodo,handleInput])
         setHandleInput({"todoName": ""});
         setActiveUpdate(false)

    }
    function deleteTodo(obj) {
        const total = [...saveTodo];
        total.splice(obj.todoName,1)
        setSaveTodo(total)
    }
    function onDoubleClick(todoes,index) {
      setActiveUpdate(true)
      setUpdate(todoes);
      setIndex(index);
    }
    function setDoneFunc(name,index) {
     
    const list = [...saveTodo]
      const newList = list.map(m => {
        if(m.todoName == name.todoName){
          if(m.status === true){
            return m.status = false;
          }if( m.status === false) {
              return m.status = true;
              }
            
          return m.status;
        }
        return list;
      })
     
        setSaveTodo(list);
    }

    console.log(saveTodo);
  return (
    <>
      <Container>
        <Row>
            {activeUpdate 
            ? <div>
            <div class="input-group input-group-lg">
                <span class="input-group-text" id="inputGroup-sizing-lg">
                  Enter something
                </span>
               
                <input
                  onChange={onUpdateChange}
                  value={update.todoName}
                  name="todoName"
                  type="text"
                  class="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-lg"
                />
              </div>
              <Button onClick={() => saveUpdate()} color="success">UPDATE</Button>
          </div> 
            :<div>
            <div class="input-group input-group-lg">
                <span class="input-group-text" id="inputGroup-sizing-lg">
                  Enter something
                </span>
               
                <input
                  onChange={handleChange}
                  value={handleInput.todoName}
                  name="todoName"
                  type="text"
                  class="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-lg"
                />
              </div>
              <Button onClick={() => saveTodoUI()} color="success">ADD TODO</Button>
          </div>
            }
        </Row>
        <Row>
          <table class="table table-striped table-hover">
            <thead>
              <tr>
                <th scope="col">ToDo LIST</th>
              </tr>
            </thead>
            <tbody>
                {saveTodo.map((todoes,index)=>(
                  
                     <tr>
                      
                    <td className={todoes.status === true ? "table-danger text-decoration-line-through" : ""}  onDoubleClick={() => {onDoubleClick(todoes,index)}} >{todoes.todoName }</td>
                    <Button onClick={() => {setDoneFunc(todoes,index);  setDone(!done); }} color="success">Done!</Button>
                    <Button onClick={()=> deleteTodo(todoes)} color="danger">Delete</Button>
                    </tr>
                ))}
            </tbody>
          </table>
        </Row>
      </Container>
      
    </>
  );
}

export default Test;
