import React, { useState } from "react";
import {
  Box,
  Button,
  DialogActions,
  DialogContent,
  TextareaAutosize,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { addDriverCommentAction } from "../../actions/CommonActions";

let commentShow = (cmnt) => {
  let comment = "";
  let status = "";

  if (cmnt && cmnt.substring(0, 5) === "Block" && cmnt.length > 5) {
    status = "Block";
    comment = cmnt.slice(9);
  } else if (cmnt && cmnt.substring(0, 7) === "Unblock" && cmnt.length > 7) {
    status = "Unblock";
    comment = cmnt.slice(9);
  } else if (cmnt) {
    comment = cmnt;
  }

  switch (status) {
    case "Block":
      return (
        <>
          {" "}
          <span style={{ backgroundColor: "red", color: "white" }}>
            {status}
          </span>
          {" :"}
          <span> {comment} </span>{" "}
        </>
      );
    case "Unblock":
      return (
        <>
          {" "}
          <span style={{ backgroundColor: "green", color: "white" }}>
            {status}
          </span>{" "}
          <span> {comment} </span>{" "}
        </>
      );
    default:
      return <span>{comment}</span>;
  }
};

const DriverAddCommentForm = ({ handleClose, id, driverComments }) => {
  const dispatch = useDispatch();
  const [commentErr, setCommentErr] = useState(false);
  const [comment, setComment] = useState();

  const handleSubmit = () => {
    if (comment) {
      dispatch(addDriverCommentAction(id, comment, "admin"));
      handleClose();
    } else {
      setCommentErr(true);
    }
  };
  return (
    <>
      <DialogContent>
        {driverComments.map((note) => {
          return (
            <div style={{ border: "solid 1px gray", margin: "10px" }} key={note._id}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "10px",
                  minHeight: "40px",

                  color: "#fff",
                  backgroundColor: "#e75c05",
                }}
              >
                <span>{note.admin}</span> <span>{note.dateAndTime} </span>{" "}
              </div>
              <div
                style={{
                  alignItems: "center",
                  display: "flex",
                  padding: "10px",
                  margin: "10px",
                  minHeight: "30px",
                }}
              >
                {commentShow(note.comment)}
              </div>
            </div>
          );
        })}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            "& > :not(style)": { m: 2 },
          }}
        >
          <TextareaAutosize
            onChange={(e) => {
              setComment(e.target.value);
            }}
            value={comment}
            name="customer"
            aria-label="minimum height"
            minRows={4}
            placeholder="Add Your Remarks"
            style={
              commentErr ? { width: 1200, borderColor: "red" } : { width: 1200 }
            }
          />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleSubmit}>Submit</Button>
        <Button onClick={() => handleClose()}>cancel</Button>
      </DialogActions>
    </>
  );
};

export default DriverAddCommentForm;
