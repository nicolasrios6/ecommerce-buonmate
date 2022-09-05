import Info1 from "../components/Info1/Info1"
import Slider from "../components/Slider/Slider"
import Info2 from "../components/Info2/Info2"
import Blocks from "../components/Blocks/Blocks"
import FProducts from "../components/FeaturedProducts/FeaturedProducts"

const Home = () => {
    return (
        <>
            <Info1 />
            <Slider />
            <Info2 />
            <Blocks />
            <FProducts />
            {/* <Item /> */}
        </>
    )
}

export default Home