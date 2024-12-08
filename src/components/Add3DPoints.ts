import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import Graphic from "@arcgis/core/Graphic";
import Point from "@arcgis/core/geometry/Point";
import PopupTemplate from "@arcgis/core/PopupTemplate";
import PointSymbol3D from "@arcgis/core/symbols/PointSymbol3D";
import ObjectSymbol3DLayer from "@arcgis/core/symbols/ObjectSymbol3DLayer";

import pointsData from "../data/points.json";
export const add3DPoints = (graphicsLayer: GraphicsLayer): Graphic[] => {
  const pointsGraphics: Graphic[] = [];

  pointsData.points.forEach((point) => {
    // Define the PopupTemplate
    const popupTemplate = new PopupTemplate({
      title: `Details of ${point.name}`,
      content: `
        <ul>
          <li><b>Age:</b> ${point.age}</li>
          <li><b>Company:</b> ${point.company}</li>
          <li><b>Job ID:</b> ${point.jobId}</li>
        </ul>
      `,
    });

    const symbol = new PointSymbol3D({
      symbolLayers: [
        new ObjectSymbol3DLayer({
          resource: {
            href: point.model,
          },
          height: point.size,
          material: {
            color: "red",
          },
        }),
      ],
    });

    // Create the 3D point graphic
    const modelGraphic = new Graphic({
      geometry: new Point({
        longitude: point.longitude,
        latitude: point.latitude,
        z: point.z,
      }),
      symbol,
      attributes: point, // Attach attributes for Popup
      popupTemplate, // Attach the PopupTemplate
    });

    graphicsLayer.add(modelGraphic);
    pointsGraphics.push(modelGraphic);
  });

  return pointsGraphics;
};
