import { NavLink } from "react-router-dom";
import { Send, DocumentScanner } from "@mui/icons-material";

import resume from "../../assets/resume-v3.pdf";

const ContactButtons = () => {
  return (
    <div className="flex flex-wrap">
      <NavLink to={"../contact"} className="primary-btn m-5">
        <Send />
        <span className="px-2">Contact Me</span>
      </NavLink>

      <a href={resume} download={"NICK_RESUME"} className="primary-btn m-5">
        <DocumentScanner />
        <span className="px-2">My CV</span>
      </a>
    </div>
  );
};

export default ContactButtons;
