import "./Welcome.css";

export default function Welcome() {
    return (
        <>
            <div className="containerWelcome">
                <h1 id="welcome">Welcome!</h1>
                <p id="welcomeMessage1">Greetings to all book enthusiasts!</p>
                <p id="welcomeMessage2">If you're in search of an exceptional fiction read, you're in luck.</p>
                <p id="welcomeMessage3">Explore our compilation showcasing the top 15 bestselling fiction titles according to the New York Times.</p>
                <p id="welcomeMessage4">Discover your next captivating read and savor the experience!</p>
            </div>
        </>
    );
}