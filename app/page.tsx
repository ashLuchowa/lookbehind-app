import MainHeader from "./components/mainheader";
import "./style.css";

export default function Home() {
  return (
    <header className="flex flex-col justify-center items-center gap-6 p-6 bg-gray-100 min-h-screen">
      <MainHeader nickname="Ash" age={36} weight={95} />
      <MainHeader nickname="Ash" age={32} weight={95} />
      <MainHeader nickname="Ash" age={36} weight={95} />
    </header>
  );
}