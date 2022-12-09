const Insights = () => {
    return (
        <div>   
            <h1 style={{ color: '#3F839D' }} className='font-bold font-mono underline text-5xl'>Insights</h1>
            <h2 className='text-2xl font-mono font-bold mt-5 mb-2 text-pink-800'>Highest Number of Tweets</h2>
            <p className='font-mono my-3'>
                The highest number of tweets was recorded on 7th December, 2022. 
                On this day, teams that had qualified for the round of 16 battled for qualification into 
                the quarter finals. The fixtures on December 7th were as follows:
            </p>
            
            <li>Japan vs Crotia</li>
            <li>Brazil vs South Korea</li>
            <li>Portugal vs Switzerland</li>
            <li>Morocco vs Spain</li>

            <p className='font-mono'>
                In my opinion, the best fixture was <span className='italic'>Brazil vs South Korea</span>. The brazilians were a 
                ton of fun to watch.
            </p>

            <br/>

            <h2 className='text-2xl font-mono font-bold mt-5 mb-2 text-pink-800'>Tweets by Location</h2>
            <p className='font-mono my-3'>
                It comes as no surprise that Nigerians have tweeted the most about the tournament. As Africans, we live and breath 
                the beautiful game that is soccer. Note that the dataset comprises of 4 days of twitter activity. It's very possible that
                another nation might be tweeting more aggressively.
            </p>

        </div>
    )
}

export default Insights;