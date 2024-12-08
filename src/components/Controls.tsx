interface ControlsProps {
  toggleBuilding: () => void;
  togglePoints: () => void;
  hasBuilding: boolean;
  hasPoints: boolean;
}

const Controls: React.FC<ControlsProps> = ({
  toggleBuilding,
  togglePoints,
  hasBuilding,
  hasPoints,
}) => {
  return (
    <div className="absolute top-2 left-2 z-[1000] flex flex-col gap-2">
      <button
        onClick={toggleBuilding}
        className="bg-white border border-black px-4 py-2 rounded hover:bg-gray-100 cursor-pointer"
      >
        {hasBuilding ? "Delete building" : "Add building"}
      </button>
      <button
        onClick={togglePoints}
        className="bg-white border border-black px-4 py-2 rounded hover:bg-gray-100 cursor-pointer"
      >
        {hasPoints ? "Delete points" : "Add points"}
      </button>
    </div>
  );
};

export default Controls;
