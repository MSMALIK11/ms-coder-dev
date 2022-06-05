import React from 'react';
import './dropdown.scss';
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
const DropDownmenu = () => {
  return (
    <div class="dropdown shadow">
    
      <span>
        <i className="bi bi-trash me-3"></i>delete{" "}
      </span>
      <span>
        <i class="bi bi-pencil-square me-3"></i>Edit{" "}
      </span>
    </div>
  );
}

export default DropDownmenu