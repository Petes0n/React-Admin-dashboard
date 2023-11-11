import React from "react";
import "./addproduct.scss";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";

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
  // console.log(newUser)
  // const navigate = useNavigate();
  // let state = useSelector((state)=>state.users)
  // const dispatch = useDispatch();

  function submit(e) {
      e.preventDefault();
   
  }

  return (
    <>
    <div className="addProduct-new">
      <div className="addProduct-newContainer">
        <div className="addProduct-top">
          <h1>Add Products</h1>
        </div>
        <div className="addProduct-bottom">
          <div className="addProduct-right">
            {/* {inputs.map((input) => ( */}
            <form onSubmit={(e) => submit(e)}>
              <div className="formInput">
                {/* <div className="formInput" key={input.id}> */}
                <input
                className="addProduct-input"
                  placeholder="Product Name"
                  id="productName"
                  type="text"
                  value={newProduct.productName}
                  onChange={(e) =>
                    setnewProduct({
                      ...newProduct,
                      productName: e.target.value,
                    })
                  }
                  
                ></input>

                <input
                className="addProduct-input"
                  placeholder="Product Category"
                  id="productCategory"
                  type="text"
                  value={newProduct.productCategory}
                  onChange={(e) =>
                    setnewProduct({
                      ...newProduct,
                      productCategory: e.target.value,
                    })
                  }
                ></input>

                <input
                className="addProduct-input"
                  placeholder="Brand"
                  id="brand"
                  type="text"
                  value={newProduct.brand}
                  onChange={(e) =>
                    setnewProduct({ ...newProduct, brand: e.target.value })
                  }
                  
                ></input>

                {/* <label for="categories" className="category-label">
                  Categories
                </label> */}
               
                <select id="ctegories" name="categories">
                  <option value="volvo">Electronics</option>
                  <option value="saab">Software</option>
                  <option value="fiat">Building</option>
                  <option value="audi">Health</option>
                </select>
                
                {/* DESCRIPTION */}

                <label>
    
      <textarea name="description" rows={4} cols={40} className="addProduct-desc" placeholder="Item Description" />
    </label>
              </div>

              <div className="addProduct-formInput">
                <input
                  placeholder="Price"
                  id="price"
                  type="number"
                  value={newProduct.price}
                  onChange={(e) =>
                    setnewProduct({ ...newProduct, price: e.target.value })
                  }
                
                ></input>
                <input
                className="addProduct-input"
                  placeholder="Quantity"
                  id="quantity"
                  type="number"
                  value={newProduct.quantity}
                  onChange={(e) =>
                    setnewProduct({ ...newProduct, quantity: e.target.value })
                  }
                  
                ></input>
                <label htmlFor="file">
                  Product Image:
                  <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  value={""}
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
                <div className="image-file">
                  <img 
                    className="overlay addProduct-addImage"
                    src={file ? URL.createObjectURL(file) : "/noImage.jpg"}
                    alt="newphoto"
                  />
                  <img
                    className="image-file overlay addProduct-addImage"
                    src={file ? URL.createObjectURL(file) : "/noImage.jpg"}
                    alt="newphoto"
                  />
                  <img
                    className="image-file overlay addProduct-addImage"
                    src={file ? URL.createObjectURL(file) : "/noImage.jpg"}
                    alt="newphoto"
                  />
                </div>
                
                  <button className='primaryBtn' onClick={() => setIsOpen(true)}>Submit</button>
                  {/* {isOpen && <Delete setIsOpen={setIsOpen} />} */}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
// <div className="container">
//   <div className="products-main">
//     <h3>Add Products</h3>

//     <input
//       type="text"
//       placeholder="Enter Product Name"
//       className="input-box"
//     />
//     <input
//       type="text"
//       placeholder="Enter Product Price"
//       className="input-box"
//     />
//     <input
//       type="text"
//       placeholder="Enter Product Category"
//       className="input-box"
//     />
//     <input
//       type="text"
//       placeholder="Enter Product Company"
//       className="input-box"
//     />
//     <button className="app-button">Add</button>
//   </div>
// </div>
