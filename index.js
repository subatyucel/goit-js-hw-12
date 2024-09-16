import{S as u,a as f,i as m}from"./assets/vendor-CRCB-GUD.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const y=document.querySelector(".search-input"),h=document.querySelector(".search-btn"),l=document.getElementById("gallery"),g=new u(".gallery li > a",{captionsData:"alt",captionDelay:250}),d=document.getElementById("load-more");let i=1,c="";async function p(){const r=y.value.trim();let s=document.getElementById("loader-more-container");r!==""&&r!==c&&(i=1,c=r,l.innerHTML="",s=document.getElementById("loader-container"));const n=`https://pixabay.com/api/?key=45978686-70839b27c443bdf6e9ef42e3a&q=${r}&image_type=photo&orientation=horizontal&safesearch=true&page=${i}&per_page=40`;try{s.classList.remove("hidden");const t=(await f.get(n)).data;t.hits.length===0?m.error({title:"",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):(b(t.hits),d.classList.remove("hidden"),i++)}catch(e){console.error("Hata:",e)}finally{s.classList.add("hidden")}}function b(r){const s=r.map(o=>`
    <li class="card">
  <a href="${o.largeImageURL}">
    <img src="${o.webformatURL}" alt="${o.tags}" />
  </a>
  <div class="info">
    <p class="info-text"><b>Likes</b> ${o.likes}</p>
    <p class="info-text"><b>Views</b> ${o.views}</p>
    <p class="info-text"><b>Comments</b> ${o.comments}</p>
    <p class="info-text"><b>Downloads</b> ${o.downloads}</p>
  </div>
</li>
    
    `);l.innerHTML+=s.join(""),g.refresh()}h.addEventListener("click",r=>{r.preventDefault(),p()});d.addEventListener("click",r=>{r.preventDefault(),p()});
//# sourceMappingURL=index.js.map
