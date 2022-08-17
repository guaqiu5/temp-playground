import * as React from 'react'
import './index.css'
import _emoji from '../../assets/illustration.svg'
import XyButton from '/src/components/xy-button'
import XyNav from '/src/components/xy-nav'
function Home(){
    const [which,setWhich] = React.useState(0)
    const skip = () => setWhich(x=>!x)
    const start = () => console.log('start')
    const connect = () => console.log('connect')
    return <div >
         <img src={_emoji} alt="" />
         <div className='skip' onClick={skip}>Skip</div>  
            <div className='outline'>
            Sisyphus Protocol
            ——“Tracker 3”
            </div>
        <div className='desc'>
            La lutte elle-même vers les sommets suffit à remplir un cœur d'homme. Il faut imaginer Sisyphe heureux.
        </div>
        {/* <div className='start' onClick={start}>
            <div className='start-text'>Let's Start!</div>
            <div className='start-icon'>➡️</div>
        </div> */}
                <XyButton className='connect' onClick={connect}>Connect Wallet</XyButton>
                <XyNav />
    </div>
}

export default Home