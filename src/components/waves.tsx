export const WaveArray = [
    '1',
    '2',
    '3',
    '4'
]

export const Wave = ({ fill, svg }) => {
    return (
        <>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="relative bottom-0">
                <path fill={fill} d={svg} />
            </svg>
        </>
    )
}