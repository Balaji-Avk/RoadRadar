import{Heading} from '../components/Heading';
import{SubHeading} from '../components/SubHeading';
import {InputBox} from '../components/InputBox';
import {Button} from '../components/Button';
import {BottomWarning} from '../components/BottomWarning';

export function Signin(){
    
    return(
        <div className='bg-gradient-to-r from-gray-50 to-red-50 h-screen flex justify-center'>
            <div className='flex flex-col justify-center'>
                <div className='bg-white rounded-lg w-80 text-center p-2 h-max px-4 shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]'>
                    <Heading label="Sign in"/>
                    <SubHeading label="Enter your credentials to access your account" />
                    <InputBox label="Email" placeholder="abc@example.com"/>
                    <InputBox label="Passowrd" placeholder="123456789"/>
                    <div className='my-2'>
                        <Button label="Sign in" />
                    </div>
                    <BottomWarning label ="Don't have an account?" buttonText={"Sign up"} to="/signup"/>
                </div>
            </div>
        </div>
    )
}