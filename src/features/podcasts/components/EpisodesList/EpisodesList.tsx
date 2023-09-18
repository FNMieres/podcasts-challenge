import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Result } from "../../../../types/LookupResponse";
import { millisecondsToDuration } from "../../../../utils/timeUtils";
import RouterLink from "../../../../components/RouterLink/RouterLink";
import { EPISODES_PATH } from "../../../../constants";

interface EpisodesListProps {
  data: Result[];
}

function EpisodesList({ data }: EpisodesListProps) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="podcast episodes table">
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
                <RouterLink to={`${EPISODES_PATH}/${episode.trackId}`}>
                  {episode.trackName}
                </RouterLink>
              </TableCell>
              <TableCell align="right">
                {new Date(episode.releaseDate).toLocaleDateString("es-ES")}
              </TableCell>
              <TableCell align="right">
                {millisecondsToDuration(episode.trackTimeMillis)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default EpisodesList;
