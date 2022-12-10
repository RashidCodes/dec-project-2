import cicd from '../assets/action_screenshot.png';

const CICD = () => {
    return (
        <div>
            <h1 style={{ color: '#3F839D' }} className='font-bold font-mono mt-20 mb-10 underline text-5xl'>CI/CD</h1>
            <img src={cicd} />
            <p className='italic mt-2 mb-6'> Figure 2: Integration and Deployment</p>

            <h2 className='font-bold font-mono mt-10 mb-5 underline text-pink-800 text-3xl'>Overview</h2>
            <p>
                Github actions is used to continuously test and deploy code changes. The application comprises of 6 
                microservices built from images deployed on <a href='https://hub.docker.com/'>dockerhub</a>. The pipeline is described in the next section.
            </p>

            <h2 className='font-bold font-mono mt-10 mb-5 text-pink-800 underline text-3xl'>Pipeline</h2>
            <p>
                Code changes are commited to the <span className='prose rounded-md px-2 text-white py-1 bg-gray-500'>dev</span> branch. 
                After some inspection, the code is pushed to the <span className='prose rounded-md px-2 text-white py-1 bg-gray-500'>main</span> branch and 
                this step triggers the CI/CD pipeline - broken down in the following steps.
            </p>
            <div className='ml-6'>
                <li className='my-3'>
                    Firstly a simple test is run against the backend. The 
                    test checks whether one of the endpoints works as expected.
                </li>
                <li className='my-3'>
                    Once the test passes, the <span className='prose rounded-md px-2 text-white py-1 bg-gray-500'>deployment</span> worflow is triggered. In this step, container images are built on a 
                    ubuntu runner and deployed to dockerhub. The <span className='prose rounded-md px-2 text-white py-1 bg-gray-500'>--platform</span> option in the <span className='prose rounded-md px-2 text-white py-1 bg-gray-500'>Dockerfile</span> has to be removed completely 
                    or set to <span className='prose rounded-md px-2 text-white py-1 bg-gray-500'>linux/amd64</span> - the architecture of the production server.
                </li>
                <li className='my-3'>Lastly, <span className='prose rounded-md px-2 text-white py-1 bg-gray-500'>restart_services.sh</span> is run on the production server to:</li>
                <div className='ml-9'>
                    <li>Pull the latest images</li>
                    <li>Restart the containers with the updated images</li>
                </div>
                
            </div>
            
        </div>
    )
}

export default CICD;