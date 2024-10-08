import './Home.css';
import MenuScreen from './MenuScreen';

function Home() {
    function handleHeaderClick() {
        // Smoothly scrolls to the next section (MenuScreen)
        window.scrollTo({
            top: window.innerHeight, // Scroll to the height of the viewport
            behavior: 'smooth'
        });
    }

    return (
        <div className="home-wrapper">
            <div className="home-container">
                <button className="home-header" onClick={handleHeaderClick}>
                    <h1>P & Q <br /> ALGORITHM <br /> VISUALIZER</h1>
                </button>
            </div>
        </div>
    );
}

export default Home;

