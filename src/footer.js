function Footer() {
  return (
    <div id="footer">
      <div className="aboutUs">
        <p className="aboutHeader">Autono</p>
        <div className="aboutRow">
          <div className="aboutLink">
            <a href="">Technology</a>
            <a href="">About</a>
            <a href="">Careers</a>
          </div>
          <div className="aboutInfo">
            <p>Tel: 123-456-7890</p>
            <p>Email: info@mysite.com</p>
            <p>500 Terry Francois St San Francisco, CA 94158</p>
          </div>
        </div>
      </div>
      <div className="aboutSub">
        <p className="aboutSubHeader">subcribe</p>
        <p className="aboutSubContent">
          Sign up to receive Autono news and updates.
        </p>
        <form>
          <label>
            Email* <br />
            <input type="email" />
          </label>
        </form>
      </div>
    </div>
  );
}

export default Footer;
