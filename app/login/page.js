"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const supabase = createClientComponentClient();



  const handleSignIn = async () => {
    await supabase.auth.signInWithPassword({
      email: "tino@ambrecht.de",
      password: "",
    });
    router.refresh();
  };

 
  return (
    <div className="flex gap-2">
      <button onClick={handleSignIn}>Sign in</button>
      
    </div>
  );
}