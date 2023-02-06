import styled from "@emotion/styled";
import { Button, TextField } from "@mui/material"


export const TextFields = styled(TextField)({
    '& label.Mui-focused': {
        color: 'black',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: 'Black',
            borderRadius: "10px",
            margin: '0px 4px'
        },
        '&:hover fieldset': {
            borderImage: 'linear-gradient(to right, #F14722, #239B99) 1',
        },
        '&.Mui-focused fieldset ': {
            borderColor: 'black',
        }, '& label.Mui-focused': {
            color: 'black',
        },
    },
});

 // modal style 
export const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'white',
    boxShadow: 24,
    p: 4,
};

// file upload button
export const Buttons = styled(Button)({
    fontSize: 16,
    borderColor: 'black',
    borderRadius: '10px',
    color: 'black',
    padding: '10px',
    '&:hover': {
        borderImage: 'linear-gradient(to right, #F14722, #239B99) 1',
    },
    '&:active': {
        boxShadow: 'none',
    },
});
