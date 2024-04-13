import eye from "../../../images/eye-icon.svg";
import leftArrow from "../../../images/Left.svg";
import rightArrow from "../../../images/Right.svg";
import "./tsignup.css";
function finalStep() {
  return (
    <div className="card-container">
      <div className="title">
        <h2>Final Step</h2>
      </div>
      <div className="description">
        <p>
          Share some information about your career path. Remember to keep it
          direct, these pieces of information can place you ahead.
        </p>
      </div>
      <div className="form-container">
        <form>
          <div className="description-box">
            <input type="text" placeholder="Click here to start writing..." />
          </div>
        </form>
      </div>
      <div className="navigation-container">
        <button>
          <img src={leftArrow} alt="arrow" />
          Previous
        </button>
        <button>
          Preview
          <img src={eye} alt="arrow" />
        </button>
        <button>
          Next
          <img src={rightArrow} alt="arrow" />
        </button>
      </div>
    </div>
  );
}
export default finalStep;
