/* eslint-disable */
      /* This is a auto generated file for building the project */ 


      import { Fragment, useState } from "react";
      import { useResource, useVariableState } from "@webstudio-is/react-sdk/runtime";
      import { Body as Body, Link as Link, Link as Link_1 } from "@webstudio-is/sdk-components-react-router";
import { Box as Box, Fragment as Fragment_1, HtmlEmbed as HtmlEmbed, Slot as Slot, Image as Image, Heading as Heading, Paragraph as Paragraph, Text as Text, Vimeo as Vimeo, VimeoPreviewImage as VimeoPreviewImage, VimeoSpinner as VimeoSpinner, VimeoPlayButton as VimeoPlayButton, List as List, ListItem as ListItem, Button as Button, Separator as Separator } from "@webstudio-is/sdk-components-react";
import { NavigationMenu as NavigationMenu, NavigationMenuList as NavigationMenuList, NavigationMenuItem as NavigationMenuItem, NavigationMenuViewport as NavigationMenuViewport, Dialog as Dialog, DialogTrigger as DialogTrigger, DialogOverlay as DialogOverlay, DialogContent as DialogContent, DialogClose as DialogClose, Accordion as Accordion, AccordionItem as AccordionItem, AccordionHeader as AccordionHeader, AccordionTrigger as AccordionTrigger, AccordionContent as AccordionContent } from "@webstudio-is/sdk-components-react-radix";


      export const projectId = "c527137a-e075-4be8-ae98-a4e0d1328f15";

      export const lastPublished = "2025-09-16T00:37:00.295Z";

      export const siteName = "Klivio";

      export const breakpoints = [{"id":"jAWQK3_7D18H_5v0pK0z4"},{"id":"mONS0so-VrF1uS9rPlVcF","maxWidth":991},{"id":"zGIdqUzdPde7sHmF0aRQP","maxWidth":767},{"id":"wP-rcJFENR2yn86VzREAn","maxWidth":479}];

      export const favIconAsset: string | undefined =
        "logo_r1qaJQiri6sK3rPyq-Sar.svg";

      // Font assets on current page (can be preloaded)
      export const pageFontAssets: string[] =
        []

      export const pageBackgroundImageAssets: string[] =
        ["Flash_Light_VUVWt6WbLiaeKmTvGFlvl.svg","Background_g9dEsGQmYXW2awwLY55Xr.svg"]

      
            

            export const CustomCode = () => {
              return (<></>);
            }
          

      const Page = (_props: { system: any; }) => {
return <Body
id={"top"}
className={`w-body`}>
<Box
className={`w-box`}>
<Slot>
<Fragment_1>
<HtmlEmbed
code={"<style>\n    /* So we don't need to add a token to every paragraph to remove margin. */\n    p {\n        margin: 0;\n    }\n\n    * {\n        /* Make links scroll to their sections smoothly. */\n        scroll-behavior: smooth;\n    }\n\n    /* Nav Trigger show active when submenu is open. */\n    nav button[data-state=\"open\"] {\n        --navigation-menu-trigger-icon-transform: 180deg;\n        color: var(--foreground-muted);\n    }\n</style>"}
className={`w-html-embed`} />
<HtmlEmbed
code={"<style>\n:root {\n  --ani-duration: var(--duration-default, .2s);\n  --ani-delay: 0s;\n  --ani-slide-offset: 20%;\n  --ani-zoom-in-scale: 1;\n  --ani-zoom-out-scale: .85;\n  --ani-flip-rotate: 30deg;\n  --ani-easing: var(--easing-default, ease);\n  --ani-fill-mode: forwards;\n}\n[data-ani]:not([data-ani-children]),[data-ani-children]:not([data-ani-progress])>*{animation-duration:var(--ani-duration);animation-delay:var(--ani-delay);animation-timing-function:var(--ani-easing);animation-fill-mode:var(--ani-fill-mode);opacity:0}[data-ani-progress]:not([data-ani-children]),[data-ani-children]:not([data-ani])>*{transition-property:opacity,transform;transition-duration:var(--ani-duration);transition-timing-function:var(--ani-easing);opacity:0}\n@keyframes fadeIn{from{opacity:0}\nto{opacity:1}}\n@keyframes fadeOut{from{opacity:1}\nto{opacity:0}}[data-ani-children][data-ani='fade']>.in,[data-ani='fade']:where(.in:not([data-state]),[data-state$='open'],[data-state='active']){animation-name:fadeIn}[data-ani-children][data-ani='fade']>.out,[data-ani='fade']:where(.out:not([data-state]),[data-state='closed'],[data-state='inactive']){animation-name:fadeOut}\n@keyframes slideIn{from{opacity:0;translate:var(--ani-slide-transform)}\nto{opacity:1;translate:none}}\n@keyframes slideOut{from{opacity:1;translate:none}\nto{opacity:0;translate:var(--ani-slide-transform)}}[data-ani-children][data-ani|='slide']>.in,[data-ani|='slide']:where(.in:not([data-state]),[data-state$='open'],[data-state='active']){animation-name:slideIn}[data-ani-children][data-ani|='slide']>.out,[data-ani|='slide']:where(.out:not([data-state]),[data-state='closed'],[data-state='inactive']){animation-name:slideOut}[data-ani='slide-up']{--ani-slide-transform:0 var(--ani-slide-offset)}[data-ani='slide-down']{--ani-slide-transform:0 calc(-1*var(--ani-slide-offset))}[data-ani='slide-left']{--ani-slide-transform:var(--ani-slide-offset)}[data-ani='slide-right']{--ani-slide-transform:calc(-1*var(--ani-slide-offset))}\n@keyframes zoomIn{from{opacity:0;scale:var(--ani-zoom-out-scale)}\nto{opacity:1;scale:1}}\n@keyframes zoomOut{from{opacity:1;scale:1}\nto{opacity:0;scale:var(--ani-zoom-in-scale)}}[data-ani-children][data-ani='zoom']>.in,[data-ani|='zoom']:where(.in:not([data-state]),[data-state$='open'],[data-state='active']){animation-name:zoomIn}[data-ani-children][data-ani='zoom']>.out,[data-ani|='zoom']:where(.out:not([data-state]),[data-state='closed'],[data-state='inactive']){animation-name:zoomOut}[data-ani-children][data-ani-progress='zoom']>*,[data-ani-progress='zoom']:not([data-ani-children]){transform:scale(var(--ani-zoom-out-scale))}\n@keyframes flipInY{from{rotate:y var(--ani-flip-rotate);perspective:2000px;opacity:0}\nto{rotate:y 0;opacity:1}}\n@keyframes flipOutY{from{rotate:y 0;opacity:1}\nto{perspective:2000px;rotate:y var(--ani-flip-rotate);opacity:0}}\n@keyframes flipInX{from{perspective:2000px;rotate:x var(--ani-flip-rotate);opacity:0}\nto{rotate:x 0;opacity:1}}\n@keyframes flipOutX{from{rotate:x 0;opacity:1}\nto{perspective:2000px;rotate:x var(--ani-flip-rotate);opacity:0}}[data-ani-children][data-ani='flip-y']>.in,[data-ani='flip-y']:where(.in:not([data-state]),[data-state$='open'],[data-state='active']){animation-name:flipInY}[data-ani-children][data-ani='flip-x']>.in,[data-ani='flip-x']:where(.in:not([data-state]),[data-state$='open'],[data-state='active']){animation-name:flipInX}[data-ani-children][data-ani='flip-y']>.out,[data-ani='flip-y']:where(.out:not([data-state]),[data-state='closed'],[data-state='inactive']){animation-name:flipOutY}[data-ani-children][data-ani='flip-x']>.out,[data-ani='flip-x']:where(.out:not([data-state]),[data-state='closed'],[data-state='inactive']){animation-name:flipOutX}\n@keyframes expandDown{from{height:0}\nto{height:var(--newHeight)}}\n@keyframes expandUp{from{height:var(--newHeight)}\nto{height:0}}[data-ani='expand'],[data-ani='expand'][data-state='open'],[data-ani='expand'].in{--newHeight:var(--custom-height,var(--radix-accordion-content-height,var(--radix-collapsible-content-height,100%)));overflow:hidden;opacity:1}[data-ani-children][data-ani='expand']>.in,[data-ani='expand']:where(.in:not([data-state]),[data-state$='open'],[data-state='active']){animation:expandDown var(--ani-duration)var(--ani-easing)}[data-ani-children][data-ani='expand']>.out,[data-ani='expand']:where(.out:not([data-state]),[data-state='closed'],[data-state='inactive']){animation:expandUp var(--ani-duration)var(--ani-easing)}\n@media(prefers-reduced-motion:reduce){[data-ani]:not([data-ani-children]),[data-ani-progress]:not([data-ani-children]),[data-ani-children]>*{opacity:1;transform:none;animation:none;rotate:none;scale:none;translate:none}}\n</style>"}
className={`w-html-embed`} />
<Box
tag={"header"}
id={""}
className={`w-box c1357293 c9jnjeu czr2pxy c155uc7w cry9bxc c1lfjoq7 c1qyy4dh c1wt8a7g c1s46o9r cdczzub c1fd0kk1 c11gzs80 cjqo3r0 c1a5jpyh c3xzas1 c1n6cdq4 c1fozmku c1mpedrw c1rstvfo c1nd8hlk`}>
<Box
className={`w-box cry9bxc c1lxiyww ct02u4h c1s46o9r cdczzub c12n5uks csb0ifw cg5j03k c8od1c4 ckb5lut czjsrhv c1di64f2 c1ru090q cujxabw c119suh8 cjucu4u c13xb0l c1ncxhfh cd4a99d c150vpwe c22g687 cavd3zn c1qyy4dh c12sm2j2 codg43x cax3zcx c1axwber c16a1k66 c1ksohct c1482uel c1nd8hlk`}>
<Slot>
<Fragment_1>
<Link
aria-label={"Home"}
href={"/#top"}
className={`w-link`}>
<Image
loading={"eager"}
alt={""}
optimize={true}
src={"/assets/logo_branca_1_SjAvw5pfOJtKwQJvpkkUD.png"}
width={150}
height={85}
className={`w-image`} />
</Link>
</Fragment_1>
</Slot>
<Box
tag={"nav"}
aria-label={"main"}
className={`w-box cry9bxc c1qyy4dh ct02u4h c1fhkm63 clv8gve cc3dq2t`}>
<NavigationMenu
className={`w-navigation-menu czr2pxy`}>
<NavigationMenuList
className={`w-menu-list cry9bxc c1fhkm63 cqeb86t c1admj5d c34dwh1 c1qyy4dh ct02u4h c10zkoym ct8c5y2 c1n13r54 c18knjwi`}>
<NavigationMenuItem
data-ws-index="0"
className={`w-menu-item`}>
<Link
href={"/#about"}
className={`w-link c12y6bqh csru8nn c1e9wxra c422x95 c1kectvc c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c135vpv5 c1sche0c c1l2989r c3qzgd0 c1y6imu0 cl60rel c1ib9cr2 c12mjb61 c1223h70`}>
{"Como Funciona"}
</Link>
</NavigationMenuItem>
<NavigationMenuItem
data-ws-index="1"
className={`w-menu-item`}>
<Link
href={"/#funcionalidades"}
className={`w-link c12y6bqh csru8nn c1e9wxra c422x95 c1kectvc c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c135vpv5 c1sche0c c1l2989r c3qzgd0 c1y6imu0 cl60rel c1ib9cr2 c12mjb61 c1223h70`}>
{"Funcionalidades"}
</Link>
</NavigationMenuItem>
<NavigationMenuItem
data-ws-index="2"
className={`w-menu-item`}>
<Link
href={"/#precos"}
className={`w-link c12y6bqh csru8nn c1e9wxra c422x95 c1kectvc c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c135vpv5 c1sche0c c1l2989r c3qzgd0 c1y6imu0 cl60rel c1ib9cr2 c12mjb61 c1223h70`}>
{"Preços"}
</Link>
</NavigationMenuItem>
<NavigationMenuItem
data-ws-index="3"
className={`w-menu-item`}>
<Link
href={"/#faq"}
className={`w-link c12y6bqh csru8nn c1e9wxra c422x95 c1kectvc c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c135vpv5 c1sche0c c1l2989r c3qzgd0 c1y6imu0 cl60rel c1ib9cr2 c12mjb61 c1223h70`}>
{"FAQ"}
</Link>
</NavigationMenuItem>
</NavigationMenuList>
<Box
className={`w-box cdwd3jx c3xzas1 c1lzcxwg cry9bxc ct02u4h czr2pxy cdtylqg chmjof8`}>
<NavigationMenuViewport
data-ani={"zoom"}
className={`w-menu-viewport cavd3zn cpkqq5o cfugi66 ceu30e1 cgl7u82 crlid6h caoqbwa c1aguln c1ns98mi cm26ajs cd3iwfe c1yhcvvf cwc6hbl c11r52nx ckb5lut czjsrhv c1di64f2 c1ru090q cujxabw c119suh8 c16p8e7v c1axwber`} />
</Box>
</NavigationMenu>
</Box>
<Box
className={`w-box cc3dq2t c12sm2j2 cry9bxc`}>
<Link
className={`w-link c14yqvd4 c12n5uks csb0ifw cg5j03k c8od1c4 c135vpv5 csru8nn c1qyy4dh ct02u4h c1md20bl c1e892th c1qom380 c13tm33h czjsrhv c1di64f2 c1ru090q cujxabw c119suh8 cnqbj7z cz4drm4 cy1haag ci5f5wh clx2mg7 c1ph6sgd c1s4ttse cj3c47m cfw5mh8 c1apclts cqzihcd c82q2z c1t5a35i cl60rel c1ib9cr2 c55gr8u cra5x9r cm64msb`}>
<HtmlEmbed
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"32\" height=\"32\" fill=\"#000000\" viewBox=\"0 0 256 256\"><path d=\"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,16a88,88,0,0,1,73.72,40H128a48.08,48.08,0,0,0-45.6,33l-23.08-40A87.89,87.89,0,0,1,128,40Zm32,88a32,32,0,1,1-32-32A32,32,0,0,1,160,128ZM40,128a87.44,87.44,0,0,1,9.56-39.86L86.43,152c.06.1.13.19.19.28A48,48,0,0,0,137.82,175l-23.1,40A88.14,88.14,0,0,1,40,128Zm92.69,87.87L169.57,152c.08-.14.14-.28.22-.42a47.88,47.88,0,0,0-6-55.58H210a88,88,0,0,1-77.29,119.87Z\"></path></svg>"}
className={`w-html-embed csru8nn ch2prsz cg4iiql c1qyy4dh ct02u4h csvthht`} />
<Text
tag={"span"}
className={`w-text c14r73oo`}>
{"Instalar"}
</Text>
</Link>
</Box>
<Box
className={`w-box cwvpjlf cf4s3xc`}>
<Dialog>
<DialogTrigger>
<Button
aria-label={"Open mobile menu"}
type={"button"}
className={`w-button c14yqvd4 c12n5uks csb0ifw cg5j03k c8od1c4 c135vpv5 csru8nn c1qyy4dh ct02u4h c1md20bl c1e892th c1qom380 c13tm33h czjsrhv c1di64f2 c1ru090q cujxabw c119suh8 cnqbj7z cz4drm4 cy1haag c3pidkv clx2mg7 c1ph6sgd c1s4ttse cj3c47m cfw5mh8 c1apclts cqzihcd c82q2z c1t5a35i cl60rel c1ib9cr2 c55gr8u cra5x9r cm64msb c117up93 cxwdf9p c175hnfo`}>
<HtmlEmbed
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 22 22\" fill=\"currentColor\" width=\"100%\" height=\"100%\" style=\"display: block;\"><path fill-rule=\"evenodd\" d=\"M2 5.998a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Zm0 5.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Zm0 5.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z\" clip-rule=\"evenodd\"/></svg>"}
className={`w-html-embed`} />
</Button>
</DialogTrigger>
<DialogOverlay
data-ani={"fade"}
className={`w-dialog-overlay c1lfjoq7 c1n4ph0l c12ysg9e c12suyxz cfk9cie c1o373d6 c1eb27oh c1dnch4g cnbxdw5 cx6c9kw c174sw29 c10h2p1m`}>
<DialogContent
className={`w-dialog-content c1fhkm63 cx6c9kw c10ki0il colc7hu c174sw29 cmaksb1 c1i9o1yp coam49y`}>
<Box
className={`w-box cx6c9kw c1nd8hlk c1rstvfo cwnt1nz`}>
<Slot>
<Fragment_1>
<Link
aria-label={"Home"}
href={"/#top"}
className={`w-link`}>
<Image
loading={"eager"}
alt={""}
optimize={true}
src={"/assets/logo_branca_1_SjAvw5pfOJtKwQJvpkkUD.png"}
width={150}
height={85}
className={`w-image`} />
</Link>
</Fragment_1>
</Slot>
<DialogClose
aria-label={"Close mobile menu"}
id={"sheetCloseButton"}
className={`w-close-button c14yqvd4 c12n5uks csb0ifw cg5j03k c8od1c4 c135vpv5 csru8nn c1qyy4dh ct02u4h c1md20bl c1e892th c1qom380 c13tm33h czjsrhv c1di64f2 c1ru090q cujxabw c119suh8 cnqbj7z cz4drm4 cy1haag c3pidkv clx2mg7 c1ph6sgd c1s4ttse cj3c47m cfw5mh8 c1apclts cqzihcd c82q2z c1t5a35i cl60rel c1ib9cr2 c55gr8u cra5x9r cm64msb c117up93 cxwdf9p c175hnfo`}>
<HtmlEmbed
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\" fill=\"currentColor\" width=\"100%\" height=\"100%\" style=\"display: block;\"><path fill-rule=\"evenodd\" d=\"M13.566 2.434a.8.8 0 0 1 0 1.132L9.13 8l4.435 4.434a.8.8 0 0 1-1.132 1.132L8 9.13l-4.434 4.435a.8.8 0 0 1-1.132-1.132L6.87 8 2.434 3.566a.8.8 0 0 1 1.132-1.132L8 6.87l4.434-4.435a.8.8 0 0 1 1.132 0Z\" clip-rule=\"evenodd\"/></svg>"}
className={`w-html-embed`} />
</DialogClose>
</Box>
<Box
tag={"nav"}
aria-label={"Main mobile"}
className={`w-box cx6c9kw c1rstvfo c1bulmrh c2ogfof c174sw29`}>
<Link
href={"/#benefits"}
className={`w-link c12y6bqh csru8nn c1e9wxra c422x95 c1kectvc c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c135vpv5 c1sche0c c1l2989r c3qzgd0 c1y6imu0 cl60rel c1ib9cr2 c12mjb61 c1223h70`}>
{"Benefits"}
</Link>
<Link
href={"/#about"}
className={`w-link c12y6bqh csru8nn c1e9wxra c422x95 c1kectvc c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c135vpv5 c1sche0c c1l2989r c3qzgd0 c1y6imu0 cl60rel c1ib9cr2 c12mjb61 c1223h70`}>
{"About"}
</Link>
<Link
href={"/#testimonials"}
className={`w-link c12y6bqh csru8nn c1e9wxra c422x95 c1kectvc c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c135vpv5 c1sche0c c1l2989r c3qzgd0 c1y6imu0 cl60rel c1ib9cr2 c12mjb61 c1223h70`}>
{"Testimonials"}
</Link>
<Link
href={"/#faq"}
className={`w-link c12y6bqh csru8nn c1e9wxra c422x95 c1kectvc c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c135vpv5 c1sche0c c1l2989r c3qzgd0 c1y6imu0 cl60rel c1ib9cr2 c12mjb61 c1223h70`}>
{"FAQ"}
</Link>
</Box>
<Box
className={`w-box c891fy0`}>
<Link
href={"/#cta"}
className={`w-link c14yqvd4 c12n5uks csb0ifw cg5j03k c8od1c4 c135vpv5 csru8nn c1qyy4dh ct02u4h c1md20bl c1e892th c1qom380 c13tm33h czjsrhv c1di64f2 c1ru090q cujxabw c119suh8 cnqbj7z cz4drm4 cy1haag c1gfdtf0 caafw5v c1ph6sgd c1s4ttse cj3c47m cfw5mh8 c1apclts cqzihcd cax3zcx c1t5a35i cl60rel c1ib9cr2 c55gr8u cra5x9r cm64msb cop99s`}>
{"Take the first step"}
</Link>
</Box>
<HtmlEmbed
code={"<script type=\"module\">\nconst closeButton = document.getElementById('sheetCloseButton');\nconst samePageLinks = document.querySelectorAll('[data-state=\"open\"] [aria-current=\"page\"]');\nif (closeButton && samePageLinks.length > 0) {\n  samePageLinks.forEach(link => {\n    link.addEventListener('click', function () {\n      setTimeout(() => {\n        closeButton.click();\n        // After closing the sheet, wait for a short duration to avoid reflow issues.\n      }, 25);\n    });\n  });\n}\n</script>"}
executeScriptOnCanvas={true}
className={`w-html-embed`} />
</DialogContent>
</DialogOverlay>
</Dialog>
</Box>
</Box>
</Box>
</Fragment_1>
</Slot>
<Box
tag={"main"}
className={`w-box`}>
<Box
tag={"section"}
className={`w-box cjlljn7 c1mzb2kd c1uaptg7 c1cozyp5 crv1a4t cbrrmm8 cuo9dm5 c5egcmi cdtylqg chmjof8 cxz9xjl`}>
<Box
className={`w-box c1357293 c9jnjeu czr2pxy c155uc7w cry9bxc c1lfjoq7 c1778y6x c1wt8a7g c1s46o9r cdczzub c1fd0kk1 c11gzs80 cavd3zn`}>
<Box
className={`w-box cry9bxc c1lfjoq7 ct8c5y2 c10zkoym c1qyy4dh c1wt8a7g`}>
<Box
className={`w-box c13b531o c1my01bv c1a8d7ts c122t6uk c13xb0l c12n5uks csb0ifw cg5j03k c8od1c4 cry9bxc c1qyy4dh ct02u4h cn6056e c1117wcl c135vpv5 cpp0nin c1cb3y4c c1qom380`}>
<Text
className={`w-text`}>
{"#1 Ferramenta de Produtividade para WhatsApp"}
</Text>
</Box>
<Heading
tag={"h1"}
className={`w-heading c11nr3ex c11dowh9 c32myit cwrra4i cg5i74l c1nft1su c1qom380 c1357293 c9jnjeu cksqta0`}>
{"Pare de"}
<span
className={`w-element czt9u4x`}>
{" Conversar"}
</span>
{" "}
{""}
<br />
{""}
{"Comece a Crescer!"}
</Heading>
<Paragraph
className={`w-paragraph c16xpvrq c1qom380 cz5g8eb c1357293 c9jnjeu czt9u4x`}>
{"De conversas perdidas a negócios fechados. O CRM inteligente que organiza seu caos, automatiza seu trabalho e te coloca no controle total do seu faturamento."}
</Paragraph>
</Box>
<Box
className={`w-box cry9bxc c1lfjoq7 c10zkoym ct8c5y2`}>
<Box
className={`w-box c1qyy4dh ct02u4h cry9bxc c1lfjoq7 cn6056e c1117wcl`}>
<Link
className={`w-link c14yqvd4 c12n5uks csb0ifw cg5j03k c8od1c4 c135vpv5 csru8nn c1qyy4dh ct02u4h c1md20bl c1e892th c1qom380 c1jq23ex czjsrhv c1di64f2 c1ru090q cujxabw c119suh8 cnqbj7z cz4drm4 cy1haag ci5f5wh clx2mg7 c1ph6sgd c1s4ttse cj3c47m cfw5mh8 c1apclts cqzihcd c82q2z c1t5a35i cl60rel c1ib9cr2 c55gr8u cra5x9r cm64msb`}>
<HtmlEmbed
code={"<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 21 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M5.66126 9.49709L10.66 2.75989C11.0509 2.23298 11.7838 2.56093 11.7838 3.2628V8.47742C11.7838 8.89792 12.0711 9.23875 12.4256 9.23875H14.8569C15.4092 9.23875 15.7036 10.0112 15.3388 10.5029L10.34 17.2401C9.94908 17.767 9.21625 17.4391 9.21625 16.7372V11.5226C9.21625 11.1021 8.92892 10.7613 8.57443 10.7613H6.14311C5.59079 10.7613 5.29638 9.98884 5.66126 9.49709Z\" stroke=\"#171717\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n"}
className={`w-html-embed csru8nn ch2prsz cg4iiql c1qyy4dh ct02u4h`} />
<Text
tag={"span"}
className={`w-text`}>
{"Quero Minha Máquina de Vendas"}
</Text>
</Link>
<Text
className={`w-text`}>
{"Comece a usar em 3 minutos"}
</Text>
</Box>
<Box
className={`w-box cry9bxc c1qyy4dh ct02u4h cn6056e c1117wcl c1jjfh4b`}>
<Image
src={"/assets/Stars_Container_jbucb7QfGDj4d97pTEouh.svg"}
width={149}
height={20}
alt={"5 stars"}
loading={"eager"}
className={`w-image`} />
<Text
className={`w-text`}>
{"Teste por 30 dias. Risco zero com nossa Garantia Blindada."}
</Text>
</Box>
</Box>
<Box
className={`w-box czr2pxy c1bkqfhr cry9bxc c1qyy4dh ct02u4h cdxiycg`}>
<Vimeo
url={"https://vimeo.com/1118349855?share=copy"}
showPreview={true}
autoplay={true}
loop={true}
muted={true}
doNotTrack={true}
showControls={false}
className={`w-vimeo cavd3zn cu0rr2h czr2pxy cdtylqg chmjof8 cgl7u82 crlid6h caoqbwa c1aguln c4k3014 cnu4kgu c1yb3n9o cbrrmm8 cdip4vx c5egcmi cllqqut c15k4751 c1xzir7e`}>
<VimeoPreviewImage
alt={"Vimeo video preview image"}
sizes={"100vw"}
loading={"lazy"}
optimize={true}
className={`w-preview-image czr2pxy c1bkqfhr c1vzvmqh cdwd3jx`} />
<VimeoSpinner
className={`w-spinner cdwd3jx cuf9c1i cd1rb50 c8xup6y c57y1nl c9rhxl3 c1b6bgqp`}>
<HtmlEmbed
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" id=\"e2CRglijn891\" shape-rendering=\"geometricPrecision\" text-rendering=\"geometricPrecision\" viewBox=\"0 0 128 128\" fill=\"currentColor\" width=\"100%\" height=\"100%\" style=\"display: block;\"><style>@keyframes e2CRglijn892_tr__tr{0%{transform:translate(64px,64px) rotate(90deg);animation-timing-function:cubic-bezier(.42,0,.58,1)}50%{transform:translate(64px,64px) rotate(810deg);animation-timing-function:cubic-bezier(.42,0,.58,1)}to{transform:translate(64px,64px) rotate(1530deg)}}@keyframes e2CRglijn892_s_p{0%,to{stroke:#39fbbb}25%{stroke:#4a4efa}50%{stroke:#e63cfe}75%{stroke:#ffae3c}}@keyframes e2CRglijn892_s_do{0%{stroke-dashoffset:251.89}2.5%,52.5%{stroke-dashoffset:263.88;animation-timing-function:cubic-bezier(.42,0,.58,1)}25%,75%{stroke-dashoffset:131.945}to{stroke-dashoffset:251.885909}}#e2CRglijn892_tr{animation:e2CRglijn892_tr__tr 3000ms linear infinite normal forwards}#e2CRglijn892{animation-name:e2CRglijn892_s_p,e2CRglijn892_s_do;animation-duration:3000ms;animation-fill-mode:forwards;animation-timing-function:linear;animation-direction:normal;animation-iteration-count:infinite}</style><g id=\"e2CRglijn892_tr\" transform=\"translate(64,64) rotate(90)\"><circle id=\"e2CRglijn892\" r=\"42\" fill=\"none\" stroke=\"#39fbbb\" stroke-dasharray=\"263.89\" stroke-dashoffset=\"251.89\" stroke-linecap=\"round\" stroke-width=\"16\" transform=\"scale(-1,1) translate(0,0)\"/></g></svg>"}
className={`w-html-embed`} />
</VimeoSpinner>
<VimeoPlayButton
aria-label={"Play button"}
className={`w-play-button cdwd3jx c1nw4vj9 cuf9c1i cd1rb50 cry9bxc c1qyy4dh ct02u4h c1nj04wn c1nitjp7 c195lvp6 c1hr6a6t cxbr3c5 c7rjn6x cuccfz7 cagnu3j c1cw2f0j ci3odkx cd3iwfe c1yhcvvf cwc6hbl c11r52nx c16p8e7v c1jfw235 c1o1o09c citxhpm c486lga cbj6aey cl60rel c8gppyh`}>
<Box
aria-hidden={"true"}
className={`w-box c1u3r42f`}>
<HtmlEmbed
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 22 22\" fill=\"currentColor\" width=\"100%\" height=\"100%\" style=\"display: block;\"><path d=\"M4.766 5.765c0-.725 0-1.088.178-1.288a.93.93 0 0 1 .648-.294c.294-.015.65.186 1.359.588l9.234 5.235c.586.332.88.498.982.708.09.183.09.389 0 .572-.102.21-.396.376-.982.708l-9.234 5.235c-.71.402-1.065.603-1.359.588a.93.93 0 0 1-.648-.294c-.178-.2-.178-.563-.178-1.288V5.765Z\"/></svg>"}
className={`w-html-embed`} />
</Box>
</VimeoPlayButton>
</Vimeo>
</Box>
</Box>
</Box>
<Box
tag={"section"}
id={"benefits"}
className={`w-box cna0hdz c1mzb2kd c1uaptg7 c1cozyp5 crv1a4t cbrrmm8 cuo9dm5 c5egcmi cxz9xjl`}>
<Box
className={`w-box c1357293 c9jnjeu czr2pxy c155uc7w cry9bxc c1lfjoq7 c1778y6x c1wt8a7g c1s46o9r cdczzub c1fd0kk1 c11gzs80`}>
<Box
className={`w-box cry9bxc c1lfjoq7 ct8c5y2 c10zkoym c1qyy4dh c1wt8a7g`}>
<Box
className={`w-box c13b531o c1my01bv c1a8d7ts c122t6uk c13xb0l c12n5uks csb0ifw cg5j03k c8od1c4 cry9bxc c1qyy4dh ct02u4h cn6056e c1117wcl c135vpv5 cpp0nin c1cb3y4c c1qom380`}>
<Text
className={`w-text`}>
{"Por que escolher a Klivio?"}
</Text>
</Box>
<Heading
tag={"h2"}
className={`w-heading c1dxq9cf c11dowh9 c32myit cwrra4i c12y6bqh c74kosi c1qom380 c1357293 c9jnjeu c1dhz37v`}>
{"Seu WhatsApp é um Ativo ou "}
<span
className={`w-element czt9u4x`}>
{"um Caos"}
</span>
</Heading>
<Paragraph
className={`w-paragraph c16xpvrq c1qom380 c62q3t9 c1357293 c9jnjeu czt9u4x`}>
{"Se você marcou \"sim\" para qualquer item abaixo, você não está perdendo tempo, está perdendo dinheiro."}
</Paragraph>
</Box>
<div
className={`w-element cir85gx c9ylysu cuj80l1`}>
<Box
className={`w-box cejtdrx cir85gx c12sm2j2`}>
<HtmlEmbed
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" \n     width=\"32\" height=\"32\" \n     fill=\"var(--background-accent)\" \n     viewBox=\"0 0 256 256\">\n  <path d=\"M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z\"></path>\n</svg>"}
className={`w-html-embed cir85gx c14mc9tt`} />
<h1
className={`w-element cir85gx c12y6bqh`}>
{"Listas de transmissão"}
<b
className={`w-element czt9u4x`}>
{" que ninguém responde?"}
</b>
</h1>
</Box>
<Box
className={`w-box cejtdrx cir85gx c12sm2j2`}>
<HtmlEmbed
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" \n     width=\"32\" height=\"32\" \n     fill=\"var(--background-accent)\" \n     viewBox=\"0 0 256 256\">\n  <path d=\"M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z\"></path>\n</svg>"}
className={`w-html-embed cir85gx c14mc9tt`} />
<h1
className={`w-element cir85gx czt9u4x`}>
<b
className={`w-element c12y6bqh`}>
{"Esquece de fazer follow-up"}
</b>
{" com clientes importantes?"}
</h1>
</Box>
<Box
className={`w-box cejtdrx cir85gx c12sm2j2`}>
<HtmlEmbed
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" \n     width=\"32\" height=\"32\" \n     fill=\"var(--background-accent)\" \n     viewBox=\"0 0 256 256\">\n  <path d=\"M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z\"></path>\n</svg>"}
className={`w-html-embed cir85gx c14mc9tt`} />
<h1
className={`w-element cir85gx czt9u4x`}>
<b
className={`w-element c12y6bqh`}>
{"Perde tempo procurando"}
</b>
{" fotos, documentos ou o preço "}
</h1>
</Box>
<Box
className={`w-box cejtdrx cir85gx c12sm2j2`}>
<HtmlEmbed
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" \n     width=\"32\" height=\"32\" \n     fill=\"var(--background-accent)\" \n     viewBox=\"0 0 256 256\">\n  <path d=\"M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z\"></path>\n</svg>"}
className={`w-html-embed cir85gx c14mc9tt`} />
<h1
className={`w-element cir85gx czt9u4x`}>
<b
className={`w-element c12y6bqh`}>
{"Digita a mesma mensagem"}
</b>
{" de apresentação dezenas de vezes por dia?"}
</h1>
</Box>
</div>
</Box>
</Box>
<Box
tag={"section"}
id={"about"}
className={`w-box cna0hdz c1mzb2kd c1uaptg7 c1cozyp5 crv1a4t cbrrmm8 cuo9dm5 c5egcmi cxz9xjl`}>
<Box
className={`w-box c1357293 c9jnjeu czr2pxy c155uc7w cry9bxc c1lfjoq7 c1778y6x c1wt8a7g c1s46o9r cdczzub c1fd0kk1 c11gzs80`}>
<Box
className={`w-box cry9bxc c1lfjoq7 ct8c5y2 c10zkoym c1qyy4dh c1wt8a7g`}>
<Box
className={`w-box c13b531o c1my01bv c1a8d7ts c122t6uk c13xb0l c12n5uks csb0ifw cg5j03k c8od1c4 cry9bxc c1qyy4dh ct02u4h cn6056e c1117wcl c135vpv5 cpp0nin c1cb3y4c c1qom380`}>
<Text
className={`w-text`}>
{"Get Started in Minutes"}
</Text>
</Box>
<Heading
tag={"h2"}
className={`w-heading c1dxq9cf c11dowh9 c32myit cwrra4i c12y6bqh c74kosi c1qom380 c1357293 c9jnjeu c1dhz37v`}>
<span
className={`w-element czt9u4x`}>
{"A"}
</span>
{" Klivio Organiza o Caos para Você Lucrar"}
</Heading>
<Paragraph
className={`w-paragraph c16xpvrq c1qom380 c62q3t9 c1357293 c9jnjeu czt9u4x`}>
{"From setup to success in three simple steps. Here’s how you can start maximizing productivity right away."}
</Paragraph>
<p
className={`w-element`}>
{"A Klivio Organiza o Caos para Você Lucrar."}
</p>
</Box>
<Box
tag={"div"}
className={`w-box copqmak c1s46o9r ct8c5y2 cevxs5e co2qwzx c1qyy4dh ckowic5 cx6c9kw c174sw29 c1i9o1yp cmaksb1`}>
<Box
className={`w-box cry9bxc c1lfjoq7 c1wt8a7g c1z0l37u c1ml0hr7 cgl7u82 crlid6h caoqbwa c1aguln ckb5lut czjsrhv c1di64f2 c1ru090q cujxabw c119suh8 cjucu4u c13xb0l c1ncxhfh cd4a99d cdtylqg chmjof8 codg43x c1cf1dh7 c1axwber`}>
<Box
className={`w-box c1ns98mi c1vwb4m1 c18f4fh9 c1wn9gbn ckhl5v6 cry9bxc c1qyy4dh ct02u4h c14sxfy0`}>
<Image
src={"/assets/Frame_12_8LUSilf7JafApp_ZvBGi2.svg"}
width={532}
height={308}
alt={"3 steps"}
className={`w-image c1on8ohe c3qzgd0 c1sq0zem ch4lyeb`} />
</Box>
</Box>
<Box
className={`w-box cry9bxc c1lfjoq7 c10zkoym ct8c5y2 c16xs6ny c1wt8a7g`}>
<Heading
tag={"h3"}
className={`w-heading cuoke4w c11dowh9 c32myit cwrra4i c12y6bqh`}>
<b
className={`w-element`}>
{"Controle Total do seu Funil"}
</b>
</Heading>
<Paragraph
className={`w-paragraph`}>
{"Com nosso funil visual (Kanban), você sabe exatamente em que etapa cada cliente está. Tenha a clareza de um CEO e a certeza de que nenhuma oportunidade está sendo esquecida."}
</Paragraph>
</Box>
</Box>
<Box
tag={"div"}
className={`w-box copqmak c1s46o9r ct8c5y2 cevxs5e co2qwzx c1qyy4dh ckowic5 cx6c9kw c13vvg1g c1i9o1yp cmaksb1`}>
<Box
className={`w-box cry9bxc c1lfjoq7 c10zkoym ct8c5y2 c16xs6ny c1wt8a7g`}>
<Heading
tag={"h3"}
className={`w-heading cuoke4w c11dowh9 c32myit cwrra4i c12y6bqh`}>
<b
className={`w-element`}>
{"Automação que Liberta seu Tempo"}
</b>
</Heading>
<Paragraph
className={`w-paragraph`}>
{"Respostas rápidas, agendamento de mensagens e envios inteligentes fazem o trabalho repetitivo por você. Liberte horas do seu dia para focar em estratégia e negociações importantes."}
</Paragraph>
</Box>
<Box
className={`w-box cry9bxc c1lfjoq7 c1wt8a7g c1z0l37u c1ml0hr7 cgl7u82 crlid6h caoqbwa c1aguln ckb5lut czjsrhv c1di64f2 c1ru090q cujxabw c119suh8 cjucu4u c13xb0l c1ncxhfh cd4a99d cdtylqg chmjof8 codg43x c1cf1dh7 c1axwber`}>
<Box
className={`w-box c1ns98mi c1vwb4m1 c18f4fh9 c1wn9gbn ckhl5v6 cry9bxc c1qyy4dh ct02u4h c14sxfy0`}>
<Image
src={"/assets/icon_example_group_Eiu7xs3zoKzYtHlcUXkR8.svg"}
width={434}
height={432}
alt={"last puzzle piece going in"}
className={`w-image c19l216t`} />
</Box>
</Box>
</Box>
<Box
tag={"div"}
className={`w-box copqmak c1s46o9r ct8c5y2 cevxs5e co2qwzx c1qyy4dh ckowic5 cx6c9kw c174sw29 c1i9o1yp cmaksb1`}>
<Box
className={`w-box cry9bxc c1lfjoq7 c1wt8a7g c1z0l37u c1ml0hr7 cgl7u82 crlid6h caoqbwa c1aguln ckb5lut czjsrhv c1di64f2 c1ru090q cujxabw c119suh8 cjucu4u c13xb0l c1ncxhfh cd4a99d cdtylqg chmjof8 codg43x c1cf1dh7 c1axwber`}>
<Box
className={`w-box c1ns98mi c1vwb4m1 c18f4fh9 c1wn9gbn ckhl5v6 cry9bxc c1qyy4dh ct02u4h c14sxfy0`}>
<Image
src={"/assets/chart-up_4TgisRLaZq-vcC7w2i7Ca.svg"}
width={432}
height={432}
alt={"chart going up"}
className={`w-image c19l216t`} />
</Box>
</Box>
<Box
className={`w-box cry9bxc c1lfjoq7 c10zkoym ct8c5y2 c16xs6ny c1wt8a7g`}>
<Heading
tag={"h3"}
className={`w-heading cuoke4w c11dowh9 c32myit cwrra4i c12y6bqh`}>
<b
className={`w-element`}>
{"Inteligência que Gera Vantagem"}
</b>
</Heading>
<Paragraph
className={`w-paragraph`}>
{"Funcionalidades que seus concorrentes nem sonham que existem. Saiba mais, responda mais rápido e tome decisões baseadas em dados para estar sempre um passo à frente."}
</Paragraph>
</Box>
</Box>
</Box>
<Box
tag={"section"}
id={"funcionalidades"}
className={`w-box cna0hdz c1mzb2kd c1uaptg7 c1cozyp5 crv1a4t cbrrmm8 cuo9dm5 c5egcmi cxz9xjl`}>
<Box
className={`w-box c1357293 c9jnjeu czr2pxy c155uc7w cry9bxc c1lfjoq7 c1778y6x c1wt8a7g c1s46o9r cdczzub c1fd0kk1 c11gzs80`}>
<Box
className={`w-box cry9bxc c1lfjoq7 ct8c5y2 c10zkoym c1qyy4dh c1wt8a7g`}>
<Box
className={`w-box c13b531o c1my01bv c1a8d7ts c122t6uk c13xb0l c12n5uks csb0ifw cg5j03k c8od1c4 cry9bxc c1qyy4dh ct02u4h cn6056e c1117wcl c135vpv5 cpp0nin c1cb3y4c c1qom380`}>
<Text
className={`w-text`}>
{"Por que escolher a Klivio?"}
</Text>
</Box>
<Heading
tag={"h2"}
className={`w-heading c1dxq9cf c11dowh9 c32myit cwrra4i c12y6bqh c74kosi c1qom380 c1357293 c9jnjeu c1dhz37v`}>
{"Um Arsenal Completo. Não Apenas"}
<span
className={`w-element czt9u4x`}>
{" Funcionalidades"}
</span>
</Heading>
</Box>
<Box
id={"cards"}
className={`w-box copqmak c10zkoym ct8c5y2 cejtdrx co2qwzx c1vrexag cx6c9kw c174sw29 ${"cards"}`}>
<Box
className={`w-box cry9bxc c1lfjoq7 c1wt8a7g c1z0l37u c1ml0hr7 cgl7u82 crlid6h caoqbwa c1aguln ckb5lut czjsrhv c1di64f2 c1ru090q cujxabw c119suh8 cjucu4u c13xb0l c1ncxhfh cd4a99d cdtylqg chmjof8 codg43x cax3zcx c1axwber`}>
<Box
className={`w-box c1ns98mi c1vwb4m1 c18f4fh9 c1wn9gbn ckhl5v6 cry9bxc c1qyy4dh ct02u4h c14sxfy0`}>
<HtmlEmbed
code={"<svg width=\"130\" height=\"130\" viewBox=\"0 0 130 130\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g filter=\"url(#filter0_dd_4002_471)\">\n<g clip-path=\"url(#clip0_4002_471)\">\n<rect x=\"9\" y=\"9\" width=\"112\" height=\"112\" rx=\"24\" fill=\"url(#paint0_linear_4002_471)\"></rect>\n<g filter=\"url(#filter1_d_4002_471)\">\n<g transform=\"scale(0.35) translate(80, 80)\">\n<path d=\"M216,48H40a8,8,0,0,0-8,8V208a16,16,0,0,0,16,16H88a16,16,0,0,0,16-16V160h48v16a16,16,0,0,0,16,16h40a16,16,0,0,0,16-16V56A8,8,0,0,0,216,48ZM88,208H48V128H88Zm0-96H48V64H88Zm64,32H104V64h48Zm56,32H168V128h40Zm0-64H168V64h40Z\" fill=\"#DDFF00\"></path>\n</g>\n</g>\n</g>\n<rect x=\"9.10895\" y=\"9.10895\" width=\"111.782\" height=\"111.782\" rx=\"23.8911\" stroke=\"url(#paint1_linear_4002_471)\" stroke-width=\"0.217893\"></rect>\n</g>\n<defs>\n<filter id=\"filter0_dd_4002_471\" x=\"0.284271\" y=\"0.284271\" width=\"129.431\" height=\"129.431\" filterUnits=\"userSpaceOnUse\" color-interpolation-filters=\"sRGB\">\n<feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\"></feFlood>\n<feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\" result=\"hardAlpha\"></feColorMatrix>\n<feOffset dx=\"2.17893\" dy=\"2.17893\"></feOffset>\n<feGaussianBlur stdDeviation=\"3.2684\"></feGaussianBlur>\n<feColorMatrix type=\"matrix\" values=\"0 0 0 0 0.0509804 0 0 0 0 0.0509804 0 0 0 0 0.0509804 0 0 0 1 0\"></feColorMatrix>\n<feBlend mode=\"normal\" in2=\"BackgroundImageFix\" result=\"effect1_dropShadow_4002_471\"></feBlend>\n<feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\" result=\"hardAlpha\"></feColorMatrix>\n<feOffset dx=\"-2.17893\" dy=\"-2.17893\"></feOffset>\n<feGaussianBlur stdDeviation=\"3.2684\"></feGaussianBlur>\n<feColorMatrix type=\"matrix\" values=\"0 0 0 0 0.0901961 0 0 0 0 0.0901961 0 0 0 0 0.0901961 0 0 0 1 0\"></feColorMatrix>\n<feBlend mode=\"normal\" in2=\"effect1_dropShadow_4002_471\" result=\"effect2_dropShadow_4002_471\"></feBlend>\n<feBlend mode=\"normal\" in=\"SourceGraphic\" in2=\"effect2_dropShadow_4002_471\" result=\"shape\"></feBlend>\n</filter>\n<filter id=\"filter1_d_4002_471\" x=\"-31\" y=\"-15\" width=\"192\" height=\"192\" filterUnits=\"userSpaceOnUse\" color-interpolation-filters=\"sRGB\">\n<feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\"></feFlood>\n<feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\" result=\"hardAlpha\"></feColorMatrix>\n<feOffset dy=\"16\"></feOffset>\n<feGaussianBlur stdDeviation=\"32\"></feGaussianBlur>\n<feComposite in2=\"hardAlpha\" operator=\"out\"></feComposite>\n<feColorMatrix type=\"matrix\" values=\"0 0 0 0 0.866667 0 0 0 0 1 0 0 0 0 0 0 0 0 0.4 0\"></feColorMatrix>\n<feBlend mode=\"normal\" in2=\"BackgroundImageFix\" result=\"effect1_dropShadow_4002_471\"></feBlend>\n<feBlend mode=\"normal\" in=\"SourceGraphic\" in2=\"effect1_dropShadow_4002_471\" result=\"shape\"></feBlend>\n</filter>\n<linearGradient id=\"paint0_linear_4002_471\" x1=\"65\" y1=\"9\" x2=\"65\" y2=\"121\" gradientUnits=\"userSpaceOnUse\">\n<stop stop-color=\"#1E1E1E\"></stop>\n<stop offset=\"1\" stop-color=\"#141414\"></stop>\n</linearGradient>\n<linearGradient id=\"paint1_linear_4002_471\" x1=\"9\" y1=\"9\" x2=\"130.814\" y2=\"20.9488\" gradientUnits=\"userSpaceOnUse\">\n<stop stop-color=\"#747474\"></stop>\n<stop offset=\"0.1\" stop-color=\"#171717\" stop-opacity=\"0\"></stop>\n<stop offset=\"0.9\" stop-color=\"#171717\" stop-opacity=\"0\"></stop>\n<stop offset=\"1\" stop-color=\"#747474\"></stop>\n</linearGradient>\n<clipPath id=\"clip0_4002_471\">\n<rect x=\"9\" y=\"9\" width=\"112\" height=\"112\" rx=\"24\" fill=\"white\"></rect>\n</clipPath>\n</defs>\n</svg>"}
className={`w-html-embed`} />
</Box>
<Box
className={`w-box cir85gx c1lfjoq7 c16xs6ny c1wt8a7g c1z0l37u c1ml0hr7 cmepw80 ccry0es cl1ou15 c1fhkm63 clv8gve`}>
<Heading
tag={"h3"}
className={`w-heading cuoke4w c11dowh9 c32myit cwrra4i c12y6bqh`}>
{"CRM Kanban"}
</Heading>
<Paragraph
className={`w-paragraph`}>
{"Organize seus contatos de forma eficiente em diferentes abas, potencializando suas estratégias de vendas."}
{""}
<br />
{""}
</Paragraph>
</Box>
</Box>
<Box
className={`w-box cry9bxc c1lfjoq7 c1wt8a7g c1z0l37u c1ml0hr7 cgl7u82 crlid6h caoqbwa c1aguln ckb5lut czjsrhv c1di64f2 c1ru090q cujxabw c119suh8 cjucu4u c13xb0l c1ncxhfh cd4a99d cdtylqg chmjof8 codg43x cax3zcx c1axwber`}>
<Box
className={`w-box c1ns98mi c1vwb4m1 c18f4fh9 c1wn9gbn ckhl5v6 cry9bxc c1qyy4dh ct02u4h c14sxfy0`}>
<HtmlEmbed
code={"<svg width=\"130\" height=\"130\" viewBox=\"0 0 130 130\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g filter=\"url(#filter0_dd_4002_471)\">\n<g clip-path=\"url(#clip0_4002_471)\">\n<rect x=\"9\" y=\"9\" width=\"112\" height=\"112\" rx=\"24\" fill=\"url(#paint0_linear_4002_471)\"></rect>\n<g filter=\"url(#filter1_d_4002_471)\">\n<g transform=\"scale(0.35) translate(80, 80)\">\n<path d=\"M192.5,171.47A88.34,88.34,0,0,0,224,101.93c-1-45.71-37.61-83.4-83.24-85.8A88,88,0,0,0,48,102L25.55,145.18c-.09.18-.18.36-.26.54a16,16,0,0,0,7.55,20.62l.25.11L56,176.94V208a16,16,0,0,0,16,16h48a8,8,0,0,0,0-16H72V171.81a8,8,0,0,0-4.67-7.28L40,152l23.07-44.34A7.9,7.9,0,0,0,64,104a72,72,0,0,1,56-70.21V49.38a24,24,0,1,0,16,0V32c1.3,0,2.6,0,3.9,.1A72.26,72.26,0,0,1,203.84,80H184a8,8,0,0,0-6.15,2.88L152.34,113.5a24.06,24.06,0,1,0,12.28,10.25L187.75,96h19.79q.36,3.12.44,6.3a72.26,72.26,0,0,1-28.78,59.3,8,8,0,0,0-3.14,7.39l8,64a8,8,0,0,0,7.93,7,8.39,8.39,0,0,0,1-.06,8,8,0,0,0,6.95-8.93ZM128,80a8,8,0,1,1,8-8A8,8,0,0,1,128,80Zm16,64a8,8,0,1,1,8-8A8,8,0,0,1,144,144Z\" fill=\"#DDFF00\"></path>\n</g>\n</g>\n</g>\n<rect x=\"9.10895\" y=\"9.10895\" width=\"111.782\" height=\"111.782\" rx=\"23.8911\" stroke=\"url(#paint1_linear_4002_471)\" stroke-width=\"0.217893\"></rect>\n</g>\n<defs>\n<filter id=\"filter0_dd_4002_471\" x=\"0.284271\" y=\"0.284271\" width=\"129.431\" height=\"129.431\" filterUnits=\"userSpaceOnUse\" color-interpolation-filters=\"sRGB\">\n<feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\"></feFlood>\n<feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\" result=\"hardAlpha\"></feColorMatrix>\n<feOffset dx=\"2.17893\" dy=\"2.17893\"></feOffset>\n<feGaussianBlur stdDeviation=\"3.2684\"></feGaussianBlur>\n<feColorMatrix type=\"matrix\" values=\"0 0 0 0 0.0509804 0 0 0 0 0.0509804 0 0 0 0 0.0509804 0 0 0 1 0\"></feColorMatrix>\n<feBlend mode=\"normal\" in2=\"BackgroundImageFix\" result=\"effect1_dropShadow_4002_471\"></feBlend>\n<feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\" result=\"hardAlpha\"></feColorMatrix>\n<feOffset dx=\"-2.17893\" dy=\"-2.17893\"></feOffset>\n<feGaussianBlur stdDeviation=\"3.2684\"></feGaussianBlur>\n<feColorMatrix type=\"matrix\" values=\"0 0 0 0 0.0901961 0 0 0 0 0.0901961 0 0 0 0 0.0901961 0 0 0 1 0\"></feColorMatrix>\n<feBlend mode=\"normal\" in2=\"effect1_dropShadow_4002_471\" result=\"effect2_dropShadow_4002_471\"></feBlend>\n<feBlend mode=\"normal\" in=\"SourceGraphic\" in2=\"effect2_dropShadow_4002_471\" result=\"shape\"></feBlend>\n</filter>\n<filter id=\"filter1_d_4002_471\" x=\"-31\" y=\"-15\" width=\"192\" height=\"192\" filterUnits=\"userSpaceOnUse\" color-interpolation-filters=\"sRGB\">\n<feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\"></feFlood>\n<feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\" result=\"hardAlpha\"></feColorMatrix>\n<feOffset dy=\"16\"></feOffset>\n<feGaussianBlur stdDeviation=\"32\"></feGaussianBlur>\n<feComposite in2=\"hardAlpha\" operator=\"out\"></feComposite>\n<feColorMatrix type=\"matrix\" values=\"0 0 0 0 0.866667 0 0 0 0 1 0 0 0 0 0 0 0 0 0.4 0\"></feColorMatrix>\n<feBlend mode=\"normal\" in2=\"BackgroundImageFix\" result=\"effect1_dropShadow_4002_471\"></feBlend>\n<feBlend mode=\"normal\" in=\"SourceGraphic\" in2=\"effect1_dropShadow_4002_471\" result=\"shape\"></feBlend>\n</filter>\n<linearGradient id=\"paint0_linear_4002_471\" x1=\"65\" y1=\"9\" x2=\"65\" y2=\"121\" gradientUnits=\"userSpaceOnUse\">\n<stop stop-color=\"#1E1E1E\"></stop>\n<stop offset=\"1\" stop-color=\"#141414\"></stop>\n</linearGradient>\n<linearGradient id=\"paint1_linear_4002_471\" x1=\"9\" y1=\"9\" x2=\"130.814\" y2=\"20.9488\" gradientUnits=\"userSpaceOnUse\">\n<stop stop-color=\"#747474\"></stop>\n<stop offset=\"0.1\" stop-color=\"#171717\" stop-opacity=\"0\"></stop>\n<stop offset=\"0.9\" stop-color=\"#171717\" stop-opacity=\"0\"></stop>\n<stop offset=\"1\" stop-color=\"#747474\"></stop>\n</linearGradient>\n<clipPath id=\"clip0_4002_471\">\n<rect x=\"9\" y=\"9\" width=\"112\" height=\"112\" rx=\"24\" fill=\"white\"></rect>\n</clipPath>\n</defs>\n</svg>"}
className={`w-html-embed`} />
</Box>
<Box
className={`w-box cir85gx c1lfjoq7 c16xs6ny c1wt8a7g c1z0l37u c1ml0hr7 cmepw80 ccry0es cl1ou15 c1fhkm63 clv8gve`}>
<Heading
tag={"h3"}
className={`w-heading cuoke4w c11dowh9 c32myit cwrra4i c12y6bqh`}>
{"Agente IA chat GPT"}
{""}
<br />
{""}
</Heading>
<Paragraph
className={`w-paragraph`}>
{"Atende seus clientes 24 horas por dia, 7 dias por semana com o chat GPT e venda muito mais com inteligência artificial."}
{""}
<br />
{""}
</Paragraph>
</Box>
</Box>
<Box
className={`w-box cry9bxc c1lfjoq7 c1wt8a7g c1z0l37u c1ml0hr7 cgl7u82 crlid6h caoqbwa c1aguln ckb5lut czjsrhv c1di64f2 c1ru090q cujxabw c119suh8 cjucu4u c13xb0l c1ncxhfh cd4a99d cdtylqg chmjof8 codg43x cax3zcx c1axwber`}>
<Box
className={`w-box c1ns98mi c1vwb4m1 c18f4fh9 c1wn9gbn ckhl5v6 cry9bxc c1qyy4dh ct02u4h c14sxfy0`}>
<HtmlEmbed
code={"<svg width=\"130\" height=\"130\" viewBox=\"0 0 130 130\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g filter=\"url(#filter0_dd_4002_471)\">\n<g clip-path=\"url(#clip0_4002_471)\">\n<rect x=\"9\" y=\"9\" width=\"112\" height=\"112\" rx=\"24\" fill=\"url(#paint0_linear_4002_471)\"></rect>\n<g filter=\"url(#filter1_d_4002_471)\">\n<g transform=\"scale(0.35) translate(80, 80)\">\n<path d=\"M227.32,28.68a16,16,0,0,0-15.66-4.08l-.15,0L19.57,82.84a16,16,0,0,0-2.49,29.8L102,154l41.3,84.87A15.86,15.86,0,0,0,157.74,248q.69,0,1.38-.06a15.88,15.88,0,0,0,14-11.51l58.2-191.94c0-.05,0-.1,0-.15A16,16,0,0,0,227.32,28.68ZM157.83,231.85l-.05.14,0-.07-40.06-82.3,48-48a8,8,0,0,0-11.31-11.31l-48,48L24.08,98.25l-.07,0,.14,0L216,40Z\" fill=\"#DDFF00\"></path>\n</g>\n</g>\n</g>\n<rect x=\"9.10895\" y=\"9.10895\" width=\"111.782\" height=\"111.782\" rx=\"23.8911\" stroke=\"url(#paint1_linear_4002_471)\" stroke-width=\"0.217893\"></rect>\n</g>\n<defs>\n<filter id=\"filter0_dd_4002_471\" x=\"0.284271\" y=\"0.284271\" width=\"129.431\" height=\"129.431\" filterUnits=\"userSpaceOnUse\" color-interpolation-filters=\"sRGB\">\n<feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\"></feFlood>\n<feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\" result=\"hardAlpha\"></feColorMatrix>\n<feOffset dx=\"2.17893\" dy=\"2.17893\"></feOffset>\n<feGaussianBlur stdDeviation=\"3.2684\"></feGaussianBlur>\n<feColorMatrix type=\"matrix\" values=\"0 0 0 0 0.0509804 0 0 0 0 0.0509804 0 0 0 0 0.0509804 0 0 0 1 0\"></feColorMatrix>\n<feBlend mode=\"normal\" in2=\"BackgroundImageFix\" result=\"effect1_dropShadow_4002_471\"></feBlend>\n<feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\" result=\"hardAlpha\"></feColorMatrix>\n<feOffset dx=\"-2.17893\" dy=\"-2.17893\"></feOffset>\n<feGaussianBlur stdDeviation=\"3.2684\"></feGaussianBlur>\n<feColorMatrix type=\"matrix\" values=\"0 0 0 0 0.0901961 0 0 0 0 0.0901961 0 0 0 0 0.0901961 0 0 0 1 0\"></feColorMatrix>\n<feBlend mode=\"normal\" in2=\"effect1_dropShadow_4002_471\" result=\"effect2_dropShadow_4002_471\"></feBlend>\n<feBlend mode=\"normal\" in=\"SourceGraphic\" in2=\"effect2_dropShadow_4002_471\" result=\"shape\"></feBlend>\n</filter>\n<filter id=\"filter1_d_4002_471\" x=\"-31\" y=\"-15\" width=\"192\" height=\"192\" filterUnits=\"userSpaceOnUse\" color-interpolation-filters=\"sRGB\">\n<feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\"></feFlood>\n<feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\" result=\"hardAlpha\"></feColorMatrix>\n<feOffset dy=\"16\"></feOffset>\n<feGaussianBlur stdDeviation=\"32\"></feGaussianBlur>\n<feComposite in2=\"hardAlpha\" operator=\"out\"></feComposite>\n<feColorMatrix type=\"matrix\" values=\"0 0 0 0 0.866667 0 0 0 0 1 0 0 0 0 0 0 0 0 0.4 0\"></feColorMatrix>\n<feBlend mode=\"normal\" in2=\"BackgroundImageFix\" result=\"effect1_dropShadow_4002_471\"></feBlend>\n<feBlend mode=\"normal\" in=\"SourceGraphic\" in2=\"effect1_dropShadow_4002_471\" result=\"shape\"></feBlend>\n</filter>\n<linearGradient id=\"paint0_linear_4002_471\" x1=\"65\" y1=\"9\" x2=\"65\" y2=\"121\" gradientUnits=\"userSpaceOnUse\">\n<stop stop-color=\"#1E1E1E\"></stop>\n<stop offset=\"1\" stop-color=\"#141414\"></stop>\n</linearGradient>\n<linearGradient id=\"paint1_linear_4002_471\" x1=\"9\" y1=\"9\" x2=\"130.814\" y2=\"20.9488\" gradientUnits=\"userSpaceOnUse\">\n<stop stop-color=\"#747474\"></stop>\n<stop offset=\"0.1\" stop-color=\"#171717\" stop-opacity=\"0\"></stop>\n<stop offset=\"0.9\" stop-color=\"#171717\" stop-opacity=\"0\"></stop>\n<stop offset=\"1\" stop-color=\"#747474\"></stop>\n</linearGradient>\n<clipPath id=\"clip0_4002_471\">\n<rect x=\"9\" y=\"9\" width=\"112\" height=\"112\" rx=\"24\" fill=\"white\"></rect>\n</clipPath>\n</defs>\n</svg>"}
className={`w-html-embed`} />
</Box>
<Box
className={`w-box cir85gx c1lfjoq7 c16xs6ny c1wt8a7g c1z0l37u c1ml0hr7 cmepw80 ccry0es cl1ou15 c1fhkm63 clv8gve`}>
<Heading
tag={"h3"}
className={`w-heading cuoke4w c11dowh9 c32myit cwrra4i c12y6bqh`}>
{"Envios em Massa Ilimitados"}
{""}
<br />
{""}
</Heading>
<Paragraph
className={`w-paragraph`}>
{"Alcance todos os seus contatos, listas ou grupos sem limitações."}
{""}
<br />
{""}
</Paragraph>
</Box>
</Box>
<Box
className={`w-box cry9bxc c1lfjoq7 c1wt8a7g c1z0l37u c1ml0hr7 cgl7u82 crlid6h caoqbwa c1aguln ckb5lut czjsrhv c1di64f2 c1ru090q cujxabw c119suh8 cjucu4u c13xb0l c1ncxhfh cd4a99d cdtylqg chmjof8 codg43x cax3zcx c1axwber`}>
<Box
className={`w-box c1ns98mi c1vwb4m1 c18f4fh9 c1wn9gbn ckhl5v6 cry9bxc c1qyy4dh ct02u4h c14sxfy0`}>
<HtmlEmbed
code={"<svg width=\"130\" height=\"130\" viewBox=\"0 0 130 130\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g filter=\"url(#filter0_dd_4002_471)\">\n<g clip-path=\"url(#clip0_4002_471)\">\n<rect x=\"9\" y=\"9\" width=\"112\" height=\"112\" rx=\"24\" fill=\"url(#paint0_linear_4002_471)\"></rect>\n<g filter=\"url(#filter1_d_4002_471)\">\n<g transform=\"scale(0.35) translate(80, 80)\">\n<path d=\"M215.79,118.17a8,8,0,0,0-5-5.66L153.18,90.9l14.66-73.33a8,8,0,0,0-13.69-7l-112,120a8,8,0,0,0,3,13l57.63,21.61L88.16,238.43a8,8,0,0,0,13.69,7l112-120A8,8,0,0,0,215.79,118.17ZM109.37,214l10.47-52.38a8,8,0,0,0-5-9.06L62,132.71l84.62-90.66L136.16,94.43a8,8,0,0,0,5,9.06l52.8,19.8Z\" fill=\"#DDFF00\"></path>\n</g>\n</g>\n</g>\n<rect x=\"9.10895\" y=\"9.10895\" width=\"111.782\" height=\"111.782\" rx=\"23.8911\" stroke=\"url(#paint1_linear_4002_471)\" stroke-width=\"0.217893\"></rect>\n</g>\n<defs>\n<filter id=\"filter0_dd_4002_471\" x=\"0.284271\" y=\"0.284271\" width=\"129.431\" height=\"129.431\" filterUnits=\"userSpaceOnUse\" color-interpolation-filters=\"sRGB\">\n<feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\"></feFlood>\n<feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\" result=\"hardAlpha\"></feColorMatrix>\n<feOffset dx=\"2.17893\" dy=\"2.17893\"></feOffset>\n<feGaussianBlur stdDeviation=\"3.2684\"></feGaussianBlur>\n<feColorMatrix type=\"matrix\" values=\"0 0 0 0 0.0509804 0 0 0 0 0.0509804 0 0 0 0 0.0509804 0 0 0 1 0\"></feColorMatrix>\n<feBlend mode=\"normal\" in2=\"BackgroundImageFix\" result=\"effect1_dropShadow_4002_471\"></feBlend>\n<feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\" result=\"hardAlpha\"></feColorMatrix>\n<feOffset dx=\"-2.17893\" dy=\"-2.17893\"></feOffset>\n<feGaussianBlur stdDeviation=\"3.2684\"></feGaussianBlur>\n<feColorMatrix type=\"matrix\" values=\"0 0 0 0 0.0901961 0 0 0 0 0.0901961 0 0 0 0 0.0901961 0 0 0 1 0\"></feColorMatrix>\n<feBlend mode=\"normal\" in2=\"effect1_dropShadow_4002_471\" result=\"effect2_dropShadow_4002_471\"></feBlend>\n<feBlend mode=\"normal\" in=\"SourceGraphic\" in2=\"effect2_dropShadow_4002_471\" result=\"shape\"></feBlend>\n</filter>\n<filter id=\"filter1_d_4002_471\" x=\"-31\" y=\"-15\" width=\"192\" height=\"192\" filterUnits=\"userSpaceOnUse\" color-interpolation-filters=\"sRGB\">\n<feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\"></feFlood>\n<feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\" result=\"hardAlpha\"></feColorMatrix>\n<feOffset dy=\"16\"></feOffset>\n<feGaussianBlur stdDeviation=\"32\"></feGaussianBlur>\n<feComposite in2=\"hardAlpha\" operator=\"out\"></feComposite>\n<feColorMatrix type=\"matrix\" values=\"0 0 0 0 0.866667 0 0 0 0 1 0 0 0 0 0 0 0 0 0.4 0\"></feColorMatrix>\n<feBlend mode=\"normal\" in2=\"BackgroundImageFix\" result=\"effect1_dropShadow_4002_471\"></feBlend>\n<feBlend mode=\"normal\" in=\"SourceGraphic\" in2=\"effect1_dropShadow_4002_471\" result=\"shape\"></feBlend>\n</filter>\n<linearGradient id=\"paint0_linear_4002_471\" x1=\"65\" y1=\"9\" x2=\"65\" y2=\"121\" gradientUnits=\"userSpaceOnUse\">\n<stop stop-color=\"#1E1E1E\"></stop>\n<stop offset=\"1\" stop-color=\"#141414\"></stop>\n</linearGradient>\n<linearGradient id=\"paint1_linear_4002_471\" x1=\"9\" y1=\"9\" x2=\"130.814\" y2=\"20.9488\" gradientUnits=\"userSpaceOnUse\">\n<stop stop-color=\"#747474\"></stop>\n<stop offset=\"0.1\" stop-color=\"#171717\" stop-opacity=\"0\"></stop>\n<stop offset=\"0.9\" stop-color=\"#171717\" stop-opacity=\"0\"></stop>\n<stop offset=\"1\" stop-color=\"#747474\"></stop>\n</linearGradient>\n<clipPath id=\"clip0_4002_471\">\n<rect x=\"9\" y=\"9\" width=\"112\" height=\"112\" rx=\"24\" fill=\"white\"></rect>\n</clipPath>\n</defs>\n</svg>"}
className={`w-html-embed`} />
</Box>
<Box
className={`w-box cir85gx c1lfjoq7 c16xs6ny c1wt8a7g c1z0l37u c1ml0hr7 cmepw80 ccry0es cl1ou15 c1fhkm63 clv8gve`}>
<Heading
tag={"h3"}
className={`w-heading cuoke4w c11dowh9 c32myit cwrra4i c12y6bqh`}>
{"Respostas Rápidas"}
{""}
<br />
{""}
</Heading>
<Paragraph
className={`w-paragraph`}>
{"Tenha respostas rápidas classificadas para serem enviadas com um clique: Áudios, textos e mídias. Atenda mais rápido e de forma padronizada."}
{""}
<br />
{""}
</Paragraph>
</Box>
</Box>
<Box
className={`w-box cry9bxc c1lfjoq7 c1wt8a7g c1z0l37u c1ml0hr7 cgl7u82 crlid6h caoqbwa c1aguln ckb5lut czjsrhv c1di64f2 c1ru090q cujxabw c119suh8 cjucu4u c13xb0l c1ncxhfh cd4a99d cdtylqg chmjof8 codg43x cax3zcx c1axwber`}>
<Box
className={`w-box c1ns98mi c1vwb4m1 c18f4fh9 c1wn9gbn ckhl5v6 cry9bxc c1qyy4dh ct02u4h c14sxfy0`}>
<HtmlEmbed
code={"<svg width=\"130\" height=\"130\" viewBox=\"0 0 130 130\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g filter=\"url(#filter0_dd_4002_471)\">\n<g clip-path=\"url(#clip0_4002_471)\">\n<rect x=\"9\" y=\"9\" width=\"112\" height=\"112\" rx=\"24\" fill=\"url(#paint0_linear_4002_471)\"></rect>\n<g filter=\"url(#filter1_d_4002_471)\">\n<g transform=\"scale(0.35) translate(80, 80)\">\n<path d=\"M178.16,176H111.32A48,48,0,1,1,25.6,139.19a8,8,0,0,1,12.8,9.61A31.69,31.69,0,0,0,32,168a32,32,0,0,0,64,0,8,8,0,0,1,8-8h74.16a16,16,0,1,1,0,16ZM64,184a16,16,0,0,0,14.08-23.61l35.77-58.14a8,8,0,0,0-2.62-11,32,32,0,1,1,46.1-40.06A8,8,0,1,0,172,44.79a48,48,0,1,0-75.62,55.33L64.44,152c-.15,0-.29,0-.44,0a16,16,0,0,0,0,32Zm128-64a48.18,48.18,0,0,0-18,3.49L142.08,71.6A16,16,0,1,0,128,80l.44,0,35.78,58.15a8,8,0,0,0,11,2.61A32,32,0,1,1,192,200a8,8,0,0,0,0,16,48,48,0,0,0,0-96Z\" fill=\"#DDFF00\"></path>\n</g>\n</g>\n</g>\n<rect x=\"9.10895\" y=\"9.10895\" width=\"111.782\" height=\"111.782\" rx=\"23.8911\" stroke=\"url(#paint1_linear_4002_471)\" stroke-width=\"0.217893\"></rect>\n</g>\n<defs>\n<filter id=\"filter0_dd_4002_471\" x=\"0.284271\" y=\"0.284271\" width=\"129.431\" height=\"129.431\" filterUnits=\"userSpaceOnUse\" color-interpolation-filters=\"sRGB\">\n<feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\"></feFlood>\n<feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\" result=\"hardAlpha\"></feColorMatrix>\n<feOffset dx=\"2.17893\" dy=\"2.17893\"></feOffset>\n<feGaussianBlur stdDeviation=\"3.2684\"></feGaussianBlur>\n<feColorMatrix type=\"matrix\" values=\"0 0 0 0 0.0509804 0 0 0 0 0.0509804 0 0 0 0 0.0509804 0 0 0 1 0\"></feColorMatrix>\n<feBlend mode=\"normal\" in2=\"BackgroundImageFix\" result=\"effect1_dropShadow_4002_471\"></feBlend>\n<feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\" result=\"hardAlpha\"></feColorMatrix>\n<feOffset dx=\"-2.17893\" dy=\"-2.17893\"></feOffset>\n<feGaussianBlur stdDeviation=\"3.2684\"></feGaussianBlur>\n<feColorMatrix type=\"matrix\" values=\"0 0 0 0 0.0901961 0 0 0 0 0.0901961 0 0 0 0 0.0901961 0 0 0 1 0\"></feColorMatrix>\n<feBlend mode=\"normal\" in2=\"effect1_dropShadow_4002_471\" result=\"effect2_dropShadow_4002_471\"></feBlend>\n<feBlend mode=\"normal\" in=\"SourceGraphic\" in2=\"effect2_dropShadow_4002_471\" result=\"shape\"></feBlend>\n</filter>\n<filter id=\"filter1_d_4002_471\" x=\"-31\" y=\"-15\" width=\"192\" height=\"192\" filterUnits=\"userSpaceOnUse\" color-interpolation-filters=\"sRGB\">\n<feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\"></feFlood>\n<feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\" result=\"hardAlpha\"></feColorMatrix>\n<feOffset dy=\"16\"></feOffset>\n<feGaussianBlur stdDeviation=\"32\"></feGaussianBlur>\n<feComposite in2=\"hardAlpha\" operator=\"out\"></feComposite>\n<feColorMatrix type=\"matrix\" values=\"0 0 0 0 0.866667 0 0 0 0 1 0 0 0 0 0 0 0 0 0.4 0\"></feColorMatrix>\n<feBlend mode=\"normal\" in2=\"BackgroundImageFix\" result=\"effect1_dropShadow_4002_471\"></feBlend>\n<feBlend mode=\"normal\" in=\"SourceGraphic\" in2=\"effect1_dropShadow_4002_471\" result=\"shape\"></feBlend>\n</filter>\n<linearGradient id=\"paint0_linear_4002_471\" x1=\"65\" y1=\"9\" x2=\"65\" y2=\"121\" gradientUnits=\"userSpaceOnUse\">\n<stop stop-color=\"#1E1E1E\"></stop>\n<stop offset=\"1\" stop-color=\"#141414\"></stop>\n</linearGradient>\n<linearGradient id=\"paint1_linear_4002_471\" x1=\"9\" y1=\"9\" x2=\"130.814\" y2=\"20.9488\" gradientUnits=\"userSpaceOnUse\">\n<stop stop-color=\"#747474\"></stop>\n<stop offset=\"0.1\" stop-color=\"#171717\" stop-opacity=\"0\"></stop>\n<stop offset=\"0.9\" stop-color=\"#171717\" stop-opacity=\"0\"></stop>\n<stop offset=\"1\" stop-color=\"#747474\"></stop>\n</linearGradient>\n<clipPath id=\"clip0_4002_471\">\n<rect x=\"9\" y=\"9\" width=\"112\" height=\"112\" rx=\"24\" fill=\"white\"></rect>\n</clipPath>\n</defs>\n</svg>"}
className={`w-html-embed`} />
</Box>
<Box
className={`w-box cir85gx c1lfjoq7 c16xs6ny c1wt8a7g c1z0l37u c1ml0hr7 cmepw80 ccry0es cl1ou15 c1fhkm63 clv8gve`}>
<Heading
tag={"h3"}
className={`w-heading cuoke4w c11dowh9 c32myit cwrra4i c12y6bqh`}>
{"API / Webhook"}
{""}
<br />
{""}
</Heading>
<Paragraph
className={`w-paragraph`}>
{"Integre nossa ferramenta com qualquer outro sistema e tenha tudo atualizado entre seu WhatsApp e seu sistema de gestão."}
{""}
<br />
{""}
</Paragraph>
</Box>
</Box>
<Box
className={`w-box cry9bxc c1lfjoq7 c1wt8a7g c1z0l37u c1ml0hr7 cgl7u82 crlid6h caoqbwa c1aguln ckb5lut czjsrhv c1di64f2 c1ru090q cujxabw c119suh8 cjucu4u c13xb0l c1ncxhfh cd4a99d cdtylqg chmjof8 codg43x cax3zcx c1axwber`}>
<Box
className={`w-box c1ns98mi c1vwb4m1 c18f4fh9 c1wn9gbn ckhl5v6 cry9bxc c1qyy4dh ct02u4h c14sxfy0`}>
<HtmlEmbed
code={"<svg width=\"130\" height=\"130\" viewBox=\"0 0 130 130\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g filter=\"url(#filter0_dd_4002_471)\">\n<g clip-path=\"url(#clip0_4002_471)\">\n<rect x=\"9\" y=\"9\" width=\"112\" height=\"112\" rx=\"24\" fill=\"url(#paint0_linear_4002_471)\"></rect>\n<g filter=\"url(#filter1_d_4002_471)\">\n<g transform=\"scale(0.35) translate(80, 80)\">\n<path d=\"M224,40V76a8,8,0,0,1-16,0V48H180a8,8,0,0,1,0-16h36A8,8,0,0,1,224,40Zm-8,132a8,8,0,0,0-8,8v28H180a8,8,0,0,0,0,16h36a8,8,0,0,0,8-8V180A8,8,0,0,0,216,172ZM76,208H48V180a8,8,0,0,0-16,0v36a8,8,0,0,0,8,8H76a8,8,0,0,0,0-16ZM40,84a8,8,0,0,0,8-8V48H76a8,8,0,0,0,0-16H40a8,8,0,0,0-8,8V76A8,8,0,0,0,40,84Zm136,92a8,8,0,0,1-6.41-3.19,52,52,0,0,0-83.2,0,8,8,0,1,1-12.8-9.62A67.94,67.94,0,0,1,101,141.51a40,40,0,1,1,53.94,0,67.94,67.94,0,0,1,27.43,21.68A8,8,0,0,1,176,176Zm-48-40a24,24,0,1,0-24-24A24,24,0,0,0,128,136Z\" fill=\"#DDFF00\"></path>\n</g>\n</g>\n</g>\n<rect x=\"9.10895\" y=\"9.10895\" width=\"111.782\" height=\"111.782\" rx=\"23.8911\" stroke=\"url(#paint1_linear_4002_471)\" stroke-width=\"0.217893\"></rect>\n</g>\n<defs>\n<filter id=\"filter0_dd_4002_471\" x=\"0.284271\" y=\"0.284271\" width=\"129.431\" height=\"129.431\" filterUnits=\"userSpaceOnUse\" color-interpolation-filters=\"sRGB\">\n<feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\"></feFlood>\n<feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\" result=\"hardAlpha\"></feColorMatrix>\n<feOffset dx=\"2.17893\" dy=\"2.17893\"></feOffset>\n<feGaussianBlur stdDeviation=\"3.2684\"></feGaussianBlur>\n<feColorMatrix type=\"matrix\" values=\"0 0 0 0 0.0509804 0 0 0 0 0.0509804 0 0 0 0 0.0509804 0 0 0 1 0\"></feColorMatrix>\n<feBlend mode=\"normal\" in2=\"BackgroundImageFix\" result=\"effect1_dropShadow_4002_471\"></feBlend>\n<feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\" result=\"hardAlpha\"></feColorMatrix>\n<feOffset dx=\"-2.17893\" dy=\"-2.17893\"></feOffset>\n<feGaussianBlur stdDeviation=\"3.2684\"></feGaussianBlur>\n<feColorMatrix type=\"matrix\" values=\"0 0 0 0 0.0901961 0 0 0 0 0.0901961 0 0 0 0 0.0901961 0 0 0 1 0\"></feColorMatrix>\n<feBlend mode=\"normal\" in2=\"effect1_dropShadow_4002_471\" result=\"effect2_dropShadow_4002_471\"></feBlend>\n<feBlend mode=\"normal\" in=\"SourceGraphic\" in2=\"effect2_dropShadow_4002_471\" result=\"shape\"></feBlend>\n</filter>\n<filter id=\"filter1_d_4002_471\" x=\"-31\" y=\"-15\" width=\"192\" height=\"192\" filterUnits=\"userSpaceOnUse\" color-interpolation-filters=\"sRGB\">\n<feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\"></feFlood>\n<feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\" result=\"hardAlpha\"></feColorMatrix>\n<feOffset dy=\"16\"></feOffset>\n<feGaussianBlur stdDeviation=\"32\"></feGaussianBlur>\n<feComposite in2=\"hardAlpha\" operator=\"out\"></feComposite>\n<feColorMatrix type=\"matrix\" values=\"0 0 0 0 0.866667 0 0 0 0 1 0 0 0 0 0 0 0 0 0.4 0\"></feColorMatrix>\n<feBlend mode=\"normal\" in2=\"BackgroundImageFix\" result=\"effect1_dropShadow_4002_471\"></feBlend>\n<feBlend mode=\"normal\" in=\"SourceGraphic\" in2=\"effect1_dropShadow_4002_471\" result=\"shape\"></feBlend>\n</filter>\n<linearGradient id=\"paint0_linear_4002_471\" x1=\"65\" y1=\"9\" x2=\"65\" y2=\"121\" gradientUnits=\"userSpaceOnUse\">\n<stop stop-color=\"#1E1E1E\"></stop>\n<stop offset=\"1\" stop-color=\"#141414\"></stop>\n</linearGradient>\n<linearGradient id=\"paint1_linear_4002_471\" x1=\"9\" y1=\"9\" x2=\"130.814\" y2=\"20.9488\" gradientUnits=\"userSpaceOnUse\">\n<stop stop-color=\"#747474\"></stop>\n<stop offset=\"0.1\" stop-color=\"#171717\" stop-opacity=\"0\"></stop>\n<stop offset=\"0.9\" stop-color=\"#171717\" stop-opacity=\"0\"></stop>\n<stop offset=\"1\" stop-color=\"#747474\"></stop>\n</linearGradient>\n<clipPath id=\"clip0_4002_471\">\n<rect x=\"9\" y=\"9\" width=\"112\" height=\"112\" rx=\"24\" fill=\"white\"></rect>\n</clipPath>\n</defs>\n</svg>"}
className={`w-html-embed`} />
</Box>
<Box
className={`w-box cir85gx c1lfjoq7 c16xs6ny c1wt8a7g c1z0l37u c1ml0hr7 cmepw80 ccry0es cl1ou15 c1fhkm63 clv8gve`}>
<Heading
tag={"h3"}
className={`w-heading cuoke4w c11dowh9 c32myit cwrra4i c12y6bqh`}>
{"Perfil do Contato"}
</Heading>
<Paragraph
className={`w-paragraph`}>
{"Salve informações valiosas como informações pessoais, comerciais e propostas enviadas."}
{""}
<br />
{""}
</Paragraph>
</Box>
</Box>
<Box
className={`w-box cry9bxc c1lfjoq7 c1wt8a7g c1z0l37u c1ml0hr7 cgl7u82 crlid6h caoqbwa c1aguln ckb5lut czjsrhv c1di64f2 c1ru090q cujxabw c119suh8 cjucu4u c13xb0l c1ncxhfh cd4a99d cdtylqg chmjof8 codg43x cax3zcx c1axwber`}>
<Box
className={`w-box c1ns98mi c1vwb4m1 c18f4fh9 c1wn9gbn ckhl5v6 cry9bxc c1qyy4dh ct02u4h c14sxfy0`}>
<HtmlEmbed
code={"<svg width=\"130\" height=\"130\" viewBox=\"0 0 130 130\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g filter=\"url(#filter0_dd_4002_471)\">\n<g clip-path=\"url(#clip0_4002_471)\">\n<rect x=\"9\" y=\"9\" width=\"112\" height=\"112\" rx=\"24\" fill=\"url(#paint0_linear_4002_471)\"></rect>\n<g filter=\"url(#filter1_d_4002_471)\">\n<g transform=\"scale(0.35) translate(80, 80)\">\n<path d=\"M200,48H136V16a8,8,0,0,0-16,0V48H56A32,32,0,0,0,24,80V192a32,32,0,0,0,32,32H200a32,32,0,0,0,32-32V80A32,32,0,0,0,200,48Zm16,144a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V80A16,16,0,0,1,56,64H200a16,16,0,0,1,16,16Zm-52-56H92a28,28,0,0,0,0,56h72a28,28,0,0,0,0-56Zm-24,16v24H116V152ZM80,164a12,12,0,0,1,12-12h8v24H92A12,12,0,0,1,80,164Zm84,12h-8V152h8a12,12,0,0,1,0,24ZM72,108a12,12,0,1,1,12,12A12,12,0,0,1,72,108Zm88,0a12,12,0,1,1,12,12A12,12,0,0,1,160,108Z\" fill=\"#DDFF00\"></path>\n</g>\n</g>\n</g>\n<rect x=\"9.10895\" y=\"9.10895\" width=\"111.782\" height=\"111.782\" rx=\"23.8911\" stroke=\"url(#paint1_linear_4002_471)\" stroke-width=\"0.217893\"></rect>\n</g>\n<defs>\n<filter id=\"filter0_dd_4002_471\" x=\"0.284271\" y=\"0.284271\" width=\"129.431\" height=\"129.431\" filterUnits=\"userSpaceOnUse\" color-interpolation-filters=\"sRGB\">\n<feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\"></feFlood>\n<feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\" result=\"hardAlpha\"></feColorMatrix>\n<feOffset dx=\"2.17893\" dy=\"2.17893\"></feOffset>\n<feGaussianBlur stdDeviation=\"3.2684\"></feGaussianBlur>\n<feColorMatrix type=\"matrix\" values=\"0 0 0 0 0.0509804 0 0 0 0 0.0509804 0 0 0 0 0.0509804 0 0 0 1 0\"></feColorMatrix>\n<feBlend mode=\"normal\" in2=\"BackgroundImageFix\" result=\"effect1_dropShadow_4002_471\"></feBlend>\n<feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\" result=\"hardAlpha\"></feColorMatrix>\n<feOffset dx=\"-2.17893\" dy=\"-2.17893\"></feOffset>\n<feGaussianBlur stdDeviation=\"3.2684\"></feGaussianBlur>\n<feColorMatrix type=\"matrix\" values=\"0 0 0 0 0.0901961 0 0 0 0 0.0901961 0 0 0 0 0.0901961 0 0 0 1 0\"></feColorMatrix>\n<feBlend mode=\"normal\" in2=\"effect1_dropShadow_4002_471\" result=\"effect2_dropShadow_4002_471\"></feBlend>\n<feBlend mode=\"normal\" in=\"SourceGraphic\" in2=\"effect2_dropShadow_4002_471\" result=\"shape\"></feBlend>\n</filter>\n<filter id=\"filter1_d_4002_471\" x=\"-31\" y=\"-15\" width=\"192\" height=\"192\" filterUnits=\"userSpaceOnUse\" color-interpolation-filters=\"sRGB\">\n<feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\"></feFlood>\n<feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\" result=\"hardAlpha\"></feColorMatrix>\n<feOffset dy=\"16\"></feOffset>\n<feGaussianBlur stdDeviation=\"32\"></feGaussianBlur>\n<feComposite in2=\"hardAlpha\" operator=\"out\"></feComposite>\n<feColorMatrix type=\"matrix\" values=\"0 0 0 0 0.866667 0 0 0 0 1 0 0 0 0 0 0 0 0 0.4 0\"></feColorMatrix>\n<feBlend mode=\"normal\" in2=\"BackgroundImageFix\" result=\"effect1_dropShadow_4002_471\"></feBlend>\n<feBlend mode=\"normal\" in=\"SourceGraphic\" in2=\"effect1_dropShadow_4002_471\" result=\"shape\"></feBlend>\n</filter>\n<linearGradient id=\"paint0_linear_4002_471\" x1=\"65\" y1=\"9\" x2=\"65\" y2=\"121\" gradientUnits=\"userSpaceOnUse\">\n<stop stop-color=\"#1E1E1E\"></stop>\n<stop offset=\"1\" stop-color=\"#141414\"></stop>\n</linearGradient>\n<linearGradient id=\"paint1_linear_4002_471\" x1=\"9\" y1=\"9\" x2=\"130.814\" y2=\"20.9488\" gradientUnits=\"userSpaceOnUse\">\n<stop stop-color=\"#747474\"></stop>\n<stop offset=\"0.1\" stop-color=\"#171717\" stop-opacity=\"0\"></stop>\n<stop offset=\"0.9\" stop-color=\"#171717\" stop-opacity=\"0\"></stop>\n<stop offset=\"1\" stop-color=\"#747474\"></stop>\n</linearGradient>\n<clipPath id=\"clip0_4002_471\">\n<rect x=\"9\" y=\"9\" width=\"112\" height=\"112\" rx=\"24\" fill=\"white\"></rect>\n</clipPath>\n</defs>\n</svg>"}
className={`w-html-embed`} />
</Box>
<Box
className={`w-box cir85gx c1lfjoq7 c16xs6ny c1wt8a7g c1z0l37u c1ml0hr7 cmepw80 ccry0es cl1ou15 c1fhkm63 clv8gve`}>
<Heading
tag={"h3"}
className={`w-heading cuoke4w c11dowh9 c32myit cwrra4i c12y6bqh`}>
{"ChatBot de Fluxo"}
{""}
<br />
{""}
</Heading>
<Paragraph
className={`w-paragraph`}>
{"Crie chatbots por fluxos de forma simples e intuitiva e não deixe seu cliente esperando."}
{""}
<br />
{""}
</Paragraph>
</Box>
</Box>
<Box
className={`w-box cry9bxc c1lfjoq7 c1wt8a7g c1z0l37u c1ml0hr7 cgl7u82 crlid6h caoqbwa c1aguln ckb5lut czjsrhv c1di64f2 c1ru090q cujxabw c119suh8 cjucu4u c13xb0l c1ncxhfh cd4a99d cdtylqg chmjof8 codg43x cax3zcx c1axwber`}>
<Box
className={`w-box c1ns98mi c1vwb4m1 c18f4fh9 c1wn9gbn ckhl5v6 cry9bxc c1qyy4dh ct02u4h c14sxfy0`}>
<HtmlEmbed
code={"<svg width=\"130\" height=\"130\" viewBox=\"0 0 130 130\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g filter=\"url(#filter0_dd_4002_471)\">\n<g clip-path=\"url(#clip0_4002_471)\">\n<rect x=\"9\" y=\"9\" width=\"112\" height=\"112\" rx=\"24\" fill=\"url(#paint0_linear_4002_471)\"></rect>\n<g filter=\"url(#filter1_d_4002_471)\">\n<g transform=\"scale(0.35) translate(80, 80)\">\n<path d=\"M224,64H154.67L126.93,43.2a16.12,16.12,0,0,0-9.6-3.2H72A16,16,0,0,0,56,56V72H40A16,16,0,0,0,24,88V200a16,16,0,0,0,16,16H192.89A15.13,15.13,0,0,0,208,200.89V184h16.89A15.13,15.13,0,0,0,240,168.89V80A16,16,0,0,0,224,64ZM192,200H40V88H85.33l29.87,22.4A8,8,0,0,0,120,112h72Zm32-32H208V112a16,16,0,0,0-16-16H122.67L94.93,75.2a16.12,16.12,0,0,0-9.6-3.2H72V56h45.33L147.2,78.4A8,8,0,0,0,152,80h72Z\" fill=\"#DDFF00\"></path>\n</g>\n</g>\n</g>\n<rect x=\"9.10895\" y=\"9.10895\" width=\"111.782\" height=\"111.782\" rx=\"23.8911\" stroke=\"url(#paint1_linear_4002_471)\" stroke-width=\"0.217893\"></rect>\n</g>\n<defs>\n<filter id=\"filter0_dd_4002_471\" x=\"0.284271\" y=\"0.284271\" width=\"129.431\" height=\"129.431\" filterUnits=\"userSpaceOnUse\" color-interpolation-filters=\"sRGB\">\n<feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\"></feFlood>\n<feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\" result=\"hardAlpha\"></feColorMatrix>\n<feOffset dx=\"2.17893\" dy=\"2.17893\"></feOffset>\n<feGaussianBlur stdDeviation=\"3.2684\"></feGaussianBlur>\n<feColorMatrix type=\"matrix\" values=\"0 0 0 0 0.0509804 0 0 0 0 0.0509804 0 0 0 0 0.0509804 0 0 0 1 0\"></feColorMatrix>\n<feBlend mode=\"normal\" in2=\"BackgroundImageFix\" result=\"effect1_dropShadow_4002_471\"></feBlend>\n<feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\" result=\"hardAlpha\"></feColorMatrix>\n<feOffset dx=\"-2.17893\" dy=\"-2.17893\"></feOffset>\n<feGaussianBlur stdDeviation=\"3.2684\"></feGaussianBlur>\n<feColorMatrix type=\"matrix\" values=\"0 0 0 0 0.0901961 0 0 0 0 0.0901961 0 0 0 0 0.0901961 0 0 0 1 0\"></feColorMatrix>\n<feBlend mode=\"normal\" in2=\"effect1_dropShadow_4002_471\" result=\"effect2_dropShadow_4002_471\"></feBlend>\n<feBlend mode=\"normal\" in=\"SourceGraphic\" in2=\"effect2_dropShadow_4002_471\" result=\"shape\"></feBlend>\n</filter>\n<filter id=\"filter1_d_4002_471\" x=\"-31\" y=\"-15\" width=\"192\" height=\"192\" filterUnits=\"userSpaceOnUse\" color-interpolation-filters=\"sRGB\">\n<feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\"></feFlood>\n<feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\" result=\"hardAlpha\"></feColorMatrix>\n<feOffset dy=\"16\"></feOffset>\n<feGaussianBlur stdDeviation=\"32\"></feGaussianBlur>\n<feComposite in2=\"hardAlpha\" operator=\"out\"></feComposite>\n<feColorMatrix type=\"matrix\" values=\"0 0 0 0 0.866667 0 0 0 0 1 0 0 0 0 0 0 0 0 0.4 0\"></feColorMatrix>\n<feBlend mode=\"normal\" in2=\"BackgroundImageFix\" result=\"effect1_dropShadow_4002_471\"></feBlend>\n<feBlend mode=\"normal\" in=\"SourceGraphic\" in2=\"effect1_dropShadow_4002_471\" result=\"shape\"></feBlend>\n</filter>\n<linearGradient id=\"paint0_linear_4002_471\" x1=\"65\" y1=\"9\" x2=\"65\" y2=\"121\" gradientUnits=\"userSpaceOnUse\">\n<stop stop-color=\"#1E1E1E\"></stop>\n<stop offset=\"1\" stop-color=\"#141414\"></stop>\n</linearGradient>\n<linearGradient id=\"paint1_linear_4002_471\" x1=\"9\" y1=\"9\" x2=\"130.814\" y2=\"20.9488\" gradientUnits=\"userSpaceOnUse\">\n<stop stop-color=\"#747474\"></stop>\n<stop offset=\"0.1\" stop-color=\"#171717\" stop-opacity=\"0\"></stop>\n<stop offset=\"0.9\" stop-color=\"#171717\" stop-opacity=\"0\"></stop>\n<stop offset=\"1\" stop-color=\"#747474\"></stop>\n</linearGradient>\n<clipPath id=\"clip0_4002_471\">\n<rect x=\"9\" y=\"9\" width=\"112\" height=\"112\" rx=\"24\" fill=\"white\"></rect>\n</clipPath>\n</defs>\n</svg>"}
className={`w-html-embed`} />
</Box>
<Box
className={`w-box cir85gx c1lfjoq7 c16xs6ny c1wt8a7g c1z0l37u c1ml0hr7 cmepw80 ccry0es cl1ou15 c1fhkm63 clv8gve`}>
<Heading
tag={"h3"}
className={`w-heading cuoke4w c11dowh9 c32myit cwrra4i c12y6bqh`}>
{"Follow Up Automatizado"}
{""}
<br />
{""}
</Heading>
<Paragraph
className={`w-paragraph`}>
{"Mova seu lead de fase a fase no seu funil de forma automática definindo ações em cada fase do funil."}
{""}
<br />
{""}
</Paragraph>
</Box>
</Box>
<Box
className={`w-box cry9bxc c1lfjoq7 c1wt8a7g c1z0l37u c1ml0hr7 cgl7u82 crlid6h caoqbwa c1aguln ckb5lut czjsrhv c1di64f2 c1ru090q cujxabw c119suh8 cjucu4u c13xb0l c1ncxhfh cd4a99d cdtylqg chmjof8 codg43x cax3zcx c1axwber`}>
<Box
className={`w-box c1ns98mi c1vwb4m1 c18f4fh9 c1wn9gbn ckhl5v6 cry9bxc c1qyy4dh ct02u4h c14sxfy0`}>
<HtmlEmbed
code={"<svg width=\"130\" height=\"130\" viewBox=\"0 0 130 130\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g filter=\"url(#filter0_dd_4002_471)\">\n<g clip-path=\"url(#clip0_4002_471)\">\n<rect x=\"9\" y=\"9\" width=\"112\" height=\"112\" rx=\"24\" fill=\"url(#paint0_linear_4002_471)\"></rect>\n<g filter=\"url(#filter1_d_4002_471)\">\n<g transform=\"scale(0.35) translate(80, 80)\">\n<path d=\"M128,40a96,96,0,1,0,96,96A96.11,96.11,0,0,0,128,40Zm0,176a80,80,0,1,1,80-80A80.09,80.09,0,0,1,128,216ZM173.66,90.34a8,8,0,0,1,0,11.32l-40,40a8,8,0,0,1-11.32-11.32l40-40A8,8,0,0,1,173.66,90.34ZM96,16a8,8,0,0,1,8-8h48a8,8,0,0,1,0,16H104A8,8,0,0,1,96,16Z\" fill=\"#DDFF00\"></path>\n</g>\n</g>\n</g>\n<rect x=\"9.10895\" y=\"9.10895\" width=\"111.782\" height=\"111.782\" rx=\"23.8911\" stroke=\"url(#paint1_linear_4002_471)\" stroke-width=\"0.217893\"></rect>\n</g>\n<defs>\n<filter id=\"filter0_dd_4002_471\" x=\"0.284271\" y=\"0.284271\" width=\"129.431\" height=\"129.431\" filterUnits=\"userSpaceOnUse\" color-interpolation-filters=\"sRGB\">\n<feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\"></feFlood>\n<feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\" result=\"hardAlpha\"></feColorMatrix>\n<feOffset dx=\"2.17893\" dy=\"2.17893\"></feOffset>\n<feGaussianBlur stdDeviation=\"3.2684\"></feGaussianBlur>\n<feColorMatrix type=\"matrix\" values=\"0 0 0 0 0.0509804 0 0 0 0 0.0509804 0 0 0 0 0.0509804 0 0 0 1 0\"></feColorMatrix>\n<feBlend mode=\"normal\" in2=\"BackgroundImageFix\" result=\"effect1_dropShadow_4002_471\"></feBlend>\n<feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\" result=\"hardAlpha\"></feColorMatrix>\n<feOffset dx=\"-2.17893\" dy=\"-2.17893\"></feOffset>\n<feGaussianBlur stdDeviation=\"3.2684\"></feGaussianBlur>\n<feColorMatrix type=\"matrix\" values=\"0 0 0 0 0.0901961 0 0 0 0 0.0901961 0 0 0 0 0.0901961 0 0 0 1 0\"></feColorMatrix>\n<feBlend mode=\"normal\" in2=\"effect1_dropShadow_4002_471\" result=\"effect2_dropShadow_4002_471\"></feBlend>\n<feBlend mode=\"normal\" in=\"SourceGraphic\" in2=\"effect2_dropShadow_4002_471\" result=\"shape\"></feBlend>\n</filter>\n<filter id=\"filter1_d_4002_471\" x=\"-31\" y=\"-15\" width=\"192\" height=\"192\" filterUnits=\"userSpaceOnUse\" color-interpolation-filters=\"sRGB\">\n<feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\"></feFlood>\n<feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\" result=\"hardAlpha\"></feColorMatrix>\n<feOffset dy=\"16\"></feOffset>\n<feGaussianBlur stdDeviation=\"32\"></feGaussianBlur>\n<feComposite in2=\"hardAlpha\" operator=\"out\"></feComposite>\n<feColorMatrix type=\"matrix\" values=\"0 0 0 0 0.866667 0 0 0 0 1 0 0 0 0 0 0 0 0 0.4 0\"></feColorMatrix>\n<feBlend mode=\"normal\" in2=\"BackgroundImageFix\" result=\"effect1_dropShadow_4002_471\"></feBlend>\n<feBlend mode=\"normal\" in=\"SourceGraphic\" in2=\"effect1_dropShadow_4002_471\" result=\"shape\"></feBlend>\n</filter>\n<linearGradient id=\"paint0_linear_4002_471\" x1=\"65\" y1=\"9\" x2=\"65\" y2=\"121\" gradientUnits=\"userSpaceOnUse\">\n<stop stop-color=\"#1E1E1E\"></stop>\n<stop offset=\"1\" stop-color=\"#141414\"></stop>\n</linearGradient>\n<linearGradient id=\"paint1_linear_4002_471\" x1=\"9\" y1=\"9\" x2=\"130.814\" y2=\"20.9488\" gradientUnits=\"userSpaceOnUse\">\n<stop stop-color=\"#747474\"></stop>\n<stop offset=\"0.1\" stop-color=\"#171717\" stop-opacity=\"0\"></stop>\n<stop offset=\"0.9\" stop-color=\"#171717\" stop-opacity=\"0\"></stop>\n<stop offset=\"1\" stop-color=\"#747474\"></stop>\n</linearGradient>\n<clipPath id=\"clip0_4002_471\">\n<rect x=\"9\" y=\"9\" width=\"112\" height=\"112\" rx=\"24\" fill=\"white\"></rect>\n</clipPath>\n</defs>\n</svg>"}
className={`w-html-embed`} />
</Box>
<Box
className={`w-box cir85gx c1lfjoq7 c16xs6ny c1wt8a7g c1z0l37u c1ml0hr7 cmepw80 ccry0es cl1ou15 c1fhkm63 clv8gve`}>
<Heading
tag={"h3"}
className={`w-heading cuoke4w c11dowh9 c32myit cwrra4i c12y6bqh`}>
{"Agendar Mensagens"}
{""}
<br />
{""}
</Heading>
<Paragraph
className={`w-paragraph`}>
{"Lembre seu cliente de um compromisso até mesmo de forma recorrente. Crie conexão parabenizando o cliente em seu aniversário."}
{""}
<br />
{""}
</Paragraph>
</Box>
</Box>
<Box
className={`w-box cry9bxc c1lfjoq7 c1wt8a7g c1z0l37u c1ml0hr7 cgl7u82 crlid6h caoqbwa c1aguln ckb5lut czjsrhv c1di64f2 c1ru090q cujxabw c119suh8 cjucu4u c13xb0l c1ncxhfh cd4a99d cdtylqg chmjof8 codg43x cax3zcx c1axwber`}>
<Box
className={`w-box c1ns98mi c1vwb4m1 c18f4fh9 c1wn9gbn ckhl5v6 cry9bxc c1qyy4dh ct02u4h c14sxfy0`}>
<HtmlEmbed
code={"<svg width=\"130\" height=\"130\" viewBox=\"0 0 130 130\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g filter=\"url(#filter0_dd_4002_471)\">\n<g clip-path=\"url(#clip0_4002_471)\">\n<rect x=\"9\" y=\"9\" width=\"112\" height=\"112\" rx=\"24\" fill=\"url(#paint0_linear_4002_471)\"></rect>\n<g filter=\"url(#filter1_d_4002_471)\">\n<g transform=\"scale(0.35) translate(80, 80)\">\n<path d=\"M228.25,63.07l-4.66-2.69a23.6,23.6,0,0,0,0-8.76l4.66-2.69a8,8,0,0,0-8-13.86l-4.67,2.7A23.92,23.92,0,0,0,208,33.38V28a8,8,0,0,0-16,0v5.38a23.92,23.92,0,0,0-7.58,4.39l-4.67-2.7a8,8,0,1,0-8,13.86l4.66,2.69a23.6,23.6,0,0,0,0,8.76l-4.66,2.69a8,8,0,0,0,4,14.93,7.92,7.92,0,0,0,4-1.07l4.67-2.7A23.92,23.92,0,0,0,192,78.62V84a8,8,0,0,0,16,0V78.62a23.92,23.92,0,0,0,7.58-4.39l4.67,2.7a7.92,7.92,0,0,0,4,1.07,8,8,0,0,0,4-14.93ZM192,56a8,8,0,1,1,8,8A8,8,0,0,1,192,56Zm29.35,48.11a8,8,0,0,0-6.57,9.21A88.85,88.85,0,0,1,216,128a87.62,87.62,0,0,1-22.24,58.41,79.66,79.66,0,0,0-36.06-28.75,48,48,0,1,0-59.4,0,79.66,79.66,0,0,0-36.06,28.75A88,88,0,0,1,128,40a88.76,88.76,0,0,1,14.68,1.22,8,8,0,0,0,2.64-15.78,103.92,103.92,0,1,0,85.24,85.24A8,8,0,0,0,221.35,104.11ZM96,120a32,32,0,1,1,32,32A32,32,0,0,1,96,120ZM74.08,197.5a64,64,0,0,1,107.84,0,87.83,87.83,0,0,1-107.84,0Z\" fill=\"#DDFF00\"></path>\n</g>\n</g>\n</g>\n<rect x=\"9.10895\" y=\"9.10895\" width=\"111.782\" height=\"111.782\" rx=\"23.8911\" stroke=\"url(#paint1_linear_4002_471)\" stroke-width=\"0.217893\"></rect>\n</g>\n<defs>\n<filter id=\"filter0_dd_4002_471\" x=\"0.284271\" y=\"0.284271\" width=\"129.431\" height=\"129.431\" filterUnits=\"userSpaceOnUse\" color-interpolation-filters=\"sRGB\">\n<feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\"></feFlood>\n<feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\" result=\"hardAlpha\"></feColorMatrix>\n<feOffset dx=\"2.17893\" dy=\"2.17893\"></feOffset>\n<feGaussianBlur stdDeviation=\"3.2684\"></feGaussianBlur>\n<feColorMatrix type=\"matrix\" values=\"0 0 0 0 0.0509804 0 0 0 0 0.0509804 0 0 0 0 0.0509804 0 0 0 1 0\"></feColorMatrix>\n<feBlend mode=\"normal\" in2=\"BackgroundImageFix\" result=\"effect1_dropShadow_4002_471\"></feBlend>\n<feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\" result=\"hardAlpha\"></feColorMatrix>\n<feOffset dx=\"-2.17893\" dy=\"-2.17893\"></feOffset>\n<feGaussianBlur stdDeviation=\"3.2684\"></feGaussianBlur>\n<feColorMatrix type=\"matrix\" values=\"0 0 0 0 0.0901961 0 0 0 0 0.0901961 0 0 0 0 0.0901961 0 0 0 1 0\"></feColorMatrix>\n<feBlend mode=\"normal\" in2=\"effect1_dropShadow_4002_471\" result=\"effect2_dropShadow_4002_471\"></feBlend>\n<feBlend mode=\"normal\" in=\"SourceGraphic\" in2=\"effect2_dropShadow_4002_471\" result=\"shape\"></feBlend>\n</filter>\n<filter id=\"filter1_d_4002_471\" x=\"-31\" y=\"-15\" width=\"192\" height=\"192\" filterUnits=\"userSpaceOnUse\" color-interpolation-filters=\"sRGB\">\n<feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\"></feFlood>\n<feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\" result=\"hardAlpha\"></feColorMatrix>\n<feOffset dy=\"16\"></feOffset>\n<feGaussianBlur stdDeviation=\"32\"></feGaussianBlur>\n<feComposite in2=\"hardAlpha\" operator=\"out\"></feComposite>\n<feColorMatrix type=\"matrix\" values=\"0 0 0 0 0.866667 0 0 0 0 1 0 0 0 0 0 0 0 0 0.4 0\"></feColorMatrix>\n<feBlend mode=\"normal\" in2=\"BackgroundImageFix\" result=\"effect1_dropShadow_4002_471\"></feBlend>\n<feBlend mode=\"normal\" in=\"SourceGraphic\" in2=\"effect1_dropShadow_4002_471\" result=\"shape\"></feBlend>\n</filter>\n<linearGradient id=\"paint0_linear_4002_471\" x1=\"65\" y1=\"9\" x2=\"65\" y2=\"121\" gradientUnits=\"userSpaceOnUse\">\n<stop stop-color=\"#1E1E1E\"></stop>\n<stop offset=\"1\" stop-color=\"#141414\"></stop>\n</linearGradient>\n<linearGradient id=\"paint1_linear_4002_471\" x1=\"9\" y1=\"9\" x2=\"130.814\" y2=\"20.9488\" gradientUnits=\"userSpaceOnUse\">\n<stop stop-color=\"#747474\"></stop>\n<stop offset=\"0.1\" stop-color=\"#171717\" stop-opacity=\"0\"></stop>\n<stop offset=\"0.9\" stop-color=\"#171717\" stop-opacity=\"0\"></stop>\n<stop offset=\"1\" stop-color=\"#747474\"></stop>\n</linearGradient>\n<clipPath id=\"clip0_4002_471\">\n<rect x=\"9\" y=\"9\" width=\"112\" height=\"112\" rx=\"24\" fill=\"white\"></rect>\n</clipPath>\n</defs>\n</svg>"}
className={`w-html-embed`} />
</Box>
<Box
className={`w-box cir85gx c1lfjoq7 c16xs6ny c1wt8a7g c1z0l37u c1ml0hr7 cmepw80 ccry0es cl1ou15 c1fhkm63 clv8gve`}>
<Heading
tag={"h3"}
className={`w-heading cuoke4w c11dowh9 c32myit cwrra4i c12y6bqh`}>
{"Exportação de Contatos"}
{""}
<br />
{""}
</Heading>
<Paragraph
className={`w-paragraph`}>
{"Tenha seus leads em listas do exel"}
{""}
<br />
{""}
</Paragraph>
</Box>
</Box>
<Box
className={`w-box cry9bxc c1lfjoq7 c1wt8a7g c1z0l37u c1ml0hr7 cgl7u82 crlid6h caoqbwa c1aguln ckb5lut czjsrhv c1di64f2 c1ru090q cujxabw c119suh8 cjucu4u c13xb0l c1ncxhfh cd4a99d cdtylqg chmjof8 codg43x cax3zcx c1axwber`}>
<Box
className={`w-box c1ns98mi c1vwb4m1 c18f4fh9 c1wn9gbn ckhl5v6 cry9bxc c1qyy4dh ct02u4h c14sxfy0`}>
<HtmlEmbed
code={"<svg width=\"131\" height=\"130\" viewBox=\"0 0 131 130\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g filter=\"url(#filter0_dd_4002_627)\">\n<g clip-path=\"url(#clip0_4002_627)\">\n<rect x=\"9.33337\" y=\"9\" width=\"112\" height=\"112\" rx=\"24\" fill=\"url(#paint0_linear_4002_627)\"></rect>\n<g filter=\"url(#filter1_d_4002_627)\">\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M77.3288 37.6667C75.856 37.6667 74.6622 38.8606 74.6622 40.3334C74.6622 41.8061 75.856 43 77.3288 43H78.9512C77.6387 44.1958 75.8672 45.6843 73.5902 47.3459C67.6379 51.6895 58.2159 57.2268 44.4856 61.8035C43.0884 62.2694 42.3333 63.7795 42.7991 65.1766C43.2648 66.5739 44.775 67.3288 46.1722 66.8632C60.4419 62.1067 70.3531 56.3105 76.7342 51.6541C79.24 49.8255 81.1992 48.1743 82.6622 46.8335V48.3334C82.6622 49.8061 83.856 51 85.3288 51C86.8016 51 87.9955 49.8061 87.9955 48.3334V40.3334C87.9955 38.8606 86.8016 37.6667 85.3288 37.6667H77.3288ZM84 56.3334H83.9419C83.3704 56.3333 82.8456 56.3333 82.4048 56.3634C81.9312 56.3957 81.4102 56.4693 80.8808 56.6886C79.7374 57.1622 78.8288 58.0707 78.3552 59.2142C78.136 59.7435 78.0624 60.2643 78.0302 60.7382C78 61.179 78 61.7038 78 62.2752V62.3334V86.3915C78 86.963 78 87.4878 78.0302 87.9286C78.0624 88.4024 78.136 88.9232 78.3552 89.4526C78.8288 90.596 79.7374 91.5046 80.8808 91.9782C81.4102 92.1974 81.9312 92.271 82.4048 92.3032C82.8456 92.3334 83.3707 92.3334 83.9419 92.3334H84.0582C84.6294 92.3334 85.1544 92.3334 85.5952 92.3032C86.0691 92.271 86.5899 92.1974 87.1192 91.9782C88.2627 91.5046 89.1712 90.596 89.6448 89.4526C89.864 88.9232 89.9376 88.4024 89.9699 87.9286C90 87.4878 90 86.963 90 86.3918V62.2752C90 61.704 90 61.179 89.9699 60.7382C89.9376 60.2643 89.864 59.7435 89.6448 59.2142C89.1712 58.0707 88.2627 57.1622 87.1192 56.6886C86.5899 56.4693 86.0691 56.3957 85.5952 56.3634C85.1544 56.3333 84.6296 56.3333 84.0582 56.3334H84ZM65.2752 65.6667H65.3334H65.3915C65.963 65.6667 66.4878 65.6667 66.9286 65.6968C67.4024 65.7291 67.9232 65.8027 68.4526 66.0219C69.596 66.4955 70.5046 67.404 70.9782 68.5475C71.1974 69.0768 71.271 69.5976 71.3032 70.0715C71.3334 70.5123 71.3334 71.0371 71.3334 71.6086V86.3915C71.3334 86.963 71.3334 87.4878 71.3032 87.9286C71.271 88.4024 71.1974 88.9232 70.9782 89.4526C70.5046 90.596 69.596 91.5046 68.4526 91.9782C67.9232 92.1974 67.4024 92.271 66.9286 92.3032C66.4878 92.3334 65.9627 92.3334 65.3915 92.3334H65.2752C64.704 92.3334 64.179 92.3334 63.7382 92.3032C63.2646 92.271 62.7435 92.1974 62.2142 91.9782C61.0707 91.5046 60.1622 90.596 59.6886 89.4526C59.4693 88.9232 59.3957 88.4024 59.3634 87.9286C59.3333 87.4878 59.3333 86.963 59.3334 86.3915V71.6667V71.6086C59.3333 71.0371 59.3333 70.5123 59.3634 70.0715C59.3957 69.5976 59.4693 69.0768 59.6886 68.5475C60.1622 67.404 61.0707 66.4955 62.2142 66.0219C62.7435 65.8027 63.2646 65.7291 63.7382 65.6968C64.179 65.6667 64.7038 65.6667 65.2752 65.6667ZM46.6667 72.3334H46.6087C46.0373 72.3334 45.5123 72.3334 45.0715 72.3635C44.5978 72.3958 44.0769 72.4694 43.5475 72.6886C42.4041 73.1622 41.4956 74.0707 41.0219 75.2142C40.8027 75.7435 40.7291 76.2643 40.6967 76.7382C40.6667 77.179 40.6667 77.7038 40.6667 78.2752V78.3334V86.3915C40.6667 86.963 40.6667 87.4878 40.6967 87.9286C40.7291 88.4024 40.8027 88.9232 41.0219 89.4526C41.4956 90.596 42.4041 91.5046 43.5475 91.9782C44.0769 92.1974 44.5978 92.271 45.0715 92.3032C45.5123 92.3334 46.0372 92.3334 46.6085 92.3334H46.7247C47.2961 92.3334 47.8211 92.3334 48.2619 92.3032C48.7356 92.271 49.2565 92.1974 49.7859 91.9782C50.9294 91.5046 51.8378 90.596 52.3115 89.4526C52.5307 88.9232 52.6044 88.4024 52.6367 87.9286C52.6668 87.4878 52.6668 86.9627 52.6667 86.3915V78.2752C52.6668 77.704 52.6668 77.179 52.6367 76.7382C52.6044 76.2643 52.5307 75.7435 52.3115 75.2142C51.8378 74.0707 50.9294 73.1622 49.7859 72.6886C49.2565 72.4694 48.7356 72.3958 48.2619 72.3635C47.8211 72.3334 47.2962 72.3334 46.7248 72.3334H46.6667Z\" fill=\"#DDFF00\"></path>\n</g>\n</g>\n<rect x=\"9.44232\" y=\"9.10895\" width=\"111.782\" height=\"111.782\" rx=\"23.8911\" stroke=\"url(#paint1_linear_4002_627)\" stroke-width=\"0.217893\"></rect>\n</g>\n<defs>\n<filter id=\"filter0_dd_4002_627\" x=\"0.617645\" y=\"0.284271\" width=\"129.431\" height=\"129.431\" filterUnits=\"userSpaceOnUse\" color-interpolation-filters=\"sRGB\">\n<feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\"></feFlood>\n<feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\" result=\"hardAlpha\"></feColorMatrix>\n<feOffset dx=\"2.17893\" dy=\"2.17893\"></feOffset>\n<feGaussianBlur stdDeviation=\"3.2684\"></feGaussianBlur>\n<feColorMatrix type=\"matrix\" values=\"0 0 0 0 0.0509804 0 0 0 0 0.0509804 0 0 0 0 0.0509804 0 0 0 1 0\"></feColorMatrix>\n<feBlend mode=\"normal\" in2=\"BackgroundImageFix\" result=\"effect1_dropShadow_4002_627\"></feBlend>\n<feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\" result=\"hardAlpha\"></feColorMatrix>\n<feOffset dx=\"-2.17893\" dy=\"-2.17893\"></feOffset>\n<feGaussianBlur stdDeviation=\"3.2684\"></feGaussianBlur>\n<feColorMatrix type=\"matrix\" values=\"0 0 0 0 0.0901961 0 0 0 0 0.0901961 0 0 0 0 0.0901961 0 0 0 1 0\"></feColorMatrix>\n<feBlend mode=\"normal\" in2=\"effect1_dropShadow_4002_627\" result=\"effect2_dropShadow_4002_627\"></feBlend>\n<feBlend mode=\"normal\" in=\"SourceGraphic\" in2=\"effect2_dropShadow_4002_627\" result=\"shape\"></feBlend>\n</filter>\n<filter id=\"filter1_d_4002_627\" x=\"-30.6666\" y=\"-15\" width=\"192\" height=\"192\" filterUnits=\"userSpaceOnUse\" color-interpolation-filters=\"sRGB\">\n<feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\"></feFlood>\n<feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\" result=\"hardAlpha\"></feColorMatrix>\n<feOffset dy=\"16\"></feOffset>\n<feGaussianBlur stdDeviation=\"32\"></feGaussianBlur>\n<feComposite in2=\"hardAlpha\" operator=\"out\"></feComposite>\n<feColorMatrix type=\"matrix\" values=\"0 0 0 0 0.866667 0 0 0 0 1 0 0 0 0 0 0 0 0 0.4 0\"></feColorMatrix>\n<feBlend mode=\"normal\" in2=\"BackgroundImageFix\" result=\"effect1_dropShadow_4002_627\"></feBlend>\n<feBlend mode=\"normal\" in=\"SourceGraphic\" in2=\"effect1_dropShadow_4002_627\" result=\"shape\"></feBlend>\n</filter>\n<linearGradient id=\"paint0_linear_4002_627\" x1=\"65.3334\" y1=\"9\" x2=\"65.3334\" y2=\"121\" gradientUnits=\"userSpaceOnUse\">\n<stop stop-color=\"#1E1E1E\"></stop>\n<stop offset=\"1\" stop-color=\"#141414\"></stop>\n</linearGradient>\n<linearGradient id=\"paint1_linear_4002_627\" x1=\"9.33337\" y1=\"9\" x2=\"131.147\" y2=\"20.9488\" gradientUnits=\"userSpaceOnUse\">\n<stop stop-color=\"#747474\"></stop>\n<stop offset=\"0.1\" stop-color=\"#171717\" stop-opacity=\"0\"></stop>\n<stop offset=\"0.9\" stop-color=\"#171717\" stop-opacity=\"0\"></stop>\n<stop offset=\"1\" stop-color=\"#747474\"></stop>\n</linearGradient>\n<clipPath id=\"clip0_4002_627\">\n<rect x=\"9.33337\" y=\"9\" width=\"112\" height=\"112\" rx=\"24\" fill=\"white\"></rect>\n</clipPath>\n</defs>\n</svg>\n"}
className={`w-html-embed`} />
</Box>
<Box
className={`w-box cir85gx c1lfjoq7 c16xs6ny c1wt8a7g c1z0l37u c1ml0hr7 cmepw80 ccry0es cl1ou15 c1fhkm63 clv8gve`}>
<Heading
tag={"h3"}
className={`w-heading cuoke4w c11dowh9 c32myit cwrra4i c12y6bqh`}>
{"Relatórios de Gestão"}
{""}
<br />
{""}
</Heading>
<Paragraph
className={`w-paragraph`}>
{"Tenha uma gestão completa de seu funil de vendas com relatórios interativos de vendas."}
{""}
<br />
{""}
</Paragraph>
</Box>
</Box>
<Box
className={`w-box cry9bxc c1lfjoq7 c1wt8a7g c1z0l37u c1ml0hr7 cgl7u82 crlid6h caoqbwa c1aguln ckb5lut czjsrhv c1di64f2 c1ru090q cujxabw c119suh8 cjucu4u c13xb0l c1ncxhfh cd4a99d cdtylqg chmjof8 codg43x cax3zcx c1axwber`}>
<Box
className={`w-box c1ns98mi c1vwb4m1 c18f4fh9 c1wn9gbn ckhl5v6 cry9bxc c1qyy4dh ct02u4h c14sxfy0`}>
<HtmlEmbed
code={"<svg width=\"130\" height=\"130\" viewBox=\"0 0 130 130\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g filter=\"url(#filter0_dd_4002_471)\">\n<g clip-path=\"url(#clip0_4002_471)\">\n<rect x=\"9\" y=\"9\" width=\"112\" height=\"112\" rx=\"24\" fill=\"url(#paint0_linear_4002_471)\"></rect>\n<g filter=\"url(#filter1_d_4002_471)\">\n<g transform=\"scale(0.35) translate(80, 80)\">\n<path d=\"M53.92,34.62A8,8,0,1,0,42.08,45.38L61.32,66.55C25,88.84,9.38,123.2,8.69,124.76a8,8,0,0,0,0,6.5c.35.79,8.82,19.57,27.65,38.4C61.43,194.74,93.12,208,128,208a127.11,127.11,0,0,0,52.07-10.83l22,24.21a8,8,0,1,0,11.84-10.76Zm47.33,75.84,41.67,45.85a32,32,0,0,1-41.67-45.85ZM128,192c-30.78,0-57.67-11.19-79.93-33.25A133.16,133.16,0,0,1,25,128c4.69-8.79,19.66-33.39,47.35-49.38l18,19.75a48,48,0,0,0,63.66,70l14.73,16.2A112,112,0,0,1,128,192Zm6-95.43a8,8,0,0,1,3-15.72,48.16,48.16,0,0,1,38.77,42.64,8,8,0,0,1-7.22,8.71,6.39,6.39,0,0,1-.75,0,8,8,0,0,1-8-7.26A32.09,32.09,0,0,0,134,96.57Zm113.28,34.69c-.42.94-10.55,23.37-33.36,43.8a8,8,0,1,1-10.67-11.92A132.77,132.77,0,0,0,231.05,128a133.15,133.15,0,0,0-23.12-30.77C185.67,75.19,158.78,64,128,64a118.37,118.37,0,0,0-19.36,1.57A8,8,0,1,1,106,49.79A134,134,0,0,1,128,48c34.88,0,66.57,13.26,91.66,38.35,18.83,18.83,27.3,37.62,27.65,38.41A8,8,0,0,1,247.31,131.26Z\" fill=\"#DDFF00\"></path>\n</g>\n</g>\n</g>\n<rect x=\"9.10895\" y=\"9.10895\" width=\"111.782\" height=\"111.782\" rx=\"23.8911\" stroke=\"url(#paint1_linear_4002_471)\" stroke-width=\"0.217893\"></rect>\n</g>\n<defs>\n<filter id=\"filter0_dd_4002_471\" x=\"0.284271\" y=\"0.284271\" width=\"129.431\" height=\"129.431\" filterUnits=\"userSpaceOnUse\" color-interpolation-filters=\"sRGB\">\n<feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\"></feFlood>\n<feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\" result=\"hardAlpha\"></feColorMatrix>\n<feOffset dx=\"2.17893\" dy=\"2.17893\"></feOffset>\n<feGaussianBlur stdDeviation=\"3.2684\"></feGaussianBlur>\n<feColorMatrix type=\"matrix\" values=\"0 0 0 0 0.0509804 0 0 0 0 0.0509804 0 0 0 0 0.0509804 0 0 0 1 0\"></feColorMatrix>\n<feBlend mode=\"normal\" in2=\"BackgroundImageFix\" result=\"effect1_dropShadow_4002_471\"></feBlend>\n<feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\" result=\"hardAlpha\"></feColorMatrix>\n<feOffset dx=\"-2.17893\" dy=\"-2.17893\"></feOffset>\n<feGaussianBlur stdDeviation=\"3.2684\"></feGaussianBlur>\n<feColorMatrix type=\"matrix\" values=\"0 0 0 0 0.0901961 0 0 0 0 0.0901961 0 0 0 0 0.0901961 0 0 0 1 0\"></feColorMatrix>\n<feBlend mode=\"normal\" in2=\"effect1_dropShadow_4002_471\" result=\"effect2_dropShadow_4002_471\"></feBlend>\n<feBlend mode=\"normal\" in=\"SourceGraphic\" in2=\"effect2_dropShadow_4002_471\" result=\"shape\"></feBlend>\n</filter>\n<filter id=\"filter1_d_4002_471\" x=\"-31\" y=\"-15\" width=\"192\" height=\"192\" filterUnits=\"userSpaceOnUse\" color-interpolation-filters=\"sRGB\">\n<feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\"></feFlood>\n<feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\" result=\"hardAlpha\"></feColorMatrix>\n<feOffset dy=\"16\"></feOffset>\n<feGaussianBlur stdDeviation=\"32\"></feGaussianBlur>\n<feComposite in2=\"hardAlpha\" operator=\"out\"></feComposite>\n<feColorMatrix type=\"matrix\" values=\"0 0 0 0 0.866667 0 0 0 0 1 0 0 0 0 0 0 0 0 0.4 0\"></feColorMatrix>\n<feBlend mode=\"normal\" in2=\"BackgroundImageFix\" result=\"effect1_dropShadow_4002_471\"></feBlend>\n<feBlend mode=\"normal\" in=\"SourceGraphic\" in2=\"effect1_dropShadow_4002_471\" result=\"shape\"></feBlend>\n</filter>\n<linearGradient id=\"paint0_linear_4002_471\" x1=\"65\" y1=\"9\" x2=\"65\" y2=\"121\" gradientUnits=\"userSpaceOnUse\">\n<stop stop-color=\"#1E1E1E\"></stop>\n<stop offset=\"1\" stop-color=\"#141414\"></stop>\n</linearGradient>\n<linearGradient id=\"paint1_linear_4002_471\" x1=\"9\" y1=\"9\" x2=\"130.814\" y2=\"20.9488\" gradientUnits=\"userSpaceOnUse\">\n<stop stop-color=\"#747474\"></stop>\n<stop offset=\"0.1\" stop-color=\"#171717\" stop-opacity=\"0\"></stop>\n<stop offset=\"0.9\" stop-color=\"#171717\" stop-opacity=\"0\"></stop>\n<stop offset=\"1\" stop-color=\"#747474\"></stop>\n</linearGradient>\n<clipPath id=\"clip0_4002_471\">\n<rect x=\"9\" y=\"9\" width=\"112\" height=\"112\" rx=\"24\" fill=\"white\"></rect>\n</clipPath>\n</defs>\n</svg>"}
className={`w-html-embed`} />
</Box>
<Box
className={`w-box cir85gx c1lfjoq7 c16xs6ny c1wt8a7g c1z0l37u c1ml0hr7 cmepw80 ccry0es cl1ou15 c1fhkm63 clv8gve`}>
<Heading
tag={"h3"}
className={`w-heading cuoke4w c11dowh9 c32myit cwrra4i c12y6bqh`}>
{"Exibir mensagens Apagadas"}
{""}
<br />
{""}
</Heading>
<Paragraph
className={`w-paragraph`}>
{"o cliente apaga a mensagem mas nós conseguimos reexibir a mensagem em seu whatsapp web."}
{""}
<br />
{""}
</Paragraph>
</Box>
</Box>
<Box
className={`w-box cry9bxc c1lfjoq7 c1wt8a7g c1z0l37u c1ml0hr7 cgl7u82 crlid6h caoqbwa c1aguln ckb5lut czjsrhv c1di64f2 c1ru090q cujxabw c119suh8 cjucu4u c13xb0l c1ncxhfh cd4a99d cdtylqg chmjof8 codg43x cax3zcx c1axwber`}>
<Box
className={`w-box c1ns98mi c1vwb4m1 c18f4fh9 c1wn9gbn ckhl5v6 cry9bxc c1qyy4dh ct02u4h c14sxfy0`}>
<HtmlEmbed
code={"<svg width=\"130\" height=\"130\" viewBox=\"0 0 130 130\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g filter=\"url(#filter0_dd_4002_471)\">\n<g clip-path=\"url(#clip0_4002_471)\">\n<rect x=\"9\" y=\"9\" width=\"112\" height=\"112\" rx=\"24\" fill=\"url(#paint0_linear_4002_471)\"></rect>\n<g filter=\"url(#filter1_d_4002_471)\">\n<g transform=\"scale(0.35) translate(80, 80)\">\n<path d=\"M224,48H32A16,16,0,0,0,16,64V192a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48Zm0,144H32V64H224V192ZM48,136a8,8,0,0,1,8-8H72a8,8,0,0,1,0,16H56A8,8,0,0,1,48,136Zm160,0a8,8,0,0,1-8,8H104a8,8,0,0,1,0-16h96A8,8,0,0,1,208,136Zm-48,32a8,8,0,0,1-8,8H56a8,8,0,0,1,0-16h96A8,8,0,0,1,160,168Zm48,0a8,8,0,0,1-8,8H184a8,8,0,0,1,0-16h16A8,8,0,0,1,208,168Z\" fill=\"#DDFF00\"></path>\n</g>\n</g>\n</g>\n<rect x=\"9.10895\" y=\"9.10895\" width=\"111.782\" height=\"111.782\" rx=\"23.8911\" stroke=\"url(#paint1_linear_4002_471)\" stroke-width=\"0.217893\"></rect>\n</g>\n<defs>\n<filter id=\"filter0_dd_4002_471\" x=\"0.284271\" y=\"0.284271\" width=\"129.431\" height=\"129.431\" filterUnits=\"userSpaceOnUse\" color-interpolation-filters=\"sRGB\">\n<feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\"></feFlood>\n<feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\" result=\"hardAlpha\"></feColorMatrix>\n<feOffset dx=\"2.17893\" dy=\"2.17893\"></feOffset>\n<feGaussianBlur stdDeviation=\"3.2684\"></feGaussianBlur>\n<feColorMatrix type=\"matrix\" values=\"0 0 0 0 0.0509804 0 0 0 0 0.0509804 0 0 0 0 0.0509804 0 0 0 1 0\"></feColorMatrix>\n<feBlend mode=\"normal\" in2=\"BackgroundImageFix\" result=\"effect1_dropShadow_4002_471\"></feBlend>\n<feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\" result=\"hardAlpha\"></feColorMatrix>\n<feOffset dx=\"-2.17893\" dy=\"-2.17893\"></feOffset>\n<feGaussianBlur stdDeviation=\"3.2684\"></feGaussianBlur>\n<feColorMatrix type=\"matrix\" values=\"0 0 0 0 0.0901961 0 0 0 0 0.0901961 0 0 0 0 0.0901961 0 0 0 1 0\"></feColorMatrix>\n<feBlend mode=\"normal\" in2=\"effect1_dropShadow_4002_471\" result=\"effect2_dropShadow_4002_471\"></feBlend>\n<feBlend mode=\"normal\" in=\"SourceGraphic\" in2=\"effect2_dropShadow_4002_471\" result=\"shape\"></feBlend>\n</filter>\n<filter id=\"filter1_d_4002_471\" x=\"-31\" y=\"-15\" width=\"192\" height=\"192\" filterUnits=\"userSpaceOnUse\" color-interpolation-filters=\"sRGB\">\n<feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\"></feFlood>\n<feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\" result=\"hardAlpha\"></feColorMatrix>\n<feOffset dy=\"16\"></feOffset>\n<feGaussianBlur stdDeviation=\"32\"></feGaussianBlur>\n<feComposite in2=\"hardAlpha\" operator=\"out\"></feComposite>\n<feColorMatrix type=\"matrix\" values=\"0 0 0 0 0.866667 0 0 0 0 1 0 0 0 0 0 0 0 0 0.4 0\"></feColorMatrix>\n<feBlend mode=\"normal\" in2=\"BackgroundImageFix\" result=\"effect1_dropShadow_4002_471\"></feBlend>\n<feBlend mode=\"normal\" in=\"SourceGraphic\" in2=\"effect1_dropShadow_4002_471\" result=\"shape\"></feBlend>\n</filter>\n<linearGradient id=\"paint0_linear_4002_471\" x1=\"65\" y1=\"9\" x2=\"65\" y2=\"121\" gradientUnits=\"userSpaceOnUse\">\n<stop stop-color=\"#1E1E1E\"></stop>\n<stop offset=\"1\" stop-color=\"#141414\"></stop>\n</linearGradient>\n<linearGradient id=\"paint1_linear_4002_471\" x1=\"9\" y1=\"9\" x2=\"130.814\" y2=\"20.9488\" gradientUnits=\"userSpaceOnUse\">\n<stop stop-color=\"#747474\"></stop>\n<stop offset=\"0.1\" stop-color=\"#171717\" stop-opacity=\"0\"></stop>\n<stop offset=\"0.9\" stop-color=\"#171717\" stop-opacity=\"0\"></stop>\n<stop offset=\"1\" stop-color=\"#747474\"></stop>\n</linearGradient>\n<clipPath id=\"clip0_4002_471\">\n<rect x=\"9\" y=\"9\" width=\"112\" height=\"112\" rx=\"24\" fill=\"white\"></rect>\n</clipPath>\n</defs>\n</svg>"}
className={`w-html-embed`} />
</Box>
<Box
className={`w-box cir85gx c1lfjoq7 c16xs6ny c1wt8a7g c1z0l37u c1ml0hr7 cmepw80 ccry0es cl1ou15 c1fhkm63 clv8gve`}>
<Heading
tag={"h3"}
className={`w-heading cuoke4w c11dowh9 c32myit cwrra4i c12y6bqh`}>
{"Transcrição de áudio em texto"}
{""}
<br />
{""}
</Heading>
<Paragraph
className={`w-paragraph`}>
{"Transcreve aqueles longos áudios em texto e atenda com mais agilidade."}
{""}
<br />
{""}
</Paragraph>
</Box>
</Box>
<Box
className={`w-box cry9bxc c1lfjoq7 c1wt8a7g c1z0l37u c1ml0hr7 cgl7u82 crlid6h caoqbwa c1aguln ckb5lut czjsrhv c1di64f2 c1ru090q cujxabw c119suh8 cjucu4u c13xb0l c1ncxhfh cd4a99d cdtylqg chmjof8 codg43x cax3zcx c1axwber`}>
<Box
className={`w-box c1ns98mi c1vwb4m1 c18f4fh9 c1wn9gbn ckhl5v6 cry9bxc c1qyy4dh ct02u4h c14sxfy0`}>
<HtmlEmbed
code={"<svg width=\"130\" height=\"130\" viewBox=\"0 0 130 130\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g filter=\"url(#filter0_dd_4002_471)\">\n<g clip-path=\"url(#clip0_4002_471)\">\n<rect x=\"9\" y=\"9\" width=\"112\" height=\"112\" rx=\"24\" fill=\"url(#paint0_linear_4002_471)\"></rect>\n<g filter=\"url(#filter1_d_4002_471)\">\n<g transform=\"scale(0.35) translate(80, 80)\">\n<path d=\"M208,32H83.31A15.86,15.86,0,0,0,72,36.69L36.69,72A15.86,15.86,0,0,0,32,83.31V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM88,48h80V80H88ZM208,208H48V83.31l24-24V80A16,16,0,0,0,88,96h80a16,16,0,0,0,16-16V48h24Zm-80-96a40,40,0,1,0,40,40A40,40,0,0,0,128,112Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,176Z\" fill=\"#DDFF00\"></path>\n</g>\n</g>\n</g>\n<rect x=\"9.10895\" y=\"9.10895\" width=\"111.782\" height=\"111.782\" rx=\"23.8911\" stroke=\"url(#paint1_linear_4002_471)\" stroke-width=\"0.217893\"></rect>\n</g>\n<defs>\n<filter id=\"filter0_dd_4002_471\" x=\"0.284271\" y=\"0.284271\" width=\"129.431\" height=\"129.431\" filterUnits=\"userSpaceOnUse\" color-interpolation-filters=\"sRGB\">\n<feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\"></feFlood>\n<feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\" result=\"hardAlpha\"></feColorMatrix>\n<feOffset dx=\"2.17893\" dy=\"2.17893\"></feOffset>\n<feGaussianBlur stdDeviation=\"3.2684\"></feGaussianBlur>\n<feColorMatrix type=\"matrix\" values=\"0 0 0 0 0.0509804 0 0 0 0 0.0509804 0 0 0 0 0.0509804 0 0 0 1 0\"></feColorMatrix>\n<feBlend mode=\"normal\" in2=\"BackgroundImageFix\" result=\"effect1_dropShadow_4002_471\"></feBlend>\n<feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\" result=\"hardAlpha\"></feColorMatrix>\n<feOffset dx=\"-2.17893\" dy=\"-2.17893\"></feOffset>\n<feGaussianBlur stdDeviation=\"3.2684\"></feGaussianBlur>\n<feColorMatrix type=\"matrix\" values=\"0 0 0 0 0.0901961 0 0 0 0 0.0901961 0 0 0 0 0.0901961 0 0 0 1 0\"></feColorMatrix>\n<feBlend mode=\"normal\" in2=\"effect1_dropShadow_4002_471\" result=\"effect2_dropShadow_4002_471\"></feBlend>\n<feBlend mode=\"normal\" in=\"SourceGraphic\" in2=\"effect2_dropShadow_4002_471\" result=\"shape\"></feBlend>\n</filter>\n<filter id=\"filter1_d_4002_471\" x=\"-31\" y=\"-15\" width=\"192\" height=\"192\" filterUnits=\"userSpaceOnUse\" color-interpolation-filters=\"sRGB\">\n<feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\"></feFlood>\n<feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\" result=\"hardAlpha\"></feColorMatrix>\n<feOffset dy=\"16\"></feOffset>\n<feGaussianBlur stdDeviation=\"32\"></feGaussianBlur>\n<feComposite in2=\"hardAlpha\" operator=\"out\"></feComposite>\n<feColorMatrix type=\"matrix\" values=\"0 0 0 0 0.866667 0 0 0 0 1 0 0 0 0 0 0 0 0 0.4 0\"></feColorMatrix>\n<feBlend mode=\"normal\" in2=\"BackgroundImageFix\" result=\"effect1_dropShadow_4002_471\"></feBlend>\n<feBlend mode=\"normal\" in=\"SourceGraphic\" in2=\"effect1_dropShadow_4002_471\" result=\"shape\"></feBlend>\n</filter>\n<linearGradient id=\"paint0_linear_4002_471\" x1=\"65\" y1=\"9\" x2=\"65\" y2=\"121\" gradientUnits=\"userSpaceOnUse\">\n<stop stop-color=\"#1E1E1E\"></stop>\n<stop offset=\"1\" stop-color=\"#141414\"></stop>\n</linearGradient>\n<linearGradient id=\"paint1_linear_4002_471\" x1=\"9\" y1=\"9\" x2=\"130.814\" y2=\"20.9488\" gradientUnits=\"userSpaceOnUse\">\n<stop stop-color=\"#747474\"></stop>\n<stop offset=\"0.1\" stop-color=\"#171717\" stop-opacity=\"0\"></stop>\n<stop offset=\"0.9\" stop-color=\"#171717\" stop-opacity=\"0\"></stop>\n<stop offset=\"1\" stop-color=\"#747474\"></stop>\n</linearGradient>\n<clipPath id=\"clip0_4002_471\">\n<rect x=\"9\" y=\"9\" width=\"112\" height=\"112\" rx=\"24\" fill=\"white\"></rect>\n</clipPath>\n</defs>\n</svg>"}
className={`w-html-embed`} />
</Box>
<Box
className={`w-box cir85gx c1lfjoq7 c16xs6ny c1wt8a7g c1z0l37u c1ml0hr7 cmepw80 ccry0es cl1ou15 c1fhkm63 clv8gve`}>
<Heading
tag={"h3"}
className={`w-heading cuoke4w c11dowh9 c32myit cwrra4i c12y6bqh`}>
{"Backup de Segurança"}
{""}
<br />
{""}
</Heading>
<Paragraph
className={`w-paragraph`}>
{"Crie uma rotina de backups automáticos e não perca informações valiosas"}
{""}
<br />
{""}
</Paragraph>
</Box>
</Box>
<Box
className={`w-box cry9bxc c1lfjoq7 c1wt8a7g c1z0l37u c1ml0hr7 cgl7u82 crlid6h caoqbwa c1aguln ckb5lut czjsrhv c1di64f2 c1ru090q cujxabw c119suh8 cjucu4u c13xb0l c1ncxhfh cd4a99d cdtylqg chmjof8 codg43x cax3zcx c1axwber`}>
<Box
className={`w-box c1ns98mi c1vwb4m1 c18f4fh9 c1wn9gbn ckhl5v6 cry9bxc c1qyy4dh ct02u4h c14sxfy0`}>
<HtmlEmbed
code={"<svg width=\"130\" height=\"130\" viewBox=\"0 0 130 130\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g filter=\"url(#filter0_dd_4002_471)\">\n<g clip-path=\"url(#clip0_4002_471)\">\n<rect x=\"9\" y=\"9\" width=\"112\" height=\"112\" rx=\"24\" fill=\"url(#paint0_linear_4002_471)\"></rect>\n<g filter=\"url(#filter1_d_4002_471)\">\n<g transform=\"scale(0.35) translate(80, 80)\">\n<path d=\"M200,112a8,8,0,0,1-8,8H152a8,8,0,0,1,0-16h40A8,8,0,0,1,200,112Zm-8,24H152a8,8,0,0,0,0,16h40a8,8,0,0,0,0-16Zm40-80V200a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56ZM216,200V56H40V200H216Zm-80.26-34a8,8,0,1,1-15.5,4c-2.63-10.26-13.06-18-24.25-18s-21.61,7.74-24.25,18a8,8,0,1,1-15.5-4,39.84,39.84,0,0,1,17.19-23.34,32,32,0,1,1,45.12,0A39.76,39.76,0,0,1,135.75,166ZM96,136a16,16,0,1,0-16-16A16,16,0,0,0,96,136Z\" fill=\"#DDFF00\"></path>\n</g>\n</g>\n</g>\n<rect x=\"9.10895\" y=\"9.10895\" width=\"111.782\" height=\"111.782\" rx=\"23.8911\" stroke=\"url(#paint1_linear_4002_471)\" stroke-width=\"0.217893\"></rect>\n</g>\n<defs>\n<filter id=\"filter0_dd_4002_471\" x=\"0.284271\" y=\"0.284271\" width=\"129.431\" height=\"129.431\" filterUnits=\"userSpaceOnUse\" color-interpolation-filters=\"sRGB\">\n<feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\"></feFlood>\n<feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\" result=\"hardAlpha\"></feColorMatrix>\n<feOffset dx=\"2.17893\" dy=\"2.17893\"></feOffset>\n<feGaussianBlur stdDeviation=\"3.2684\"></feGaussianBlur>\n<feColorMatrix type=\"matrix\" values=\"0 0 0 0 0.0509804 0 0 0 0 0.0509804 0 0 0 0 0.0509804 0 0 0 1 0\"></feColorMatrix>\n<feBlend mode=\"normal\" in2=\"BackgroundImageFix\" result=\"effect1_dropShadow_4002_471\"></feBlend>\n<feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\" result=\"hardAlpha\"></feColorMatrix>\n<feOffset dx=\"-2.17893\" dy=\"-2.17893\"></feOffset>\n<feGaussianBlur stdDeviation=\"3.2684\"></feGaussianBlur>\n<feColorMatrix type=\"matrix\" values=\"0 0 0 0 0.0901961 0 0 0 0 0.0901961 0 0 0 0 0.0901961 0 0 0 1 0\"></feColorMatrix>\n<feBlend mode=\"normal\" in2=\"effect1_dropShadow_4002_471\" result=\"effect2_dropShadow_4002_471\"></feBlend>\n<feBlend mode=\"normal\" in=\"SourceGraphic\" in2=\"effect2_dropShadow_4002_471\" result=\"shape\"></feBlend>\n</filter>\n<filter id=\"filter1_d_4002_471\" x=\"-31\" y=\"-15\" width=\"192\" height=\"192\" filterUnits=\"userSpaceOnUse\" color-interpolation-filters=\"sRGB\">\n<feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\"></feFlood>\n<feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\" result=\"hardAlpha\"></feColorMatrix>\n<feOffset dy=\"16\"></feOffset>\n<feGaussianBlur stdDeviation=\"32\"></feGaussianBlur>\n<feComposite in2=\"hardAlpha\" operator=\"out\"></feComposite>\n<feColorMatrix type=\"matrix\" values=\"0 0 0 0 0.866667 0 0 0 0 1 0 0 0 0 0 0 0 0 0.4 0\"></feColorMatrix>\n<feBlend mode=\"normal\" in2=\"BackgroundImageFix\" result=\"effect1_dropShadow_4002_471\"></feBlend>\n<feBlend mode=\"normal\" in=\"SourceGraphic\" in2=\"effect1_dropShadow_4002_471\" result=\"shape\"></feBlend>\n</filter>\n<linearGradient id=\"paint0_linear_4002_471\" x1=\"65\" y1=\"9\" x2=\"65\" y2=\"121\" gradientUnits=\"userSpaceOnUse\">\n<stop stop-color=\"#1E1E1E\"></stop>\n<stop offset=\"1\" stop-color=\"#141414\"></stop>\n</linearGradient>\n<linearGradient id=\"paint1_linear_4002_471\" x1=\"9\" y1=\"9\" x2=\"130.814\" y2=\"20.9488\" gradientUnits=\"userSpaceOnUse\">\n<stop stop-color=\"#747474\"></stop>\n<stop offset=\"0.1\" stop-color=\"#171717\" stop-opacity=\"0\"></stop>\n<stop offset=\"0.9\" stop-color=\"#171717\" stop-opacity=\"0\"></stop>\n<stop offset=\"1\" stop-color=\"#747474\"></stop>\n</linearGradient>\n<clipPath id=\"clip0_4002_471\">\n<rect x=\"9\" y=\"9\" width=\"112\" height=\"112\" rx=\"24\" fill=\"white\"></rect>\n</clipPath>\n</defs>\n</svg>"}
className={`w-html-embed`} />
</Box>
<Box
className={`w-box cir85gx c1lfjoq7 c16xs6ny c1wt8a7g c1z0l37u c1ml0hr7 cmepw80 ccry0es cl1ou15 c1fhkm63 clv8gve`}>
<Heading
tag={"h3"}
className={`w-heading cuoke4w c11dowh9 c32myit cwrra4i c12y6bqh`}>
{"Identificação do Atendente"}
{""}
<br />
{""}
</Heading>
<Paragraph
className={`w-paragraph`}>
{"Identifique o operador que está atendendo o seu cliente para proporcionar uma boa experiência."}
{""}
<br />
{""}
</Paragraph>
</Box>
</Box>
<Box
className={`w-box cry9bxc c1lfjoq7 c1wt8a7g c1z0l37u c1ml0hr7 cgl7u82 crlid6h caoqbwa c1aguln ckb5lut czjsrhv c1di64f2 c1ru090q cujxabw c119suh8 cjucu4u c13xb0l c1ncxhfh cd4a99d cdtylqg chmjof8 codg43x cax3zcx c1axwber`}>
<Box
className={`w-box c1ns98mi c1vwb4m1 c18f4fh9 c1wn9gbn ckhl5v6 cry9bxc c1qyy4dh ct02u4h c14sxfy0`}>
<HtmlEmbed
code={"<svg width=\"130\" height=\"130\" viewBox=\"0 0 130 130\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g filter=\"url(#filter0_dd_4002_471)\">\n<g clip-path=\"url(#clip0_4002_471)\">\n<rect x=\"9\" y=\"9\" width=\"112\" height=\"112\" rx=\"24\" fill=\"url(#paint0_linear_4002_471)\"></rect>\n<g filter=\"url(#filter1_d_4002_471)\">\n<g transform=\"scale(0.35) translate(80, 80)\">\n<path d=\"M221.35,104.11a8,8,0,0,0-6.57,9.21A88.85,88.85,0,0,1,216,128a87.62,87.62,0,0,1-22.24,58.41,79.66,79.66,0,0,0-36.06-28.75,48,48,0,1,0-59.4,0,79.66,79.66,0,0,0-36.06,28.75A88,88,0,0,1,128,40a88.76,88.76,0,0,1,14.68,1.22,8,8,0,0,0,2.64-15.78,103.92,103.92,0,1,0,85.24,85.24A8,8,0,0,0,221.35,104.11ZM96,120a32,32,0,1,1,32,32A32,32,0,0,1,96,120ZM74.08,197.5a64,64,0,0,1,107.84,0,87.83,87.83,0,0,1-107.84,0ZM237.66,45.66l-32,32a8,8,0,0,1-11.32,0l-16-16a8,8,0,0,1,11.32-11.32L200,60.69l26.34-26.35a8,8,0,0,1,11.32,11.32Z\" fill=\"#DDFF00\"></path>\n</g>\n</g>\n</g>\n<rect x=\"9.10895\" y=\"9.10895\" width=\"111.782\" height=\"111.782\" rx=\"23.8911\" stroke=\"url(#paint1_linear_4002_471)\" stroke-width=\"0.217893\"></rect>\n</g>\n<defs>\n<filter id=\"filter0_dd_4002_471\" x=\"0.284271\" y=\"0.284271\" width=\"129.431\" height=\"129.431\" filterUnits=\"userSpaceOnUse\" color-interpolation-filters=\"sRGB\">\n<feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\"></feFlood>\n<feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\" result=\"hardAlpha\"></feColorMatrix>\n<feOffset dx=\"2.17893\" dy=\"2.17893\"></feOffset>\n<feGaussianBlur stdDeviation=\"3.2684\"></feGaussianBlur>\n<feColorMatrix type=\"matrix\" values=\"0 0 0 0 0.0509804 0 0 0 0 0.0509804 0 0 0 0 0.0509804 0 0 0 1 0\"></feColorMatrix>\n<feBlend mode=\"normal\" in2=\"BackgroundImageFix\" result=\"effect1_dropShadow_4002_471\"></feBlend>\n<feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\" result=\"hardAlpha\"></feColorMatrix>\n<feOffset dx=\"-2.17893\" dy=\"-2.17893\"></feOffset>\n<feGaussianBlur stdDeviation=\"3.2684\"></feGaussianBlur>\n<feColorMatrix type=\"matrix\" values=\"0 0 0 0 0.0901961 0 0 0 0 0.0901961 0 0 0 0 0.0901961 0 0 0 1 0\"></feColorMatrix>\n<feBlend mode=\"normal\" in2=\"effect1_dropShadow_4002_471\" result=\"effect2_dropShadow_4002_471\"></feBlend>\n<feBlend mode=\"normal\" in=\"SourceGraphic\" in2=\"effect2_dropShadow_4002_471\" result=\"shape\"></feBlend>\n</filter>\n<filter id=\"filter1_d_4002_471\" x=\"-31\" y=\"-15\" width=\"192\" height=\"192\" filterUnits=\"userSpaceOnUse\" color-interpolation-filters=\"sRGB\">\n<feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\"></feFlood>\n<feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\" result=\"hardAlpha\"></feColorMatrix>\n<feOffset dy=\"16\"></feOffset>\n<feGaussianBlur stdDeviation=\"32\"></feGaussianBlur>\n<feComposite in2=\"hardAlpha\" operator=\"out\"></feComposite>\n<feColorMatrix type=\"matrix\" values=\"0 0 0 0 0.866667 0 0 0 0 1 0 0 0 0 0 0 0 0 0.4 0\"></feColorMatrix>\n<feBlend mode=\"normal\" in2=\"BackgroundImageFix\" result=\"effect1_dropShadow_4002_471\"></feBlend>\n<feBlend mode=\"normal\" in=\"SourceGraphic\" in2=\"effect1_dropShadow_4002_471\" result=\"shape\"></feBlend>\n</filter>\n<linearGradient id=\"paint0_linear_4002_471\" x1=\"65\" y1=\"9\" x2=\"65\" y2=\"121\" gradientUnits=\"userSpaceOnUse\">\n<stop stop-color=\"#1E1E1E\"></stop>\n<stop offset=\"1\" stop-color=\"#141414\"></stop>\n</linearGradient>\n<linearGradient id=\"paint1_linear_4002_471\" x1=\"9\" y1=\"9\" x2=\"130.814\" y2=\"20.9488\" gradientUnits=\"userSpaceOnUse\">\n<stop stop-color=\"#747474\"></stop>\n<stop offset=\"0.1\" stop-color=\"#171717\" stop-opacity=\"0\"></stop>\n<stop offset=\"0.9\" stop-color=\"#171717\" stop-opacity=\"0\"></stop>\n<stop offset=\"1\" stop-color=\"#747474\"></stop>\n</linearGradient>\n<clipPath id=\"clip0_4002_471\">\n<rect x=\"9\" y=\"9\" width=\"112\" height=\"112\" rx=\"24\" fill=\"white\"></rect>\n</clipPath>\n</defs>\n</svg>"}
className={`w-html-embed`} />
</Box>
<Box
className={`w-box cir85gx c1lfjoq7 c16xs6ny c1wt8a7g c1z0l37u c1ml0hr7 cmepw80 ccry0es cl1ou15 c1fhkm63 clv8gve`}>
<Heading
tag={"h3"}
className={`w-heading cuoke4w c11dowh9 c32myit cwrra4i c12y6bqh`}>
{"Conversas Iniciadas sem Salvar Contato"}
{""}
<br />
{""}
</Heading>
<Paragraph
className={`w-paragraph`}>
{"Inicie conversas sem a necessidade de salvar o contato, simplificando seu processo de interação."}
{""}
<br />
{""}
</Paragraph>
</Box>
</Box>
<Box
className={`w-box cry9bxc c1lfjoq7 c1wt8a7g c1z0l37u c1ml0hr7 cgl7u82 crlid6h caoqbwa c1aguln ckb5lut czjsrhv c1di64f2 c1ru090q cujxabw c119suh8 cjucu4u c13xb0l c1ncxhfh cd4a99d cdtylqg chmjof8 codg43x cax3zcx c1axwber`}>
<Box
className={`w-box c1ns98mi c1vwb4m1 c18f4fh9 c1wn9gbn ckhl5v6 cry9bxc c1qyy4dh ct02u4h c14sxfy0`}>
<HtmlEmbed
code={"<svg width=\"130\" height=\"130\" viewBox=\"0 0 130 130\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g filter=\"url(#filter0_dd_4002_471)\">\n<g clip-path=\"url(#clip0_4002_471)\">\n<rect x=\"9\" y=\"9\" width=\"112\" height=\"112\" rx=\"24\" fill=\"url(#paint0_linear_4002_471)\"></rect>\n<g filter=\"url(#filter1_d_4002_471)\">\n<g transform=\"scale(0.35) translate(80, 80)\">\n<path d=\"M224,71.1a8,8,0,0,1-10.78-3.42,94.13,94.13,0,0,0-33.46-36.91,8,8,0,1,1,8.54-13.54,111.46,111.46,0,0,1,39.12,43.09A8,8,0,0,1,224,71.1ZM35.71,72a8,8,0,0,0,7.1-4.32A94.13,94.13,0,0,1,76.27,30.77a8,8,0,1,0-8.54-13.54A111.46,111.46,0,0,0,28.61,60.32,8,8,0,0,0,35.71,72Zm186.1,103.94A16,16,0,0,1,208,200H167.2a40,40,0,0,1-78.4,0H48a16,16,0,0,1-13.79-24.06C43.22,160.39,48,138.28,48,112a80,80,0,0,1,160,0C208,138.27,212.78,160.38,221.81,175.94ZM150.62,200H105.38a24,24,0,0,0,45.24,0ZM208,184c-10.64-18.27-16-42.49-16-72a64,64,0,0,0-128,0c0,29.52-5.38,53.74-16,72Z\" fill=\"#DDFF00\"></path>\n</g>\n</g>\n</g>\n<rect x=\"9.10895\" y=\"9.10895\" width=\"111.782\" height=\"111.782\" rx=\"23.8911\" stroke=\"url(#paint1_linear_4002_471)\" stroke-width=\"0.217893\"></rect>\n</g>\n<defs>\n<filter id=\"filter0_dd_4002_471\" x=\"0.284271\" y=\"0.284271\" width=\"129.431\" height=\"129.431\" filterUnits=\"userSpaceOnUse\" color-interpolation-filters=\"sRGB\">\n<feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\"></feFlood>\n<feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\" result=\"hardAlpha\"></feColorMatrix>\n<feOffset dx=\"2.17893\" dy=\"2.17893\"></feOffset>\n<feGaussianBlur stdDeviation=\"3.2684\"></feGaussianBlur>\n<feColorMatrix type=\"matrix\" values=\"0 0 0 0 0.0509804 0 0 0 0 0.0509804 0 0 0 0 0.0509804 0 0 0 1 0\"></feColorMatrix>\n<feBlend mode=\"normal\" in2=\"BackgroundImageFix\" result=\"effect1_dropShadow_4002_471\"></feBlend>\n<feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\" result=\"hardAlpha\"></feColorMatrix>\n<feOffset dx=\"-2.17893\" dy=\"-2.17893\"></feOffset>\n<feGaussianBlur stdDeviation=\"3.2684\"></feGaussianBlur>\n<feColorMatrix type=\"matrix\" values=\"0 0 0 0 0.0901961 0 0 0 0 0.0901961 0 0 0 0 0.0901961 0 0 0 1 0\"></feColorMatrix>\n<feBlend mode=\"normal\" in2=\"effect1_dropShadow_4002_471\" result=\"effect2_dropShadow_4002_471\"></feBlend>\n<feBlend mode=\"normal\" in=\"SourceGraphic\" in2=\"effect2_dropShadow_4002_471\" result=\"shape\"></feBlend>\n</filter>\n<filter id=\"filter1_d_4002_471\" x=\"-31\" y=\"-15\" width=\"192\" height=\"192\" filterUnits=\"userSpaceOnUse\" color-interpolation-filters=\"sRGB\">\n<feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\"></feFlood>\n<feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\" result=\"hardAlpha\"></feColorMatrix>\n<feOffset dy=\"16\"></feOffset>\n<feGaussianBlur stdDeviation=\"32\"></feGaussianBlur>\n<feComposite in2=\"hardAlpha\" operator=\"out\"></feComposite>\n<feColorMatrix type=\"matrix\" values=\"0 0 0 0 0.866667 0 0 0 0 1 0 0 0 0 0 0 0 0 0.4 0\"></feColorMatrix>\n<feBlend mode=\"normal\" in2=\"BackgroundImageFix\" result=\"effect1_dropShadow_4002_471\"></feBlend>\n<feBlend mode=\"normal\" in=\"SourceGraphic\" in2=\"effect1_dropShadow_4002_471\" result=\"shape\"></feBlend>\n</filter>\n<linearGradient id=\"paint0_linear_4002_471\" x1=\"65\" y1=\"9\" x2=\"65\" y2=\"121\" gradientUnits=\"userSpaceOnUse\">\n<stop stop-color=\"#1E1E1E\"></stop>\n<stop offset=\"1\" stop-color=\"#141414\"></stop>\n</linearGradient>\n<linearGradient id=\"paint1_linear_4002_471\" x1=\"9\" y1=\"9\" x2=\"130.814\" y2=\"20.9488\" gradientUnits=\"userSpaceOnUse\">\n<stop stop-color=\"#747474\"></stop>\n<stop offset=\"0.1\" stop-color=\"#171717\" stop-opacity=\"0\"></stop>\n<stop offset=\"0.9\" stop-color=\"#171717\" stop-opacity=\"0\"></stop>\n<stop offset=\"1\" stop-color=\"#747474\"></stop>\n</linearGradient>\n<clipPath id=\"clip0_4002_471\">\n<rect x=\"9\" y=\"9\" width=\"112\" height=\"112\" rx=\"24\" fill=\"white\"></rect>\n</clipPath>\n</defs>\n</svg>"}
className={`w-html-embed`} />
</Box>
<Box
className={`w-box cir85gx c1lfjoq7 c16xs6ny c1wt8a7g c1z0l37u c1ml0hr7 cmepw80 ccry0es cl1ou15 c1fhkm63 clv8gve`}>
<Heading
tag={"h3"}
className={`w-heading cuoke4w c11dowh9 c32myit cwrra4i c12y6bqh`}>
{"Notas e Lembretes"}
{""}
<br />
{""}
</Heading>
<Paragraph
className={`w-paragraph`}>
{"Insira informações valiosos sob seus contatos e agende lembretes"}
{""}
<br />
{""}
</Paragraph>
</Box>
</Box>
<Box
className={`w-box cry9bxc c1lfjoq7 c1wt8a7g c1z0l37u c1ml0hr7 cgl7u82 crlid6h caoqbwa c1aguln ckb5lut czjsrhv c1di64f2 c1ru090q cujxabw c119suh8 cjucu4u c13xb0l c1ncxhfh cd4a99d cdtylqg chmjof8 codg43x cax3zcx c1axwber`}>
<Box
className={`w-box c1ns98mi c1vwb4m1 c18f4fh9 c1wn9gbn ckhl5v6 cry9bxc c1qyy4dh ct02u4h c14sxfy0`}>
<HtmlEmbed
code={"<svg width=\"130\" height=\"130\" viewBox=\"0 0 130 130\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g filter=\"url(#filter0_dd_4002_471)\">\n<g clip-path=\"url(#clip0_4002_471)\">\n<rect x=\"9\" y=\"9\" width=\"112\" height=\"112\" rx=\"24\" fill=\"url(#paint0_linear_4002_471)\"></rect>\n<g filter=\"url(#filter1_d_4002_471)\">\n<g transform=\"scale(0.35) translate(80, 80)\">\n<path d=\"M247.15,212.42l-56-112a8,8,0,0,0-14.31,0l-21.71,43.43A88,88,0,0,1,108,126.93,103.65,103.65,0,0,0,135.69,64H160a8,8,0,0,0,0-16H104V32a8,8,0,0,0-16,0V48H32a8,8,0,0,0,0,16h87.63A87.76,87.76,0,0,1,96,116.35a87.74,87.74,0,0,1-19-31,8,8,0,1,0-15.08,5.34A103.63,103.63,0,0,0,84,127a87.55,87.55,0,0,1-52,17,8,8,0,0,0,0,16,103.46,103.46,0,0,0,64-22.08,104.18,104.18,0,0,0,51.44,21.31l-26.6,53.19a8,8,0,0,0,14.31,7.16L148.94,192h70.11l13.79,27.58A8,8,0,0,0,240,224a8,8,0,0,0,7.15-11.58ZM156.94,176,184,121.89,211.05,176Z\" fill=\"#DDFF00\"></path>\n</g>\n</g>\n</g>\n<rect x=\"9.10895\" y=\"9.10895\" width=\"111.782\" height=\"111.782\" rx=\"23.8911\" stroke=\"url(#paint1_linear_4002_471)\" stroke-width=\"0.217893\"></rect>\n</g>\n<defs>\n<filter id=\"filter0_dd_4002_471\" x=\"0.284271\" y=\"0.284271\" width=\"129.431\" height=\"129.431\" filterUnits=\"userSpaceOnUse\" color-interpolation-filters=\"sRGB\">\n<feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\"></feFlood>\n<feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\" result=\"hardAlpha\"></feColorMatrix>\n<feOffset dx=\"2.17893\" dy=\"2.17893\"></feOffset>\n<feGaussianBlur stdDeviation=\"3.2684\"></feGaussianBlur>\n<feColorMatrix type=\"matrix\" values=\"0 0 0 0 0.0509804 0 0 0 0 0.0509804 0 0 0 0 0.0509804 0 0 0 1 0\"></feColorMatrix>\n<feBlend mode=\"normal\" in2=\"BackgroundImageFix\" result=\"effect1_dropShadow_4002_471\"></feBlend>\n<feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\" result=\"hardAlpha\"></feColorMatrix>\n<feOffset dx=\"-2.17893\" dy=\"-2.17893\"></feOffset>\n<feGaussianBlur stdDeviation=\"3.2684\"></feGaussianBlur>\n<feColorMatrix type=\"matrix\" values=\"0 0 0 0 0.0901961 0 0 0 0 0.0901961 0 0 0 0 0.0901961 0 0 0 1 0\"></feColorMatrix>\n<feBlend mode=\"normal\" in2=\"effect1_dropShadow_4002_471\" result=\"effect2_dropShadow_4002_471\"></feBlend>\n<feBlend mode=\"normal\" in=\"SourceGraphic\" in2=\"effect2_dropShadow_4002_471\" result=\"shape\"></feBlend>\n</filter>\n<filter id=\"filter1_d_4002_471\" x=\"-31\" y=\"-15\" width=\"192\" height=\"192\" filterUnits=\"userSpaceOnUse\" color-interpolation-filters=\"sRGB\">\n<feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\"></feFlood>\n<feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\" result=\"hardAlpha\"></feColorMatrix>\n<feOffset dy=\"16\"></feOffset>\n<feGaussianBlur stdDeviation=\"32\"></feGaussianBlur>\n<feComposite in2=\"hardAlpha\" operator=\"out\"></feComposite>\n<feColorMatrix type=\"matrix\" values=\"0 0 0 0 0.866667 0 0 0 0 1 0 0 0 0 0 0 0 0 0.4 0\"></feColorMatrix>\n<feBlend mode=\"normal\" in2=\"BackgroundImageFix\" result=\"effect1_dropShadow_4002_471\"></feBlend>\n<feBlend mode=\"normal\" in=\"SourceGraphic\" in2=\"effect1_dropShadow_4002_471\" result=\"shape\"></feBlend>\n</filter>\n<linearGradient id=\"paint0_linear_4002_471\" x1=\"65\" y1=\"9\" x2=\"65\" y2=\"121\" gradientUnits=\"userSpaceOnUse\">\n<stop stop-color=\"#1E1E1E\"></stop>\n<stop offset=\"1\" stop-color=\"#141414\"></stop>\n</linearGradient>\n<linearGradient id=\"paint1_linear_4002_471\" x1=\"9\" y1=\"9\" x2=\"130.814\" y2=\"20.9488\" gradientUnits=\"userSpaceOnUse\">\n<stop stop-color=\"#747474\"></stop>\n<stop offset=\"0.1\" stop-color=\"#171717\" stop-opacity=\"0\"></stop>\n<stop offset=\"0.9\" stop-color=\"#171717\" stop-opacity=\"0\"></stop>\n<stop offset=\"1\" stop-color=\"#747474\"></stop>\n</linearGradient>\n<clipPath id=\"clip0_4002_471\">\n<rect x=\"9\" y=\"9\" width=\"112\" height=\"112\" rx=\"24\" fill=\"white\"></rect>\n</clipPath>\n</defs>\n</svg>"}
className={`w-html-embed`} />
</Box>
<Box
className={`w-box cir85gx c1lfjoq7 c16xs6ny c1wt8a7g c1z0l37u c1ml0hr7 cmepw80 ccry0es cl1ou15 c1fhkm63 clv8gve`}>
<Heading
tag={"h3"}
className={`w-heading cuoke4w c11dowh9 c32myit cwrra4i c12y6bqh`}>
{"Tradutor de Mensagens com IA"}
{""}
<br />
{""}
</Heading>
<Paragraph
className={`w-paragraph`}>
{"Receba mensagens em qualquer idioma e traduza com um clique. Sua barreira para vender no exterior não existe mais!"}
{""}
<br />
{""}
</Paragraph>
</Box>
</Box>
<Box
className={`w-box cry9bxc c1lfjoq7 c1wt8a7g c1z0l37u c1ml0hr7 cgl7u82 crlid6h caoqbwa c1aguln ckb5lut czjsrhv c1di64f2 c1ru090q cujxabw c119suh8 cjucu4u c13xb0l c1ncxhfh cd4a99d cdtylqg chmjof8 codg43x cax3zcx c1axwber`}>
<Box
className={`w-box c1ns98mi c1vwb4m1 c18f4fh9 c1wn9gbn ckhl5v6 cry9bxc c1qyy4dh ct02u4h c14sxfy0`}>
<HtmlEmbed
code={"<svg width=\"130\" height=\"130\" viewBox=\"0 0 130 130\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g filter=\"url(#filter0_dd_4002_471)\">\n<g clip-path=\"url(#clip0_4002_471)\">\n<rect x=\"9\" y=\"9\" width=\"112\" height=\"112\" rx=\"24\" fill=\"url(#paint0_linear_4002_471)\"></rect>\n<g filter=\"url(#filter1_d_4002_471)\">\n<g transform=\"scale(0.35) translate(80, 80)\">\n<path d=\"M255.42,117l-14-35A15.93,15.93,0,0,0,226.58,72H192V64a8,8,0,0,0-8-8H32A16,16,0,0,0,16,72V184a16,16,0,0,0,16,16H49a32,32,0,0,0,62,0h50a32,32,0,0,0,62,0h17a16,16,0,0,0,16-16V120A7.94,7.94,0,0,0,255.42,117ZM192,88h34.58l9.6,24H192ZM32,72H176v64H32ZM80,208a16,16,0,1,1,16-16A16,16,0,0,1,80,208Zm81-24H111a32,32,0,0,0-62,0H32V152H176v12.31A32.11,32.11,0,0,0,161,184Zm31,24a16,16,0,1,1,16-16A16,16,0,0,1,192,208Zm48-24H223a32.06,32.06,0,0,0-31-24V128h48Z\" fill=\"#DDFF00\"></path>\n</g>\n</g>\n</g>\n<rect x=\"9.10895\" y=\"9.10895\" width=\"111.782\" height=\"111.782\" rx=\"23.8911\" stroke=\"url(#paint1_linear_4002_471)\" stroke-width=\"0.217893\"></rect>\n</g>\n<defs>\n<filter id=\"filter0_dd_4002_471\" x=\"0.284271\" y=\"0.284271\" width=\"129.431\" height=\"129.431\" filterUnits=\"userSpaceOnUse\" color-interpolation-filters=\"sRGB\">\n<feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\"></feFlood>\n<feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\" result=\"hardAlpha\"></feColorMatrix>\n<feOffset dx=\"2.17893\" dy=\"2.17893\"></feOffset>\n<feGaussianBlur stdDeviation=\"3.2684\"></feGaussianBlur>\n<feColorMatrix type=\"matrix\" values=\"0 0 0 0 0.0509804 0 0 0 0 0.0509804 0 0 0 0 0.0509804 0 0 0 1 0\"></feColorMatrix>\n<feBlend mode=\"normal\" in2=\"BackgroundImageFix\" result=\"effect1_dropShadow_4002_471\"></feBlend>\n<feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\" result=\"hardAlpha\"></feColorMatrix>\n<feOffset dx=\"-2.17893\" dy=\"-2.17893\"></feOffset>\n<feGaussianBlur stdDeviation=\"3.2684\"></feGaussianBlur>\n<feColorMatrix type=\"matrix\" values=\"0 0 0 0 0.0901961 0 0 0 0 0.0901961 0 0 0 0 0.0901961 0 0 0 1 0\"></feColorMatrix>\n<feBlend mode=\"normal\" in2=\"effect1_dropShadow_4002_471\" result=\"effect2_dropShadow_4002_471\"></feBlend>\n<feBlend mode=\"normal\" in=\"SourceGraphic\" in2=\"effect2_dropShadow_4002_471\" result=\"shape\"></feBlend>\n</filter>\n<filter id=\"filter1_d_4002_471\" x=\"-31\" y=\"-15\" width=\"192\" height=\"192\" filterUnits=\"userSpaceOnUse\" color-interpolation-filters=\"sRGB\">\n<feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\"></feFlood>\n<feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\" result=\"hardAlpha\"></feColorMatrix>\n<feOffset dy=\"16\"></feOffset>\n<feGaussianBlur stdDeviation=\"32\"></feGaussianBlur>\n<feComposite in2=\"hardAlpha\" operator=\"out\"></feComposite>\n<feColorMatrix type=\"matrix\" values=\"0 0 0 0 0.866667 0 0 0 0 1 0 0 0 0 0 0 0 0 0.4 0\"></feColorMatrix>\n<feBlend mode=\"normal\" in2=\"BackgroundImageFix\" result=\"effect1_dropShadow_4002_471\"></feBlend>\n<feBlend mode=\"normal\" in=\"SourceGraphic\" in2=\"effect1_dropShadow_4002_471\" result=\"shape\"></feBlend>\n</filter>\n<linearGradient id=\"paint0_linear_4002_471\" x1=\"65\" y1=\"9\" x2=\"65\" y2=\"121\" gradientUnits=\"userSpaceOnUse\">\n<stop stop-color=\"#1E1E1E\"></stop>\n<stop offset=\"1\" stop-color=\"#141414\"></stop>\n</linearGradient>\n<linearGradient id=\"paint1_linear_4002_471\" x1=\"9\" y1=\"9\" x2=\"130.814\" y2=\"20.9488\" gradientUnits=\"userSpaceOnUse\">\n<stop stop-color=\"#747474\"></stop>\n<stop offset=\"0.1\" stop-color=\"#171717\" stop-opacity=\"0\"></stop>\n<stop offset=\"0.9\" stop-color=\"#171717\" stop-opacity=\"0\"></stop>\n<stop offset=\"1\" stop-color=\"#747474\"></stop>\n</linearGradient>\n<clipPath id=\"clip0_4002_471\">\n<rect x=\"9\" y=\"9\" width=\"112\" height=\"112\" rx=\"24\" fill=\"white\"></rect>\n</clipPath>\n</defs>\n</svg>"}
className={`w-html-embed`} />
</Box>
<Box
className={`w-box cir85gx c1lfjoq7 c16xs6ny c1wt8a7g c1z0l37u c1ml0hr7 cmepw80 ccry0es cl1ou15 c1fhkm63 clv8gve`}>
<Heading
tag={"h3"}
className={`w-heading cuoke4w c11dowh9 c32myit cwrra4i c12y6bqh`}>
{"Rastreador de encomendas"}
{""}
<br />
{""}
</Heading>
<Paragraph
className={`w-paragraph`}>
{"Inclua código de rastreio em seus contatos e envie automaticamente para o cliente"}
</Paragraph>
</Box>
</Box>
<Box
className={`w-box cry9bxc c1lfjoq7 c1wt8a7g c1z0l37u c1ml0hr7 cgl7u82 crlid6h caoqbwa c1aguln ckb5lut czjsrhv c1di64f2 c1ru090q cujxabw c119suh8 cjucu4u c13xb0l c1ncxhfh cd4a99d cdtylqg chmjof8 codg43x cax3zcx c1axwber`}>
<Box
className={`w-box c1ns98mi c1vwb4m1 c18f4fh9 c1wn9gbn ckhl5v6 cry9bxc c1qyy4dh ct02u4h c14sxfy0`}>
<HtmlEmbed
code={"<svg width=\"130\" height=\"130\" viewBox=\"0 0 130 130\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g filter=\"url(#filter0_dd_4002_471)\">\n<g clip-path=\"url(#clip0_4002_471)\">\n<rect x=\"9\" y=\"9\" width=\"112\" height=\"112\" rx=\"24\" fill=\"url(#paint0_linear_4002_471)\"></rect>\n<g filter=\"url(#filter1_d_4002_471)\">\n<g transform=\"scale(0.35) translate(80, 80)\">\n<path d=\"M235.32,81.37,174.63,20.69a16,16,0,0,0-22.63,0L98.37,74.49c-10.66-3.34-35-7.37-60.4,13.14a16,16,0,0,0-1.29,23.78L85,159.71,42.34,202.34a8,8,0,0,0,11.32,11.32L96.29,171l48.29,48.29A16,16,0,0,0,155.9,224c.38,0,.75,0,1.13,0a15.93,15.93,0,0,0,11.64-6.33c19.64-26.1,17.75-47.32,13.19-60L235.33,104A16,16,0,0,0,235.32,81.37ZM224,92.69h0l-57.27,57.46a8,8,0,0,0-1.49,9.22c9.46,18.93-1.8,38.59-9.34,48.62L48,100.08c12.08-9.74,23.64-12.31,32.48-12.31A40.13,40.13,0,0,1,96.81,91a8,8,0,0,0,9.25-1.51L163.32,32,224,92.68Z\" fill=\"#DDFF00\"></path>\n</g>\n</g>\n</g>\n<rect x=\"9.10895\" y=\"9.10895\" width=\"111.782\" height=\"111.782\" rx=\"23.8911\" stroke=\"url(#paint1_linear_4002_471)\" stroke-width=\"0.217893\"></rect>\n</g>\n<defs>\n<filter id=\"filter0_dd_4002_471\" x=\"0.284271\" y=\"0.284271\" width=\"129.431\" height=\"129.431\" filterUnits=\"userSpaceOnUse\" color-interpolation-filters=\"sRGB\">\n<feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\"></feFlood>\n<feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\" result=\"hardAlpha\"></feColorMatrix>\n<feOffset dx=\"2.17893\" dy=\"2.17893\"></feOffset>\n<feGaussianBlur stdDeviation=\"3.2684\"></feGaussianBlur>\n<feColorMatrix type=\"matrix\" values=\"0 0 0 0 0.0509804 0 0 0 0 0.0509804 0 0 0 0 0.0509804 0 0 0 1 0\"></feColorMatrix>\n<feBlend mode=\"normal\" in2=\"BackgroundImageFix\" result=\"effect1_dropShadow_4002_471\"></feBlend>\n<feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\" result=\"hardAlpha\"></feColorMatrix>\n<feOffset dx=\"-2.17893\" dy=\"-2.17893\"></feOffset>\n<feGaussianBlur stdDeviation=\"3.2684\"></feGaussianBlur>\n<feColorMatrix type=\"matrix\" values=\"0 0 0 0 0.0901961 0 0 0 0 0.0901961 0 0 0 0 0.0901961 0 0 0 1 0\"></feColorMatrix>\n<feBlend mode=\"normal\" in2=\"effect1_dropShadow_4002_471\" result=\"effect2_dropShadow_4002_471\"></feBlend>\n<feBlend mode=\"normal\" in=\"SourceGraphic\" in2=\"effect2_dropShadow_4002_471\" result=\"shape\"></feBlend>\n</filter>\n<filter id=\"filter1_d_4002_471\" x=\"-31\" y=\"-15\" width=\"192\" height=\"192\" filterUnits=\"userSpaceOnUse\" color-interpolation-filters=\"sRGB\">\n<feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\"></feFlood>\n<feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\" result=\"hardAlpha\"></feColorMatrix>\n<feOffset dy=\"16\"></feOffset>\n<feGaussianBlur stdDeviation=\"32\"></feGaussianBlur>\n<feComposite in2=\"hardAlpha\" operator=\"out\"></feComposite>\n<feColorMatrix type=\"matrix\" values=\"0 0 0 0 0.866667 0 0 0 0 1 0 0 0 0 0 0 0 0 0.4 0\"></feColorMatrix>\n<feBlend mode=\"normal\" in2=\"BackgroundImageFix\" result=\"effect1_dropShadow_4002_471\"></feBlend>\n<feBlend mode=\"normal\" in=\"SourceGraphic\" in2=\"effect1_dropShadow_4002_471\" result=\"shape\"></feBlend>\n</filter>\n<linearGradient id=\"paint0_linear_4002_471\" x1=\"65\" y1=\"9\" x2=\"65\" y2=\"121\" gradientUnits=\"userSpaceOnUse\">\n<stop stop-color=\"#1E1E1E\"></stop>\n<stop offset=\"1\" stop-color=\"#141414\"></stop>\n</linearGradient>\n<linearGradient id=\"paint1_linear_4002_471\" x1=\"9\" y1=\"9\" x2=\"130.814\" y2=\"20.9488\" gradientUnits=\"userSpaceOnUse\">\n<stop stop-color=\"#747474\"></stop>\n<stop offset=\"0.1\" stop-color=\"#171717\" stop-opacity=\"0\"></stop>\n<stop offset=\"0.9\" stop-color=\"#171717\" stop-opacity=\"0\"></stop>\n<stop offset=\"1\" stop-color=\"#747474\"></stop>\n</linearGradient>\n<clipPath id=\"clip0_4002_471\">\n<rect x=\"9\" y=\"9\" width=\"112\" height=\"112\" rx=\"24\" fill=\"white\"></rect>\n</clipPath>\n</defs>\n</svg>"}
className={`w-html-embed`} />
</Box>
<Box
className={`w-box cir85gx c1lfjoq7 c16xs6ny c1wt8a7g c1z0l37u c1ml0hr7 cmepw80 ccry0es cl1ou15 c1fhkm63 clv8gve`}>
<Heading
tag={"h3"}
className={`w-heading cuoke4w c11dowh9 c32myit cwrra4i c12y6bqh`}>
{"Fixar Contatos Ilimitados"}
{""}
<br />
{""}
</Heading>
<Paragraph
className={`w-paragraph`}>
{"Fixe quantos contatos desejar no topo do seu inbox do WhatsApp"}
{""}
<br />
{""}
</Paragraph>
</Box>
</Box>
<Box
className={`w-box cry9bxc c1lfjoq7 c1wt8a7g c1z0l37u c1ml0hr7 cgl7u82 crlid6h caoqbwa c1aguln ckb5lut czjsrhv c1di64f2 c1ru090q cujxabw c119suh8 cjucu4u c13xb0l c1ncxhfh cd4a99d cdtylqg chmjof8 codg43x cax3zcx c1axwber`}>
<Box
className={`w-box c1ns98mi c1vwb4m1 c18f4fh9 c1wn9gbn ckhl5v6 cry9bxc c1qyy4dh ct02u4h c14sxfy0`}>
<HtmlEmbed
code={"<svg width=\"130\" height=\"130\" viewBox=\"0 0 130 130\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g filter=\"url(#filter0_dd_4002_471)\">\n<g clip-path=\"url(#clip0_4002_471)\">\n<rect x=\"9\" y=\"9\" width=\"112\" height=\"112\" rx=\"24\" fill=\"url(#paint0_linear_4002_471)\"></rect>\n<g filter=\"url(#filter1_d_4002_471)\">\n<g transform=\"scale(0.35) translate(80, 80)\">\n<path d=\"M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM96,120a32,32,0,1,1,32,32A32,32,0,0,1,96,120ZM72.57,200a64,64,0,0,1,110.86,0ZM216,200H201.33a80.14,80.14,0,0,0-43.69-42.28,48,48,0,1,0-59.28,0A80.14,80.14,0,0,0,54.67,200H40V56H216V200Z\" fill=\"#DDFF00\"></path>\n</g>\n</g>\n</g>\n<rect x=\"9.10895\" y=\"9.10895\" width=\"111.782\" height=\"111.782\" rx=\"23.8911\" stroke=\"url(#paint1_linear_4002_471)\" stroke-width=\"0.217893\"></rect>\n</g>\n<defs>\n<filter id=\"filter0_dd_4002_471\" x=\"0.284271\" y=\"0.284271\" width=\"129.431\" height=\"129.431\" filterUnits=\"userSpaceOnUse\" color-interpolation-filters=\"sRGB\">\n<feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\"></feFlood>\n<feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\" result=\"hardAlpha\"></feColorMatrix>\n<feOffset dx=\"2.17893\" dy=\"2.17893\"></feOffset>\n<feGaussianBlur stdDeviation=\"3.2684\"></feGaussianBlur>\n<feColorMatrix type=\"matrix\" values=\"0 0 0 0 0.0509804 0 0 0 0 0.0509804 0 0 0 0 0.0509804 0 0 0 1 0\"></feColorMatrix>\n<feBlend mode=\"normal\" in2=\"BackgroundImageFix\" result=\"effect1_dropShadow_4002_471\"></feBlend>\n<feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\" result=\"hardAlpha\"></feColorMatrix>\n<feOffset dx=\"-2.17893\" dy=\"-2.17893\"></feOffset>\n<feGaussianBlur stdDeviation=\"3.2684\"></feGaussianBlur>\n<feColorMatrix type=\"matrix\" values=\"0 0 0 0 0.0901961 0 0 0 0 0.0901961 0 0 0 0 0.0901961 0 0 0 1 0\"></feColorMatrix>\n<feBlend mode=\"normal\" in2=\"effect1_dropShadow_4002_471\" result=\"effect2_dropShadow_4002_471\"></feBlend>\n<feBlend mode=\"normal\" in=\"SourceGraphic\" in2=\"effect2_dropShadow_4002_471\" result=\"shape\"></feBlend>\n</filter>\n<filter id=\"filter1_d_4002_471\" x=\"-31\" y=\"-15\" width=\"192\" height=\"192\" filterUnits=\"userSpaceOnUse\" color-interpolation-filters=\"sRGB\">\n<feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\"></feFlood>\n<feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\" result=\"hardAlpha\"></feColorMatrix>\n<feOffset dy=\"16\"></feOffset>\n<feGaussianBlur stdDeviation=\"32\"></feGaussianBlur>\n<feComposite in2=\"hardAlpha\" operator=\"out\"></feComposite>\n<feColorMatrix type=\"matrix\" values=\"0 0 0 0 0.866667 0 0 0 0 1 0 0 0 0 0 0 0 0 0.4 0\"></feColorMatrix>\n<feBlend mode=\"normal\" in2=\"BackgroundImageFix\" result=\"effect1_dropShadow_4002_471\"></feBlend>\n<feBlend mode=\"normal\" in=\"SourceGraphic\" in2=\"effect1_dropShadow_4002_471\" result=\"shape\"></feBlend>\n</filter>\n<linearGradient id=\"paint0_linear_4002_471\" x1=\"65\" y1=\"9\" x2=\"65\" y2=\"121\" gradientUnits=\"userSpaceOnUse\">\n<stop stop-color=\"#1E1E1E\"></stop>\n<stop offset=\"1\" stop-color=\"#141414\"></stop>\n</linearGradient>\n<linearGradient id=\"paint1_linear_4002_471\" x1=\"9\" y1=\"9\" x2=\"130.814\" y2=\"20.9488\" gradientUnits=\"userSpaceOnUse\">\n<stop stop-color=\"#747474\"></stop>\n<stop offset=\"0.1\" stop-color=\"#171717\" stop-opacity=\"0\"></stop>\n<stop offset=\"0.9\" stop-color=\"#171717\" stop-opacity=\"0\"></stop>\n<stop offset=\"1\" stop-color=\"#747474\"></stop>\n</linearGradient>\n<clipPath id=\"clip0_4002_471\">\n<rect x=\"9\" y=\"9\" width=\"112\" height=\"112\" rx=\"24\" fill=\"white\"></rect>\n</clipPath>\n</defs>\n</svg>"}
className={`w-html-embed`} />
</Box>
<Box
className={`w-box cir85gx c1lfjoq7 c16xs6ny c1wt8a7g c1z0l37u c1ml0hr7 cmepw80 ccry0es cl1ou15 c1fhkm63 clv8gve`}>
<Heading
tag={"h3"}
className={`w-heading cuoke4w c11dowh9 c32myit cwrra4i c12y6bqh`}>
{"Salvar nome do contato"}
{""}
<br />
{""}
</Heading>
<Paragraph
className={`w-paragraph`}>
{"Salve o nome do contato direto pelo whatsapp web sem precisar salvar no telefone"}
{""}
<br />
{""}
</Paragraph>
</Box>
</Box>
</Box>
<Link
id={"toggleCardsBtn"}
className={`w-link c14yqvd4 c12n5uks csb0ifw cg5j03k c8od1c4 c135vpv5 csru8nn c1qyy4dh ct02u4h c1md20bl c1e892th c1qom380 c1jq23ex czjsrhv c1di64f2 c1ru090q cujxabw c119suh8 cnqbj7z cz4drm4 cy1haag ci5f5wh clx2mg7 c1ph6sgd c1s4ttse cj3c47m cfw5mh8 c1apclts cqzihcd c82q2z c1t5a35i cl60rel c1ib9cr2 c55gr8u cra5x9r cm64msb ${"ver-mais-btn"}`}>
<HtmlEmbed
code={"<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 21 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M5.66126 9.49709L10.66 2.75989C11.0509 2.23298 11.7838 2.56093 11.7838 3.2628V8.47742C11.7838 8.89792 12.0711 9.23875 12.4256 9.23875H14.8569C15.4092 9.23875 15.7036 10.0112 15.3388 10.5029L10.34 17.2401C9.94908 17.767 9.21625 17.4391 9.21625 16.7372V11.5226C9.21625 11.1021 8.92892 10.7613 8.57443 10.7613H6.14311C5.59079 10.7613 5.29638 9.98884 5.66126 9.49709Z\" stroke=\"#171717\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n"}
className={`w-html-embed csru8nn ch2prsz cg4iiql c1qyy4dh ct02u4h`} />
<Text
tag={"span"}
className={`w-text`}>
{"Ver mais"}
</Text>
</Link>
</Box>
</Box>
</Box>
<Box
tag={"section"}
id={"testimonials"}
className={`w-box cna0hdz c1mzb2kd c1uaptg7 c1cozyp5 crv1a4t cbrrmm8 cuo9dm5 c5egcmi c1nrah9j cdtylqg chmjof8 cry9bxc c1lfjoq7 c1s46o9r cdczzub cxz9xjl`}>
<Box
className={`w-box c1357293 c9jnjeu czr2pxy c155uc7w cry9bxc c1lfjoq7 c1778y6x c1wt8a7g c1s46o9r cdczzub c1fd0kk1 c11gzs80`}>
<Box
className={`w-box cry9bxc c1lfjoq7 ct8c5y2 c10zkoym c1qyy4dh c1wt8a7g`}>
<Box
className={`w-box c13b531o c1my01bv c1a8d7ts c122t6uk c13xb0l c12n5uks csb0ifw cg5j03k c8od1c4 cry9bxc c1qyy4dh ct02u4h cn6056e c1117wcl c135vpv5 cpp0nin c1cb3y4c c1qom380`}>
<Text
className={`w-text`}>
{"Trusted by Leading Teams"}
</Text>
</Box>
<Heading
tag={"h2"}
className={`w-heading c1dxq9cf c11dowh9 c32myit cwrra4i c12y6bqh c74kosi c1qom380 c1357293 c9jnjeu c1dhz37v`}>
<span
className={`w-element czt9u4x`}>
{"Quem já parou "}
</span>
{"de perder tempo e começou a lucrar"}
</Heading>
</Box>
</Box>
<Box
className={`w-box cavd3zn cqn0ak8 c1g5frr0 cry9bxc c1lfjoq7 c10zkoym ct8c5y2 cpxs833 curnleh c1f5xck1 c1ebuf1b`}>
<Box
className={`w-box copqmak c10zkoym ct8c5y2 cori9ti co2qwzx c1vrexag cx6c9kw c174sw29`}>
<Slot>
<Fragment_1>
</Fragment_1>
</Slot>
<Slot>
<Fragment_1>
<Box
className={`w-box cry9bxc c1lfjoq7 c1wt8a7g c1z0l37u c1ml0hr7 cgl7u82 crlid6h caoqbwa c1aguln ckb5lut czjsrhv c1di64f2 c1ru090q cujxabw c119suh8 cjucu4u c13xb0l c1ncxhfh cd4a99d cdtylqg chmjof8 ccqwawa c11rx4fp c1axwber`}>
<Paragraph
className={`w-paragraph c12y6bqh c1cb3y4c`}>
{"Our productivity has never been higher. Increasy’s tracking tools keep us aligned and motivated."}
</Paragraph>
<Separator
className={`w-separator c1lhka2w czr2pxy c32myit cwrra4i`} />
<Box
className={`w-box c1lxiyww c1qyy4dh c1wt8a7g cry9bxc c10zkoym ct8c5y2`}>
<Image
alt={"Emily Doe"}
src={"/assets/testimonial_GB6l3LXj1R1OMpLPsCkLV.jpg"}
width={100}
height={100}
loading={"lazy"}
className={`w-image cc0cely c1gxuxwl c1pmcxsb ck312uk c1it126x c13mpy3e c1b69l42 c1y46zjw c1uw7lih cnu4kgu c1yb3n9o cbrrmm8 cdip4vx c5egcmi cqzihcd c1xzir7e`} />
<Box
className={`w-box cry9bxc c1lfjoq7 cn6056e c1117wcl`}>
<Text
className={`w-text c1cb3y4c`}>
{"Emily Doe, Project Manager"}
</Text>
<Image
src={"/assets/Container_DRwSJAOhzUt9kkMD02GBu.svg"}
width={172}
height={28}
alt={"5 stars"}
loading={"lazy"}
className={`w-image`} />
</Box>
</Box>
</Box>
</Fragment_1>
</Slot>
<Slot>
<Fragment_1>
<Box
className={`w-box cry9bxc c1lfjoq7 c1wt8a7g c1z0l37u c1ml0hr7 cgl7u82 crlid6h caoqbwa c1aguln ckb5lut czjsrhv c1di64f2 c1ru090q cujxabw c119suh8 cjucu4u c13xb0l c1ncxhfh cd4a99d cdtylqg chmjof8 ccqwawa c11rx4fp c1axwber`}>
<Paragraph
className={`w-paragraph c12y6bqh c1cb3y4c`}>
{"Our productivity has never been higher. Increasy’s tracking tools keep us aligned and motivated."}
</Paragraph>
<Separator
className={`w-separator c1lhka2w czr2pxy c32myit cwrra4i`} />
<Box
className={`w-box c1lxiyww c1qyy4dh c1wt8a7g cry9bxc c10zkoym ct8c5y2`}>
<Image
alt={"Emily Doe"}
src={"/assets/testimonial_GB6l3LXj1R1OMpLPsCkLV.jpg"}
width={100}
height={100}
loading={"lazy"}
className={`w-image cc0cely c1gxuxwl c1pmcxsb ck312uk c1it126x c13mpy3e c1b69l42 c1y46zjw c1uw7lih cnu4kgu c1yb3n9o cbrrmm8 cdip4vx c5egcmi cqzihcd c1xzir7e`} />
<Box
className={`w-box cry9bxc c1lfjoq7 cn6056e c1117wcl`}>
<Text
className={`w-text c1cb3y4c`}>
{"Emily Doe, Project Manager"}
</Text>
<Image
src={"/assets/Container_DRwSJAOhzUt9kkMD02GBu.svg"}
width={172}
height={28}
alt={"5 stars"}
loading={"lazy"}
className={`w-image`} />
</Box>
</Box>
</Box>
</Fragment_1>
</Slot>
<Box
className={`w-box cry9bxc c1lfjoq7 c1wt8a7g c1z0l37u c1ml0hr7 cgl7u82 crlid6h caoqbwa c1aguln ckb5lut czjsrhv c1di64f2 c1ru090q cujxabw c119suh8 cjucu4u c13xb0l c1ncxhfh cd4a99d cdtylqg chmjof8 c16m1pgo ccqwawa c11rx4fp c1axwber`}>
<Paragraph
className={`w-paragraph c12y6bqh c1cb3y4c`}>
{"Our productivity has never been higher. Increasy’s tracking tools keep us aligned and motivated."}
</Paragraph>
<Separator
className={`w-separator c1lhka2w czr2pxy c32myit cwrra4i`} />
<Box
className={`w-box c1lxiyww c1qyy4dh c1wt8a7g cry9bxc c10zkoym ct8c5y2`}>
<Image
alt={"Emily Doe"}
src={"/assets/testimonial_GB6l3LXj1R1OMpLPsCkLV.jpg"}
width={100}
height={100}
className={`w-image cc0cely c1gxuxwl c1pmcxsb ck312uk c1it126x c13mpy3e c1b69l42 c1y46zjw c1uw7lih cnu4kgu c1yb3n9o cbrrmm8 cdip4vx c5egcmi cqzihcd c1xzir7e`} />
<Box
className={`w-box cry9bxc c1lfjoq7 cn6056e c1117wcl`}>
<Text
className={`w-text c1cb3y4c`}>
{"Emily Doe, Project Manager"}
</Text>
<Image
src={"/assets/Container_DRwSJAOhzUt9kkMD02GBu.svg"}
width={172}
height={28}
alt={"5 stars"}
className={`w-image`} />
</Box>
</Box>
</Box>
</Box>
<Box
className={`w-box copqmak c10zkoym ct8c5y2 cejtdrx co2qwzx c1vrexag cx6c9kw c174sw29`}>
<Box
className={`w-box cry9bxc c1lfjoq7 c1wt8a7g c1z0l37u c1ml0hr7 cgl7u82 crlid6h caoqbwa c1aguln ckb5lut czjsrhv c1di64f2 c1ru090q cujxabw c119suh8 cjucu4u c13xb0l c1ncxhfh cd4a99d cdtylqg chmjof8 ccqwawa c11rx4fp c1axwber`}>
<Paragraph
className={`w-paragraph c12y6bqh c1cb3y4c`}>
{"Our productivity has never been higher. Increasy’s tracking tools keep us aligned and motivated."}
</Paragraph>
<Separator
className={`w-separator c1lhka2w czr2pxy c32myit cwrra4i`} />
<Box
className={`w-box c1lxiyww c1qyy4dh c1wt8a7g cry9bxc c10zkoym ct8c5y2`}>
<Image
alt={"Emily Doe"}
src={"/assets/testimonial_GB6l3LXj1R1OMpLPsCkLV.jpg"}
width={100}
height={100}
className={`w-image cc0cely c1gxuxwl c1pmcxsb ck312uk c1it126x c13mpy3e c1b69l42 c1y46zjw c1uw7lih cnu4kgu c1yb3n9o cbrrmm8 cdip4vx c5egcmi cqzihcd c1xzir7e`} />
<Box
className={`w-box cry9bxc c1lfjoq7 cn6056e c1117wcl`}>
<Text
className={`w-text c1cb3y4c`}>
{"Emily Doe, Project Manager"}
</Text>
<Image
src={"/assets/Container_DRwSJAOhzUt9kkMD02GBu.svg"}
width={172}
height={28}
alt={"5 stars"}
className={`w-image`} />
</Box>
</Box>
</Box>
<Box
className={`w-box cry9bxc c1lfjoq7 c1wt8a7g c1z0l37u c1ml0hr7 cgl7u82 crlid6h caoqbwa c1aguln ckb5lut czjsrhv c1di64f2 c1ru090q cujxabw c119suh8 cjucu4u c13xb0l c1ncxhfh cd4a99d cdtylqg chmjof8 c16m1pgo ccqwawa c11rx4fp c1axwber`}>
<Paragraph
className={`w-paragraph c12y6bqh c1cb3y4c`}>
{"Our productivity has never been higher. Increasy’s tracking tools keep us aligned and motivated."}
</Paragraph>
<Separator
className={`w-separator c1lhka2w czr2pxy c32myit cwrra4i`} />
<Box
className={`w-box c1lxiyww c1qyy4dh c1wt8a7g cry9bxc c10zkoym ct8c5y2`}>
<Image
alt={"Emily Doe"}
src={"/assets/testimonial_GB6l3LXj1R1OMpLPsCkLV.jpg"}
width={100}
height={100}
className={`w-image cc0cely c1gxuxwl c1pmcxsb ck312uk c1it126x c13mpy3e c1b69l42 c1y46zjw c1uw7lih cnu4kgu c1yb3n9o cbrrmm8 cdip4vx c5egcmi cqzihcd c1xzir7e`} />
<Box
className={`w-box cry9bxc c1lfjoq7 cn6056e c1117wcl`}>
<Text
className={`w-text c1cb3y4c`}>
{"Emily Doe, Project Manager"}
</Text>
<Image
src={"/assets/Container_DRwSJAOhzUt9kkMD02GBu.svg"}
width={172}
height={28}
alt={"5 stars"}
className={`w-image`} />
</Box>
</Box>
</Box>
<Box
className={`w-box cry9bxc c1lfjoq7 c1wt8a7g c1z0l37u c1ml0hr7 cgl7u82 crlid6h caoqbwa c1aguln ckb5lut czjsrhv c1di64f2 c1ru090q cujxabw c119suh8 cjucu4u c13xb0l c1ncxhfh cd4a99d cdtylqg chmjof8 ccqwawa c11rx4fp c1axwber`}>
<Paragraph
className={`w-paragraph c12y6bqh c1cb3y4c`}>
{"Our productivity has never been higher. Increasy’s tracking tools keep us aligned and motivated."}
</Paragraph>
<Separator
className={`w-separator c1lhka2w czr2pxy c32myit cwrra4i`} />
<Box
className={`w-box c1lxiyww c1qyy4dh c1wt8a7g cry9bxc c10zkoym ct8c5y2`}>
<Image
alt={"Emily Doe"}
src={"/assets/testimonial_GB6l3LXj1R1OMpLPsCkLV.jpg"}
width={100}
height={100}
className={`w-image cc0cely c1gxuxwl c1pmcxsb ck312uk c1it126x c13mpy3e c1b69l42 c1y46zjw c1uw7lih cnu4kgu c1yb3n9o cbrrmm8 cdip4vx c5egcmi cqzihcd c1xzir7e`} />
<Box
className={`w-box cry9bxc c1lfjoq7 cn6056e c1117wcl`}>
<Text
className={`w-text c1cb3y4c`}>
{"Emily Doe, Project Manager"}
</Text>
<Image
src={"/assets/Container_DRwSJAOhzUt9kkMD02GBu.svg"}
width={172}
height={28}
alt={"5 stars"}
className={`w-image`} />
</Box>
</Box>
</Box>
</Box>
<Box
className={`w-box cdwd3jx czr2pxy c1bkqfhr cblbfaz cnu4kgu c1yb3n9o cbrrmm8 cuo9dm5 c5egcmi c1nl36ft c1xzir7e cc3dq2t`} />
</Box>
<Box
tag={"section"}
id={"precos"}
className={`w-box cna0hdz c1mzb2kd c1uaptg7 c1cozyp5 crv1a4t cbrrmm8 cuo9dm5 c5egcmi cxz9xjl`}>
<Box
className={`w-box c1357293 c9jnjeu czr2pxy c155uc7w cry9bxc c1lfjoq7 c1778y6x c1wt8a7g c1s46o9r cdczzub c1fd0kk1 c11gzs80`}>
<Box
className={`w-box cry9bxc c1lfjoq7 ct8c5y2 c10zkoym c1qyy4dh c1wt8a7g`}>
<Box
className={`w-box c13b531o c1my01bv c1a8d7ts c122t6uk c13xb0l c12n5uks csb0ifw cg5j03k c8od1c4 cry9bxc c1qyy4dh ct02u4h cn6056e c1117wcl c135vpv5 cpp0nin c1cb3y4c c1qom380`}>
<Text
className={`w-text`}>
{"Por que escolher a Klivio?"}
</Text>
</Box>
<Heading
tag={"h2"}
className={`w-heading c1dxq9cf c11dowh9 c32myit cwrra4i c12y6bqh c74kosi c1qom380 c1357293 c9jnjeu c1dhz37v`}>
<span
className={`w-element czt9u4x`}>
{"Um Investimento Mínimo"}
</span>
{" Para um Retorno Máximo"}
</Heading>
<Box
className={`w-box csru8nn c1qyy4dh ct02u4h cn6056e c1117wcl c1jjfh4b`}>
<HtmlEmbed
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" \n     width=\"32\" height=\"32\" \n     fill=\"var(--background-accent)\" \n     viewBox=\"0 0 256 256\">\n  <path d=\"M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z\"></path>\n</svg>"}
className={`w-html-embed cir85gx c14mc9tt`} />
<Text
className={`w-text`}>
{"Teste por 7 dias. Risco zero com nossa Garantia Blindada."}
</Text>
</Box>
</Box>
<Box
className={`w-box copqmak c10zkoym ct8c5y2 cevxs5e co2qwzx c1vrexag c1ku71hl cx6c9kw c174sw29`}>
<Box
className={`w-box cry9bxc c1lfjoq7 c1wt8a7g c1z0l37u c1ml0hr7 cgl7u82 crlid6h caoqbwa c1aguln ckb5lut czjsrhv c1di64f2 c1ru090q cujxabw c119suh8 cjucu4u c13xb0l c1ncxhfh cd4a99d cdtylqg chmjof8 c1i3npf7 c1ttqoek codg43x cax3zcx c1axwber`}>
<Box
className={`w-box cir85gx c1lfjoq7 c16xs6ny c1wt8a7g c1z0l37u c1ml0hr7 cmepw80 ccry0es cl1ou15 c1fhkm63 clv8gve c12sm2j2`}>
<Heading
tag={"h3"}
className={`w-heading cuoke4w c11dowh9 c32myit cwrra4i c12y6bqh cir85gx`}>
<b
className={`w-element csru8nn c1lxiyww`}>
{"Mensal"}
</b>
</Heading>
</Box>
<Box
className={`w-box cir85gx c1lfjoq7 c16xs6ny c1wt8a7g c1z0l37u c1ml0hr7 cmepw80 ccry0es cl1ou15 c1fhkm63 clv8gve c12sm2j2`}>
<Heading
tag={"h3"}
className={`w-heading c11nr3ex c1f4gqnf c32myit cwrra4i cg5i74l csru8nn c1dhz37v`}>
{"R$ 37,00"}
</Heading>
<Paragraph
className={`w-paragraph csru8nn`}>
{"/usuário mês"}
</Paragraph>
</Box>
<Link
className={`w-link c14yqvd4 c12n5uks csb0ifw cg5j03k c8od1c4 c135vpv5 csru8nn c1qyy4dh ct02u4h c1md20bl c1e892th c1qom380 c1jq23ex czjsrhv c1di64f2 c1ru090q cujxabw c119suh8 cnqbj7z cz4drm4 cy1haag ci5f5wh clx2mg7 c1ph6sgd c1s4ttse cj3c47m cfw5mh8 c1apclts cqzihcd c82q2z c1t5a35i cl60rel c1ib9cr2 c55gr8u cra5x9r cm64msb`}>
<HtmlEmbed
code={"<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 21 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M5.66126 9.49709L10.66 2.75989C11.0509 2.23298 11.7838 2.56093 11.7838 3.2628V8.47742C11.7838 8.89792 12.0711 9.23875 12.4256 9.23875H14.8569C15.4092 9.23875 15.7036 10.0112 15.3388 10.5029L10.34 17.2401C9.94908 17.767 9.21625 17.4391 9.21625 16.7372V11.5226C9.21625 11.1021 8.92892 10.7613 8.57443 10.7613H6.14311C5.59079 10.7613 5.29638 9.98884 5.66126 9.49709Z\" stroke=\"#171717\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n"}
className={`w-html-embed csru8nn ch2prsz cg4iiql c1qyy4dh ct02u4h`} />
<Text
tag={"span"}
className={`w-text`}>
{"COMPRAR AGORA"}
</Text>
</Link>
<Box
className={`w-box csru8nn c1qyy4dh ct02u4h cn6056e c1117wcl c1jjfh4b`}>
<HtmlEmbed
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" \n     width=\"32\" height=\"32\" \n     fill=\"var(--background-accent)\" \n     viewBox=\"0 0 256 256\">\n  <path d=\"M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z\"></path>\n</svg>"}
className={`w-html-embed cir85gx c14mc9tt`} />
<Text
className={`w-text`}>
{"Teste por 7 dias. Risco zero com nossa Garantia Blindada."}
</Text>
</Box>
</Box>
</Box>
</Box>
</Box>
</Box>
<Box
tag={"section"}
id={"faq"}
className={`w-box cna0hdz c1mzb2kd c1uaptg7 c1cozyp5 crv1a4t cbrrmm8 cuo9dm5 c5egcmi cxz9xjl`}>
<Box
className={`w-box c1357293 c9jnjeu czr2pxy c155uc7w cry9bxc c1lfjoq7 c1778y6x c1wt8a7g c1s46o9r cdczzub c1fd0kk1 c11gzs80`}>
<Box
className={`w-box cry9bxc c1lfjoq7 ct8c5y2 c10zkoym c1qyy4dh c1wt8a7g`}>
<Box
className={`w-box c13b531o c1my01bv c1a8d7ts c122t6uk c13xb0l c12n5uks csb0ifw cg5j03k c8od1c4 cry9bxc c1qyy4dh ct02u4h cn6056e c1117wcl c135vpv5 cpp0nin c1cb3y4c c1qom380`}>
<Text
className={`w-text`}>
{"FAQs"}
</Text>
</Box>
<Heading
tag={"h2"}
className={`w-heading c1dxq9cf c11dowh9 c32myit cwrra4i c12y6bqh c74kosi c1qom380 c1357293 c9jnjeu c1dhz37v`}>
{"Perguntas "}
<span
className={`w-element czt9u4x`}>
{"Frequentes"}
</span>
</Heading>
<Paragraph
className={`w-paragraph c16xpvrq c1qom380 c62q3t9 c1357293 c9jnjeu czt9u4x`}>
{"Seu guia rápido para dúvidas e soluções comuns. "}
</Paragraph>
</Box>
<Accordion
collapsible={true}
defaultValue={"0"}
className={`w-accordion cry9bxc c1lfjoq7 c1z0l37u c1ml0hr7 czr2pxy cz5g8eb c9jnjeu c1357293`}>
<AccordionItem
data-ws-index="0"
className={`w-item c12n5uks csb0ifw cg5j03k c8od1c4 ckb5lut czjsrhv c1di64f2 c1ru090q cujxabw c119suh8 cnqbj7z codg43x c82q2z c1axwber`}>
<AccordionHeader
className={`w-item-header`}>
<AccordionTrigger
className={`w-item-trigger c1fhkm63 cqeb86t c1admj5d cf64rkw cry9bxc c1lxiyww c18v2pa2 c1qyy4dh cagnu3y cm8ogiu cg5i74l cuj80l1 c1mqkgmf c1gur2a0 c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j czr2pxy c1hz2opz c422x95 c1kectvc c18nx7en c13zjl4p c1dkse89 cl60rel c1ib9cr2 cb06ied`}>
<Text
className={`w-text cuoke4w c11dowh9 c32myit cwrra4i c12y6bqh`}>
{"Corro o risco de ter meu número Banido?"}
</Text>
<Box
className={`w-box cwdwelg c1g1x4wk c19acjow c5m8ase c7cjz93 c1c9nyn co9inq6 c18nx7en c13zjl4p cz4drm4 c1bd9ep2 c1pmcxsb ck312uk c1it126x c13mpy3e`}>
<HtmlEmbed
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\" fill=\"currentColor\" width=\"100%\" height=\"100%\"><path d=\"M4.04 6.284a.65.65 0 0 1 .92.001L8 9.335l3.04-3.05a.65.65 0 1 1 .921.918l-3.5 3.512a.65.65 0 0 1-.921 0L4.039 7.203a.65.65 0 0 1 .001-.92Z\"></path></svg>"}
className={`w-html-embed`} />
</Box>
</AccordionTrigger>
</AccordionHeader>
<AccordionContent
data-ani={"expand"}
className={`w-item-content`}>
<Box
className={`w-box c15ucb9y`}>
<Text
tag={"span"}
className={`w-text`}>
{"Não. Nossa ferramenta foi desenvolvida em conformidade com as diretrizes do WhatsApp. Não somos uma ferramenta de SPAM em massa. O \"Motor de Crescimento\" funciona como uma camada de organização e eficiência sobre o seu WhatsApp Web oficial, potencializando seu uso profissional e individual, o que é uma prática segura. Sua segurança e a conformidade com a LGPD são nossas maiores prioridades."}
</Text>
</Box>
</AccordionContent>
</AccordionItem>
<AccordionItem
data-ws-index="1"
className={`w-item c12n5uks csb0ifw cg5j03k c8od1c4 ckb5lut czjsrhv c1di64f2 c1ru090q cujxabw c119suh8 cnqbj7z codg43x c82q2z c1axwber`}>
<AccordionHeader
className={`w-item-header`}>
<AccordionTrigger
className={`w-item-trigger c1fhkm63 cqeb86t c1admj5d cf64rkw cry9bxc c1lxiyww c18v2pa2 c1qyy4dh cagnu3y cm8ogiu cg5i74l cuj80l1 c1mqkgmf c1gur2a0 c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j czr2pxy c1hz2opz c422x95 c1kectvc c18nx7en c13zjl4p c1dkse89 cl60rel c1ib9cr2 cb06ied`}>
<Text
className={`w-text cuoke4w c11dowh9 c32myit cwrra4i c12y6bqh`}>
{"É complicado para instalar?"}
</Text>
<Box
className={`w-box cwdwelg c1g1x4wk c19acjow c5m8ase c7cjz93 c1c9nyn co9inq6 c18nx7en c13zjl4p cz4drm4 c1bd9ep2 c1pmcxsb ck312uk c1it126x c13mpy3e`}>
<HtmlEmbed
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\" fill=\"currentColor\" width=\"100%\" height=\"100%\"><path d=\"M4.04 6.284a.65.65 0 0 1 .92.001L8 9.335l3.04-3.05a.65.65 0 1 1 .921.918l-3.5 3.512a.65.65 0 0 1-.921 0L4.039 7.203a.65.65 0 0 1 .001-.92Z\"></path></svg>"}
className={`w-html-embed`} />
</Box>
</AccordionTrigger>
</AccordionHeader>
<AccordionContent
data-ani={"expand"}
className={`w-item-content`}>
<Box
className={`w-box c15ucb9y`}>
<Text
tag={"span"}
className={`w-text`}>
{"É surpreendentemente simples e rápido. O processo leva menos de 2 minutos:  Instale a extensão no seu navegador (Google Chrome ou Microsoft Edge).  Abra o WhatsApp Web e faça o login normalmente. O seu \"Motor de Crescimento\" será ativado automaticamente. Não há necessidade de configurações complexas para começar a usar as funções principais."}
</Text>
</Box>
</AccordionContent>
</AccordionItem>
<AccordionItem
data-ws-index="2"
className={`w-item c12n5uks csb0ifw cg5j03k c8od1c4 ckb5lut czjsrhv c1di64f2 c1ru090q cujxabw c119suh8 cnqbj7z codg43x c82q2z c1axwber`}>
<AccordionHeader
className={`w-item-header`}>
<AccordionTrigger
className={`w-item-trigger c1fhkm63 cqeb86t c1admj5d cf64rkw cry9bxc c1lxiyww c18v2pa2 c1qyy4dh cagnu3y cm8ogiu cg5i74l cuj80l1 c1mqkgmf c1gur2a0 c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j czr2pxy c1hz2opz c422x95 c1kectvc c18nx7en c13zjl4p c1dkse89 cl60rel c1ib9cr2 cb06ied`}>
<Text
className={`w-text cuoke4w c11dowh9 c32myit cwrra4i c12y6bqh`}>
{"É seguro usar o Klivio?"}
</Text>
<Box
className={`w-box cwdwelg c1g1x4wk c19acjow c5m8ase c7cjz93 c1c9nyn co9inq6 c18nx7en c13zjl4p cz4drm4 c1bd9ep2 c1pmcxsb ck312uk c1it126x c13mpy3e`}>
<HtmlEmbed
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\" fill=\"currentColor\" width=\"100%\" height=\"100%\"><path d=\"M4.04 6.284a.65.65 0 0 1 .92.001L8 9.335l3.04-3.05a.65.65 0 1 1 .921.918l-3.5 3.512a.65.65 0 0 1-.921 0L4.039 7.203a.65.65 0 0 1 .001-.92Z\"></path></svg>"}
className={`w-html-embed`} />
</Box>
</AccordionTrigger>
</AccordionHeader>
<AccordionContent
data-ani={"expand"}
className={`w-item-content`}>
<Box
className={`w-box c15ucb9y`}>
<Text
tag={"span"}
className={`w-text`}>
{"Sim, a ferramenta passou por um processo rigoroso antes de ser publicada no repositório do Google. Para estar lá, é necessário passar por um longo processo de auditoria e controle do código-fonte. Assim, o Google garante que a ferramenta não viola as políticas de privacidade.aSim, a ferramenta passou por um processo rigoroso antes de ser publicada no repositório do Google. Para estar lá, é necessário passar por um longo processo de auditoria e controle do código-fonte. Assim, o Google garante que a ferramenta não viola as políticas de privacidade."}
</Text>
</Box>
</AccordionContent>
</AccordionItem>
<AccordionItem
data-ws-index="3"
className={`w-item c12n5uks csb0ifw cg5j03k c8od1c4 ckb5lut czjsrhv c1di64f2 c1ru090q cujxabw c119suh8 cnqbj7z codg43x c82q2z c1axwber`}>
<AccordionHeader
className={`w-item-header`}>
<AccordionTrigger
className={`w-item-trigger c1fhkm63 cqeb86t c1admj5d cf64rkw cry9bxc c1lxiyww c18v2pa2 c1qyy4dh cagnu3y cm8ogiu cg5i74l cuj80l1 c1mqkgmf c1gur2a0 c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j czr2pxy c1hz2opz c422x95 c1kectvc c18nx7en c13zjl4p c1dkse89 cl60rel c1ib9cr2 cb06ied`}>
<Text
className={`w-text cuoke4w c11dowh9 c32myit cwrra4i c12y6bqh`}>
{"Como funciona a assinatura?"}
</Text>
<Box
className={`w-box cwdwelg c1g1x4wk c19acjow c5m8ase c7cjz93 c1c9nyn co9inq6 c18nx7en c13zjl4p cz4drm4 c1bd9ep2 c1pmcxsb ck312uk c1it126x c13mpy3e`}>
<HtmlEmbed
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\" fill=\"currentColor\" width=\"100%\" height=\"100%\"><path d=\"M4.04 6.284a.65.65 0 0 1 .92.001L8 9.335l3.04-3.05a.65.65 0 1 1 .921.918l-3.5 3.512a.65.65 0 0 1-.921 0L4.039 7.203a.65.65 0 0 1 .001-.92Z\"></path></svg>"}
className={`w-html-embed`} />
</Box>
</AccordionTrigger>
</AccordionHeader>
<AccordionContent
data-ani={"expand"}
className={`w-item-content`}>
<Box
className={`w-box c15ucb9y`}>
<Text
tag={"span"}
className={`w-text`}>
{"A Klivio é um serviço por assinatura. Você pode escolher entre:"}
<br />
{"\t•\tPlano Mensal: paga mês a mês, sem compromisso. Se não quiser continuar, basta cancelar antes da próxima renovação."}
<br />
{"\t•\tPlano Anual: paga apenas uma vez por ano, com desconto equivalente a vários meses grátis. Ideal para quem já decidiu usar a ferramenta no dia a dia."}
<br />
{""}
<br />
{"Como é feito o pagamento?"}
<br />
{"Os pagamentos são processados de forma 100% segura pelo Stripe, no cartão de crédito."}
<br />
{""}
<br />
{"Posso cancelar quando quiser?"}
<br />
{"Sim. No plano mensal, o cancelamento é imediato e você não é cobrado no próximo ciclo. No plano anual, você mantém acesso até o fim do período contratado, sem cobranças extras."}
<br />
{""}
<br />
{"Vocês oferecem parcelamento no anual?"}
<br />
{"Atualmente não. O plano anual é pago em uma única vez. Caso queira flexibilidade de pagamento, recomendamos começar pelo plano mensal."}
<br />
{""}
<br />
{"Existe período de teste gratuito?"}
<br />
{"Não. O plano mensal já funciona como um teste acessível: você pode começar com um valor baixo e cancelar quando quiser."}
</Text>
</Box>
</AccordionContent>
</AccordionItem>
</Accordion>
</Box>
</Box>
<Box
tag={"section"}
id={"cta"}
className={`w-box cna0hdz c1mzb2kd c1uaptg7 c1cozyp5 crv1a4t cbrrmm8 cuo9dm5 c5egcmi cxz9xjl`}>
<Box
className={`w-box c1357293 c9jnjeu czr2pxy c155uc7w cry9bxc c1lfjoq7 c1778y6x c1wt8a7g c1s46o9r cdczzub c1fd0kk1 c11gzs80`}>
<Box
className={`w-box cry9bxc c1lfjoq7 c1wt8a7g c1z0l37u c1ml0hr7 cgl7u82 crlid6h caoqbwa c1aguln ckb5lut czjsrhv c1di64f2 c1ru090q cujxabw c119suh8 cjucu4u c13xb0l c1ncxhfh cd4a99d cdtylqg chmjof8 codg43x c14nqedw c1axwber`}>
<Box
className={`w-box cry9bxc c1lfjoq7 ct8c5y2 c10zkoym c1qyy4dh c1wt8a7g`}>
<Box
className={`w-box c13b531o c1my01bv c1a8d7ts c122t6uk c13xb0l c12n5uks csb0ifw cg5j03k c8od1c4 cry9bxc c1qyy4dh ct02u4h cn6056e c1117wcl c135vpv5 cpp0nin c1cb3y4c c1qom380`}>
<Text
className={`w-text`}>
{"Você tem 2 opções:"}
</Text>
</Box>
<Heading
tag={"h2"}
className={`w-heading c1dxq9cf c11dowh9 c32myit cwrra4i c12y6bqh c74kosi c1qom380 c1357293 c9jnjeu c1dhz37v`}>
{"Continuar no Caos ou Assumir o Controle."}
</Heading>
<Paragraph
className={`w-paragraph c16xpvrq c1qom380 c62q3t9 c1357293 c9jnjeu czt9u4x`}>
{"A decisão que você toma agora define sua produtividade e seus resultados para os próximos meses. Chega de adiar o crescimento."}
</Paragraph>
</Box>
<Box
className={`w-box c1qyy4dh ct02u4h cry9bxc c1lfjoq7 cn6056e c1117wcl`}>
<Link
href={"/#precos"}
className={`w-link c14yqvd4 c12n5uks csb0ifw cg5j03k c8od1c4 c135vpv5 csru8nn c1qyy4dh ct02u4h c1md20bl c1e892th c1qom380 c1jq23ex czjsrhv c1di64f2 c1ru090q cujxabw c119suh8 cnqbj7z cz4drm4 cy1haag ci5f5wh clx2mg7 c1ph6sgd c1s4ttse cj3c47m cfw5mh8 c1apclts cqzihcd c82q2z c1t5a35i cl60rel c1ib9cr2 c55gr8u cra5x9r cm64msb`}>
<HtmlEmbed
code={"<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 21 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M5.66126 9.49709L10.66 2.75989C11.0509 2.23298 11.7838 2.56093 11.7838 3.2628V8.47742C11.7838 8.89792 12.0711 9.23875 12.4256 9.23875H14.8569C15.4092 9.23875 15.7036 10.0112 15.3388 10.5029L10.34 17.2401C9.94908 17.767 9.21625 17.4391 9.21625 16.7372V11.5226C9.21625 11.1021 8.92892 10.7613 8.57443 10.7613H6.14311C5.59079 10.7613 5.29638 9.98884 5.66126 9.49709Z\" stroke=\"#171717\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n</svg>\n"}
className={`w-html-embed csru8nn ch2prsz cg4iiql c1qyy4dh ct02u4h`} />
<Text
tag={"span"}
className={`w-text`}>
{"Assumir o Controle Agora"}
</Text>
</Link>
</Box>
</Box>
</Box>
</Box>
</Box>
<Slot>
<Fragment_1>
<Box
tag={"footer"}
className={`w-box cna0hdz c1mzb2kd c1uaptg7 c1cozyp5 crv1a4t cbrrmm8 cuo9dm5 c5egcmi cxz9xjl`}>
<Box
className={`w-box c1357293 c9jnjeu czr2pxy c155uc7w cry9bxc c1lfjoq7 c1778y6x c1wt8a7g c1s46o9r cdczzub c1fd0kk1 c11gzs80`}>
<Box
className={`w-box cry9bxc c1lfjoq7 c1wt8a7g c1z0l37u c1ml0hr7 cgl7u82 crlid6h caoqbwa c1aguln ckb5lut czjsrhv c1di64f2 c1ru090q cujxabw c119suh8 cjucu4u c13xb0l c1ncxhfh cd4a99d cdtylqg chmjof8 codg43x c14nqedw c1axwber`}>
<Box
className={`w-box copqmak c1s46o9r ct8c5y2 cmktzjx co2qwzx c1vrexag cx6c9kw c174sw29 cmaksb1 c1i9o1yp`}>
<Box
className={`w-box cry9bxc c1lfjoq7 c10zkoym ct8c5y2`}>
<Slot>
<Fragment_1>
<Link
aria-label={"Home"}
href={"/#top"}
className={`w-link`}>
<Image
loading={"eager"}
alt={""}
optimize={true}
src={"/assets/logo_branca_1_SjAvw5pfOJtKwQJvpkkUD.png"}
width={150}
height={85}
className={`w-image`} />
</Link>
</Fragment_1>
</Slot>
<Paragraph
className={`w-paragraph`}>
{"Follow us and never miss an update on the latest productivity trends, tools, and insights."}
</Paragraph>
<Box
className={`w-box cry9bxc c1qyy4dh c1wt8a7g c1z0l37u c1ml0hr7`}>
<Link
aria-label={"Instagram"}
href={"https://www.instagram.com/kliviooficial/"}
className={`w-link cio5jgl cld4m44 c1e9wxra c422x95 c1kectvc c18nx7en c13zjl4p cl60rel c1ib9cr2`}>
<HtmlEmbed
code={"<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g opacity=\"0.4\">\n<path d=\"M16.5 2.25H7.5C6.10807 2.25149 4.77358 2.80509 3.78933 3.78933C2.80509 4.77358 2.25149 6.10807 2.25 7.5V16.5C2.25149 17.8919 2.80509 19.2264 3.78933 20.2107C4.77358 21.1949 6.10807 21.7485 7.5 21.75H16.5C17.8919 21.7485 19.2264 21.1949 20.2107 20.2107C21.1949 19.2264 21.7485 17.8919 21.75 16.5V7.5C21.7485 6.10807 21.1949 4.77358 20.2107 3.78933C19.2264 2.80509 17.8919 2.25149 16.5 2.25ZM12 16.5C11.11 16.5 10.24 16.2361 9.49993 15.7416C8.75991 15.2471 8.18314 14.5443 7.84254 13.7221C7.50195 12.8998 7.41283 11.995 7.58647 11.1221C7.7601 10.2492 8.18868 9.44736 8.81802 8.81802C9.44736 8.18868 10.2492 7.7601 11.1221 7.58647C11.995 7.41283 12.8998 7.50195 13.7221 7.84254C14.5443 8.18314 15.2471 8.75991 15.7416 9.49993C16.2361 10.24 16.5 11.11 16.5 12C16.4988 13.1931 16.0243 14.337 15.1806 15.1806C14.337 16.0243 13.1931 16.4988 12 16.5ZM17.625 7.5C17.4025 7.5 17.185 7.43402 17 7.3104C16.815 7.18679 16.6708 7.01109 16.5856 6.80552C16.5005 6.59995 16.4782 6.37375 16.5216 6.15552C16.565 5.93729 16.6722 5.73684 16.8295 5.5795C16.9868 5.42217 17.1873 5.31502 17.4055 5.27162C17.6238 5.22821 17.85 5.25049 18.0555 5.33564C18.2611 5.42078 18.4368 5.56498 18.5604 5.74998C18.684 5.93499 18.75 6.1525 18.75 6.375C18.75 6.67337 18.6315 6.95952 18.4205 7.1705C18.2095 7.38147 17.9234 7.5 17.625 7.5ZM15 12C15 12.5933 14.8241 13.1734 14.4944 13.6667C14.1648 14.1601 13.6962 14.5446 13.1481 14.7716C12.5999 14.9987 11.9967 15.0581 11.4147 14.9424C10.8328 14.8266 10.2982 14.5409 9.87868 14.1213C9.45912 13.7018 9.1734 13.1672 9.05764 12.5853C8.94189 12.0033 9.0013 11.4001 9.22836 10.8519C9.45542 10.3038 9.83994 9.83524 10.3333 9.50559C10.8266 9.17595 11.4067 9 12 9C12.7956 9 13.5587 9.31607 14.1213 9.87868C14.6839 10.4413 15 11.2044 15 12Z\" fill=\"white\"></path>\n</g>\n</svg>\n"}
className={`w-html-embed`} />
</Link>
<Link
aria-label={"YouTube"}
href={"https://www.youtube.com/@klivio.oficial"}
className={`w-link cio5jgl cld4m44 c1e9wxra c422x95 c1kectvc c18nx7en c13zjl4p cl60rel c1ib9cr2`}>
<HtmlEmbed
code={"<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g opacity=\"0.4\">\n<path d=\"M21.9684 6.5175C21.8801 6.17189 21.7109 5.85224 21.4747 5.58491C21.2385 5.31758 20.9421 5.11024 20.61 4.98C17.3962 3.73875 12.2812 3.75 12 3.75C11.7188 3.75 6.60375 3.73875 3.39 4.98C3.0579 5.11024 2.76153 5.31758 2.52534 5.58491C2.28915 5.85224 2.1199 6.17189 2.03156 6.5175C1.78875 7.45313 1.5 9.16313 1.5 12C1.5 14.8369 1.78875 16.5469 2.03156 17.4825C2.11977 17.8283 2.28895 18.1481 2.52515 18.4156C2.76136 18.6831 3.0578 18.8906 3.39 19.0209C6.46875 20.2088 11.2875 20.25 11.9381 20.25H12.0619C12.7125 20.25 17.5341 20.2088 20.61 19.0209C20.9422 18.8906 21.2386 18.6831 21.4748 18.4156C21.711 18.1481 21.8802 17.8283 21.9684 17.4825C22.2113 16.545 22.5 14.8369 22.5 12C22.5 9.16313 22.2113 7.45313 21.9684 6.5175ZM15.0553 12.6113L11.3053 15.2363C11.1931 15.3148 11.0616 15.3612 10.9249 15.3703C10.7883 15.3794 10.6517 15.351 10.5301 15.288C10.4085 15.225 10.3064 15.1299 10.235 15.013C10.1636 14.8962 10.1256 14.762 10.125 14.625V9.375C10.125 9.2378 10.1627 9.10324 10.2339 8.98597C10.3051 8.86869 10.4071 8.77319 10.5289 8.70987C10.6506 8.64655 10.7873 8.61783 10.9242 8.62683C11.0611 8.63584 11.1929 8.68222 11.3053 8.76094L15.0553 11.3859C15.154 11.4551 15.2345 11.547 15.2901 11.6539C15.3457 11.7608 15.3747 11.8795 15.3747 12C15.3747 12.1205 15.3457 12.2392 15.2901 12.3461C15.2345 12.453 15.154 12.5449 15.0553 12.6141V12.6113Z\" fill=\"white\"></path>\n</g>\n</svg>\n"}
className={`w-html-embed`} />
</Link>
</Box>
</Box>
<Box
className={`w-box cry9bxc c1lxiyww c1s46o9r cdczzub c1t3frhm c1jjfh4b czqy8m4 c10x096o`}>
<Box
tag={"nav"}
aria-labelledby={"menu1Title"}
className={`w-box cry9bxc c1z0l37u c1ml0hr7 c1lfjoq7 c5m8ase clv8gve`}>
<Heading
tag={"h2"}
id={"menu1Title"}
className={`w-heading c160atll c11dowh9 c32myit cwrra4i czt9u4x`}>
{"Menu"}
</Heading>
<List
className={`w-list c34dwh1 c1y6imu0 c1cn3fw9 cry9bxc ceu66s9 c12ae6v5 c1lfjoq7`}>
<ListItem
className={`w-list-item`}>
<Link
href={"/#benefits"}
className={`w-link c12y6bqh csru8nn c1e9wxra c422x95 c1kectvc c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c135vpv5 c1sche0c c1l2989r c3qzgd0 c1y6imu0 cl60rel c1ib9cr2 c12mjb61 c1223h70`}>
{"Central de Ajuda"}
</Link>
</ListItem>
<ListItem
className={`w-list-item`}>
<Link
href={"/#about"}
className={`w-link c12y6bqh csru8nn c1e9wxra c422x95 c1kectvc c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c135vpv5 c1sche0c c1l2989r c3qzgd0 c1y6imu0 cl60rel c1ib9cr2 c12mjb61 c1223h70`}>
{"Gerenciar assinatura"}
</Link>
</ListItem>
<ListItem
className={`w-list-item`}>
<Link
href={"/#testimonials"}
className={`w-link c12y6bqh csru8nn c1e9wxra c422x95 c1kectvc c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c135vpv5 c1sche0c c1l2989r c3qzgd0 c1y6imu0 cl60rel c1ib9cr2 c12mjb61 c1223h70`}>
{"Entrar em contato"}
</Link>
</ListItem>
<ListItem
className={`w-list-item`}>
<Link
href={"/#faq"}
className={`w-link c12y6bqh csru8nn c1e9wxra c422x95 c1kectvc c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c135vpv5 c1sche0c c1l2989r c3qzgd0 c1y6imu0 cl60rel c1ib9cr2 c12mjb61 c1223h70`}>
{"Termos e Privacidade"}
</Link>
</ListItem>
</List>
</Box>
</Box>
</Box>
<Box
className={`w-box cry9bxc c18v2pa2 c1lxiyww c16xs6ny`}>
<Box
className={`w-box cry9bxc c1qyy4dh c1wt8a7g c1md20bl c1e892th c1y4fwd4 c1jjfh4b`}>
<Text
className={`w-text`}>
{"© 2025 Klivio. Todos os direitos reservados."}
</Text>
</Box>
<Box
className={`w-box`}>
<Link
href={"/credits"}
className={`w-link c12y6bqh csru8nn c1e9wxra c422x95 c1kectvc c18nx7en c13zjl4p ch11gwv c1md20bl c1e892th c1qyy4dh ct02u4h c1e7helk c1l0vha7 csyy8v5 c1bc2i7x c17r8x7j c135vpv5 c1sche0c c1l2989r c3qzgd0 c1y6imu0 cl60rel c1ib9cr2 c12mjb61 c1223h70`}>
{"Credits"}
</Link>
</Box>
</Box>
</Box>
</Box>
</Box>
</Fragment_1>
</Slot>
</Box>
<Link_1
href={"https://webstudio.is/?via=badge"}
target={"_blank"}
className={`w-element csru8nn c1mb8swa c1qqyhy5 c1qyy4dh ct02u4h cjqo3r0 co75lnx c7f1npl c10yh23j c1sjzfnm c1ngdwug csxsvt6 c393lej c1foszxv c17xbrdu cifio cy1haag c1nk3tgl c1tby39 c1wcb3xr cze564a c15plmkp c135vpv5 c119suh8 cujxabw c142603 c1o3pxpk c1qc49wt`}>
<HtmlEmbed
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"currentColor\" viewBox=\"0 0 16 16\" width=\"100%\" height=\"100%\" style=\"display: block;\"><path fill-rule=\"evenodd\" d=\"m12.32 12.416 2.62-8.085a1.205 1.205 0 1 0-2.292-.746l-2.62 8.084a1.205 1.205 0 1 0 2.292.747Z\" clip-rule=\"evenodd\"/><path fill-rule=\"evenodd\" d=\"M8 7.624c.297 0 .517.175.704.394.207.243.373.545.514.866.634 1.44.753 3.241.753 3.241a1.206 1.206 0 0 0 1.285 1.122 1.207 1.207 0 0 0 1.12-1.287s-.16-2.25-.952-4.05C10.744 6.364 9.594 5.208 8 5.208c-1.594 0-2.744 1.156-3.424 2.7-.792 1.8-.951 4.05-.951 4.05a1.207 1.207 0 0 0 1.12 1.288 1.206 1.206 0 0 0 1.284-1.122s.119-1.8.753-3.24a3.52 3.52 0 0 1 .514-.867c.187-.22.406-.394.704-.394Z\" clip-rule=\"evenodd\"/><path fill-rule=\"evenodd\" d=\"M5.973 11.669 3.352 3.585a1.205 1.205 0 1 0-2.293.746l2.622 8.084a1.205 1.205 0 1 0 2.292-.746Z\" clip-rule=\"evenodd\"/></svg>"}
className={`w-html-embed cauqto8 cs09067 c10l6bx clv8gve`} />
<div
className={`w-element`}>
{"WhatsApp"}
</div>
</Link_1>
</Body>
}


      export { Page }
    