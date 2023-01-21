import image1 from "./images/1.jpg";
import image5 from "./images/2.jpg";
import image3 from "./images/3.jpg";
import "./Sllider.css";

const Slider = () => {
  let counter = 1;
  setInterval(() => {
    document.getElementById("radio" + counter).checked = true;
    counter += 1;
    if (counter > 4) {
      counter = 1;
    }
  }, 5000);

  return (
    <div className="slider-container">
      <div class="slider">
        <div class="slides">
          <input type="radio" name="radio-btn" id="radio1" />
          <input type="radio" name="radio-btn" id="radio2" />
          <input type="radio" name="radio-btn" id="radio3" />
          <input type="radio" name="radio-btn" id="radio4" />
          <div class="slide first">     
              <img src={image1} alt="" />
          </div>
          <div class="slide">
            <img src={image5} alt="" />
          </div>
          <div class="slide">
            <img src={image3} alt="" />
          </div>
        </div>
        <div class="navigation-manual">
          <label for="radio1" class="manual-btn"></label>
          <label for="radio2" class="manual-btn"></label>
          <label for="radio3" class="manual-btn"></label>
        </div>
      </div>
    </div>
  );
};
export default Slider;
