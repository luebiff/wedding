import "./parallelEffect.css";
import Img1 from "../../assets/parallel/IMG1.jpeg";
import Img2 from "../../assets/parallel/IMG2.jpeg";
import Img3 from "../../assets/parallel/IMG3.jpeg";
import Img4 from "../../assets/parallel/IMG4.jpeg";
import Img5 from "../../assets/parallel/IMG5.jpeg";
import Img6 from "../../assets/parallel/IMG6.jpeg";
import Img7 from "../../assets/parallel/IMG7.jpeg";
import Img8 from "../../assets/parallel/IMG8.jpg";
import Img9 from "../../assets/parallel/IMG9.jpg";

const ImgParallelEffect = () => {
  return (
    <div className="parallax">
      <img className="img1 w-50 h-50 md:w-60 md:h-60" src={Img1}></img>
      <img className="img2 w-50 h-50 md:w-60 md:h-60" src={Img2}></img>
      <img className="img3 w-50 h-50 md:w-60 md:h-60" src={Img3}></img>
      <img className="img4 w-60 h-60 md:w-60 md:h-60" src={Img4}></img>
      <img className="img5 w-50 h-50 md:w-60 md:h-60" src={Img5}></img>
      <img className="img6 w-50 h-50 md:w-60 md:h-60" src={Img6}></img>
      <img className="img7 w-50 h-50 md:w-60 md:h-60" src={Img7}></img>
      <img className="img8 w-50 h-50 md:w-60 md:h-60" src={Img8}></img>
      <img className="img9 w-50 h-50 md:w-60 md:h-60" src={Img9}></img>
    </div>
  );
};

export default ImgParallelEffect;
