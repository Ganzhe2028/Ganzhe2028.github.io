if(!self.define){let i,e={};const s=(s,c)=>(s=new URL(s+".js",c).href,e[s]||new Promise((e=>{if("document"in self){const i=document.createElement("script");i.src=s,i.onload=e,document.head.appendChild(i)}else i=s,importScripts(s),e()})).then((()=>{let i=e[s];if(!i)throw new Error(`Module ${s} didn’t register its module`);return i})));self.define=(c,a)=>{const n=i||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let r={};const o=i=>s(i,n),f={module:{uri:n},exports:r,require:o};e[n]=Promise.all(c.map((i=>f[i]||o(i)))).then((i=>(a(...i),r)))}}define(["./workbox-f2efd100"],(function(i){"use strict";self.skipWaiting(),i.clientsClaim(),i.precacheAndRoute([{url:"css/cursor.css",revision:"cae95f4bb8b4e3965493b1ce2893f504"},{url:"css/custom.css",revision:"0d31c9a53478aaeb7d9a5cb33789dbdd"},{url:"css/fcircle.css",revision:"9627e09edd3787f5d15f3ae8e57b82f5"},{url:"css/imgloaded.css",revision:"ad35614c55e1b2582b5af53def075e0a"},{url:"css/imgloaded.min.css",revision:"b98155bf2a49cc5a53ee788ec8c83977"},{url:"css/index.css",revision:"8b77854ed0b19f1cb3250aaa427bf76c"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"css/welcome.css",revision:"d63ab9f7b2f96f2332a81238abb988a2"},{url:"404.html",revision:"61485f46dafc7a7bbeda9afa2982ee1c"},{url:"js/anzhiyu/ai_abstract.js",revision:"e4baa11685a6c14d4130b5b74d9222dc"},{url:"js/anzhiyu/comment_barrage.js",revision:"c5ca32eab1b5db6744df49cffaefa3a6"},{url:"js/anzhiyu/people.js",revision:"b946db8294a26b0b91e93dca5abda935"},{url:"js/anzhiyu/random_friends_post.js",revision:"30e5b8070503360d29e26e1b6db29efd"},{url:"js/anzhiyu/right_click_menu.js",revision:"586c1eecf6617180a50d419def5fd4c0"},{url:"js/cursor.js",revision:"37130987931ce62ff2535d3bb2ebe560"},{url:"js/imgloaded.js",revision:"863ffeb53fb6a75b130767ae528ba187"},{url:"js/imgloaded.min.js",revision:"ff3152bb219a7b3a45e46718b19d3f9f"},{url:"js/main.js",revision:"0ca6e958debf5d18e10ead8c0c00191c"},{url:"js/search/algolia.js",revision:"3ce06f0458bccd45a20ae797cccb6561"},{url:"js/search/local-search.js",revision:"0f5dddc0c88389610bae38a044ee7a8a"},{url:"js/tw_cn.js",revision:"80822f672b15a8105128e305e9acbed4"},{url:"js/utils.js",revision:"b2bbde9d96fc4ded6c7a163038818ae5"},{url:"js/welcome.js",revision:"f1c4818e30b1582b7de9ef5e8f70a084"},{url:"anzhiyu/random.js",revision:"0ee9f33f8b56c57f406cc16b12dc8c98"},{url:"img/404.jpg",revision:"8190796a570d269ef04b777d93d44e6d"},{url:"img/512.png",revision:"701819a72025df4d8e2a111c1c8f2c72"},{url:"img/algolia.svg",revision:"88450dd56ea1a00ba772424b30b7d34d"},{url:"img/comment_bg.png",revision:"fe6bbe142eb7dc7b4f876ae4f5af97d0"},{url:"img/default_cover.jpg",revision:"8b35831759dc5f66710c2839422109d5"},{url:"img/favicon.ico",revision:"463fd720116f4237a0dbf0330c144bf9"},{url:"img/friend_404.gif",revision:"d09ab53cb5bb15079ce8e3d90b157353"},{url:"img/loading.gif",revision:"05fb29f4e677ff6057ef55925f46e9b0"},{url:"img/siteicon-/16.png",revision:"3de470acb5237bf16318d827443dd5f1"},{url:"img/siteicon-/32.png",revision:"802aa4685b3652d5a1b6e5a6323cf3c0"},{url:"img/siteicon-/404.jpg",revision:"8190796a570d269ef04b777d93d44e6d"},{url:"img/siteicon-/512-apple-.png",revision:"701819a72025df4d8e2a111c1c8f2c72"},{url:"img/siteicon-/512-apple.png",revision:"b530da7b450785a93c0daab3fc6c99cc"},{url:"img/siteicon-/algolia.svg",revision:"fd40b88ac5370a5353a50b8175c1f367"},{url:"img/siteicon-/aotu4.webp",revision:"2e1458a08067fc0650985a2cb69429ff"},{url:"img/siteicon-/apple-icon-180.png",revision:"ac045b7b6012d72ccbcffb07727c7b11"},{url:"img/siteicon-/comment_bg.png",revision:"fe6bbe142eb7dc7b4f876ae4f5af97d0"},{url:"img/siteicon-/default_cover.jpg",revision:"8b35831759dc5f66710c2839422109d5"},{url:"img/siteicon-/favicon.ico",revision:"463fd720116f4237a0dbf0330c144bf9"},{url:"img/siteicon-/friend_404.gif",revision:"d09ab53cb5bb15079ce8e3d90b157353"},{url:"img/siteicon-/jay.jpg",revision:"8d2671ceaf0cb7af8cfd69f00bae6adc"},{url:"img/siteicon-/jingxuanzhe.jpeg",revision:"4476e2466ee39a20d08bee736ab13317"},{url:"img/siteicon-/loading.gif",revision:"05fb29f4e677ff6057ef55925f46e9b0"},{url:"img/siteicon-/manifest-icon-192.maskable.png",revision:"87c1b5883834c2164e20e737bd5c2517"},{url:"img/siteicon-/manifest-icon-512.maskable.png",revision:"85b846b5722c684339c8bb3e520bcc6a"},{url:"img/siteicon-/touxiang.jpg",revision:"c3576d1b73659744a834f05bde81e1ea"},{url:"img/siteicon-/valorant.webp",revision:"40d74a8899f4c048063228837424740b"},{url:"img/siteicon-/valorant1.webp",revision:"d49aabdffa75e5d108ccf3b215851e14"},{url:"img/siteicon-/valorant2.webp",revision:"8f54fd60f9a077b2b2d3e6c7593fd562"},{url:"img/siteicon-/where.jpg",revision:"92abf01933d6a48d2fb4b75091f67f8e"},{url:"img/siteicon-/wlq3.webp",revision:"a31ed7cce3227b756fe2d17b4e46d32f"},{url:"img/siteicon/16.png",revision:"3de470acb5237bf16318d827443dd5f1"},{url:"img/siteicon/192.png",revision:"081aabfa65958019f1c6811a9d32dfba"},{url:"img/siteicon/32.png",revision:"802aa4685b3652d5a1b6e5a6323cf3c0"},{url:"img/siteicon/404.jpg",revision:"8190796a570d269ef04b777d93d44e6d"},{url:"img/siteicon/512-apple.png",revision:"b530da7b450785a93c0daab3fc6c99cc"},{url:"img/siteicon/512.png",revision:"b530da7b450785a93c0daab3fc6c99cc"},{url:"img/siteicon/aotu4.webp",revision:"2e1458a08067fc0650985a2cb69429ff"},{url:"img/siteicon/apple-icon-180-.png",revision:"ac045b7b6012d72ccbcffb07727c7b11"},{url:"img/siteicon/apple-icon-180.png",revision:"ac045b7b6012d72ccbcffb07727c7b11"},{url:"img/siteicon/apple-splash-1125-2436.jpg",revision:"022bb303a44f6c6a728380ce767b50f4"},{url:"img/siteicon/apple-splash-1136-640.jpg",revision:"5832fcc63c9dde7b41c6cd270aa06121"},{url:"img/siteicon/apple-splash-1170-2532.jpg",revision:"e707d8333500598892ff005d3f6f2c9d"},{url:"img/siteicon/apple-splash-1179-2556.jpg",revision:"29ebab0f45d2aaac9099350b591d95de"},{url:"img/siteicon/apple-splash-1242-2208.jpg",revision:"678f43c4f03b9fa9be43842cae59b339"},{url:"img/siteicon/apple-splash-1242-2688.jpg",revision:"c4c17d741974892317f6b52d86a1f7b6"},{url:"img/siteicon/apple-splash-1284-2778.jpg",revision:"642859f3ede448bb48917af47e5b8ecc"},{url:"img/siteicon/apple-splash-1290-2796.jpg",revision:"8000ff63e7cd52f830a44d912a01f634"},{url:"img/siteicon/apple-splash-1334-750.jpg",revision:"e64f630f5291ef447c8bd4841372adef"},{url:"img/siteicon/apple-splash-1536-2048.jpg",revision:"3c8c3497ef26162bbaac29f8d4893e0c"},{url:"img/siteicon/apple-splash-1620-2160.jpg",revision:"25bd890253eb7299d047f43a966796d7"},{url:"img/siteicon/apple-splash-1668-2224.jpg",revision:"906391d079070a4f5d0d9999a128c26a"},{url:"img/siteicon/apple-splash-1668-2388.jpg",revision:"291740e8f220af3f6f65d2c44db87aa0"},{url:"img/siteicon/apple-splash-1792-828.jpg",revision:"09f1cef007ee541f776ea83028b03344"},{url:"img/siteicon/apple-splash-2048-1536.jpg",revision:"5024647622d167226a4a1448f548ddf7"},{url:"img/siteicon/apple-splash-2048-2732.jpg",revision:"11ca173c8b751d2fafe23dea7d99cca9"},{url:"img/siteicon/apple-splash-2160-1620.jpg",revision:"1300a1090b26746fb497c28b696b4cb3"},{url:"img/siteicon/apple-splash-2208-1242.jpg",revision:"cca81083f8343bb565488d6b65d2e63d"},{url:"img/siteicon/apple-splash-2224-1668.jpg",revision:"1881fe6c6584e6fabfeec55daa06ccd9"},{url:"img/siteicon/apple-splash-2388-1668.jpg",revision:"ed6c373fda13fc8ab2649316db541ae9"},{url:"img/siteicon/apple-splash-2436-1125.jpg",revision:"9a6bb185de508523d986adcc48fcf8f7"},{url:"img/siteicon/apple-splash-2532-1170.jpg",revision:"7a0ce531d7b1fa47c4298275365c319f"},{url:"img/siteicon/apple-splash-2556-1179.jpg",revision:"c1035caa7d37ee16954bffad88076d39"},{url:"img/siteicon/apple-splash-2688-1242.jpg",revision:"6cd8adb44747538a30dda45f69c9c492"},{url:"img/siteicon/apple-splash-2732-2048.jpg",revision:"1f65b6a5941aba0340a77f19ef09f56d"},{url:"img/siteicon/apple-splash-2778-1284.jpg",revision:"c81a080322811afe99bb8699426255b2"},{url:"img/siteicon/apple-splash-2796-1290.jpg",revision:"38463eaf376e4a0eeab926bb2d34d408"},{url:"img/siteicon/apple-splash-640-1136.jpg",revision:"15eae66518f16fe2740a1d80ba51b675"},{url:"img/siteicon/apple-splash-750-1334.jpg",revision:"4da8120d876534e725d2cdd6693e2780"},{url:"img/siteicon/apple-splash-828-1792.jpg",revision:"c579337f5516721f67f6d49ef0b6d19e"},{url:"img/siteicon/comment_bg.png",revision:"fe6bbe142eb7dc7b4f876ae4f5af97d0"},{url:"img/siteicon/default_cover.jpg",revision:"8b35831759dc5f66710c2839422109d5"},{url:"img/siteicon/favicon.ico",revision:"463fd720116f4237a0dbf0330c144bf9"},{url:"img/siteicon/friend_404.gif",revision:"d09ab53cb5bb15079ce8e3d90b157353"},{url:"img/siteicon/jay.jpg",revision:"8d2671ceaf0cb7af8cfd69f00bae6adc"},{url:"img/siteicon/jingxuanzhe.jpeg",revision:"4476e2466ee39a20d08bee736ab13317"},{url:"img/siteicon/loading.gif",revision:"05fb29f4e677ff6057ef55925f46e9b0"},{url:"img/siteicon/manifest-icon-192.maskable.png",revision:"87c1b5883834c2164e20e737bd5c2517"},{url:"img/siteicon/manifest-icon-512.maskable.png",revision:"85b846b5722c684339c8bb3e520bcc6a"},{url:"manifest.json",revision:"fdcd9fa859504d2e0f074edf1705027c"},{url:"/",revision:"index-20240920080338995"},{url:"music/",revision:"music-20240920080338995"},{url:"about/",revision:"about-20240920080338995"}],{}),i.registerRoute(/^https:\/\/npm\.elemecdn\.com\/anzhiyu-blog/,new i.CacheFirst,"GET")}));