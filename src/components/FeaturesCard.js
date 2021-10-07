const FeaturesCard = ({ icon, heading, body }) => {
  return (
    <div className="features__outline">
      <div className="features__card">
        <img className="card__icon" src={icon} alt={heading} />
        <h3 className="card__heading">{heading}</h3>
        <p className="card__body">{body}</p>
      </div>
    </div>
  );
};

export default FeaturesCard;
