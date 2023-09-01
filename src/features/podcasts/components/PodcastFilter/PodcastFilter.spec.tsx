import { vi } from "vitest";
import PodcastFilter from "./PodcastFilter";
import { fireEvent, render } from "../../../../utils/testUtils";

describe("PodcastFilter", () => {
  it("should render correctly", () => {
    const { getByLabelText, getByText } = render(
      <PodcastFilter
        podcastCount={5}
        filterValue=""
        onFilterChange={() => {}}
      />,
    );

    const filterInput = getByLabelText("Filter podcasts");
    const podcastCountElement = getByText("5");

    expect(filterInput).toBeInTheDocument();
    expect(podcastCountElement).toBeInTheDocument();
  });

  it("should call onFilterChange when the input value changes", async () => {
    const mockFilterChange = vi.fn();
    const { getByRole } = render(
      <PodcastFilter
        podcastCount={5}
        filterValue=""
        onFilterChange={mockFilterChange}
      />,
    );

    const filterInput = getByRole("search").querySelector("input");

    fireEvent.change(filterInput!, {
      target: { value: "new filter value" },
    });

    expect(mockFilterChange).toHaveBeenCalledWith("new filter value");
  });

  it("should display the provided podcast count", () => {
    const { getByText } = render(
      <PodcastFilter
        podcastCount={10}
        filterValue=""
        onFilterChange={() => {}}
      />,
    );

    const podcastCountElement = getByText("10");

    expect(podcastCountElement).toHaveTextContent("10");
  });
});
