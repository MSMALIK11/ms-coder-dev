import React from 'react'
import recentimg from '../images/p-1.jpeg';
import './recentpost.scss';
const RecentPost = () => {
    return (
        <div>
            <div className="r-post p-3">
                <h1>Recent Post </h1>
            <hr />
<div className="r-box d-flex">
    <img src={recentimg} alt="" className="me-5" />

    <div className="r-heading ">
        <h3>4 types of research methods all designers</h3>

<p>dec 12 2021 </p>
    </div>
    
</div>
<div className="r-box d-flex mt-4">
    <img src={recentimg} alt="" className="me-5" />

    <div className="r-heading ">
        <h3>4 types of research methods all designers</h3>

<p>dec 12 2021 </p>
    </div>
    
</div>
<div className="r-box d-flex mt-4">
    <img src={recentimg} alt="" className="me-5" />

    <div className="r-heading ">
        <h3>4 types of research methods all designers</h3>

<p>dec 12 2021 </p>
    </div>
    
</div>



            </div>
            
        </div>
    )
}

export default RecentPost
