import React from "react";
import "./addproduct.scss";
import { useState } from "react";
import {
  Button,
  FormControl,
  Input,
  InputAdornment,
  InputLabel,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import { addProductsInput, categories } from "../../data";



export default function AddProducts() {
  const [newProduct, setnewProduct] = useState({
    productName: "",
    productCategory: "",
    brand: "",
    categories: "",
    price: "",
    quantity: "",
    productImage: "",
    productImage2: "",
    productImage3: "",
  });
  const [isOpen, setIsOpen] = useState(false);
  const [file, setFile] = useState("");
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
}
  function submit(e) {
    e.preventDefault();
  }

  return (
    <div>
      <div>
      <div className="report-new">
        <div className="report-newContainer">
          <div className="report-top">
            <h1>Add Product</h1>
          </div>
        </div>
      </div>
      </div>
      {addProductsInput.map((productInputField) => {
        return (
          <div>
            <form onSubmit={submit}>
            <TextField
            key={productInputField.id}
              id={productInputField.fieldId}
              label={productInputField.fieldLabel}
              variant={productInputField.fieldVariant}
              type={productInputField.fieldType}
              required={productInputField.fieldRequired}
              maxRows={productInputField.rows}
              select={productInputField.selectType}
              defaultValue={productInputField.fieldDefaultValue}
              helperText={productInputField.filedHelperText}
              fullWidth
              sx={{ marginBottom: "30px" }}
                    />
                    </form>
          </div>
        );
      })}
      <FormControl fullWidth sx={{ m: 1 }} variant="filled">
        <InputLabel htmlFor="standard-adornment-amount">Amount</InputLabel>
        <Input
          id="standard-adornment-amount"
          startAdornment={<InputAdornment position="start">₵</InputAdornment>}
        />
      </FormControl>
      <TextField
        id="filled-select-currency"
        select
        label="Select"
        defaultValue="Accessories"
        helperText="Please select your category"
        variant="filled"
        fullWidth
        sx={{ marginTop: "20px" }}
      >
        {categories.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>

      <div className="add-product-image">
        <Typography>Add Product Image</Typography>
        <img
          className=" addProduct-addImage"
          src={file ? URL.createObjectURL(file) : "/noImage.jpg"}
          alt="newphoto"
        />
        <img
          className=" addProduct-addImage"
          src={file ? URL.createObjectURL(file) : "/noImage.jpg"}
          alt="newphoto"
        />
      </div>

      <Button 
        variant="contained"  
          sx={{marginLeft:'40px'}}    
      >Submit</Button>
    </div>
      
  );
}
