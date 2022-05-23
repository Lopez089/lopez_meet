import { Video } from '../components/video'
import { useState } from 'react'

const participants = [
    {
        id: 1,
        name: 'juan'
    },
    {
        id: 2,
        name: 'pepe'
    },
    {
        id: 3,
        name: 'pepe'
    },
    {
        id: 4,
        name: 'pepe'
    }
]



export const Meet = () => {
    const [user, setuser] = useState(participants);
    return (
        <section className='bg-slate-900 rounded min-h-screen p-5 gap-4 grid '>
            <section className='flex justify-center auto-cols-fr'>
                <Video video={'yo'} />
            </section>
            <section className='grid grid-flow-col gap-4'>

                {
                    user.map(video => {
                        return <Video key={video.id} video={video.id} />
                    })
                }
            </section>

        </section>
    )
}