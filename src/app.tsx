import React from "react";
import { createRoot } from "react-dom/client";

import {
  AdvancedMarker,
  APIProvider,
  InfoWindow,
  Map,
  Marker,
  Pin,
} from "@vis.gl/react-google-maps";

import ControlPanel from "./control-panel";

import { MarkerWithInfowindow } from "./marker-with-infowindow";

const API_KEY = process.env.GOOGLE_MAPS_API_KEY as string;

const App = () => {
  return (
    <APIProvider apiKey={API_KEY} libraries={["marker"]}>
      <Map
        mapId={"bf51a910020fa25a"}
        zoom={15}
        center={{ lat: 42.3593166, lng: -71.0578663 }}
        gestureHandling={"greedy"}
        disableDefaultUI={true}
      >
        {data.map(({ lat, lng, name }) => {
          return (
            <MarkerWithInfowindow
              key={name}
              lat={lat}
              lng={lng}
              name={name}
              scale={0.5}
            />
          );
        })}
      </Map>
    </APIProvider>
  );
};

export default App;

export function renderToDom(container: HTMLElement) {
  const root = createRoot(container);

  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

const data = [
  {
    lat: 42.3593166,
    lng: -71.0578663,
    name: "Joel H. Schwartz, P.C.",
  },
  {
    lat: 42.35814980000001,
    lng: -71.061521,
    name: "Maselan & Jones",
  },
  {
    lat: 42.359235,
    lng: -71.055331,
    name: "Pomykato & Pomykato",
  },
  {
    lat: 42.3628488,
    lng: -71.0599141,
    name: "K&L Gates LLP",
  },
  {
    lat: 42.3585498,
    lng: -71.0583671,
    name: "Sankey Law Offices",
  },
];
