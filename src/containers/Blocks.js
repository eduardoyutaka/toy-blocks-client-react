import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../actions/blocks";
import Block from "../components/Block";
import { Box } from "@material-ui/core";

export class Blocks extends React.Component {
  componentDidMount() {
    this.props.actions.fetchBlocks(this.props.node);
  }

  render() {
    const { blocks } = this.props;
    return (
      <Box style={{ width: '100%' }}>
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

Blocks.defaultProps = {
  blocks: {
    list: []
  }
}

Blocks.propTypes = {
  actions: PropTypes.object.isRequired,
  blocks: PropTypes.object.isRequired,
};

function mapStateToProps(state, ownProps) {
  const nodeIndex = state.nodes.list.findIndex(p => p.url === ownProps.node.url);
  return {
    blocks: state.nodes.list[nodeIndex].blocks,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Blocks);
