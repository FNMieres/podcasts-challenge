import { render } from "../../../../utils/testUtils";
import EpisodeCard from "./EpisodeCard";

const mockEpisode = {
  title: "Episode Title",
  description: "Episode Description",
  audioSrc: "https://example.com/audio.mp3",
  audioType: "audio/mpeg",
};

describe("EpisodeCard Component", () => {
  it("should render episode title and description", () => {
    const { getByText } = render(
      <EpisodeCard
        title={mockEpisode.title}
        description={mockEpisode.description}
        audioSrc={mockEpisode.audioSrc}
        audioType={mockEpisode.audioType}
      />,
    );

    expect(getByText(mockEpisode.title)).toBeInTheDocument();
    expect(getByText(mockEpisode.description)).toBeInTheDocument();
  });

  it("should render audio element with the correct source", () => {
    const { container } = render(
      <EpisodeCard
        title={mockEpisode.title}
        description={mockEpisode.description}
        audioSrc={mockEpisode.audioSrc}
        audioType={mockEpisode.audioType}
      />,
    );

    const audioElement = container.querySelector("audio");
    const sourceElement = container.querySelector("source");

    expect(audioElement).toBeInTheDocument();
    expect(sourceElement).toBeInTheDocument();
    expect(sourceElement?.getAttribute("src")).toBe(mockEpisode.audioSrc);
    expect(sourceElement?.getAttribute("type")).toBe(mockEpisode.audioType);
  });
});
