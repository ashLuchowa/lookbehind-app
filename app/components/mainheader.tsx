export default function MainHeader() {
  return (
    <header>
      <div className="main-header grid grid-cols-2 gap-10 bg-gray-300 p-4 my-4 rounded-3xl">
        <div className="header-image border-3 flex items-center justify-center rounded-full min-w-50 min-h-50">Image</div>
        <div className="header-info border-2 min-w-50 min-h-50">
            <ul>
                <li>Nickname</li>
                <li>Age</li>
                <li>Weight</li>
            </ul>
        </div>
      </div>
    </header>
  );
}