import { useSession } from 'next-auth/react'

export const checkUser = async () =>{
    const {data:session, status } =await useSession();
    return session
}