export default function Card(props) {
  return (
    <div
      className={`${
        props.theme ? "bg-dark-theme-card-bg" : "bg-light-theme-card-bg"
      } p-[2em] grid gap-[2em] rounded-[0.5em]`}
    >
      <div className="flex justify-between">
        <p
          className={`${
            props.theme ? "text-dark-theme-text" : "text-light-theme-text"
          } font-bold`}
        >
          {props.heading}
        </p>
        <img src={props.icon} alt="" className="w-[1.5em]" />
      </div>
      <div className="flex justify-between">
        <h2
          className={`${
            props.theme
              ? "text-dark-theme-white-text"
              : "text-light-theme-text-dark-blue"
          } font-bold text-[250%] self-end leading-none`}
        >
          {props.amount}
        </h2>
        <div className="self-end flex items-center gap-[0.5em]">
          <img src={props.arrow} alt="" className="w-[0.6em]" />
          <p className={`font-bold ${props.color}`}>{props.count}%</p>
        </div>
      </div>
    </div>
  );
}
