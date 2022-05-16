import React from "react";
import Slider from "./Slider";

const photos = [
  {
    id: 1,
    photo:
      "https://images.unsplash.com/photo-1546842931-886c185b4c8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Zmxvd2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 2,
    photo:
      "https://images.unsplash.com/photo-1606041008023-472dfb5e530f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Zmxvd2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 3,
    photo:
      "https://images.unsplash.com/photo-1490750967868-88aa4486c946?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Zmxvd2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 4,
    photo:
      "https://images.unsplash.com/photo-1527061011665-3652c757a4d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGZsb3dlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
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
