import { vi } from "vitest";
import PodcastCard from "./PodcastCard";
import { fireEvent, render, screen } from "../../../../utils/testUtils";

const mockProps = {
  id: "1",
  image: "mock-image-url",
  title: "Mock Podcast",
  author: "John Doe",
  onClick: vi.fn(),
};

describe("PodcastCard", () => {
  it("renders the card with provided props", () => {
    // eslint-disable-next-line react/jsx-props-no-spreading
    render(<PodcastCard {...mockProps} />);

    expect(screen.getByText("Mock Podcast")).toBeInTheDocument();
    expect(screen.getByText("Author: John Doe")).toBeInTheDocument();

    const cardImage = screen.getByRole("img");
    expect(cardImage).toBeInTheDocument();
    expect(cardImage).toHaveAttribute("src", "mock-image-url");

    fireEvent.click(screen.getByRole("button"));
    expect(mockProps.onClick).toHaveBeenCalledWith("1");
  });
});
