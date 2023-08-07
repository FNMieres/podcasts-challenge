import { useEffect, useState } from "react";
import axios from "axios";
import { ItunesResponse } from "./types/ItunesResponse";
import { Contents, Entry } from "./types/Entry";
import "./App.css";

function App() {
  const [podcasts, setPodcasts] = useState<Entry[] | null>(null);

  useEffect(() => {
    axios
      .get<ItunesResponse>(
        `https://api.allorigins.win/get?url=${encodeURIComponent(
          "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json",
        )}`,
      )
      .then((response) => {
        const data: Contents = JSON.parse(response.data.contents);
        setPodcasts(data.feed.entry);
      });
  }, []);

  return (
    podcasts &&
    podcasts.length > 0 &&
    podcasts.map((podcast: Entry) => (
      <div key={podcast.id.attributes["im:id"]}>{podcast.title.label}</div>
    ))
  );
}

export default App;
