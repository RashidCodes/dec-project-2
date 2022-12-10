const PreProd = () => {
    return (
        <div>
            <h1 style={{ color: '#3F839D' }} className='font-bold font-mono mt-20 mb-10 underline text-5xl'>Preparing for Production</h1>
            
            <div>
                <h2 className='font-bold text-pink-800 font-mono mb-5 underline text-3xl'>Storage</h2>
                <div className="ml-6">
                    
                    <li>Ensure that there's enough storage on the server otherwise the latest images will not be pulled.</li>
                </div>
            </div>

            <div>
                <h2 className='font-bold text-pink-800 font-mono mt-10 mb-5 underline text-3xl'>Processor Architecture</h2>
                <div className="ml-6">
                    
                    <li>
                        The application was developed on an <span className='prose rounded-md px-2 text-white py-1 bg-gray-500'>arm64</span> architecture but the production system is <span className='prose rounded-md px-2 text-white py-1 bg-gray-500'>amd64</span>. 
                        The CI/CD pipeline handles this flawlessly because a ubuntu runner builds the images for the 
                        ubuntu production server. However, care must be taken when building images on the <span className='prose rounded-md px-2 text-white py-1 bg-gray-500'>arm64</span> architecture. 
                        During development, then Dockerfile for backend service had to be built for the <span className='prose rounded-md px-2 text-white py-1 bg-gray-500'>arm64</span> architecture however 
                        in production, the image had to be built for <span className='prose rounded-md px-2 text-white py-1 bg-gray-500'>amd64</span>.
                    </li>
                </div>
            </div>

            <div>
                <h2 className='font-bold text-pink-800 font-mono mt-10 mb-5 underline text-3xl'>Version Control</h2>
                <div className="ml-6">
                    
                    <li>
                        All production scripts have to be version controlled and managed very carefully. For example, 
                        the <span className='prose rounded-md px-2 text-white py-1 bg-gray-500'>.env</span> file should never the see 
                        the light of day in the <span className='prose rounded-md px-2 text-white py-1 bg-gray-500'>git</span> staging area.
                    </li>
                </div>
            </div>

            <div>
                <h2 className='font-bold text-pink-800 font-mono mt-10 mb-5 underline text-3xl'>Production Dashboard</h2>
                <div className="ml-6">
                    
                    <li>Ensure that there's enough storage on the server otherwise the latest images will not be pulled.</li>
                </div>
            </div>

        </div>
    )
}

export default PreProd;