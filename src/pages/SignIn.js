import React, {useState} from 'react'
import axios from 'axios'

export default function SignIn() {
    const [input, setInput] = useState({
        fname :" ",
        mail :" ",
        phone :" ",
        pass :" "
    })
    function handleChange(event){
        const{name, value} = event.target;
        setInput(prevInput => {
            return{
                ...prevInput, [name] : value
            }
        })
    }
    function handleClick(event){
     event.preventDefault();
     const newNote = {
         fname: input.fname,
         mail: input.mail,
         phone: input.phone,
         pass: input.pass
     }
     axios.post('http://localhost:3001/create' , newNote) 
    }
  return (
    <React.Fragment>
        
  <section>
    <div className="container">
        <div className="form-section-title">
            <h4 className="dont-hesitate">Don’t Hesitate To Ask</h4>
            <h3 className="">SIGN UP</h3>
        </div>
        <div className="row">
            <div className="col-md-6">
                <form action="">
                    <div>
                        <label for="">Name</label><br/>
                        <input type="text" onChange={handleChange} className="label-length" name="fname" value={input.fname}/><br/>
                    </div>
                    <div className="labels-padding">
                        <label for="">Email</label><br/>
                        <input type="text" onChange={handleChange} className="label-length" name="mail" value={input.mail}/><br/>
                    </div>
                    <div className="labels-padding">
                        <label for="">Phone Number</label><br/>
                        <input type="text" onChange={handleChange} className="label-length" name="phone" value={input.phone}/><br/>
                    </div>
                    <div className="labels-padding">
                        <label for="">Password</label><br/>
                        <input type="password" onChange={handleChange} className="label-length" name="pass" value={input.pass}/>
                    </div><br/>
                    <button onClick={handleClick} className="send-button">SEND</button>
                </form>
                
            </div>
            <div className="col-md-6">
                <img src="project/images/form-img.png" alt=""/>
            </div>
        </div>
    </div>
</section>
    </React.Fragment>
  )
}
