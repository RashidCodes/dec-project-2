import TweetCard from "./tweetCard";

function Tweet({ recentTweets }){

    return (
        <div className="my-20">
            <h1 style={{ color: '#3F839D' }} className='font-bold font-mono underline text-5xl'>What are the fans saying?</h1>
            {recentTweets.map((tweetObj) => <TweetCard tweet={tweetObj} />)}
        </div>
    );
    
}

export default Tweet;