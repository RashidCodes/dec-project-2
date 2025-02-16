const Workflow = () => {
    return (
        <div className="ml-6">
            <h1 style={{ color: '#3F839D' }} className='font-bold font-mono mt-20 mb-10 underline text-3xl'>Workflow</h1>

            <li>The twitter producer loads a stream of tweets into a Kafka cluster hosted on <a className='underline font-bold' href='https://www.confluent.io/'>confluent</a>.</li>
            <li>Clickhouse consumes the twitter streams using a confluent HTTP Connector</li>
            <li>The python backend connects the React frontend (this webpage) to ClickHouse. The list of recent tweets above is the resultset of the simple query below.</li>
                <div className='ml-9 mt-3 mb-4 prose prose-slate lg:prose-lg'>
                    <pre className="lg:min-w-fit sm:min-w-full">
                        <code className='font-bold' class="language-sql">
                            select top 3 * 
                            from tweets 
                            where username &lt;&gt; '' 
                            order by created_at desc format JSON
                        </code>
                    </pre>
                </div>
            <li>
                The dashboard embedded on this page is developed in <a className='underline font-bold' href='https://superset.apache.org/'>apache superset</a>. 
                Superset uses Postgres as it's default metadata store.  
            </li>
            <li>
                Lastly, NGINX is used as  single, reverse proxy server to handle requests.
            </li>

            <div className='my-6 py-6 px-6 border-2 rounded-md border-zinc-800'>The <span>stream enricher</span> service enriches the streams by loading user data from a
            a different endpoint. It is not a streaming endpoint so it's run as a standalone service. The producer can run
            as a standalone service as well.</div>

        </div>
    )
}

export default Workflow;