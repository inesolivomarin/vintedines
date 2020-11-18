import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import img from "../assets/vintedHomeImg.jpg";

const Home = () => {
  const history = useHistory();
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://lereacteur-vinted-api.herokuapp.com/offers"
      );
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return isLoading ? (
    <div> En cours de chargement...</div>
  ) : (
    <>
      <div className="homepageimg">
        <img src={img} alt="" className="imghomepage" />;
        <div>
          <div className="homepagecontent">
            Prêts à faire du tri dans vos placards ?
            <button
              onClick={() => {
                history.push("/publish");
              }}
            >
              Commencer à vendre
            </button>
          </div>
        </div>
      </div>

      <div className="home-offers">
        {data.offers.map((offer) => {
          return (
            <>
              <div>
                {offer.product_name}
                {offer.product_description}
                {offer.product_price}
              </div>
              <img src={offer.product_image.secure_url} alt="" />
            </>
          );
        })}
      </div>
    </>
  );
};

export default Home;
