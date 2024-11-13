import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from "@/components/ui/input"
import { Label } from '@/components/ui/label'
import supabase from '@/Configuration/config';
import { useToast } from '@/hooks/use-toast';
import { ToastAction } from "@/components/ui/toast"
export const Phonesignup = () => {
    const {toast} = useToast();
    type FormData = {
        email: string,
        Password: string
      }
      const [formdata, setData] = useState<FormData>({
        email: "",
        Password: ""
      });
      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setData((prev) => {
          return { ...prev, [name]: value };
        });
      }
      const handlesignup=async(e)=>{
        e.preventDefault();
        try{
          const {data,error} = await supabase.auth.signUp({
            phone:formdata.email,
            password:formdata.Password
          })
          //set the mobile number to the local storage
          let mobile = localStorage.setItem("phone",formdata.email);
           if(error){
            
            toast({title:"An error occur",description:"error during sign up"}) 
      
           }
           if(data){
            console.log(data);
        toast({title:"Successfully Sign up"})
           }
        }catch(err){
          console.log(err);
        }
        setData({
          email:"",
          Password:""
        })
      }
  return (
    <div className="w-full  py-7 px-10 shadow hover:shadow-lg rounded-xl bg-white transition-all">
            <h4 className='text-center font-semibold'> SignUp with  number and  Password </h4>
            <form >
              <Label htmlFor="email" className="block text-lg font-medium">Phone Number</Label>
              <Input
                type='text'
                className="mt-2 w-full"
                placeholder="Enter your Mobile (+91) is mandotary"
                onChange={handleChange}
                name="email"
                value={formdata?.email}
              />

              <Label htmlFor="password" className="block text-lg font-medium mt-6">Password</Label>
              <Input
                type="password"
                className="mt-2 w-full"
                placeholder="Enter your Password"
                name="Password"
                onChange={handleChange}
                value={formdata?.Password}
                autoComplete="true"
              />
              <div className='text-center mt-5'>
                <Button onClick={handlesignup}>Sign up</Button>
              </div>
            </form>
          </div>
  )
}
