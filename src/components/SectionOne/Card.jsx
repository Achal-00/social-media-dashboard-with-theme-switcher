export default function Card(props) {
  return (
    <div
      className={`py-[2em] grid gap-[1em] justify-items-center rounded-[0.5em] ${
        props.classname
      } ${props.theme ? "bg-dark-theme-card-bg" : "bg-light-theme-card-bg"}`}
    >
      <div className="flex gap-[0.5em] font-bold">
        <img src={props.icon} alt="" className="w-[1.5em]" />
        <p
          className={`${
            props.theme ? "text-dark-theme-text" : "text-light-theme-text"
          }`}
        >
          {props.username}
        </p>
      </div>
      <div className="text-center">
        <h1
          className={`text-[400%] font-bold ${
            props.theme
              ? "text-dark-theme-white-text"
              : "text-light-theme-text-dark-blue"
          }`}
        >
          {props.amount}
        </h1>
        <p
          className={`tracking-[0.5em] ${
            props.theme ? "text-dark-theme-text" : "text-light-theme-text"
          }`}
        >
          {props.user}
        </p>
      </div>
      <div className="flex items-center gap-[0.5em]">
        <img src={props.arrow} alt="" className="w-[0.6em]" />
        <p className={`font-bold ${props.color}`}>{props.count} Today</p>
      </div>
    </div>
  );
}
