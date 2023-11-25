import React, { useRef } from "react";

const ProductForm = () => {
  const fileInputRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    var formdata = new FormData();
    formdata.append("nameFood", "thanh12ss22asd223");
    formdata.append("description", "sssss");
    formdata.append("price", "100");
    formdata.append("quantity", "10");
    formdata.append("ingredients", "aaaaaaaaaaaa");
    formdata.append("packingWay", "cccc");
    formdata.append("dosageForm", "ccc");
    formdata.append("placeOfManufacture", "ccccc");
    formdata.append("expiryDate", "222");
    formdata.append("manufacturerId", "1");
    formdata.append("brandId", "1");
    formdata.append("categoryId", "1");
    formdata.append("discount", "10");

    // Thêm ảnh vào FormData
    if (fileInputRef.current && fileInputRef.current.files.length > 0) {
      formdata.append("imageFiles", fileInputRef.current.files[0]);
    }

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    fetch("http://localhost:8080/api/v1/foodFunctions", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Các trường thông tin khác */}
      {/* ... */}

      {/* Input để chọn ảnh */}
      <input type="file" accept="image/*" ref={fileInputRef} />

      <button type="submit">Gửi</button>
    </form>
  );
};

export default ProductForm;
