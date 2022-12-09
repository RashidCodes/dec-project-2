const Workflow = () => {
    return (
        <div>
            <h1 style={{ color: '#3F839D' }} className='font-bold font-mono mt-20 mb-10 underline text-5xl'>Workflow</h1>

            <li>The twitter producer loads a stream of tweets into a Kafka cluster hosted on <a className='underline font-bold' href='https://www.confluent.io/'>confluent</a>.</li>
            <li>Clickhouse consumes the twitter streams using a confluent HTTP Connector</li>
            <li>The python backend connects the React frontend (this webpage) to ClickHouse. The list of recent tweets above is the resultset
            of the simple query below.

            <div className='mt-3 mb-4 prose prose-slate lg:prose-lg'>
                <pre className="lg:min-w-fit sm:min-w-full">
                    <code className='font-bold' class="language-sql">
                        select top 10 * 
                        from tweets 
                        where username &lt;&gt; '' 
                        order by created_at desc format JSON
                    </code>
                </pre>
            </div>
            </li>
            <li>
                The dashboard embedded on this page is developed in <a className='underline font-bold' href='https://superset.apache.org/'>apache superset</a>. 
                Superset uses Postgres as it's default metadata store.  
            </li>
            <li>
                Lastly, NGINX is used as  single, reverse proxy server to handle requests.
            </li>
        </div>
    )
}

export default Workflow;