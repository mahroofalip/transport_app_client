import React, { useState } from "react";
import { TextField, DialogActions, Button, DialogContent } from "@mui/material";
import { useDispatch } from "react-redux";
import { addWalletAction } from "../../actions/AdminActions";
const danger = { mr: "5px", border: "solid 1px red" };

const CustomerAddWalletForm = ({ 
    handleClose,
    id
}) => {
    const dispatch = useDispatch()
    const [amount, setAmount] = useState("");
    const [discription, setDiscription] = useState("");
    const [amountErr, setAmountErr] = useState(false);
    const [discriptionErr, setDiscriptionErr] = useState(false);

    const handleSubmit =() => {
        if(!amount){
            setAmountErr(true)
        }
        if(!discription){
            setDiscriptionErr(true)
        }
        if(amount && discription){
            dispatch(addWalletAction(id, amount, discription))
            handleClose()
        }
    }
  
  return (
    <>
      <DialogContent>
        {/* contant here */}
        <div
          style={{
            padding: "20px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <TextField
              onChange={(e) => setAmount(e.target.value)}
            name="amount"
              value={amount}
              sx={amountErr ? danger : { mr: "5px" }}
            label="Amount"
            type="number"
            id="fullWidth"
          />

          <TextField
              onChange={(e) => { setDiscription(e.target.value)}}
              sx={discriptionErr ? danger : { mr: "5px" }}
            name="description"
              value={discription}
            fullWidth
            label="Discription"
            id="fullWidth"
          />
        </div>
      </DialogContent>

      <DialogActions>
        <Button onClick={handleSubmit}>Submit</Button>
        <Button onClick={() => handleClose()}>cancel</Button>
      </DialogActions>
    </>
  );
};

export default CustomerAddWalletForm;
