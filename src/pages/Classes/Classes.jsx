import React, { useEffect, useState } from "react";
import ClassCard from "../../components/ClassCard/ClassCard";
import useAllClasses from "../../hooks/useAllClasses";
import { Helmet } from "react-helmet-async";

const Classes = () => {
  const [classes] = useAllClasses();
  return (
    <div>
      <Helmet>
        <title>Golden Peaks | All Classes</title>
      </Helmet>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-container">
        {classes?.map((singleClass) => (
          <ClassCard key={singleClass._id} singleClass={singleClass} />
        ))}
      </div>
    </div>
  );
};

export default Classes;
