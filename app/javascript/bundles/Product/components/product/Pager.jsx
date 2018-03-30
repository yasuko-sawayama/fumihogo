import React from 'react';

const Pager = () => (
  <ul class="pager">
    <li class="previous">
      <a href="/products/23/pages/2">
        <span aria-hidden="true" class="fa fa-backword"></span>
        　
        前のページ
      </a>
    </li>
    <li class="next">
      <a href="/products/23/pages/2">
        次のページ
        　
        <span aria-hidden="true" class="fa fa-forward"></span>
      </a>
    </li>
  </ul>
);

export default Pager;
