import { episodes } from "../../../../test/mockData/Episodes";
import { render, screen } from "../../../../utils/testUtils";
import { millisecondsToDuration } from "../../../../utils/timeUtils";
import EpisodesList from "./EpisodesList";

describe("EpisodesList", () => {
  it("renders a table with episode data", () => {
    const { getByText, getAllByRole } = render(
      <EpisodesList data={episodes} />,
    );

    expect(getByText("Title")).toBeInTheDocument();
    expect(getByText("Date")).toBeInTheDocument();
    expect(getByText("Duration")).toBeInTheDocument();

    episodes.forEach((episode) => {
      const trackNameElement = screen.getByText(episode.trackName);
      const releaseDateElement = screen.getByText(
        new Date(episode.releaseDate).toLocaleDateString("es-ES"),
      );
      const trackTimeMillisElement = screen.getByText(
        millisecondsToDuration(episode.trackTimeMillis),
      );

      expect(trackNameElement).toBeInTheDocument();
      expect(releaseDateElement).toBeInTheDocument();
      expect(trackTimeMillisElement).toBeInTheDocument();
    });

    const tableRows = getAllByRole("row");
    expect(tableRows).toHaveLength(episodes.length + 1);
  });
});
