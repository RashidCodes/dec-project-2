import Content from "./content";
import Deliverables from "./deliverables";

const Introduction = () => {
    return (
        <div>
            <h1 style={{ color: '#3F839D' }} className='font-bold mb-10 font-mono underline text-5xl'>DEC Capstone Project</h1>
            <Content />
            <Deliverables />
            <h2 style={{ color: '#3F839D' }} className='font-bold mb-10 font-mono underline text-4xl'>Introduction</h2>
            <p>
                Soccer is a game played between two teams of eleven players with a ball. It is the most popular game in the world and in many countries, it's known as football. It isn't 
                known exactly when the sport was created however the earliest versions of the game can be traced back to 
                about 3,000 years ago. Soccer is played by 250 million players in over 200 countries, making it the world's most popular sport
            </p>
            <br/>
            <p>
                I'm a very big fan of the game. I'm also very passionate about data engineering and everything data. So, I decided to 
                use the data engineering skills/knowledge gained from the course to build a very simple <span className="font-bold">streaming</span> application that showcases 
                the twitter activity of other fans. The dashboard below shows the twitter activity.
            </p>
        </div>
    )
}

export default Introduction;