import React from 'react';
import Header from '../Header.jsx';

import Footer from '../Footer.jsx';

import PropTypes from 'prop-types';
import Preview from '../Preview.jsx';
import Main from '../Main.jsx';


function ListProject({formData}) {
  return (
    <div className="container">
    <Header />
    <div className='main'>
    <Preview formData={formData} />
    <Preview formData={formData} />
    </div>
   
    <Footer />
  </div>
  )
}
ListProject.propTypes = {
    formData: PropTypes.object.isRequired,    
  };

export default ListProject;