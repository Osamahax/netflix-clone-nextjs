"use client"
import Image from 'next/image'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation';
import { signOut } from "next-auth/react"
import useCurrentUser from '@/hooks/useCurrentUser';
import Navbar from '@/components/Navbar';
import Billboard from '@/components/Billboard';
export default function Home() {
  const {data:session,status}=useSession()
  const router = useRouter()
  console.log(session)
  if(!session){
    router.push('/auth')
  }
  return (
    <main>
      <Navbar />
      <Billboard />
    </main>
  )
}
