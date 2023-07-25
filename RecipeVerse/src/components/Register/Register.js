import React from 'react';
import './Register.css';
import logo from './logo.png';
import body from './body.png';
import {Link,useNavigate} from 'react-router-dom';
import { useState, useEffect } from "react"
import { Form, FormFeedback, Input, Label} from "reactstrap"
import userService from '../../services/userService';
import defaultAvatar from './avatar.png'
import NavBar from '../Navbar/Navbar';



function Register(){
    const [image, setImage] = useState(null);
    const [fname, setFirstname] = useState('')
    const [lname, setLastname] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [cpassword, setCPassword] = useState('')
    const [message, setMessage] = useState('')
    const Navigate=useNavigate()

    useEffect(() => {
        if (password !== cpassword) {
            setMessage('password and confirm password does not match')
            return
        }
        else if (username.length !==0 && username.length < 6) {
            setMessage('username should be atleast 6 characters')
            return
        }
        setMessage('')

    }, [cpassword, password,username])

    function handleImageChange(e) {
        setImage(e.target.files[0]);
    }

      
    async function handleRegister(e) {
        e.preventDefault();
        try {
          if (!fname || !lname || !username || !email || !password || !cpassword) {
            throw new Error('All fields are required')
          }
          
          const formData = new FormData()
          formData.append('image', image)
          formData.append('fname', fname)
          formData.append('lname', lname)
          formData.append('email', email)
          formData.append('username', username)
          formData.append('password', password)
      
          const response = await userService.register(formData)
      
          if (response.data.status) {
            alert(response.data.status)
            Navigate('/login')
          } else {
            throw new Error('Error occurred while registering')
          }
        } catch (error) {
          alert(error.message)
        }
      }
    


    return(
        <div className="main-register">            
                {/* <div className="leftside-register">
                    <div className="register-header">
                        <img src={logo}  id='logo-img' alt='' srcSet=''/>
                    </div>
                    <div className='body'>
                        <img src={body} id='body-img' alt='' srcSet=''/>
                    </div>
                    <p>"Bringing Art to Your Doorstep: Elevate Your Space with Every Purchase"</p>
                </div> */}
                <NavBar/>


                <div className="rightside-register">
                    
                    <div className="body-right">
                        <div className='container-register'>
                        <h1>RECIPEVERSE</h1>
                <h2>SIGN UP</h2>


                        {/* <div className='avatar'>
                        {image ? (
                            <img src={URL.createObjectURL(image)} alt="avatar" />
                        ) : (
                            <img src={defaultAvatar} alt="default avatar" />
                        )}
                        </div> */}

                        
                        <Form>
                   
                        <div className='input-group'>
                                <Label for="firstname">First Name</Label>
                                <input
                                    id="fname"
                                    name="fname"
                                    placeholder="Enter your First Name"
                                    type="text"
                                    value={fname}
                                    onChange={(e) => setFirstname(e.target.value)}
                                />
                            </div>
                            <div className='input-group'>
                                <Label for="lastname">Last Name</Label>
                                <input
                                    id="lname"
                                    name="lname"
                                    placeholder="Enter your Last Name"
                                    type="text"
                                    value={lname}
                                    onChange={(e) => setLastname(e.target.value)}
                                />
                            </div> 
                            <div className='input-group'>   
                                <Label for="email">Email</Label>
                                <input
                                    id="email"
                                    name="email"
                                    placeholder="Enter your Email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className='input-group'>    
                                <Label for="username">Username</Label>
                                <input
                                    id="username"
                                    name="username"
                                    placeholder="Enter your Username"
                                    type="text"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </div> 
                            <div className='input-group'>   
                                <Label for="password">Password</Label>
                                <input 
                                    id="password"
                                    name="password"
                                    placeholder="Enter your Password"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div> 
                            <div className='input-group'>   
                                <Label for="confirmpassword">Confirm Password</Label>
                                <input 
                                    id="cpassword"
                                    name="cpassword"
                                    placeholder="Enter your Confirm Password"
                                    type="password"
                                    value={cpassword}
                                    onChange={(e) => setCPassword(e.target.value)}
                                />
                            </div> 

                            



                            <div className='input-group'>
                            <div style={{position:"absolute",marginLeft:"5rem" }}>
                                <FormFeedback style={{color:"red",fontSize:"0.8rem"}}>{message}</FormFeedback>
                            </div>
                            </div>
                            

                            <div className="input-group-button">
  <Input
    type="submit"
    value="Register"
    id="sbtn"
    onClick={handleRegister}
    style={{ margin: "2rem 10rem 4rem 3.1rem" }} // Add the desired margin and set auto for horizontal centering
  />
</div>

                            </Form>
     
                            
                            <div className="top-right">
                            <Label for="haveanaccount">Already have an account ?
                            <Link id="link-signin" to="/login" style={{ color: "red", fontWeight: "bold", marginRight: '14rem' }}>
  Login
</Link>
                                </Label>
                            </div>
                        
                        </div>


                    </div>
                   
                </div>
           
        </div>
    )
}

export default Register;