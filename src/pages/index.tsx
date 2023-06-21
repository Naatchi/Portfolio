import { Wave, WaveArray } from "@/components/waves";
import { database } from "@/data/database";
import { Colors } from "@/styles/colors";
import styles from '@/styles/index.module.scss'

export default function Home() {
    return (
        <div id='site-background' className='bg-siteBlack text-textPurple'>
            <section id='landing' className='h-screen w-auto'>
                <h1 className='flex justify-center'>Natalie Pahwa</h1>
                <h2 className='flex justify-center'>Front-End Developer</h2>
                <section id='spacer'/>
                <div className='flex justify-center'>
                    {database.buttons.landing.map(([title, link]) => (
                        <a href={link} className='hover:underline'>{title}</a>
                    ))}
                </div>
                <Wave
                    id='wave'
                    svg={WaveArray[0]} 
                    fill={Colors.backgroundPurple}/>
            </section>
        </div>
    )
}
