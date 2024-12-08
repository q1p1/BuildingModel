/* eslint-disable @typescript-eslint/no-explicit-any */
interface PointDetailsWidgetProps {
  selectedPoint: any;
}

const PointDetailsWidget: React.FC<PointDetailsWidgetProps> = ({
  selectedPoint,
}) => {
  return (
    <div className="absolute top-2 right-2 z-[1000] bg-white p-4 border border-black rounded-md min-w-[200px]">
      {selectedPoint ? (
        <div>
          <h3 className="font-bold text-lg mb-2">Point Details</h3>
          <ul className="space-y-1">
            <li>
              <b>Name:</b> {selectedPoint.name}
            </li>
            <li>
              <b>Age:</b> {selectedPoint.age}
            </li>
            <li>
              <b>Company:</b> {selectedPoint.company}
            </li>
            <li>
              <b>Job ID:</b> {selectedPoint.jobId}
            </li>
          </ul>
        </div>
      ) : (
        <p className="text-gray-600">Click on a point to see details</p>
      )}
    </div>
  );
};

export default PointDetailsWidget;
