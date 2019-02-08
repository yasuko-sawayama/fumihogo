import React from "react";

import {
    Panel, PanelAction,
    PanelActionWrapper,
    PanelList,
    PanelListItem,
    PanelListTitle,
    PanelListWrapper,
    PanelUser
} from "../ui/Panel";

export default function ExamplePanel() {
    return (
      <Panel>
          <PanelUser name="John Bohn" subtitle="Copywriter" image="/img/tmp/user-8.jpg"/>

          <PanelListWrapper>
              <PanelListTitle>プロフィール</PanelListTitle>

              <PanelList>
                  <PanelListItem>Twitter: <a>John Doe</a></PanelListItem>
                  <PanelListItem>Pixiv: <a>xxxxxxx</a>.</PanelListItem>
                  <PanelListItem>何か一言</PanelListItem>
              </PanelList>

          </PanelListWrapper>
          <PanelActionWrapper>
              <PanelAction title="ブックマーク" icon="bookmark_border" />
              <PanelAction title="リスト" icon="group_add" />
              <PanelAction title="作品" icon="view_list" />
              <PanelAction title="検索" icon="search" />
          </PanelActionWrapper>
      </Panel>
    );
}
