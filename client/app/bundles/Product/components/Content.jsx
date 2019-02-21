import React, { Component } from "react";
import PropTypes from "prop-types";

import InfoBox from "./product/Infobox";

const fetchContent = id => console.log(id) || { test: "test" };

class Content extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props);
    fetchContent(props.id);
    this.state = {
      product: {
        id: 1,
        title: "素敵なタイトル",
        description: "短い説明",
        auth: {
          update: true,
          show: true
        },
        author: {
          nickname: "sawayama_yasuko",
          id: 1
        },
        info: {
          created_at: "2018-12-11",
          character_count: 321,
          page_count: 123,
          impression_count: 1233,

          privacy_level: "private",
          privacy_level_text: "リスト限定公開",
          permission_list: {
            id: 2,
            name: "原稿用"
          }
        }
      }
    };
  }

  render() {
    return (
      <div>
        <InfoBox product={this.state.product} />
      </div>
    );
  }
}

export default Content;
