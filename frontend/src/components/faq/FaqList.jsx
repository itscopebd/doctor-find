import { faqs } from "../../assets/data/faqs";
import faqImage from "../../assets/images/faq-img.png";
import FaqItems from "./FaqItems";
const FaqList = () => {
  return (
    <div className="container mx-auto grid grid-cols-2 items-center">
      <div>
        <img className="w-96" src={faqImage} alt="" />
      </div>
      <div>
        <h3 className="text-4xl font-bold mb-10">Most questions by our beloved patients</h3>
        {
            faqs.map((item,index)=><FaqItems key={index} item={item}></FaqItems>)
        }
      </div>
    </div>
  );
};

export default FaqList;
