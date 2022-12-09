import usedTools from '../assets/tools.png';

const Tools = () => {
    return (
        <div>
            <h1 style={{ color: '#3F839D' }} className='font-bold font-mono mt-20 mb-10 underline text-5xl'>Tools</h1>
            <img src={usedTools} />
            <div class="overflow-x-auto mt-6 relative shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="text-xl py-3 px-6">
                                Tool
                            </th>
                            <th scope="col" class="text-xl py-3 px-6">
                                Usage
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                            <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            EC2
                            </th>
                            <td class="py-4 px-6">
                            Hosting the entire application
                            </td>
                        </tr>
                        <tr class="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Confluent Kafka
                            </th>
                            <td class="py-4 px-6">
                            Event Store
                            </td>

                        </tr>
                        <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                            <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            NGINX
                            </th>
                            <td class="py-4 px-6">
                            Reverse Proxy Server
                            </td>
                        </tr>
                        <tr class="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            React
                            </th>
                            <td class="py-4 px-6">
                            Application Frontend
                            </td>
                        </tr>
                        <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                            <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            ClickHouse
                            </th>
                            <td class="py-4 px-6">
                            Event Processing
                            </td>
                        </tr>
                        <tr class="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Superset
                            </th>
                            <td class="py-4 px-6">
                            Data Visualisation
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Tools;