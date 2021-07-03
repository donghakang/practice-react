import { FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

export default function Footer() {
  const m_size = 24;
  const m_style = { color: "#dddddd" };
  return (
    <div>
      <div>
        <a href="https://www.github.com/donghakang">
          <div>
            <FaGithub size={m_size} style={m_style} />
          </div>
        </a>
        <a href="https://www.instagram.com/donghakang">
          <div>
            <FaInstagram size={m_size} style={m_style} />
          </div>
        </a>
        <a href="https://www.facebook.com/dkang0602">
          <div>
            <FaFacebook size={m_size} style={m_style} />
          </div>
        </a>
        <a href="mailto:dkang0602@gmail.com">
          <div>
            <FiMail size={m_size} style={m_style} />
          </div>
        </a>
      </div>
    </div>
  );
}
