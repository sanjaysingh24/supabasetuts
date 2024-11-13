import { EmailMagiclogin } from "@/components/auth/emailMagiclogin";
import { EmailSignIn } from "@/components/auth/emailSignIn";
import { EmailSignup } from "@/components/auth/EmailSignup";
export const Signup = () => {
 return (
    <>
      <section className='bg-slate-400 '>
        <div className="container grid grid-cols-1 md:grid-cols-4 gap-4 mx-auto flex justify-center items-center min-h-screen">
        <EmailSignup/>
        <EmailSignIn/>
         <EmailMagiclogin></EmailMagiclogin>

 

        </div>
      </section>
    </>
  );
};
