import Footer from "../../components/footer/Footer"
import InputAndBtn from "../../components/InputAndBtn"
import Questions from "../../components/Questions"
import Reasons from "../../components/Reasons"
import Trending from "../../components/Trending"
import HeroSection from "./HeroSection"

function Home() {
    return (
        <div>
            <HeroSection/>
            <Trending/>
            <Reasons/>
            <Questions/>
            <InputAndBtn/>
            <Footer/>
        </div>
    )
}

export default Home
