import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Homepage from "./pages/Homepage";
import LineupPage from "./pages/LineupPage";
import GalleryPage from "./pages/GalleryPage";
import TicketsPage from "./pages/TicketsPage";
import MapPage from "./pages/MapPage";
import ClubPage from "./pages/ClubPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Homepage /> },
      { path: "lineup", element: <LineupPage /> },
      { path: "galeria", element: <GalleryPage /> },
      { path: "entradas", element: <TicketsPage /> },
      { path: "mapa", element: <MapPage /> },
      { path: "club", element: <ClubPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;