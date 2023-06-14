var posts=["posts/29786.html","posts/63587.html","posts/22689.html","posts/49364.html","posts/41206.html","posts/20419.html","posts/30653.html","posts/11053.html","posts/3802.html","posts/17989.html","posts/37595.html","posts/14542.html","posts/10021.html","posts/38442.html","posts/12635.html"];function toRandomPost(){pjax.loadUrl("/"+posts[Math.floor(Math.random()*posts.length)])}var friend_link_list=[{name:"安知鱼",hundredSuffix:"!w120",link:"https://anzhiy.cn/",avatar:"https://img01.anheyu.com/useruploads/151/2023/05/30/6475704be499a.jpg",descr:"生活明朗，万物可爱",siteshot:"https://npm.elemecdn.com/anzhiyu-blog@1.1.6/img/post/common/anzhiy.cn.jpg"},{name:"Akilarの糖果屋",link:"https://akilar.top/",siteshot:"https://npm.elemecdn.com/akilar-friends@latest/siteshot/akilar.top.jpg",avatar:"https://npm.elemecdn.com/akilar-friends@latest/avatar/akilar.top.jpg",descr:"欢迎光临糖果屋"},{name:"张洪Heo",link:"https://blog.zhheo.com/",avatar:"https://bu.dusays.com/2022/12/28/63ac2812183aa.png",descr:"分享设计与科技生活"},{name:"Fomalhaut🥝",link:"https://www.fomal.cn/",avatar:"https://www.fomal.cn/assets/avatar.webp",descr:"Future is now 🍭🍭🍭",siteshot:"https://source.fomal.cc/siteshot/www.fomal.cn.jpg"},{name:"轻笑Chuckle",link:"https://www.qcqx.cn",avatar:"https://www.qcqx.cn/img/head.webp",descr:"漫天倾尘,风中轻笑",siteshot:"https://www.qcqx.cn/img/chuckle.webp"},{name:"Leonus",link:"https://blog.leonus.cn/",avatar:"https://q1.qlogo.cn/g?b=qq&nk=990320751&s=5",descr:"进一寸有进一寸的欢喜。"},{name:"困困鱼",link:"https://0206.ink/",avatar:"https://0206.ink/img/645fac04e203a.jpeg",descr:"喜欢捣鼓的博主"},{name:"Fomalhaut🥝",link:"https://www.fomal.cc/",avatar:"https://www.fomal.cn/assets/avatar.webp",descr:"Future is now 🍭🍭🍭",siteshot:"https://source.fomal.cc/siteshot/www.fomal.cn.jpg"},{name:"Leginn's Blog",link:"https://leginn.top/",avatar:"https://picgo.leginn.top/img/txc.jpg",descr:"与你分享~",siteshot:"https://picgo.leginn.top/img/www.leginn.top.jpg"},{name:"陌颜小屋",link:"https://blog.asever.top/",avatar:"https://img01.anheyu.com/useruploads/151/2023/05/31/6476e117b9fa5.png",descr:"愿永不忘初心！"},{name:"阿豪AHao",link:"https://ahao.ah.cn/",avatar:"https://image.ahao.ah.cn/3cccc50598660ee1cece6e10be840f2.jpg",descr:"人间值得，未来可期",siteshot:"https://image.ahao.ah.cn/b4f3987b256a963bd96cf48d75068e5.png"},{name:"铭心石刻",link:"https://blog.kouseki.cn/",avatar:"https://blog.kouseki.cn/imgs/avatar.webp",descr:"愿岁并谢，与友长兮",siteshot:"https://blog.kouseki.cn/imgs/siteshot.webp"},{name:"青桔气球",link:"https://blog.qjqq.cn/",avatar:"https://avatar.iftft.com/1/6455057d609c9.webp!avatar",descr:"分享网络安全与科技生活"},{name:"湘铭`Blog",link:"https://blog.xiangming.site/",avatar:"https://photo.xiangming.site/img/icologo.png",descr:"听闻余生，相濡以沫💕",siteshot:"https://photo.xiangming.site/img/fengmian.png"},{name:"Mxne",link:"https://blog.mxne.cn/",avatar:"https://bu.dusays.com/2023/02/05/63df7de56a470.webp",descr:"学如逆水行舟，不进则退。",siteshot:"https://bu.dusays.com/2023/05/13/645f0d59564f1.webp"},{name:"摸鱼星球",link:"https://moyustar.cn/",avatar:"https://moyustar.cn/icon.png",descr:"斯人若彩虹，遇见方知有",siteshot:"https://moyustar.cn/fengmian.png"},{name:"毕少侠-Hexo-Anzhiyu",link:"https://hexo.geekswg.top/",avatar:"https://hexo.geekswg.top/imgs/avatar.webp",descr:"毕少侠也在江湖。"},{name:"小志IT知识库",link:"https://www.czfq99.cn",avatar:"https://www.czfq99.cn/upload/2022/08/12.jpg",descr:"一个专注于安全领域的全栈博客"},{name:"小植の小破站",link:"https://blog.xiaoztx.top/",avatar:"https://img.xiaoztx.top/image/achen.jpg",descr:"生生不息，好运不止"},{name:"糖丸",link:"https://tany.top/",avatar:"https://pic.imgdb.cn/item/648356191ddac507cc81ccdd.jpg",descr:"及时当勉，岁月不待"},{name:"屑殇的小破站",link:"https://jinghuashang.cn/",avatar:"https://pic.imgdb.cn/item/64842c311ddac507ccb3763a.jpg",descr:"咸鱼"},{name:"俊晗博客",link:"https://jun.pw/",avatar:"https://pic.imgdb.cn/item/648434a21ddac507ccd441ce.png",descr:"俊晗的个人博客，俊晗是一个热爱计算机与篮球的男孩子，博客里会分享一些生活琐事"},{name:"萌傀儡",link:"https://blhorizon.github.io/",avatar:"https://pic.imgdb.cn/item/6486e0261ddac507ccb9a73d.webp",descr:"珍惜现在，趁早摸鱼",siteshot:"https://cdn1.tianli0.top/npm/blogimages/pictures/khdslb.webp"},{name:"海底捞里没有鱼",link:"https://www.smileszh.cn/",avatar:"https://bu.dusays.com/2023/06/10/648499e1299d0.jpg",descr:"平安喜乐，万事胜意🐬"},{name:"朝而往",link:"https://muerg.cn/",avatar:"https://image.muerg.cn/i/2023/05/01/644f6cebafd3d.jpg",descr:"四时之景不同，而乐亦无穷也。",siteshot:"https://image.muerg.cn/i/2023/05/01/644f6c9675c86.jpg"}],refreshNum=1;function addFriendLinksInFooter(){var t=document.getElementById("footer-random-friends-btn");if(!t)return;t.style.opacity="0.2",t.style.transitionDuration="0.3s",t.style.transform="rotate("+360*refreshNum+++"deg)";const a=[];let s=0;for(;friend_link_list.length&&s<3;){const t=Math.floor(Math.random()*friend_link_list.length),{name:e,link:n,avatar:o}=friend_link_list.splice(t,1)[0];a.push({name:e,link:n,avatar:o}),s++}let e=a.map((({name:t,link:a})=>"<a class='footer-item' href='"+a+"' target='_blank' rel='noopener nofollow'>"+t+"</a>")).join("");e+="<a class='footer-item' href='/link/'>更多</a>",document.getElementById("friend-links-in-footer").innerHTML=e,setTimeout((()=>{t.style.opacity="1"}),300)}