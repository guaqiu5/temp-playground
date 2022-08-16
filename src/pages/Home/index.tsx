import * as React from 'react'
import './index.css'
import emoji from '../../assets/emoji.png'
function Home(){
    const [which,setWhich] = React.useState(0)
    const skip = () => setWhich(x=>!x)
    const start = () => console.log('start')
    return <div className="wrapper">
         <img src={emoji} alt="" />
         <div className='skip' onClick={skip}>Skip</div>
        {which==0? (<>
        {/* <div className='skip' onClick={skip}>Skip</div> */}
            <div className='outline'>
            Sisyphus Protocol
            ——“Tracker 3”
            </div>
        <div className='desc'>
            La lutte elle-même vers les sommets suffit à remplir un cœur d'homme. Il faut imaginer Sisyphe heureux.
        </div>
        <div className='start' onClick={start}>
            <div className='start-text'>Let's Start!</div>
            <div className='start-icon'>➡️</div>
        </div>
            </> ):
            (<div>
                <div className='connect'>Connect Wallet</div>
            </div>)}
    </div>
}

export default Home