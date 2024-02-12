import React from 'react';
import PropTypes from 'prop-types';
import Footer from '../Footer.jsx';
import Preview from '../Preview.jsx';
import ButtonCreateCard from '../ButtonCreateCard.jsx';
import '../../scss/core/Variables.scss';
import '../../scss/layout/Header.scss';



function ListProject({ formData }) {
  return (
    <div className="conta">
      <ButtonCreateCard />
      <div className="main">
        <Preview formData={formData} />
        <Preview formData={formData} />
      </div>
    </div>
  );
}
ListProject.propTypes = {
  formData: PropTypes.object.isRequired,
};

export default ListProject;
