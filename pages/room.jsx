import { Nav } from '../components/nav'
import { Meet } from '../components/meet'

export default function Room() {
    return (
        <section className="bg-slate-800 pb-20">
            <section className='container mx-auto min-h-full'>
                <Nav room />
                <Meet />
            </section>
        </section>
    )
};