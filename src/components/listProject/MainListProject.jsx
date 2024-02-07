import "../scss/core/Variables.scss";
import "../scss/layout/Main.scss";
import PropTypes from "prop-types";

import Preview from "./PreviewListProject.jsx";

function MainListProject({ formData, avatar, userPhoto }) {
  console.log("Avatar in Main:", avatar);
  return (
    <main className="main">
      <Preview formData={formData} avatar={avatar} userPhoto={userPhoto} />
      <Preview formData={formData} avatar={avatar} userPhoto={userPhoto} />
    </main>
  );
}

MainListProject.propTypes = {
  formData: PropTypes.object.isRequired,
  avatar: PropTypes.object.isRequired,
  userPhoto: PropTypes.object.isRequired,
};

export default MainListProject;
