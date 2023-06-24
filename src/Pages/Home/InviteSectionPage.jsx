import '../../she.css'
import Firstimage from '../../assets/images/1stimage.jpg'
import bridge from '../../assets/images/bridge.jpg'
export const InviteSectionPage = () => {

    return (
        <div className=" pt-4" id="h-s1">
            <div id="h-s1-0">
                <div className="entitled-w">
                    <div className="entitled" style={{ transform: 'translate3d(0px, 0%, 0px) rotateX(0deg)' }} >THE DATE</div>
                </div>
                <div className="line" style={{ transform: 'scaleX(1)' }} ></div>
                <h2 className="title-1"><span style={{ transform: 'translate3d(0px, 0%, 0px) rotateX(0deg)' }} >Thursday</span> <span
                    style={{ transform: 'translate3d(0px, 0%, 0px) rotateX(0deg)' }} >December 21</span> <span
                        style={{ transform: 'translate3d(0px, 0%, 0px) rotateX(0deg)' }} >2023</span></h2>
            </div>
            <div id="h-s1-1">
                <div className="entitled-w">
                    <div className="entitled" style={{ transform: 'translate3d(0px, 0%, 0px) rotateX(0deg)' }} >THE INVITE</div>
                </div>
                <div className="line" style={{ transform: 'scaleX(1)' }} ></div>
                <p className="txt-1" style={{ transform: 'translate3d(0px, 0%, 0px); opacity: 1' }} >Please join us as we exchange our sacred vows and solemnly pronounce our commitment by saying 'I do'.</p><a className="txt-0 _tb"
                    href="" style={{ transform: 'translate3d(0px, 0%, 0px); opacity: 1' }} >RSVP<span
                        className="under"></span></a>
            </div>
            <ul>
                <li id="h-s1-no-0" className="h-s1-no" style={{ transform: 'translate3d(0px, -44.0352px, 0px)' }} >12</li>
                <img  id="h-s1-no-0" className="h-s1-no" s src={bridge} style={{ width: '55%', top: '68.44444vw', zIndex: '999', opacity: '10', left:'38.38889vw', borderRadius: '30px' }} /> 
                <li id="h-s1-no-1" className="h-s1-no" style={{ transform: 'translate3d(0px, 14.6784px, 0px)' }} >21</li>
                <img id="h-s1-no-0" className="h-s1-no" s src={Firstimage} style={{ width: '25%', top: '40.44444vw', zIndex: '999', opacity: '10',borderRadius: '30px' }} />

                <li id="h-s1-no-2" className="h-s1-no" style={{ transform: 'translate3d(0px, 88.0704px, 0px)' }} >23</li>
            </ul>
            <ul id="h-s1-caption-w">
                <li id="h-s1-caption-0" className="txt-2" style={{ transform: 'transform: translate3d(0px, -73.392px, 0px)' }} ><span>Jan 22,
                    2023</span><span>She said he was crazy.</span></li>
                <li id="h-s1-caption-1" className="txt-2" style={{ transform: 'transform: translate3d(0px, 29.3568px, 0px)' }} ><span>Tokyo Bridge
                    </span><span>He asked her to marry him.</span></li>
                <li id="h-s1-caption-2" className="txt-2" style={{ transform: 'translate3d(0px, 58.7136px, 0px)' }} >
                    <span>5:50PM</span><span>She said yes.</span></li>
                <li id="h-s1-caption-3" className="txt-2"><span>Dec 21, 2023</span><span>We will get married.</span></li>
            </ul>
        </div>
    )
}