import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from "@/components/ui/input"
import { Label } from '@/components/ui/label'
import supabase from '@/Configuration/config';
import { useToast } from '@/hooks/use-toast';
import { ToastAction } from "@/components/ui/toast"
export const EmailSignup = () => {
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
      const handlesignup = async (e) => {
        e.preventDefault();
        try {
          const { data, error } = await supabase.auth.signUp({
            email: formdata.email,
            password: formdata.Password,
          });
      
          if (error) {
            // Check if the error is specifically about the email being already registered
            if (error.message.includes('email already exists')) {
              toast({
                title: 'User already registered',
                description: 'This email is already registered. Please login instead.',
              });
              console.log('User already registered:', formdata.email);
            } else {
              toast({
               
                description: error?.message,
              });
            
            }
            return; // Stop further execution if there's an error
          }
      
          if (data) {
            toast({
              title: 'Successfully Signed Up',
              
            });
     
          }
        } catch (err) {
          console.log(err);
          toast({
            title: 'Unexpected error',
            description: 'Something went wrong. Please try again later.',
          });
        }
        setData({
          email:"",
          Password:""
        })
      }
  return (
    <div className="w-full  py-7 px-10 shadow hover:shadow-lg rounded-xl bg-white transition-all">
            <h4 className='text-center font-semibold'>User SignUp Using Email and Password </h4>
            <form >
              <Label htmlFor="email" className="block text-lg font-medium">Email</Label>
              <Input
                type='email'
                className="mt-2 w-full"
                placeholder="Enter your Email"
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
