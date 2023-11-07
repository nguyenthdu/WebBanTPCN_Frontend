import { memo, useEffect, useState } from "react";
import { Image } from "react-bootstrap";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const [productData, setProductData] = useState(null);

  // Fetch data for the specific product ID
  useEffect(() => {
    // Make an API call to retrieve data based on the 'id'
    // Replace the following example with your actual API call
    fetch(`https://your-api-endpoint/${id}`)
      .then((response) => response.json())
      .then((data) => setProductData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, [id]);

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
