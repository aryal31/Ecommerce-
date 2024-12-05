import { controller } from '../../../assets/images';
import Quantitycounter from "../../Quantitycounter";

const Cartitemcard = () => {
  return (
    <>
      <div className="grid grid-cols-4 items-center h-[72px] text-[16px] shadow">
        <div className="flex items-center gap-1 md:gap-2 justify-center">
          <img src={controller} className="h-[30px] md:h-[50px] w-auto" alt="" /> <p className="text-center text-[12px] md:text-[16px]">Dual Sense</p>
        </div>
        <p className="text-center text-[12px] md:text-[16px]">$120</p>
        <div className="flex justify-center">
          <Quantitycounter></Quantitycounter>
        </div>
        <p className="text-center text-[12px] md:text-[16px]">$650</p>
      </div>
    </>
  );
};

export default Cartitemcard;
