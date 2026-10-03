import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

function PageNextButton({ to, label }) {
  return (
    <div className="bottom-page-nav">
      <Link to={to} className="primary-button next-page-button">
        {label}
        <ArrowRight size={18} />
      </Link>
    </div>
  );
}

export default PageNextButton;
