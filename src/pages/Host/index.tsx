import XyButton from "/src/components/xy-button"
import XyNav from "/src/components/xy-nav"
import XyImg from "/src/components/xy-img"
import './index.css'
import _img from '../../assets/sisyphus.png'

function Host(){
    return <div>
        <div className="host-address">0x9D...4825</div>
    <XyButton className='host-button'>My Tracker</XyButton>
    <XyImg src={_img} className="host-img"/>
    <div className="host-yellow">
        <div>Hi, Jerry!</div>
        <div>I fell in love with you at first sight! ❤️❤️❤️</div>
    </div>
    <XyNav />
    </div>
}

export default Host