import React from "react";
import PropTypes from "prop-types";
import {
  Typography,
  makeStyles,
  Box,
} from "@material-ui/core";
import colors from "../constants/colors";

const Block = ({ block }) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Typography className={classes.title}>{block.id}</Typography>
      <Typography className={classes.content}>{block.text}</Typography>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: '2px',
    padding: "8px",
    backgroundColor: "rgba(0, 0, 0, 0.12)",
    width: "100%",
  },
  title: {
    color: colors.primary,
    fontFamily: 'Roboto',
    fontSize: theme.typography.pxToRem(10),
    fontWeight: "700",
    lineHeight: "16px"
  },
  content: {
    color: colors.dark,
    fontFamily: 'Roboto',
    fontSize: theme.typography.pxToRem(14),
    fontWeight: "400",
    lineHeight: "20px"
  },
}));

Block.propTypes = {
  block: PropTypes.shape({
    id: PropTypes.string,
    text: PropTypes.string,
  }).isRequired,
};

export default Block;
