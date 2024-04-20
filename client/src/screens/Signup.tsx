import { useState } from 'react';
import { BottomWarning } from '../components/BottomWarning';
import { Button } from '../components/Button';
import {Heading} from '../components/Heading';
import { InputBox } from '../components/InputBox';
import { SubHeading } from '../components/SubHeading';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

export function Signup(){
    const navigate=useNavigate();
    const [firstName,setFirstName]=useState('');
    const [lastName,setLastName]=useState('');
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    const handleSignUp=async ()=>{
        const response =  await axios.post("http://localhost:3000/api/v1/user/signup",{
            firstName,
            lastName,
            username,
            password
        });
        localStorage.setItem("token", response.data.token);
        navigate("/dashboard");
    }
    return(
        <div className='bg-gradient-to-r from-gray-50 to-red-50 h-screen flex justify-center'>
            <div className='flex flex-col justify-center'>
                <div className='bg-white rounded-lg w-80 text-center p-2 h-max px-4 shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]'>
                    <Heading label='Sign up'/>
                    <SubHeading label="Enter your information to create an account"/>
                    <InputBox label="First Name" onChange={(e: React.ChangeEvent<HTMLInputElement>)=>{
                        setFirstName(e.target.value);
                        }} placeholder="Robert" />
                    <InputBox label="Last Name" onChange={(e: React.ChangeEvent<HTMLInputElement>)=>{
                        setLastName(e.target.value)
                        }} placeholder="Downey" />
                    <InputBox label="Email" onChange={(e: React.ChangeEvent<HTMLInputElement>)=>{
                        setUsername(e.target.value)
                        }} placeholder="abc@example.com" />
                    <InputBox label="Password" onChange={(e: React.ChangeEvent<HTMLInputElement>)=>{
                        setPassword(e.target.value)
                        }} placeholder="123456789" />
                    <div className='my-2'>
                        <Button label="Sign up" onClick={handleSignUp} />
                    </div>
                    <BottomWarning label="Already have an account?" buttonText="Sign in"  to="/signin"/>
                </div>
            </div>

        </div>
    )
}