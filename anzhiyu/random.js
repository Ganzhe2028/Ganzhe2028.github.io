var posts=["posts/41206.html","posts/20419.html","posts/30653.html","posts/54274.html","posts/37595.html","posts/10021.html","posts/38442.html"];function toRandomPost(){pjax.loadUrl("/"+posts[Math.floor(Math.random()*posts.length)])}var friend_link_list=[{name:"安知鱼",hundredSuffix:"!w120",link:"https://anzhiy.cn/",avatar:"https://img01.anzhiy.cn/useruploads/151/2023/05/30/6475704be499a.jpg",descr:"生活明朗，万物可爱",siteshot:"https://npm.elemecdn.com/anzhiyu-blog@1.1.6/img/post/common/anzhiy.cn.jpg"},{name:"Akilarの糖果屋",link:"https://akilar.top/",siteshot:"https://npm.elemecdn.com/akilar-friends@latest/siteshot/akilar.top.jpg",avatar:"https://npm.elemecdn.com/akilar-friends@latest/avatar/akilar.top.jpg",descr:"欢迎光临糖果屋"},{name:"张洪Heo",link:"https://blog.zhheo.com/",avatar:"https://bu.dusays.com/2022/12/28/63ac2812183aa.png",descr:"分享设计与科技生活"},{name:"困困鱼",link:"https://0206.ink/",avatar:"https://0206.ink/img/645fac04e203a.jpeg",descr:"喜欢捣鼓的博主"},{name:"Leonus",link:"https://blog.leonus.cn/",avatar:"https://q1.qlogo.cn/g?b=qq&nk=990320751&s=5",descr:"进一寸有进一寸的欢喜。"},{name:"困困鱼",link:"https://0206.ink/",avatar:"https://0206.ink/img/645fac04e203a.jpeg",descr:"喜欢捣鼓的博主"},{name:"铭心石刻",link:"https://blog.kouseki.cn/",avatar:"https://blog.kouseki.cn/imgs/avatar.webp",descr:"愿岁并谢，与友长兮",siteshot:"https://blog.kouseki.cn/imgs/siteshot.webp"},{name:"青桔气球",link:"https://blog.qjqq.cn/",avatar:"https://avatar.iftft.com/1/6455057d609c9.webp!avatar",descr:"分享网络安全与科技生活"},{name:"湘铭`Blog",link:"https://blog.xiangming.site/",avatar:"https://photo.xiangming.site/img/icologo.png",descr:"听闻余生，相濡以沫💕",siteshot:"https://photo.xiangming.site/img/fengmian.png"},{name:"Fomalhaut🥝",link:"https://www.fomal.cc/",avatar:"https://www.fomal.cc/assets/avatar.webp",descr:"Future is now 🍭🍭🍭",siteshot:"https://source.fomal.cc/siteshot/www.fomal.cn.jpg"},{name:"朝而往",link:"https://muerg.cn/",avatar:"https://image.muerg.cn/i/2023/05/01/644f6cebafd3d.jpg",descr:"四时之景不同，而乐亦无穷也。",siteshot:"https://image.muerg.cn/i/2023/05/01/644f6c9675c86.jpg"}],refreshNum=1;function addFriendLinksInFooter(){var t=document.getElementById("footer-random-friends-btn");if(!t)return;t.style.opacity="0.2",t.style.transitionDuration="0.3s",t.style.transform="rotate("+360*refreshNum+++"deg)";const a=[];let s=0;for(;friend_link_list.length&&s<3;){const t=Math.floor(Math.random()*friend_link_list.length),{name:e,link:n,avatar:o}=friend_link_list.splice(t,1)[0];a.push({name:e,link:n,avatar:o}),s++}let e=a.map((({name:t,link:a})=>"<a class='footer-item' href='"+a+"' target='_blank' rel='noopener nofollow'>"+t+"</a>")).join("");e+="<a class='footer-item' href='/link/'>更多</a>",document.getElementById("friend-links-in-footer").innerHTML=e,setTimeout((()=>{t.style.opacity="1"}),300)}