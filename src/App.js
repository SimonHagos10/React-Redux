import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import './App.css';
import CampsitesDirectoryPage from './pages/CampsitesDirectoryPage';
import Header from './components/Header';
import Footer from './components/Footer';




export default function App() {
    return (
        <div className='App'>
            <Header />
            <Routes>
                <Route path = '/' element = {<HomePage />} />
                <Route path = 'contact' element = {<ContactPage/>} />
                <Route path = 'directory' element = {<CampsitesDirectoryPage/>} />
            </Routes>
            <Footer />
        </div>
    );
}

