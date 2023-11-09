import { memo, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import foodFunctionService from "../../../services/foodFunction.service";
import "./style.scss";

const ProductDetail = () => {
  const { id } = useParams();
  const [productData, setProductData] = useState(null);
  const [content, setContent] = useState(null);

  // Fetch data for the specific product ID
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [foodData] = await Promise.all([foodFunctionService.getFood(id)]);
        setProductData(foodData);
        console.log("chi tiet san pham id: " + JSON.stringify(foodData));
      } catch (error) {
        const errorMessage =
          error.message || "An error occurred while fetching data";
        setContent(errorMessage);
      }
    };

    fetchData();
  }, []);

  // Render product details when data is available
  if (productData) {
    const {
      first_name,
      last_name,
      email,
      avatar,
      phone_number,
      employment,
      address,
      credit_card,
    } = productData;

    return (
      <div>
        <h1>Detail for Product ID: {id}</h1>
        <div>
          <Image src={avatar} alt={`${first_name} ${last_name}`} />
          <h2>
            Name: {first_name} {last_name}
          </h2>
          <p>Email: {email}</p>
          <p>Phone Number: {phone_number}</p>
          <p>Job Title: {employment.title}</p>
          <p>City: {address.city}</p>
          <p>State: {address.state}</p>
          <p>Country: {address.country}</p>
          <p>Credit Card Number: {credit_card.cc_number}</p>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
};

export default memo(ProductDetail);
