import React from 'react'
import { Link} from 'react-router-dom'
import './cat.scss';
import { useSearchParams } from "react-router-dom";
const Category = () => {
    const catName=[
        {
id:5,
catName:'All',
slug:'All'
        },
        {
            id:1,
            catName:'Web Design',
            slug:"web-design"
        },
        {
            id:2,
            catName:'technology',
            slug:"technology"
        },
        {
            id:3,
            catName:'life style',
            slug:"life-style"
        },
        {
            id:4,
            catName:'javascript',
            slug:"javascript"
        },
    ]
    let [searchParams, setSearchParams] = useSearchParams();
    const query=searchParams.get("category");

   
  return (
    <div className="category-wraper shadow">
      {catName &&
        catName.map((cat, i) => (
          <Link
            key={i}
              className={`cat-link ${query===cat.slug ?'active':'all'}`}
          
            style={{ textDecoration: "none", color: "inherit" }}
            to={`/?category=${cat.slug}`}
          >
            <span>{cat.catName}</span>
          </Link>
        ))}
    </div>
  );
}

export default Category