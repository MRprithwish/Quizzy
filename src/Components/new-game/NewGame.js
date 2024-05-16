import './NewGame.css'
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { Link } from "react-router-dom";

const NewGame = ({reset}) =>
<><div>
<br/>
    <div >
        <button onClick={reset} className='buttond'>Reset</button>
    </div>
    <Link to="/Fgame"><p className='plinkd'><b><MdOutlineArrowBackIosNew />Back</b></p></Link>
    </div>
</>
export default NewGame;