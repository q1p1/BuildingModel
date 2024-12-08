/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import WebScene from "@arcgis/core/WebScene";
import SceneView from "@arcgis/core/views/SceneView";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import PointDetailsWidget from "./components/PointDetailsWidget";
import StatisticsWidget from "./components/StatisticsWidget";
import Controls from "./components/Controls";
import { addBuilding } from "./components/AddBuilding";
import { add3DPoints } from "./components/Add3DPoints";
import { addHeatmapLayer } from "./components/AddHeatmap";

function App() {
  const [graphicsLayer, setGraphicsLayer] = useState<GraphicsLayer | null>(
    null
  );
  const [buildingGraphic, setBuildingGraphic] = useState<any>(null);
  const [pointsGraphics, setPointsGraphics] = useState<any[]>([]);
  const [selectedPoint, setSelectedPoint] = useState<any>(null);
  const [totalWorkers, setTotalWorkers] = useState(0);
  const [totalBuildings, setTotalBuildings] = useState(0);

  useEffect(() => {
    const viewDiv = document.getElementById("viewDiv") as HTMLDivElement;

    const webscene = new WebScene({
      basemap: "streets-night-vector",
      ground: { surfaceColor: "white" },
    });

    const view = new SceneView({
      container: viewDiv,
      map: webscene,
      center: [-117.33378013520932, 33.95723222749059],
      zoom: 18,
      popupEnabled: false,
      ui: {
        components: ["zoom"],
      },
    });

    view.ui.remove("attribution");
    view.ui.move("zoom", "top-right");

    const graphicsLayerInstance = new GraphicsLayer();
    webscene.add(graphicsLayerInstance);
    setGraphicsLayer(graphicsLayerInstance);

    addHeatmapLayer(webscene);

    view.on("click", (event) => {
      view.hitTest(event).then((response) => {
        const results = response.results.filter(
          (result) => "graphic" in result
        ) as __esri.GraphicHit[];

        if (results.length > 0) {
          const graphic = results[0].graphic;
          if (graphic) {
            setSelectedPoint({
              name: graphic.getAttribute("name"),
              age: graphic.getAttribute("age"),
              company: graphic.getAttribute("company"),
              jobId: graphic.getAttribute("jobId"),
            });
          }
        } else {
          setSelectedPoint(null);
        }
      });
    });

    return () => {
      view.destroy();
    };
  }, []);

  const toggleBuilding = () => {
    if (!graphicsLayer) return;

    if (buildingGraphic) {
      graphicsLayer.remove(buildingGraphic);
      setBuildingGraphic(null);
      setTotalBuildings((prev) => prev - 1);
    } else {
      const building = addBuilding(graphicsLayer);
      setBuildingGraphic(building);
      setTotalBuildings((prev) => prev + 1);
    }
  };

  const togglePoints = () => {
    if (!graphicsLayer) return;

    if (pointsGraphics.length > 0) {
      pointsGraphics.forEach((graphic) => graphicsLayer.remove(graphic));
      setPointsGraphics([]);
      setTotalWorkers(0);
    } else {
      const points = add3DPoints(graphicsLayer);
      setPointsGraphics(points);
      setTotalWorkers(points.length);
    }
  };

  return (
    <>
      <div id="viewDiv" style={{ height: "100vh", width: "100%" }} />
      <PointDetailsWidget selectedPoint={selectedPoint} />
      <StatisticsWidget
        totalWorkers={totalWorkers}
        totalBuildings={totalBuildings}
      />
      <Controls
        toggleBuilding={toggleBuilding}
        togglePoints={togglePoints}
        hasBuilding={!!buildingGraphic}
        hasPoints={pointsGraphics.length > 0}
      />
    </>
  );
}

export default App;
