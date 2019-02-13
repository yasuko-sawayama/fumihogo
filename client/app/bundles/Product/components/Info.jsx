import React from "react";
import PropTypes from "prop-types";

const Info = ({
  info: {
    character_count,
    page_count,
    impression_count,
    privacy_level,
    privacy_level_text,
    permission_list: { name }
  }
}) => (
  <ul className="infobox-content-properties">
    <li>
      <span>文字数:</span> <strong>{character_count} count</strong>
    </li>

    <li>
      <span>ページ数:</span> <strong>{page_count} page</strong>
    </li>

    <li>
      <span>閲覧数:</span> <strong>{impression_count} views</strong>
    </li>

    <li>
      <span>公開範囲:</span> <strong>{privacy_level_text}</strong>
    </li>

    {privacy_level === "list" && (
      <li>
        <span>リスト:</span> <strong>{name}</strong>
      </li>
    )}
  </ul>
);

Info.propTypes = {
  info: PropTypes.shape({
    character_count: PropTypes.number.isRequired,
    page_count: PropTypes.number.isRequired
  }).isRequired
};

export default Info;
