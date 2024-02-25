import React, { type FC, useRef, useEffect } from "react";

interface Item {
  title: string;
  subTitle: string;
}

interface IProps {
  data: Item;
}

function Card() {
  const datas: Array<Item> = [
    {
      title: "杭州30元代金券",
      subTitle: "杭州面馆",
    },
    {
      title: "杭州50元代金券",
      subTitle: "杭州面馆",
    },
  ];
  return datas.map((data) => <CardItem data={data}></CardItem>);
}

const CardItem: FC<IProps> = ({ data }) => {
  const ref = useRef<HTMLDivElement>(null);

  const onClick = () => {
    ref.current && (ref.current.innerHTML = "已抢购");
    return;
  };
  return (
    <div className="flex justify-between w-72 h-35 ml-2 mt-2 p-2 bg-orange-100 border border-3 border-solid border-amber-600 border-radius-8 align-items-center">
      <div>
        <div>{data.title}</div>
        <div>{data.subTitle}</div>
      </div>
      <div
        ref={ref}
        className=" w-[50px] h-[30px] leading-[30px] text-center text-white bg-red-500 border-radius-4 "
        onClick={() => onClick()}
      >
        抢购
      </div>
    </div>
  );
};

export default Card;
