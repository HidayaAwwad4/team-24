import ExperienceList from "./components/experience/ExperienceList";
import Gallery from "./components/gallery/Gallery";
import Navbar24 from "./components/navbar24/Navbar24"
import Profile from "./components/profile/Profile";
import ShareYourThoughts from "./components/sharePost24/ShareYourThoughts"
import Aboutme from './components/about-me/Aboutme';
import Friends from "./components/friends-list/Friendslist";
const AllComponent = () =>{
    return(
        <div>
        <header className="navbar-light header-static bg-mode">
        <Navbar24/>
        </header>
        <main>
    <div className="container">
        <div className="row g-4">
        <div className="col-lg-8 vstack gap-4">
                    <Profile/>
                    <ShareYourThoughts/>
                    </div>
    
            <div className="col-lg-4">
            <div className="row g-4">
                <Aboutme/>
                <ExperienceList/>
                <Gallery/>
                <Friends/>
            </div>
            </div>


        </div>
    </div>
    </main>
    </div>
    )
}

export default AllComponent;