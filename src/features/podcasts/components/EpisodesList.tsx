import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import { Link as RouterLink } from "react-router-dom";
import { Result } from "../../../types/LookupResponse";

interface EpisodesListProps {
  data: Result[];
}

function EpisodesList({ data }: EpisodesListProps) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Duration</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((episode) => (
            <TableRow
              key={episode.trackId}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Link component={RouterLink} to={`episodes/${episode.trackId}`}>
                  {episode.trackName}
                </Link>
              </TableCell>
              <TableCell align="right">
                {new Date(episode.releaseDate).toUTCString()}
              </TableCell>
              <TableCell align="right">{episode.trackTimeMillis}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default EpisodesList;
