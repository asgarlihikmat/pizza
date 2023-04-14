import React from 'react'

function Test2() {
    const[user,setUser] = React.useState([{inputName:'Hikish'},{inputName:"Coshgun"},{inputName:'Tim'}])
   
    const[add,setAdd] = React.useState([]);
    const[index,setIndex] = React.useState(-1);

    function onHandleChange(event) {
        const{name,value} = event.target;
        setAdd({[name]:value});
    }

    function saveUser() {
        const arra = [...user];
       arra.splice(index,1,{"inputName": add.inputName})
        setUser(arra);
    }
        function saveNumber(m,index){
            setAdd(m);
            setIndex(index);
         }

    console.log(add.inputName+index);
    return(
        <div>
            <input
                onChange={onHandleChange}
                name="inputName"
                value={add.inputName}
            />
            <button onClick={saveUser}>Save</button>
            {user.map( (m,index) => (
                <ul>
                    <li onClick={() => saveNumber(m,index)}>{m.inputName}</li>
                </ul>
            ))}
        </div>
    )
}

export default Test2;