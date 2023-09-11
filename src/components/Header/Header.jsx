export default function Header(props) {
  return (
    <div className="flex flex-col gap-[1.5em] relative z-10 landscape:flex-row landscape:items-center landscape:justify-between">
      <div>
        <h1
          className={`text-[200%] font-bold ${
            props.theme
              ? "text-dark-theme-white-text"
              : "text-light-theme-text-dark-blue"
          }`}
        >
          Social Media Dashboard
        </h1>
        <p
          className={`text-[120%] font-bold ${
            props.theme ? "text-dark-theme-text" : "text-light-theme-text"
          }`}
        >
          Total Followers: 23,004
        </p>
      </div>
      <hr />
      <div className="flex justify-between landscape:gap-[1.5em]">
        <p
          className={`text-[120%] font-bold ${
            props.theme ? "text-dark-theme-text" : "text-light-theme-text"
          }`}
        >
          Dark Mode
        </p>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            value=""
            className="sr-only peer duration-check"
            onChange={() => props.setTheme((prev) => !prev)}
          />
          <div
            className={`w-[3.2em] h-[1.75em] peer-focus:outline-none rounded-full peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[0.18em] after:left-[0.15em] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-[1.45em] after:w-[1.45em] after:transition-all peer-checked:bg-full-slider-bar ${
              props.theme
                ? "bg-gradient-to-r from-dark-theme-toggle-from to-dark-theme-toggle-to"
                : "bg-light-theme-toggle"
            }`}
          ></div>
        </label>
      </div>
    </div>
  );
}
