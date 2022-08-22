import tech_content from "./img/tech-content.webp";
function TechCar() {
  return (
    <div className="TechCar">
      <div className="TechCarAbove">
        <div className="TechCar-left">
          <p className="TechCarName">THE AUTONO CAR</p>
          <p className="TechCarHeader">
            Using groundbreaking perception-enabled sensor technology, the
            Autono car is a fully driverless vehicle engineered to the highest
            degree of precision and safety. It’s autonomous driving reimagined.
          </p>
        </div>
        <div className="TechCar-right">
          <img src={tech_content} alt="" />
        </div>
      </div>
      <div className="TechCarContent">
        <div className="TechCarContent-left">
          <p className="TechCarContent-title">HUMAN-CENTERED DESIGN</p>
          <p className="TechCarContent-description">
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font. I’m a great place for you to
            tell a story and let your users know a little more about you.
          </p>
        </div>
        <div className="TechCarContent-right">
          <p className="TechCarContent-title">​LOW EMISSIONS & EFFICIENCY</p>
          <p className="TechCarContent-description">
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font. I’m a great place for you to
            tell a story and let your users know a little more about you.
          </p>
        </div>
      </div>
    </div>
  );
}

export default TechCar;
