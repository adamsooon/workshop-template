import { Box, Input, Typography } from "@material-ui/core";
import { connect } from "react-redux";
import { getDemoAlbum } from "../selectors/demoSelectors";
import { fetchDemoAlbum } from "../actions/demoActions";
import { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const defaultAlbumId = 1;

function Demo({ handleFetchDemoAlbum, demoAlbum }) {
  const [id, setId] = useState(defaultAlbumId);

  useEffect(() => {
    if (/\d+/.test(id)) {
      handleFetchDemoAlbum(id);
    }
  }, [handleFetchDemoAlbum, id]);

  const handleChange = (event) => {
    const { value } = event.target;
    setId(parseInt(value) || defaultAlbumId);
  };

  return (
    <Box m={4}>
      <Box mb={10}>
        <Link to="/">
          <Button variant="text">&#8592; Go back</Button>
        </Link>
      </Box>

      <Box display="flex" flexDirection="row" alignItems="center" ml={1}>
        <Box mr={2}>Album id (1-100):</Box>
        <Box mr={2}>
          <Input value={id} onChange={handleChange} />
        </Box>
      </Box>

      <Box py={2} ml={1}>
        <Typography variant="h6">Fetched album's title:</Typography>
        <Typography variant="body1">
          {demoAlbum?.title ? `"${demoAlbum?.title}"` : "Out of range!"}
        </Typography>
      </Box>
    </Box>
  );
}

const mapStateToProps = (state) => ({
  demoAlbum: getDemoAlbum(state),
});

const mapDispatchToProps = {
  handleFetchDemoAlbum: fetchDemoAlbum,
};

export default connect(mapStateToProps, mapDispatchToProps)(Demo);
