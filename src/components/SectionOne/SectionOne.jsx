import Card from "./Card";

export default function SectionOne(props) {
  return (
    <div className="relative z-10 grid gap-[2em] landscape:lg:grid-cols-4 portrait:sm:grid-cols-2 landscape:sm:grid-cols-2">
      <Card
        theme={props.theme}
        icon="icon-facebook.svg"
        amount="1987"
        arrow="icon-up.svg"
        color="text-lime-green"
        count="12"
        classname="facebook"
        username="@nathanf"
        user="FOLLOWERS"
      />
      <Card
        theme={props.theme}
        icon="icon-twitter.svg"
        amount="1044"
        arrow="icon-up.svg"
        color="text-lime-green"
        count="99"
        classname="twitter"
        username="@nathanf"
        user="FOLLOWERS"
      />
      <Card
        theme={props.theme}
        icon="icon-instagram.svg"
        amount="11k"
        arrow="icon-up.svg"
        color="text-lime-green"
        count="1099"
        classname={props.theme ? "instagram-dark" : "instagram-light"}
        username="@realnathanf"
        user="FOLLOWERS"
      />
      <Card
        theme={props.theme}
        icon="icon-youtube.svg"
        amount="8239"
        arrow="icon-down.svg"
        color="text-bright-red"
        count="144"
        classname="youtube"
        username="Nathan F."
        user="SUBSCRIBERS"
      />
    </div>
  );
}
