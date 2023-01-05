import React, { useState } from 'react';
import NavTabs from './Navtab';
import Home from './pages/Home';
import About from './pages/About';
import WorkHistory from './pages/WorkHistory';
import Contact from './pages/Contact';
import ErrorPage from './pages/ErrorPage'

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'WorkHistory') {
      return <WorkHistory />;
    }
    if (currentPage === 'Contact')
    return <Contact />;
    
    return <ErrorPage />
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
    </div>
  );
}
