import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from "@/components/ui/input"
import { Label } from '@/components/ui/label'
import supabase from '@/Configuration/config';
import { useToast } from '@/hooks/use-toast';
import { ToastAction } from "@/components/ui/toast"


export const EmailMagiclogin = () => {
    const {toast} = useToast();
    type FormData={
      email:string
    }
    const[datas,setData] = useState<FormData>({
      email:""
    });
const handlemagiclink= async(e)=>{
    e.preventDefault()
  
    try{
      let {data, error } = await supabase.auth.signInWithOtp({
        email: datas
      })
      if(data){
        toast({title:"Successfully send the link to the give email"})
      }
      if(error){
        toast({title:"Login failed",variant: "destructive", description:`${error?.message}`, action: <ToastAction altText="Try again">Try again</ToastAction>,})
       }
    }catch(err){
      console.log(err);
      toast({variant:"destructive",title:"Login failed"})
    }
  
  }
  
  return (
    <div className='w-full py-7 px-10 shadow hover:shadow-lg rounded-xl bg-white transition-all'>
    <h4 className='text-center font-semibold'>Login with magic link</h4>
  <form >
      <Label htmlFor="email" className="block text-lg font-medium">Email</Label>
      <Input
        type='email'
        className="mt-2 w-full"
        placeholder="Enter your Email"
       onChange={(e)=>setData(e.target.value)}

        name="email"
      
      />
       <div className='text-center mt-5'>
        <Button onClick={handlemagiclink}>continue</Button>
      </div>
    </form>
  </div>

  )
}
