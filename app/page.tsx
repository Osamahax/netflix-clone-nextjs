import Image from 'next/image'
import { signOut } from 'next-auth/react'
import serverAuth from '@/lib/serverAuth'

// export async function getServerprops(){
//   const userSession = await serverAuth();
//   console.log(userSession)
//   if(!userSession){
//     return {
//       redirect: {
//         destination: '/auth',
//         perment: true
//       }
//     }
//   }
// }
export async function getServerSession(){

}
export default function Home() {
  // getServerprops();
  return (
    <main>
      <h1 className='text-green-500'>Nextjs</h1>
      <button >Logout</button>
    </main>
  )
}
