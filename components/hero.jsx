import { Button } from '../components/button'
import Image from 'next/image'
import { Input } from '../components/input'
import { BsFillCameraVideoFill, BsKeyboard } from "react-icons/bs";

export const Hero = () => {
    return (
        <section className='hero h-5/6 container mx-auto grid grid-cols-2 '>
            <section className='flex justify-center items-start flex-col opacity-1'>
                <h1 className='mb-6 font-sans text-5xl subpixel-antialiased font-semibold tracking-wide text-neutral-600'>
                    <span className='text-blue-500'>Videosllamadas </span>Gratis con todos tus amigos
                </h1>
                <p className='mb-6 font-sans text-sm leading-6 tracking-wide text-neutral-400 '>
                    Nuestro servicio de videosllamas para empresa y particulares. LopezDev meet, todo el mundo puede usarlo de forma gratuita.
                </p>
                <section className='w-full flex justify-start gap-7'>
                    <Button icon={<BsFillCameraVideoFill />}>
                        Nueva Reunion
                    </Button>
                    <Input icon={<BsKeyboard />} />
                </section>
            </section>
            <section className='flex justify-end items-center'>
                <Image
                    src='/static/undraw_remote_meeting_re_abe7.svg'
                    alt='img-hero'
                    height={330}
                    width={430} />
            </section>

        </section>
    )




}