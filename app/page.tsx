"use client"
import Image from 'next/image'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation';
import { signOut } from "next-auth/react"
import useCurrentUser from '@/hooks/useCurrentUser';
export default function Home() {
  const {data:session,status}=useSession()
  const router = useRouter()
  console.log(session)
  if(!session){
    router.push('/auth')
  }
  return (
    <main>
      <h1 className='text-white'>Logged in as: {session?.user?.name}</h1>
      <h1 className='text-green-500'>Nextjs</h1>
      <button className='w-full bg-red-700' onClick={()=>signOut()}>Logout</button>
    </main>
  )
}
