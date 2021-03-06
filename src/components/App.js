import React from "react";
import Slider from "./Slider";

const photos = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1546842931-886c185b4c8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Zmxvd2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    alt: "flower 1",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1606041008023-472dfb5e530f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Zmxvd2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    alt: "flower 2",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1442458017215-285b83f65851?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGZsb3dlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    alt: "flower 3",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1527061011665-3652c757a4d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGZsb3dlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    alt: "flower 4",
  },
];

const App = () => {
  return (
    <div>
      <Slider photos={photos} />
    </div>
  );
};

export default App;
