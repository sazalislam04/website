import { useRouter } from "next/router";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";

export default function JobCard({ data }) {
  const { skill, skillLogo, slug } = data.fields;
  const router = useRouter();
  const ClickHandler = () => {
    router.push(`/jobs/${slug}`);
  };

  return (
    <div
      className="technology_colam"
      onClick={ClickHandler}
      lg={4}
      md={6}
      sm={12}
    >
      <img
        className="hire_tech_img"
        src={"https:" + skillLogo.fields.file.url}
        alt={skill}
      />
      <p className="technology_text">{skill}</p>
      <IoIosArrowForward className="hire_arrow_icon ms-2" />
      {/* <p className="category_text">{category.fields.categoryName}</p> */}
    </div>
  );
}
{
  /* <img src={'https:' + thumbnail.fields.file.url} width="100%" height="200px" alt='' /> */
}
