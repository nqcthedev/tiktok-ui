import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { DefautLayout } from '~/components/Layout';
import { HeaderOnly } from '~/components/Layout';
import { publicRoutes } from '~/routes';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Layout = route.layout || DefautLayout
                        // Nếu route.layout === undefined thì lấy DefautLayout
                        const Page = route.component;
                        return <Route key={index} path={route.path} element={<Layout>
                            <Page />
                        </Layout>} />;
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
