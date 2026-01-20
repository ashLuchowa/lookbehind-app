import MainHeader from "./components/mainheader";
import "./style.css";

export default function Home() {
  return (
    <header className="flex justify-center">
      <MainHeader nickname="Ash" age={36} weight={95} />
    </header>
  );
}