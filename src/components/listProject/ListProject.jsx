import HeaderListProject from "./HeaderListProject";
import MainListProject from "./MainListProject";
import FooterListProject from "./FooterListProject";
import PropTypes from "prop-types";

function ListProject({formData, avatar, userPhoto}) {
  return (
    <div>
      <HeaderListProject />
      <MainListProject
        formData={formData}
        avatar={avatar}
        userPhoto={userPhoto}
      />
      <FooterListProject />
    </div>
  );
}

ListProject.propTypes = {
  formData: PropTypes.object.isRequired,
  avatar: PropTypes.object.isRequired,
  userPhoto: PropTypes.object.isRequired,
};

export default ListProject;
