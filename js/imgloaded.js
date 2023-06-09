class ProgressiveLoad{constructor(e,a){this.smallSrc=e,this.largeSrc=a,this.initTpl()}initTpl(){this.container=document.createElement("div"),this.smallStage=document.createElement("div"),this.largeStage=document.createElement("div"),this.smallImg=new Image,this.largeImg=new Image,this.container.className="pl-container",this.smallStage.className="pl-img pl-blur",this.largeStage.className="pl-img",this.container.appendChild(this.smallStage),this.container.appendChild(this.largeStage),this.smallImg.onload=this._onSmallLoaded.bind(this),this.largeImg.onload=this._onLargeLoaded.bind(this)}progressiveLoad(){this.smallImg.src=this.smallSrc,this.largeImg.src=this.largeSrc}_onLargeLoaded(){this.largeStage.classList.add("pl-visible"),this.largeStage.style.backgroundImage=`url('${this.largeSrc}')`}_onSmallLoaded(){this.smallStage.classList.add("pl-visible"),this.smallStage.style.backgroundImage=`url('${this.smallSrc}')`}}const executeLoad=(e,a)=>{console.log("执行渐进背景替换");const t=window.matchMedia("(max-width: 767px)").matches,s=new ProgressiveLoad(t?e.mobileSmallSrc:e.smallSrc,t?e.mobileLargeSrc:e.largeSrc);a.children[0]&&a.insertBefore(s.container,a.children[0]),s.progressiveLoad()},config={smallSrc:"https://img01.anheyu.com/useruploads/151/2023/07/13/64aedd5caecca.webp",largeSrc:"https://img01.anheyu.com/useruploads/151/2023/07/13/64aee05f78e46.jpg",mobileSmallSrc:"https://img01.anheyu.com/useruploads/151/2023/07/13/64aeddd6cab8b.webp",mobileLargeSrc:"https://img01.anheyu.com/useruploads/151/2023/07/13/64aedeb52c362.jpg",enableRoutes:["/"]};function initProgressiveLoad(e){const a=document.getElementById("page-header");a&&a.classList.contains("full_page")&&executeLoad(e,a)}function onPJAXComplete(e){const a=document.getElementById("page-header");a&&a.classList.contains("full_page")&&initProgressiveLoad(e)}document.addEventListener("DOMContentLoaded",(function(){initProgressiveLoad(config)})),document.addEventListener("pjax:complete",(function(){onPJAXComplete(config)}));