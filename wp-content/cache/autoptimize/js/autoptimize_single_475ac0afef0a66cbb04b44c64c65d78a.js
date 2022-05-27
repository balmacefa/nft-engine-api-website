/*!
 * FitVids 1.0
 *
 * Copyright 2011, Chris Coyier - http://css-tricks.com + Dave Rupert - http://daverupert.com
 * Credit to Thierry Koblentz - http://www.alistapart.com/articles/creating-intrinsic-ratios-for-video/
 * Released under the WTFPL license - http://sam.zoy.org/wtfpl/
 *
 * Date: Thu Sept 01 18:00:00 2011 -0500
 */
!function(t){"use strict";t.fn.fitVids=function(e){var i={customSelector:null};if(!document.getElementById("fit-vids-style")){var a=document.createElement("div"),s=document.getElementsByTagName("base")[0]||document.getElementsByTagName("script")[0];a.className="fit-vids-style",a.id="fit-vids-style",a.style.display="none",a.innerHTML="&shy;<style>                 .fluid-width-video-wrapper {                   width: 100%;                                position: relative;                         padding: 0;                      \t\t\t\t\t min-height: 1px;                         }                                                                                       .fluid-width-video-wrapper iframe,          .fluid-width-video-wrapper object,          .fluid-width-video-wrapper embed {             position: absolute;                         top: 0;                                     left: 0;                                    width: 100%;                                height: 100%;                            }                                         </style>",s.parentNode.insertBefore(a,s)}return e&&t.extend(i,e),this.each(function(){var e=["iframe[src*='player.vimeo.com']","iframe[src*='youtube.com']","iframe[src*='youtube-nocookie.com']","iframe[src*='kickstarter.com'][src*='video.html']","object","embed"];i.customSelector&&e.push(i.customSelector);var a=t(this).find(e.join(","));(a=a.not("object object")).each(function(){var e=t(this);if(!("embed"===this.tagName.toLowerCase()&&e.parent("object").length||e.parent(".fluid-width-video-wrapper").length)){if(isNaN(e.attr("height"))||isNaN(e.attr("width")))if(e.closest(".flexslider").length>0){if(e.closest("ul").find("li > img").length>0)i=e.closest("ul").height();else if(e.closest("ul").find("video-wrap").length>0)i=e.closest("ul").find("video-wrap").height();else i=500;s=i/(a=isNaN(parseInt(e.closest("li").attr("width"),10))?e.closest("li").width():parseInt(e.closest("li").attr("width"),10))}else if(e.closest(".portfolio_images").length>0){a=$j(".portfolio_images").width();if(e.next("img").length>0)i=e.next("img").height();else i=500;s=i/a}else if(e.closest(".post_image").length)s=(i="object"===this.tagName.toLowerCase()||e.attr("height")&&!isNaN(parseInt(e.attr("height"),10))?parseInt(e.attr("height"),10):e.height())/(a=isNaN(parseInt(e.attr("width"),10))?e.width():parseInt(e.attr("width"),10));else if(e.closest(".q_masonry_blog_post_image").length)s=(i="object"===this.tagName.toLowerCase()||e.attr("height")&&!isNaN(parseInt(e.attr("height"),10))?parseInt(e.attr("height"),10):e.height())/(a=isNaN(parseInt(e.attr("width"),10))?e.width():parseInt(e.attr("width"),10));else s=(i="object"===this.tagName.toLowerCase()||e.attr("height")&&!isNaN(parseInt(e.attr("height"),10))?parseInt(e.attr("height"),10):e.height())/(a=isNaN(parseInt(e.attr("width"),10))?e.parent().width():parseInt(e.attr("width"),10));else var i,a,s=(i=e.attr("height"))/(a=e.attr("width"));if(!e.attr("id")){var r="fitvid"+Math.floor(999999*Math.random());e.attr("id",r)}e.wrap('<div class="fluid-width-video-wrapper"></div>'),t(".fluid-width-video-wrapper").css("padding-top",100*s+"%")}})})}}(jQuery);