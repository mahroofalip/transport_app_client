import { Box } from "@mui/material";
import ReactLoading from "react-loading";
const Loader = () => (
    <Box component='div'  sx={{height:"50vh",display:"grid",justifyContent:"center",alignItems:"center"}}>
      <ReactLoading type="spokes" color="#e75c05" />
    </Box>
  );
  
  export default Loader;
  