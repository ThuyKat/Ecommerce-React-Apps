import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Typography from '@mui/joy/Typography';
import { useState } from "react";
import {  Box, Button, Modal, Input } from "@mui/material";





export default function CartItem({ title, price, img, id, quantity, handleChange, handleDelete }: any) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [itemQuantity,setItemQuantity] = useState(quantity);
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };
    const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
        const newValue = event.target.value;
        // if empty string is entered, call handleDelete
        if(newValue === ''){
            setItemQuantity(newValue);
            return;
        }
        const numericValue = Number(newValue);
        if(numericValue ===0){
            setItemQuantity(1);
        }

        if( !isNaN(numericValue) && numericValue >= 1 ){
            setItemQuantity(numericValue);   
        }
         //update cart
        handleChange(numericValue);
      
    }
    return (
        <>
            <Card orientation="horizontal" variant="outlined">
                <CardOverflow>
                    <AspectRatio ratio="1" sx={{ width: 90 }}>
                        <img
                            src={img}
                            srcSet={img}
                            loading="lazy"
                            alt=""
                        />
                    </AspectRatio>
                </CardOverflow>
                <CardContent>
                    <Typography textColor="success.plainColor" sx={{ fontWeight: 'md' }}>
                        {title}
                    </Typography>
                    <Typography level="body-sm">{price}</Typography>
                </CardContent>
                <Input type="number" value={itemQuantity} onChange={(event:React.ChangeEvent<HTMLInputElement>) =>handleQuantityChange(event)} />
                <CardOverflow
                    variant="soft"
                    color="primary"
                    sx={{
                        px: 0.2,
                        writingMode: 'vertical-rl',
                        justifyContent: 'center',
                        fontSize: 'xs',
                        fontWeight: 'xl',
                        letterSpacing: '1px',
                        textTransform: 'uppercase',
                        borderLeft: '1px solid',
                        borderColor: 'divider',
                    }}
                >
                    <Button onClick={handleOpen}>Remove</Button>
                </CardOverflow>
            </Card>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography >
                        Are you sure to delete the item <b>{title}</b> from the cart?
                    </Typography>
                    <Button color="error" onClick={() => handleDelete(id)} >
                        Yes
                    </Button>
                    <Button color="primary" onClick={handleClose}>
                        No
                    </Button>
                </Box>
            </Modal>
        </>
    );
}