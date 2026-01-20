import MainHeader from "./components/mainheader";
import "./style.css";

export default function Home() {
  return (
    <header className="flex justify-center">
      <MainHeader date="20 Jan 2026" nickname="Ash" age={36} weight={95} />
    </header>
  );
}