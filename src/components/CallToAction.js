const CallToAction = ({ ctaMauto }) => {
  return (
    <form
      className={`cta ${ctaMauto ? "cta--m-auto" : ""}`}
      action="#"
      method=""
    >
      <input
        className="cta__input"
        type="text"
        name="email"
        id="email"
        placeholder="Send me an email when you launch"
      />
      <button className="btn cta__btn">Get Exclusive Invite</button>
    </form>
  );
};

export default CallToAction;
