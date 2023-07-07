var posts=["posts/29786.html","posts/63587.html","posts/22689.html","posts/49364.html","posts/41206.html","posts/26088.html","posts/20419.html","posts/30653.html","posts/11053.html","posts/3802.html","posts/17989.html","posts/37595.html","posts/14542.html","posts/10021.html","posts/38442.html","posts/12635.html"];function toRandomPost(){pjax.loadUrl("/"+posts[Math.floor(Math.random()*posts.length)])}var friend_link_list=[{name:"安知鱼",hundredSuffix:"!w120",link:"https://anzhiy.cn/",avatar:"https://img01.anheyu.com/useruploads/151/2023/06/17/648ca3dcbddb2.webp",descr:"生活明朗，万物可爱",siteshot:"https://img01.anheyu.com/useruploads/151/2023/06/17/648ca33d20c0c.webp"},{name:"Akilarの糖果屋",link:"https://akilar.top/",siteshot:"https://img01.anheyu.com/useruploads/151/2023/06/17/648ca33d22b27.webp",avatar:"https://img01.anheyu.com/useruploads/151/2023/06/17/648ca33d1c453.webp",descr:"欢迎光临糖果屋"},{name:"张洪Heo",link:"https://blog.zhheo.com/",avatar:"https://img01.anheyu.com/useruploads/151/2023/06/17/648ca33d21444.webp",descr:"分享设计与科技生活"},{name:"Fomalhaut🥝",link:"https://www.fomal.cn/",avatar:"https://www.fomal.cn/assets/avatar.webp",descr:"Future is now 🍭🍭🍭",siteshot:"https://img01.anheyu.com/useruploads/151/2023/06/17/648ca33d20f99.webp"},{name:"轻笑Chuckle",link:"https://www.qcqx.cn",avatar:"https://www.qcqx.cn/img/head.webp",descr:"漫天倾尘,风中轻笑",siteshot:"https://www.qcqx.cn/img/chuckle.webp"},{name:"Leonus",link:"https://blog.leonus.cn/",avatar:"https://img01.anheyu.com/useruploads/151/2023/06/17/648ca33d3d7b3.webp",descr:"进一寸有进一寸的欢喜。"},{name:"困困鱼",link:"https://0206.ink/",avatar:"https://img01.anheyu.com/useruploads/151/2023/06/17/648ca4dfb0555.webp",descr:"喜欢捣鼓的博主"},{name:"Fomalhaut🥝",link:"https://www.fomal.cc/",avatar:"https://www.fomal.cn/assets/avatar.webp",descr:"Future is now 🍭🍭🍭"},{name:"Leginn's Blog",link:"https://leginn.top/",avatar:"https://img01.anheyu.com/useruploads/151/2023/06/17/648ca4dfb7b64.webp",descr:"与你分享~"},{name:"陌颜小屋",link:"https://blog.asever.top/",avatar:"https://img01.anheyu.com/useruploads/151/2023/06/29/649c5955a9f35.webp",descr:"愿永不忘初心！"},{name:"阿豪AHao",link:"https://ahao.ah.cn/",avatar:"https://img01.anheyu.com/useruploads/151/2023/06/29/649c5955a9f0a.webp",descr:"人间值得，未来可期"},{name:"铭心石刻",link:"https://blog.kouseki.cn/",avatar:"https://blog.kouseki.cn/imgs/avatar.webp",descr:"愿岁并谢，与友长兮"},{name:"青桔气球",link:"https://blog.qjqq.cn/",avatar:"https://avatar.qjqq.cn/1/646cdb372913c.webp!avatar",descr:"分享网络安全与科技生活"},{name:"冰梦",link:"https://bingmeng158.github.io",avatar:"https://img01.anheyu.com/useruploads/151/2023/06/17/648d84aea2280.webp",descr:"未来可期，人间值得"},{name:"湘铭`Blog",link:"https://blog.xiangming.site/",avatar:"https://img01.anheyu.com/useruploads/151/2023/06/29/649c5955a992a.webp",descr:"听闻余生，相濡以沫💕"},{name:"Mxne",link:"https://blog.mxne.cn/",avatar:"https://bu.dusays.com/2023/02/05/63df7de56a470.webp",descr:"学如逆水行舟，不进则退。"},{name:"摸鱼星球",link:"https://moyustar.cn/",avatar:"https://img01.anheyu.com/useruploads/151/2023/06/17/648ca4dfb30ed.webp",descr:"斯人若彩虹，遇见方知有"},{name:"毕少侠-Hexo-Anzhiyu",link:"https://hexo.geekswg.top/",avatar:"https://hexo.geekswg.top/imgs/avatar.webp",descr:"毕少侠也在江湖。"},{name:"小志IT知识库",link:"https://www.czfq99.cn",avatar:"https://img01.anheyu.com/useruploads/151/2023/06/17/648ca4dfd85c5.webp",descr:"一个专注于安全领域的全栈博客"},{name:"小植の小破站",link:"https://blog.xiaoztx.top/",avatar:"https://img01.anheyu.com/useruploads/151/2023/06/17/648ca4dfb4f06.webp",descr:"生生不息，好运不止"},{name:"糖丸",link:"https://tany.top/",avatar:"https://img01.anheyu.com/useruploads/151/2023/06/17/648ca4dfb2b7d.webp",descr:"及时当勉，岁月不待"},{name:"屑殇的小破站",link:"https://jinghuashang.cn/",avatar:"https://img01.anheyu.com/useruploads/151/2023/06/17/648ca4e239a47.webp",descr:"咸鱼"},{name:"俊晗博客",link:"https://jun.pw/",avatar:"https://img01.anheyu.com/useruploads/151/2023/06/17/648ca4e23ffa9.webp",descr:"俊晗的个人博客，俊晗是一个热爱计算机与篮球的男孩子，博客里会分享一些生活琐事"},{name:"萌傀儡",link:"https://blhorizon.github.io/",avatar:"https://pic.imgdb.cn/item/6486e0261ddac507ccb9a73d.webp",descr:"珍惜现在，趁早摸鱼"},{name:"海底捞里没有鱼",link:"https://www.smileszh.cn/",avatar:"https://img01.anheyu.com/useruploads/151/2023/06/17/648ca4dfb2a36.webp",descr:"平安喜乐，万事胜意🐬"},{name:"慕斯",link:"https://blog.dd.ac.cn/",avatar:"https://img01.anheyu.com/useruploads/151/2023/06/21/6492871d2a94b.webp",descr:"风在迷茫中吹来夏天，少年借微光成长"},{name:"haloged的博客",link:"https://haloged.eu.org/",avatar:"https://img01.anheyu.com/useruploads/151/2023/06/25/64980155d11ec.webp",descr:"一只鸽子の博客"},{name:"酷酷哒の窝",link:"https://kukuda.cn/",avatar:"https://img01.anheyu.com/useruploads/151/2023/06/29/649c5955cdf2c.webp",descr:"生命不息，折腾不止"},{name:"Alcex",link:"https://www.alcex.top/",avatar:"https://img01.anheyu.com/useruploads/151/2023/06/28/649c58aee874b.webp",descr:"你所热爱的，就是你的生活"},{name:"葱苓",link:"https://blog.itciraos.cn/",avatar:"https://cdn.jsdelivr.net/gh/ciraos/ciraos-static@main/img/avatar1.webp",descr:"Dare && Do"},{name:"小智の空间站",link:"https://blog.cuixinyu.com/",avatar:"https://img01.anheyu.com/useruploads/151/2023/07/03/64a2aa3e1f17d.webp",descr:"记录学习踩坑"},{name:"厕所干饭人",link:"https://bkz.asia/",avatar:"https://img01.anheyu.com/useruploads/151/2023/07/07/64a8273c1b880.webp",descr:"有钱终成眷属，没钱亲眼目睹"},{name:"朝而往",link:"https://muerg.cn/",avatar:"https://img01.anheyu.com/useruploads/151/2023/06/29/649c5955a9f81.webp",descr:"四时之景不同，而乐亦无穷也。"}],refreshNum=1;function addFriendLinksInFooter(){var a=document.getElementById("footer-random-friends-btn");if(!a)return;a.style.opacity="0.2",a.style.transitionDuration="0.3s",a.style.transform="rotate("+360*refreshNum+++"deg)";const t=[];let e=0;for(;friend_link_list.length&&e<3;){const a=Math.floor(Math.random()*friend_link_list.length),{name:s,link:n,avatar:o}=friend_link_list.splice(a,1)[0];t.push({name:s,link:n,avatar:o}),e++}let s=t.map((({name:a,link:t})=>"<a class='footer-item' href='"+t+"' target='_blank' rel='noopener nofollow'>"+a+"</a>")).join("");s+="<a class='footer-item' href='/link/'>更多</a>",document.getElementById("friend-links-in-footer").innerHTML=s,setTimeout((()=>{a.style.opacity="1"}),300)}