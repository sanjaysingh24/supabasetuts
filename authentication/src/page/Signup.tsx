import { EmailMagiclogin } from "@/components/auth/emailMagiclogin";
import { EmailSignIn } from "@/components/auth/emailSignIn";
import { EmailSignup } from "@/components/auth/EmailSignup";
import { PhoneLogin } from "@/components/auth/loginwithotp";
import { Phonesignin } from "@/components/auth/Phonesignin";
import {Phonesignup} from "@/components/auth/Phonesignup"

export const Signup = () => {
 return (
    <>
      <section className='bg-slate-400 '>
        <div className="container grid grid-cols-1 md:grid-cols-3 gap-4 mx-auto flex justify-center items-center min-h-screen">
        <EmailSignup/>
        <EmailSignIn/>
      
 <Phonesignup></Phonesignup>
         <EmailMagiclogin></EmailMagiclogin>
         <PhoneLogin></PhoneLogin>
         <Phonesignin></Phonesignin>
        </div>
      </section>
    </>
  );
};
