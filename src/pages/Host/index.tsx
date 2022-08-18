import XyButton from "/src/components/xy-button"
import XyNav from "/src/components/xy-nav"
import XyImg from "/src/components/xy-img"
import XyCard from "/src/components/xy-card"
import './index.css'
import _img from '../../assets/sisyphus.png'

function Host(){
    return <div>
        <div className="host-address">0x9D...4825</div>
    <XyButton className='host-button'>My Tracker</XyButton>
    <XyImg src={_img} className="host-img"/>
    <div className="host-yellow">
        <div className="yellow-title">Hi, Jerry!</div>
        <div className="yellow-desc">I fell in love with you at first sight! ❤️❤️❤️</div>
    </div>
    <XyCard className="white-1"/>
    <XyNav />
    </div>
}

export default Host