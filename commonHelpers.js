import{S as m,i as l}from"./assets/vendor-8c59ed88.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();function p(s){return fetch(`https://pixabay.com/api/?${s}`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()}).catch(e=>console.log(e))}const u=document.querySelector(".images-list");function h(s){const e=s.hits.map(o=>`
        <li class="images-item">
            <a href="${o.largeImageURL}">
                <img src="${o.webformatURL}" alt="${o.tags}" width=360 height=202>
            </a>

            <div class="images-titels">
                <p><b>Likes</b> ${o.likes}</p>
                <p><b>Views</b> ${o.views}</p>
                <p><b>Comments</b> ${o.comments}</p>
                <p><b>Downloads</b> ${o.downloads}</p>
            </div>
        </li>
        `).join("");u.innerHTML="",u.insertAdjacentHTML("beforeend",e)}const y=document.querySelector(".search-form"),a=document.querySelector(".loader"),d=new m(".images-list a",{captionsData:"alt",captionDelay:250});let i={key:"45237174-16156409efac0dde2d7dc0545",q:null,image_type:"photo",orientation:"horizontal",safesearch:!0};const f={message:"Sorry, there are no images matching your search query. Please try again!",color:"red",position:"topRight",progressBar:!1};y.addEventListener("submit",s=>{if(s.preventDefault(),i.q=s.target.elements.search_key.value.trim(),s.target.elements.search_key.value="",i.q===null||i.q===""){l.show(f);return}a.style.display="block",p(new URLSearchParams(i)).then(e=>{if(e.total===0){l.show(f),a.style.display="none";return}h(e),a.style.display="none",d.on("show.simplelightbox",function(){}),d.refresh()}).catch(e=>console.log(e))});
//# sourceMappingURL=commonHelpers.js.map
