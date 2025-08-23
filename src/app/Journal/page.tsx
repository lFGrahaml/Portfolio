'use client';

import { authClient } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";



export default function Home() {
  const [email, setEmail] = useState("");
  const [name , setName] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = () => {
    authClient.signUp.email({
      email,
      name,
      password
    }, {
      onError: () => {
        window.alert("error")
      },
      onSuccess: () => {
        window.alert("success")
      }
    })
  }

  return (
    <div>
      <Input placeholder="name" value={name} onChange={(e) => setName(e.target.value)} />
      <Input placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <Input placeholder="password" type='password' value={password} onChange={(e) => setPassword(e.target.value)} />

      <Button onClick={onSubmit}>
        Create user
      </Button>
    </div>
  )
}