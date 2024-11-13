import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from "@/components/ui/input"
import { Label } from '@/components/ui/label'
import supabase from '@/Configuration/config';
import { useToast } from '@/hooks/use-toast';
import { ToastAction } from "@/components/ui/toast"
export const PhoneLogin = () => {
    //get the mobile
    let number = localStorage.getItem("phone");
    const {toast} = useToast();
    type FormData = {
        otp: string,
     
      }
      const [formdata, setData] = useState<FormData>({
        otp: "",
      
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
          const {data,error} = await supabase.auth.verifyOtp({
            phone:number,
            token:formdata.otp,
            type:"sms"
          })
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
            otp:"",
       
        })
        localStorage.removeItem("phone");
      }
  return (
    <div className="w-full  py-7 px-10 shadow hover:shadow-lg rounded-xl bg-white transition-all">
            <h4 className='text-center font-semibold mb-4'>verify the otp</h4>
            <form >
              <Label htmlFor="email" className="block  font-medium">Enter the Otp</Label>
              <Input
                type='text'
                className="mt-2 w-full"
                placeholder="Enter your Mobile Otp"
                onChange={handleChange}
                name="otp"
                value={formdata?.otp}
              />

              <div className='text-center mt-5'>
                <Button onClick={handlesignup}>verify otp</Button>
              </div>
            </form>
          </div>
  )
}
