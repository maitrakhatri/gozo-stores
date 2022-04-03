import "./css/homepage.css"
import axios from "axios"
import { useEffect, useState } from "react";
import { useFilter } from "../context/filter-context";
import { Link } from "react-router-dom";
import { Thumbnail, Navbar, Sidekick } from "../components";

export function Homepage() {

    const [categories, setCategories] = useState([])
    const {dispatch} = useFilter()

    const getCategories = async () => {
        const res = await axios.get('/api/categories');
        setCategories(res.data.categories)
    }

    useEffect(() => {
        dispatch({type: "CLEAR"});
        getCategories();
    },[dispatch])

    useEffect(() => {
        document.title = "Home | gozo Stores";
    },[])

    return (
        <div className="homepage">

            <Navbar />

            <main>
                <h5 className="text-center">You're one stop solution to Premium Superhero Posters</h5>
                <div className="cat-catlog">

                    <Link to="/products">

                        {categories.map((item) => {
                            return (
                                <Thumbnail 
                                    name={item.name} 
                                    src={item.src} 
                                    onClick={() => dispatch({type: "ADD-CAT", payload: item.categoryName, status: true})} />)
                        })}
                    </Link>
                </div>

                <Link to="/products">

                    <div className="hero">
                        <img className="hero-image img-res" src="../../assets/images/thebatman-landscape.png" alt="hero-product" />
                    </div>
                </Link>

                <div className="sidekick">

                    <Link to="/products">
                        <Sidekick src="../../assets/images/thebatman-square.jpg" title="The Batman Solo Posters" subtitle="Hurry !! only 10 left" />
                    </Link>

                    <Link to="/products">
                        <Sidekick src="../../assets/images/moonknight.jpg" title="Marvel's Moonknight Poster" subtitle="Super-bowl Poster" />
                    </Link>
                </div>
                
            </main>
        </div>
    )
}
