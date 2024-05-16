import { useState } from 'react'
import Card from './Card'
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { Link } from "react-router-dom";



function Cards(){
    const [items, setItems] = useState([
        { id: 1, img: '/img/panda.jpg', stat: "" },
        { id: 1, img: '/img/panda.jpg', stat: "" },
        { id: 2, img: '/img/bear.jpg', stat: "" },
        { id: 2, img: '/img/bear.jpg', stat: "" },
        { id: 3, img: '/img/cat.jpg', stat: "" },
        { id: 3, img: '/img/cat.jpg', stat: "" },
        { id: 4, img: '/img/dog.jpg', stat: "" },
        { id: 4, img: '/img/dog.jpg', stat: "" },
        { id: 5, img: '/img/deer.jpg', stat: "" },
        { id: 5, img: '/img/deer.jpg', stat: "" },
        { id: 6, img: '/img/giraffe.jpg', stat: "" },
        { id: 6, img: '/img/giraffe.jpg', stat: "" },
        { id: 7, img: '/img/tortoise.jpg', stat: "" },
        { id: 7, img: '/img/tortoise.jpg', stat: "" },
        { id: 8, img: '/img/whale.jpg', stat: "" },
        { id: 8, img: '/img/whale.jpg', stat: "" }
    ].sort(() => Math.random() - 0.5))

    const [prev, setPrev] = useState(-1)

    function check(current){
        if(items[current].id === items[prev].id){
            items[current].stat = "correct"
            items[prev].stat = "correct"
            setItems([...items])
            setPrev(-1)
        }else{
            items[current].stat = "wrong"
            items[prev].stat = "wrong"
            setItems([...items])
            setTimeout(() => {
                items[current].stat = ""
                items[prev].stat = ""
                setItems([...items])
                setPrev(-1)
            }, 1000)
        }
    }

    function handleClick(id){
        if(prev === -1){
            items[id].stat = "active"
            setItems([...items])
            setPrev(id)
        }else{
            check(id)
        }
    }

    return (
        <div className="containerd">
            { items.map((item, index) => (
                <Card key={index} item={item} id={index} handleClick={handleClick} />
            )) }
            <Link to="/Fgame"><p className='plinkd1'><b><MdOutlineArrowBackIosNew />Back</b></p></Link>
        </div>
    )
}

export default Cards