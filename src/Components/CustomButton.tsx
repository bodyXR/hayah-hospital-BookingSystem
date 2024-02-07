import { Button } from "@mui/material"

interface CustomButtonProps {
    text : string;
    onSubmit? : any;
    color? : string;
}

const CustomButton = ({text , onSubmit,color} : CustomButtonProps) => {
  return (
    <Button
        variant="contained"
        onClick={onSubmit}
        sx={{
            backgroundColor: color ? `${color}.main` : "secondary.main",
            "&:hover": { backgroundColor:  color ? `${color}.dark` : "secondary.dark" },
            width: "100%",
            borderRadius: "50px",
            mt: "10px",
        }}
        >
        {text}
    </Button>
  )
}

export default CustomButton