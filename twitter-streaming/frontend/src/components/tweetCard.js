import location_pin from '../assets/location-pin.png'
import clock from '../assets/clock.png'
import moment from 'moment';

function TweetCard({ tweet }){

    const tweetCreatedAt = moment(tweet.created_at).format('LLLL')

    return (
        <div style={{borderColor: '#3F839D'}} className="rounded border border-t-4 my-4 px-6 py-4 ">
            <div style={{display: "flex", justifyContent: 'space-between'}}>
                <div className="">
                    <img style={{ display: "inline-block"}} className="rounded-full mr-3 mb-1" src={tweet.profile_image_url} />
                    <div style={{display: "inline-block"}} className="mt-1" >
                        <span className="m-0 p-0">@{tweet.username}</span>
                    </div>

                </div>
                <div>
                    { tweet.location && 
                        <div>
                            <img src={location_pin} style={{display: 'inline-block', height: '20px', width: '20px'}}/>
                            {tweet.location}
                        </div>
                    }    
                </div>
            </div>
            
            <p className="font-mono mt-2">{tweet.text}</p>

            <div className='mt-2' style={{display: 'flex', justifyContent: 'flex-end'}}>
                <img src={clock} className='mr-2 mt-1' style={{height: '15px', width: '15px'}}/>
                <span className='italic'>{tweetCreatedAt}</span>
            </div>
        </div>
    )
}

export default TweetCard;