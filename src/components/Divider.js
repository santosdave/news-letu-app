function Divider({text}) {
    return (
        <div className="flex items-center justify-between">
          <div className="mx-14 h-px flex-grow bg-gray-600"></div>
          <div className="text-gray-600">{text}</div>
          <div className="mx-14 h-px flex-grow bg-gray-600"></div>
        </div>
      );
}

export default Divider
