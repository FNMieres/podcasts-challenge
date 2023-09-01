import { render } from "../../../../utils/testUtils";
import PodcastDetail from "./PodcastDetail";

// Mock data for testing
const podcastData = {
  id: "1",
  image: "https://example.com/podcast-image.jpg",
  title: "Sample Podcast",
  author: "John Doe",
  description: "This is a sample podcast description.",
};

test("renders PodcastDetail component with correct data", () => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  const { getByText, getByRole } = render(<PodcastDetail {...podcastData} />);

  const titleElement = getByText("Sample Podcast");
  const authorElement = getByText("by John Doe");
  const descriptionElement = getByText("This is a sample podcast description.");

  expect(titleElement).toBeInTheDocument();
  expect(authorElement).toBeInTheDocument();
  expect(descriptionElement).toBeInTheDocument();

  const imageElement = getByRole("img");
  expect(imageElement).toBeInTheDocument();
  expect(imageElement).toHaveAttribute(
    "src",
    "https://example.com/podcast-image.jpg",
  );
});
