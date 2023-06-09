import { LandingButton, NavbarButton } from "@/components/button";
import { Wave, WaveArray } from "@/components/waves";
import { Layout } from "@/layout/layout";

export default function Home() {
    return (
        <Layout
            page_name='Home'
            page_ref='/'
            content={
                <a>Hewwo</a>
            }
        />
    )
}
