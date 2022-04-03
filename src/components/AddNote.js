import React from "react";
import "./AddNote.css";
import "./btn.css";
import { PlusIcon } from "@heroicons/react/outline";
import Tooltip from "@mui/material/Tooltip";

const AddNote = ({ onClick }) => {
  return (
    <div className="add-note">
      <Tooltip
        title="Add Note"
        componentsProps={{
          tooltip: {
            sx: {
              color: "#fff",
              backgroundColor: "rgba(109, 115, 154, 0.8)",
              fontSize: "1rem",
              fontFamily: "inherit",
              borderRadius: "100px",
            },
          },
        }}>
        <PlusIcon onClick={onClick} className="h-5 w-5 icon icon-plus" />
      </Tooltip>
    </div>
  );
};

export default AddNote;
