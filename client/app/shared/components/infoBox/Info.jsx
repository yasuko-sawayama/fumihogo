import React from "react";
import PropTypes from "prop-types";

const Info = ({
  info: {
    character_count,
    page_count,
    impression_count = 0,
    privacy_level,
    privacy_level_text,
    permission_list = null,
    created_at
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
        <span>リスト:</span> <strong>{permission_list.name}</strong>
      </li>
    )}

    <li>
      <span>作成日:</span> <strong>{created_at}</strong>
    </li>
  </ul>
);

Info.propTypes = {
  info: PropTypes.shape({
    character_count: PropTypes.number.isRequired,
    page_count: PropTypes.number.isRequired,
    impression_count: PropTypes.number,
    privacy_level: PropTypes.string.isRequired,
    privacy_level_text: PropTypes.string.isRequired,
    permission_list: PropTypes.shape(),
    created_at: PropTypes.string.isRequired
  }).isRequired
};

export default Info;
