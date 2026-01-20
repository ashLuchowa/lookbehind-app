import "./style.css";
import MainHeader from "./components/mainheader";
import TextInfo from "./components/textInfo";


export default function Home() {
  return (
    <div className="flex flex-col justify-center gap-6 p-6 bg-gray-100 w-150 min-h-screen mx-auto">
      <MainHeader nickname="Ash" age={36} weight={95} />
      <TextInfo title="Goal" textPara="I would like to improve my yearly income to $100,000 before 2027" />
    </div>
  );
}