import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const ProgramsDetails = () => {
  const { progId } = useParams();
  return (
    <section>
      <div className="container notfound__container">
        <h2>Programs Details About {progId}</h2>
        <Link to="/" className="btn">
          Go Back Home
        </Link>
      </div>
    </section>
  );
};

export default ProgramsDetails;
