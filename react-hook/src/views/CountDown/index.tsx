import { useEffect, useState } from "react";

const CountDown = () => {
  const [newtime, setNewtime] = useState<string>("");
  const nowtime = new Date(), //获取当前时间
    endtime = new Date("2025-12-12 15:24"); //定义结束时间
  const maxTime = endtime.getTime() - nowtime.getTime();
  useEffect(() => {
    const timer = setTimeout(() => {
      const td = Math.floor(maxTime / (1000 * 60 * 60 * 24)), //计算天数
        th = Math.floor((maxTime / (1000 * 60 * 60)) % 24), //计算小时数
        tm = Math.floor((maxTime / (1000 * 60)) % 60), //计算分钟数
        ts = Math.floor((maxTime / 1000) % 60); //计算秒数

      setNewtime(`${td}天${th}时${tm}分${ts}秒`);
    }, 1000);

    return () => clearInterval(timer);
  }, [newtime, maxTime]);
  return <>距离结束还有{newtime}</>;
};

export default CountDown;
