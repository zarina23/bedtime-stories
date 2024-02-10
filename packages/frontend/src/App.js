import {
    BrowserRouter,
    Route,
    Routes
} from 'react-router-dom';

import HomeView from './views/HomeView';

const App = () => (
    <BrowserRouter>
        <Routes>
            <Route
                element={<HomeView />}
                path={'/'}
            />
        </Routes>
    </BrowserRouter>
);

export default App;
