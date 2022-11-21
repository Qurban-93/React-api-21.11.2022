import React from 'react'




function Main() {

const [users , setUsers] = React.useState([]);
const [newUser , setNewUser] = React.useState({
  name:'',
  surname:'',
  avatar:'',
})


const handleShow = () =>{
  fetch("https://6363b0578a3337d9a2e48d82.mockapi.io/userscontent/users")
.then((responce)=>responce.json())
.then((data)=>{setUsers(data)})
}

const handleChangeInputValue = (e)=>{
  const{name , value} = e.target;
  setNewUser({...newUser,[name]:value})
}

const pushAddBtn = () =>{

  if(newUser.avatar&& newUser.name&&newUser.surname){
    fetch("https://6363b0578a3337d9a2e48d82.mockapi.io/userscontent/users",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(newUser),
    });
  }
  else{alert("Boshluqlar var !")}
}

React.useEffect(()=>{},[])

  return (
    <>
        <div id='second'>
      <input onChange={handleChangeInputValue} placeholder='enter your name' name='name'></input>
      <input onChange={handleChangeInputValue} placeholder='enter your surname' name='surname'></input>
      <input onChange={handleChangeInputValue} placeholder='entr your image url' name='avatar'></input>
      <button onClick={pushAddBtn}>Create Add</button>
    </div>
    <div id='first'>
      <button onClick={handleShow}>Show</button>
      {users.map((item) =>(
        <>
          <h1 key={item.id}>
           {item.id} - {item.name} - {item.surname}
          </h1>
          <img src={item.avatar} alt=""></img>
        </>
      )
     )}
    </div>
    </>
  )
}

export default Main