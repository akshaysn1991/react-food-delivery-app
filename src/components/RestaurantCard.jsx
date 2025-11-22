import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { resData } = props;
    // eslint-disable-next-line no-unsafe-optional-chaining
    const {cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla} = resData?.info
    return (
      <div className="res-card">
        <img
          className="res-logo"
          alt= "res-logo"
          src={ 
          CDN_URL +
          cloudinaryImageId
          }
        />
        <h3>{name}</h3>
        <p>{cuisines.join(', ')}</p>
        <p>{avgRating}</p>
        <p>{costForTwo}</p>
        <p>{sla.deliveryTime} minutes</p>
      </div>
    );
  }; 

  export default RestaurantCard;