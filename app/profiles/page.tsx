"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useCallback, useEffect } from "react";
import Image from "next/image"
import userImg from "@/public/images/default-slate.png"

const Profiles = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  console.log(session);
  if (!session) {
    router.push("/auth");
  }
  return ( session && 
    (
        <div className="flex items-center h-full justify-center">
            <div className="flex flex-col">
                <h1 className="text-3xl md:text-6xl text-white text-center">Who is watching?</h1>
                <div className="flex items-center justify-center gap-8 mt-10">
                    <div onClick={()=>router.push('/')}>
                        <div className="group flex-row w-44 mx-auto">
                            <div
                                className="
                                    w-44
                                    h-44
                                    rounded-md
                                    flex
                                    items-center
                                    justify-center
                                    border-2
                                    border-transparent
                                    group-hover:cursor-pointer
                                    group-hover:border-white
                                    overflow-hidden
                                "
                            >
                                <Image src={userImg} alt="profile"/>
                            </div>
                            <div
                                className="
                                    mt-4
                                    text-gray-400
                                    text-2xl
                                    text-center
                                    group-hover:text-white
                                "
                            >
                                {session.user?.name}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  )
};

export default Profiles;
