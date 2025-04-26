import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export const CountdownTimer = () => {
  const { t } = useTranslation();
  // 👉 Set deadline (ví dụ 30 ngày sau)
  const deadline = new Date();
  deadline.setDate(deadline.getDate() + 30);

  const calculateTimeLeft = () => {
    const difference = deadline.getTime() - new Date().getTime();

    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <span className="sm:text-6xl text-4xl font-black">
        {value.toString().padStart(2, "0")}
      </span>
      <span className="text-sm font-bold mt-1">{label}</span>
    </div>
  );

  return (
    <div className="flex w-full h-full items-center justify-around p-6 rounded-xl text-black bg-white shadow-md">
      <TimeUnit value={timeLeft.days} label={t("header.countdown.days")} />
      <span className="text-4xl font-bold leading-[100%] -tracking-[0.65px] mx-2">
        :
      </span>
      <TimeUnit value={timeLeft.hours} label={t("header.countdown.hours")} />
      <span className="text-4xl font-bold mx-2">:</span>
      <TimeUnit
        value={timeLeft.minutes}
        label={t("header.countdown.minutes")}
      />
      <span className="text-4xl font-bold mx-2">:</span>
      <TimeUnit
        value={timeLeft.seconds}
        label={t("header.countdown.seconds")}
      />
    </div>
  );
};
