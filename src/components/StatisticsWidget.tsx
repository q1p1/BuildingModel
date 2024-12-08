interface StatisticsWidgetProps {
  totalWorkers: number;
  totalBuildings: number;
}

const StatisticsWidget: React.FC<StatisticsWidgetProps> = ({
  totalWorkers,
  totalBuildings,
}) => {
  return (
    <div
      style={{
        position: "absolute",
        top: "200px", // Below the PointDetailsWidget
        right: "10px",
        zIndex: 1000,
        backgroundColor: "white",
        padding: "10px",
        border: "1px solid black",
        borderRadius: "5px",
        minWidth: "200px",
        textAlign: "center",
      }}
    >
      <h4>Statistics</h4>
      <p>
        <b>Workers:</b> {totalWorkers}
      </p>
      <p>
        <b>Buildings:</b> {totalBuildings}
      </p>
    </div>
  );
};

export default StatisticsWidget;
