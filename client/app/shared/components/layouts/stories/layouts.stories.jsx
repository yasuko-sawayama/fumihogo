import React from "react";
import { storiesOf } from "@storybook/react";
import { MemoryRouter } from "react-router";
import { action } from "@storybook/addon-actions";

import Empty from "../Empty";
import Backend from "../Backend";
import ProfilePanel from "../../helpers/ProfilePanel";

storiesOf("Layouts", module)
  .add("Empty", () => <Empty>空のレイアウト</Empty>)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/", "products"]}>{story()}</MemoryRouter>
  ))
  .add("編集用", () => <Backend>編集用レイアウト</Backend>)
  .add("プロフィールパネル", () => <ProfilePanel />);
