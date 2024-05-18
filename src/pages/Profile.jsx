import React from 'react'
import Post from '../components/Post'

const Profile = () => {
  return (
    <section className='w-full min-h-screen flex flex-col'>
        <div className="profile-container w-full px-[200px] border-b pb-10">
            <div className='flex items-center gap-5'>
                <img src="" alt="" className='w-[120px] h-[120px] rounded-full bg-zinc-200'/>

                <div className="pr-text">
                    <h3 className='text-2xl font-[600]'>Shahzaib Khan</h3>
                    <p className='text-text'>Joined On: </p>

                    <div className="follow-row flex mt-[10px] gap-3">
                        <button className='w-[120px] h-[40px] bg-blue text-white rounded-md'>Follow</button>
                        <button className='w-[120px] h-[40px] border border-black text-black rounded-md'>Message</button>
                    </div>
                </div>
            </div>
        </div>

        <div className='w-full px-10 bg-zinc-100 min-h-screen'>
            <h2 className='text-3xl font-bebas text-dark pt-10'>Posts</h2>

            <div className="posts-col">
                <Post name={"Shahzaib Khan"} image={""} created={"2-June"} post={"This is the post"}/>
            </div>
        </div>
    </section>
  )
}

export default Profile