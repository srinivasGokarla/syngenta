import logo from './logo.svg';
import './App.css';
import {useState} from "react"

function App() {
  const [Click,setClick] = useState(1)
const [Click3,setClick3] = useState(3)

if(Click===2){
    return <div id="flexbox">
<div className="box">
box
<div onClick={()=>setClick(1)} className="redcircle">
circle
</div>


</div>
<div     className="bluecircle">
circle
</div>
<div     className="greencircle">
circle
</div>
<div     className="yellowcircle">
circle
</div>
<div     className="violetcircle">
circle
</div>

    </div>
}

if(Click===1){

return <div id="flexbox">

<div className="box" >
box
</div>
<div onClick={()=>setClick(2)}    className="redcircle">
circle
</div>
<div    onClick={()=>setClick(2)} className="bluecircle">
circle
</div>
<div     className="greencircle">
circle
</div>
<div     className="yellowcircle">
circle
</div>
<div     className="violetcircle">
circle
</div>

</div>
 }


 if(Click3===3 && Click===1){

    return <div>


<div className="box" >
box
</div>
<div    className="redcircle">
circle
</div>
<div   onClick={()=>setClick3(4)}   className="bluecircle">
circle
</div>
<div     className="greencircle">
circle
</div>
<div     className="yellowcircle">
circle
</div>
<div     className="violetcircle">
circle
</div>



    </div>
 }


if(Click3===4 && Click===1){

return <div>
<div className="box">
box

<div   onClick={()=>setClick3(3)}  className="bluecircle">
circle
</div>


</div>
<div  className="redcircle">
circle
</div>
<div     className="greencircle">
circle
</div>
<div     className="yellowcircle">
circle
</div>
<div     className="violetcircle">
circle
</div>



</div>

}
  

}

export default App;
