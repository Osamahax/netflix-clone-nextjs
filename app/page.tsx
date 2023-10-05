import Image from 'next/image'
import { useSession } from 'next-auth/react'
import { redirect, usePathname } from 'next/navigation';
import { signOut } from "next-auth/react"
import useCurrentUser from '@/hooks/useCurrentUser';
import Navbar from '@/components/Navbar';
import Billboard from '@/components/Billboard';
import { Session } from '@prisma/client';
import { authOptions } from './api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';
export default async function Home() {
  const session = await getServerSession(authOptions);
  // const router = usePathname()
  console.log(session)
  if(!session){
    redirect( '/auth')
  }
  return (
    <main>
      <Navbar />
      <Billboard />
    </main>
  )
}
