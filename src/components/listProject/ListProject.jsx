import HeaderListProyect from "../listProject/HeaderListProyect";
import MainListProyect from "./MainListProyect";
import FooterListProyect from "./FooterListProyect";
import PropTypes from 'prop-types';


function ListProject() {
  return (
    <div>
        <HeaderListProyect />
        <MainListProyect formData={formData} avatar={avatar} userPhoto={userPhoto} />
        <FooterListProyect />
    </div>
  )
}

ListProject.prototype = {
  formData: PropTypes.object.isRequired,
  avatar: PropTypes.object.isRequired,
  userPhoto : PropTypes.object.isRequired,
};

export default ListProject;