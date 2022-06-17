import './App.css';
import CampsitesDirectoryPage from './pages/CampsitesDirectoryPage';
import Header from './components/Header';
import Footer from './components/Footer';




export default function App() {
    return (
        <div className='App'>
            <Header />
            <CampsitesDirectoryPage />
            <Footer />
        </div>
    );
}

