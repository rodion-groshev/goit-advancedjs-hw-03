import{i as l,S as p}from"./assets/vendor-8c59ed88.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}})();function h(s){return fetch(`https://pixabay.com/api/?${s}`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()}).catch(e=>console.log(e))}const u=document.querySelector(".images-list");function m(s){const e=s.hits.map(r=>`
        <li class="images-item">
            <a href="${r.largeImageURL}">
                <img src="${r.webformatURL}" alt="${r.tags}" width=360 height=152>
            </a>

            <div class="images-titels">
                <p><b>Likes</b> ${r.likes}</p>
                <p><b>Views</b> ${r.views}</p>
                <p><b>Comments</b> ${r.comments}</p>
                <p><b>Downloads</b> ${r.downloads}</p>
            </div>
        </li>
        `).join("");u.innerHTML="",u.insertAdjacentHTML("beforeend",e)}const f=document.querySelector(".search-field"),y=document.querySelector(".search-btn"),a=document.querySelector(".loader");let i={key:"45237174-16156409efac0dde2d7dc0545",q:null,image_type:"photo",orientation:"horizontal",safesearch:!0};const d={message:"Sorry, there are no images matching your search query. Please try again!",color:"red",position:"topRight",progressBar:!1};f.addEventListener("input",s=>{i.q=s.target.value.trim()});y.addEventListener("click",s=>{if(s.preventDefault(),f.value="",i.q===null||i.q===""){l.show(d);return}a.style.display="block",h(new URLSearchParams(i)).then(e=>{if(e.total===0){l.show(d),a.style.display="none";return}m(e),a.style.display="none";const r=new p(".images-list a",{captionsData:"alt",captionDelay:250});r.refresh(),r.on("show.simplelightbox",function(){})}).catch(e=>console.log(e))});
//# sourceMappingURL=commonHelpers.js.map
