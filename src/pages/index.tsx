import { Wave, WaveArray } from "@/components/waves";
import { database } from "@/data/database";
import { Layout } from "@/layout/layout";

export default function Home() {
    return (
        <Layout
            page_name='Home'
            page_ref='/'
            content={
                <section id='hero' className='flex'>
                    <img
                        title={database.images.profiles.index_picture.title}
                        alt={database.images.profiles.index_picture.alt}
                        src={database.images.profiles.index_picture.src}
                    />
                    <div> 
                    </div>
                </section> 
            }
        />
    )
}
