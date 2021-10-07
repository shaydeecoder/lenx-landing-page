const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="section-title features__title-wrap text-center">
      <h2 className="features__heading">{heading}</h2>
      <p className="features__sub-heading">{subHeading}</p>
    </div>
  );
};

export default SectionTitle;
