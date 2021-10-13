import React from 'react'
import emailjs from "emailjs-com";
const Mailer = () =>{
    function sendEmail(e){
        e.preventDefault();
        emailjs.sendForm('service_nnsuv9x','template_z3kx8un',
        e.target,'user_pLiwZuNqbTPtQCIjZilnZ').then(res=>{
            console.log(res);
        }).catch(err=> console.log(err));
    }
    return(
        <div
        className="container border"
        style={{
            marginTop:"50px",
            width:"50%",
            textAlign:"center"        
        }}
        >
            <h1 style={{marginTop:'26px'}}>Contact Us</h1>
            <form style={{margin:"25px 85px 75px 100px"}} onSubmit={sendEmail}>
                <label>Name: </label><br/>
                <input type="text" name="name" className="form-control"/><br/>
                <label>Mobile Number: </label><br/>
                <input type="number" name="num"  className="form-control"/><br/>
                <label>Email: </label><br/>
                <input type="email" name="user_email"  className="form-control"/><br/>
                <label>Message: </label><br/>
                <textarea name='message' rows='3'/><br/>
                <input type="submit" value='Send' /><br/>
            </form>
        </div>
    );
};

export default Mailer;