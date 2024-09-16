import{S as d,a as u,i as p}from"./assets/vendor-CRCB-GUD.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const f=document.querySelector(".search-input");document.querySelector(".search-btn");const l=document.getElementById("gallery"),m=document.querySelector(".search-form"),y=new d(".gallery li > a",{captionsData:"alt",captionDelay:250}),h=document.getElementById("load-more");let i=1,c="";async function g(){const o=f.value.trim();let s=document.getElementById("loader-more-container");o!==""&&o!==c&&(i=1,c=o,l.innerHTML="",s=document.getElementById("loader-container"));const n=`https://pixabay.com/api/?key=45978686-70839b27c443bdf6e9ef42e3a&q=${o}&image_type=photo&orientation=horizontal&safesearch=true&page=${i}&per_page=40`;try{s.classList.remove("hidden");const t=(await u.get(n)).data;t.hits.length===0?p.error({title:"",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):(b(t.hits),h.classList.remove("hidden"),i++)}catch(e){console.error("Hata:",e)}finally{s.classList.add("hidden")}}function b(o){const s=o.map(r=>`
    <li class="card">
  <a href="${r.largeImageURL}">
    <img src="${r.webformatURL}" alt="${r.tags}" />
  </a>
  <div class="info">
    <p class="info-text"><b>Likes</b> ${r.likes}</p>
    <p class="info-text"><b>Views</b> ${r.views}</p>
    <p class="info-text"><b>Comments</b> ${r.comments}</p>
    <p class="info-text"><b>Downloads</b> ${r.downloads}</p>
  </div>
</li>
    
    `);l.innerHTML+=s.join(""),y.refresh()}m.addEventListener("submit",o=>{o.preventDefault(),g()});
//# sourceMappingURL=index.js.map
