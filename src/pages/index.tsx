import { Wave, WaveArray } from "@/components/waves";
import { database } from "@/data/database";
import { Colors } from "@/styles/colors";
import styles from '@/styles/index.module.scss'

export default function Home() {
    return (
        <div id='site-background' className='bg-siteBlack'>
            <section 
                id='landing'
                className='h-screen w-auto'>
                <Wave
                    id='wave'
                    svg={WaveArray[0]} 
                    fill={Colors.backgroundPurple}/>
            </section>
        </div>
    )
}
