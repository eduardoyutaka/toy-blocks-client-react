import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../actions/blocks";
import Block from "../components/Block";
import { Box } from "@material-ui/core";

export class Blocks extends React.Component {
  componentDidMount() {
    this.props.actions.fetchBlocks(this.props.blocks.list);
  }

  render() {
    const { blocks } = this.props;
    return (
      <Box>
        {blocks.list.map((block) => (
          <Block
            block={block}
            key={block.id}
          />
        ))}
      </Box>
    );
  }
}

Blocks.propTypes = {
  actions: PropTypes.object.isRequired,
  blocks: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    blocks: state.blocks,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Blocks);
