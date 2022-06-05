import React from 'react'
import './styles/stayConnected/stayconnected.scss'
const StayConnected = () => {
    return (
      <div className="connected-wraper">
        <div className="stay-connected">
          <h4>stay connected</h4>
        </div>

        <div className="social-info mt-5">
          <ul className="icon">
            <li className="social-icon">
              <i class="bi bi-facebook "></i>
            </li>

            <li className="social-icon ">
              <i class="bi bi-instagram"></i>
            </li>
            <li className="social-icon ">
              <i class="bi bi-linkedin"></i>
            </li>
          </ul>
        </div>
       
      </div>
    );
}

export default StayConnected
