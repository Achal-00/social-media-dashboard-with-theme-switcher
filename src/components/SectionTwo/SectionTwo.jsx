import Card from "./Card";

export default function SectionTwo(props) {
  return (
    <div className="grid gap-[1em]">
      <h1
        className={`text-[200%] font-bold ${
          props.theme ? "text-dark-theme-white-text" : "text-light-theme-text"
        }`}
      >
        Overview - Today
      </h1>
      <div className="grid gap-[2em] landscape:lg:grid-cols-4 portrait:sm:grid-cols-2 landscape:sm:grid-cols-2">
        <Card
          theme={props.theme}
          heading="Page Views"
          icon="icon-facebook.svg"
          amount="87"
          count="3"
          arrow="icon-up.svg"
          color="text-lime-green"
        />
        <Card
          theme={props.theme}
          heading="Likes"
          icon="icon-facebook.svg"
          amount="52"
          count="2"
          arrow="icon-down.svg"
          color="text-bright-red"
        />
        <Card
          theme={props.theme}
          heading="Likes"
          icon="icon-instagram.svg"
          amount="5462"
          count="2257"
          arrow="icon-up.svg"
          color="text-lime-green"
        />
        <Card
          theme={props.theme}
          heading="Profile Views"
          icon="icon-instagram.svg"
          amount="52k"
          count="1375"
          arrow="icon-up.svg"
          color="text-lime-green"
        />
        <Card
          theme={props.theme}
          heading="Retweets"
          icon="icon-twitter.svg"
          amount="117"
          count="303"
          arrow="icon-up.svg"
          color="text-lime-green"
        />
        <Card
          theme={props.theme}
          heading="Likes"
          icon="icon-twitter.svg"
          amount="507"
          count="553"
          arrow="icon-up.svg"
          color="text-lime-green"
        />
        <Card
          theme={props.theme}
          heading="Likes"
          icon="icon-youtube.svg"
          amount="107"
          count="19"
          arrow="icon-down.svg"
          color="text-bright-red"
        />
        <Card
          theme={props.theme}
          heading="Total Views"
          icon="icon-youtube.svg"
          amount="1407"
          count="12"
          arrow="icon-down.svg"
          color="text-bright-red"
        />
      </div>
    </div>
  );
}
