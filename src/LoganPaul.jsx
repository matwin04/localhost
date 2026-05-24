import paul from './assets/videos/paul.mov'
import hq720 from './assets/images/hq720.jpg'
export function LoganPaul() {
    return (
        <>
            <video src={paul} controls />
            <img src={hq720} alt={"alt"}/>
        </>
    )
}