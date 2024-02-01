import { NavLink } from "react-router-dom";
import { Send, DocumentScanner } from "@mui/icons-material";

import resume from "../../assets/resume-v3.pdf";

const ContactButtons = () => {
  return (
    <>
      <NavLink to={"../contact"} className="primary-btn mx-5">
        <Send />
        <span className="px-2">Contact Me</span>
      </NavLink>

      <a href={resume} download={"NICK_RESUME"} className="primary-btn mx-5">
        <DocumentScanner />
        <span className="px-2">My CV</span>
      </a>
    </>
  );
};

export default ContactButtons;
