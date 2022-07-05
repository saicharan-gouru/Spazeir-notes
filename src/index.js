import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import {BrowserRouter} from "react-router-dom";
import {NoteProvider,NotesProvider} from "./contexts";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <NoteProvider>
        <NotesProvider>
          <App />
        </NotesProvider>
      </NoteProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
