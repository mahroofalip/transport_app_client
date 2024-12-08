import React, { useState } from "react";
import {
  Box,
  Button,
  DialogActions,
  DialogContent,
  TextareaAutosize,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { unblockCustomerAction } from "../../actions/AdminActions";

const CustomerUnBlockForm = ({ handleClose, id }) => {
  const dispatch = useDispatch();
  const [commentErr, setCommentErr] = useState(false);
  const [comment, setComment] = useState();

  const handleSubmit = () => {
    if (comment) {
      dispatch(unblockCustomerAction(id, comment));
      handleClose();
    } else {
      setCommentErr(true);
    }
  };
  return (
    <>
      <DialogContent>
        <h1>Unblock</h1>
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

export default CustomerUnBlockForm;
