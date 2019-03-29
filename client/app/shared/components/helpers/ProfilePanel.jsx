import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteEntity } from "~/utils/requestManager";

import {
  Panel,
  PanelAction,
  PanelActionWrapper,
  PanelList,
  PanelListItem,
  PanelListTitle,
  PanelListWrapper,
  PanelUser
} from "../ui/Panel";

// ログアウトして再読込。すぐに再読込すると正常にログアウトできない
const logout = () =>
  deleteEntity("/users/sign_out").then(
    setTimeout(() => {
      location.reload(true);
    }, 2000)
  );

const ExamplePanel = ({ currentUser }) =>
  currentUser && (
    <Panel>
      <PanelUser
        name={currentUser.twitterDisplayName || currentUser.nickname}
        subtitle={currentUser.twitterUrl ? "via Twitter" : ""}
        image={currentUser.avatar}
      />

      <PanelListWrapper>
        <PanelListTitle>プロフィール</PanelListTitle>
        <p>{currentUser.twitterDescription}</p>

        <PanelList>
          {currentUser.twitterUrl && (
            <PanelListItem>
              Twitter:{" "}
              <a href={currentUser.twitterUrl}>@{currentUser.nickname}</a>
            </PanelListItem>
          )}
          {/* <PanelListItem> */}
          {/* Pixiv: <a>xxxxxxx</a>. */}
          {/* </PanelListItem> */}
        </PanelList>
      </PanelListWrapper>
      <PanelActionWrapper>
        {/*<PanelAction title="ブックマーク" icon="bookmark_border" />*/}
        {/*<PanelAction title="リスト" icon="group_add" />*/}
        {/*<PanelAction title="作品" icon="view_list" />*/}
        {/*<PanelAction title="検索" icon="search" />*/}
        <PanelAction title="logout" icon="arrow_forward" onClick={logout} />
      </PanelActionWrapper>
    </Panel>
  );

ExamplePanel.propTypes = {
  currentUser: PropTypes.shape()
};

ExamplePanel.defaultProps = {
  currentUser: null
};

const mapStateToProps = state => ({
  currentUser: state.currentUserData
});

export default connect(mapStateToProps)(ExamplePanel);
