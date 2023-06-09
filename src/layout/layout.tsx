export const Layout = ({ page_name, page_ref, content }) => {
    return (
        <div className='bg-slate-900 h-max w-auto' /* TODO export bg-color to css */ >
            <section id='spacer' className='h-8' />
            <div className='max-w-5xl mx-auto sm:px-8 overflow-hidden'>
                <div className='flex justify-between font-semibold text-slate-500' /* Export text-color to css */>
                    <a href={page_ref} className='hover:underline'>NP • {page_name}</a>
                    <img // TODO add metadata to database :3
                        id='github-logo'
                        src='' // TODO add link to datajson and link source in legal
                        alt='github-logo'
                        title='source' />                
                </div>    
                <section id='spacer' className='h-5' />
                <div className='bg-slate-600 h-screen p-5 rounded-xl shadow-xl'>
                    {content}
                </div>
            </div>
        </div>
    )
}