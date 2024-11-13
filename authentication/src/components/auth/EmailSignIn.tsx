import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from "@/components/ui/input"
import { Label } from '@/components/ui/label'
import supabase from '@/Configuration/config';
import { useToast } from '@/hooks/use-toast';
import { ToastAction } from "@/components/ui/toast"

export const EmailSignIn = () => {
    const {toast} = useToast();
    type FormData = {
        email: string,
        Password: string
      }
    const[logindata,setLoginData] = useState<FormData>({
        email:"",
        Password:""
      })
    
    
      const handleloginChange =(e:React.ChangeEvent<HTMLInputElement>)=>{
        const {name,value} = e.target;
        setLoginData((prev)=>{
          return {...prev,[name]:value};
        })
      }
    
    
    const handlesignin = async(e)=>{
      e.preventDefault();
     try{
      const {data,error} = await supabase.auth.signInWithPassword({
        email:logindata.email,
        password:logindata.Password
    
      })
     if(data){
      console.log("succesfully login",data);
      toast({title:"Successfully Login"})
     }
     if(error){
      toast({title:"Login failed",variant: "destructive", action: <ToastAction altText="Try again">Try again</ToastAction>,})
     }
    
    
     }catch(err){
      console.log(err)
    }
    }


  return (
    <div className="w-full  py-7 px-10 shadow hover:shadow-lg rounded-xl bg-white transition-all">
    <h4 className='text-center font-semibold'>User SignIn Using Email and Password </h4>
    <form >
      <Label htmlFor="email" className="block text-lg font-medium">Email</Label>
      <Input
        type='email'
        className="mt-2 w-full"
        placeholder="Enter your Email"
        onChange={handleloginChange}
        name="email"
        value={logindata?.email}
      />

      <Label htmlFor="password" className="block text-lg font-medium mt-6">Password</Label>
      <Input
        type="password"
        className="mt-2 w-full"
        placeholder="Enter your Password"
        name="Password"
        onChange={handleloginChange}
        value={logindata?.Password}
        autoComplete="true"
      />
      <div className='text-center mt-5'>
        <Button onClick={handlesignin}>Sign in</Button>
      </div>
    </form>
  </div>
  )
}
