import { vi } from "vitest";
import PodcastsList from "./PodcastsList";
import { render, screen, userEvent } from "../../../../utils/testUtils";
import { podcasts } from "../../../../test/mockData/Podcasts";
import { Entry } from "../../../../types/TopPodcastsResponse";

describe("PodcastsList component", () => {
  it("renders a list of podcasts", () => {
    render(
      <PodcastsList data={podcasts as Entry[]} onClickPodcast={() => {}} />,
    );

    podcasts.forEach((podcast) => {
      const titleElement = screen.getByText(podcast["im:name"].label);
      const authorElement = screen.getByText(
        `Author: ${podcast["im:artist"].label}`,
      );
      const imageElement = screen.getByAltText(
        `Podcast cover for ${podcast["im:name"].label}`,
      );

      expect(titleElement).toBeInTheDocument();
      expect(authorElement).toBeInTheDocument();
      expect(imageElement).toBeInTheDocument();
    });
  });

  it("calls onClickPodcast when a podcast is clicked", async () => {
    const onClickPodcastMock = vi.fn();
    render(
      <PodcastsList
        data={podcasts as Entry[]}
        onClickPodcast={onClickPodcastMock}
      />,
    );

    const firstPodcast = screen.getByText(podcasts[0]["im:name"].label);
    await userEvent.click(firstPodcast);

    expect(onClickPodcastMock).toHaveBeenCalledWith(
      podcasts[0].id.attributes["im:id"],
    );
  });
});
