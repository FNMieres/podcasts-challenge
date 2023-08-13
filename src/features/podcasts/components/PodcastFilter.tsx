import { ChangeEvent } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

interface PodcastFilterProps {
  podcastCount: number;
  filterValue: string;
  onFilterChange: (value: string) => void;
}

function PodcastFilter({
  podcastCount,
  filterValue,
  onFilterChange,
}: PodcastFilterProps) {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    onFilterChange(event.target.value);
  };

  return (
    <Container sx={{ pt: 4 }} maxWidth="lg">
      <Box
        sx={{ float: "right", display: "flex", alignItems: "center", gap: 1 }}
      >
        <Box
          component="span"
          sx={{
            bgcolor: "primary.main",
            color: "primary.contrastText",
            textAlign: "center",
            width: 40,
            height: 25,
            borderRadius: 1,
          }}
        >
          {podcastCount}
        </Box>
        <TextField
          onSubmit={(event) => event.preventDefault()}
          name="filter"
          aria-label="Filter podcasts"
          label="Filter podcasts..."
          type="search"
          variant="filled"
          value={filterValue}
          onChange={handleChange}
          autoComplete="off"
          role="search"
          sx={{
            m: 1,
            width: "25ch",
          }}
        />
      </Box>
    </Container>
  );
}

export default PodcastFilter;
