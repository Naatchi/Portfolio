import { Wave, WaveArray } from "@/components/waves";
import { database } from "@/data/database";
import { Layout } from "@/layout/layout";

export default function Home() {
    return (
        <Layout
            page_name='Home'
            page_ref='/'
            content={
                <>
                    this is the content <br/>
                    
                </>
            }
        />
    )
}
