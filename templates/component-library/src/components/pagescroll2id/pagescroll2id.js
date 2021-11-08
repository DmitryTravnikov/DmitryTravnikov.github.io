import {cLog} from '../../index.js';

import '../../libs/pagescroll2id/jquery.malihu.PageScroll2id.min.js';

$('.pagescroll2id__menu-link, .to-top-link').mPageScroll2id({
  offset: 50,
  scrollSpeed: 200
});