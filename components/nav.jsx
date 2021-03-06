import { Button } from '/components/button';
import { BsGithub } from "react-icons/bs"

export const Nav = ({ room }) => {
    return (
        <header className='container mx-auto flex justify-between items-center h-20'>
            <div className='text-yellow-400 flex font-sans font-extrabold text-xl antialiased'>
                <p className='text-blue-500 '>
                    LOPEZDEV
                </p>
                <span>
                    MEET
                </span>
            </div>
            {!room ? (
                <section section className='flex items-center gap-4 '>
                    <p className='font-thin'>13:09 | jue, 19 may</p>
                    <Button icon={<BsGithub />}> Inicar section</Button>
                </section>

            ) : null
            }

        </header >
    )
}