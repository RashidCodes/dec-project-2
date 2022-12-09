import stream from '../assets/streaming_project.png'

const Architecture = () => {
    return (
        <div>
            <h1 style={{ color: '#3F839D' }} className='font-bold font-mono mt-20 mb-10 underline text-5xl'>Architecture</h1>
            <img src={stream} />
            <p className='italic mb-6'> Figure 1: Microservice Architecture</p>
        </div>
    )
}

export default Architecture;