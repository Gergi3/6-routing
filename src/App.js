import { AppRouter } from "./AppRouter";
import { Navigation } from "./components/shared/nav/Navigation";

function App() {
    return (
        <div>
            <Navigation />
            
            <div className="App">
                <h1>Star Wars 🎬</h1>

                <AppRouter />
            </div>
        </div>
    );
}

export default App;
