import XyButton from "/src/components/xy-button"
import XyImg from "/src/components/xy-img"
import XyCard from "/src/components/xy-card"
import XyNav from "/src/components/xy-nav"
import './index.css'
import _img from '../../assets/sisyphus.png'

function Find(){
    return <div>
    <div className="find-address">0x9D...4825</div>
    <XyImg src={_img} className="find-img"/>
    <XyButton className='find-button'>Create Protocol</XyButton>
    <div className="find-list">
    <XyCard />
    <div style={{height:'0.15rem'}}></div>
    <XyCard />
    <div style={{height:'0.15rem'}}></div>
    <XyCard />
    </div>
    
    <XyNav />
</div>
}

export default Find