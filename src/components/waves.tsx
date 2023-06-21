export const WaveArray = [
    'M0,288L80,272C160,256,320,224,480,224C640,224,800,256,960,250.7C1120,245,1280,203,1360,181.3L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z'
]

export const Wave = ({ fill, svg, id}) => {
    return (
        <div className='relative'>
            <svg
                viewBox='0 0 1440 320'
                className='opacity-50 relative bottom-0'
                id={id}
                xmlns="http://www.w3.org/2000/svg">
                <path fill={fill} d={svg} />
            </svg>
        </div>
    )
}