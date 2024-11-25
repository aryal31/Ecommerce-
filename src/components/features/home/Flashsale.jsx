import Heading from "../../common/Heading";
import Arrow from "../../common/Arrow";
import Wrapper from "../../common/Wrapper";
import Itemcard from "../product/Itemcard";
import Orangebutton from "../../common/Orangebutton";
import CountdownTimer from "../../Timer";

const Flashsale = ({ className }) => {
  return (
    <>
      <Wrapper>
        <div className={`flex justify-between ${className}`}>
          <Heading date="Today's" title="flash sales" />
          <CountdownTimer days={3} hours={23} minutes={19} seconds={56} className={'mt-[46px] mr-[400px]'} />
          <Arrow />
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="mt-3 flex gap-4 flex-wrap items-center justify-center">
            <Itemcard />
            <Itemcard />
            <Itemcard />
            <Itemcard />
          </div>
          <div>
            <Orangebutton
              text="View all products"
              className="h-[50px] w-[200px]"
            />
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Flashsale;
