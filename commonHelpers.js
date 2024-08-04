import{S as d,i as c}from"./assets/vendor-8c59ed88.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();function f(s){return fetch(`https://pixabay.com/api/?${s}`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()}).catch(e=>console.log(e))}const m=document.querySelector(".images-list");function p(s){const e=s.hits.map(o=>`
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
        `).join("");m.insertAdjacentHTML("beforeend",e)}const h=document.querySelector(".search-form"),a=document.querySelector(".loader"),g=document.querySelector(".images-list"),u=new d(".images-list a",{captionsData:"alt",captionDelay:250});let i={key:"45237174-16156409efac0dde2d7dc0545",q:null,image_type:"photo",orientation:"horizontal",safesearch:!0};const y={message:"Sorry, there are no images matching your search query. Please try again!",color:"red",position:"center",progressBar:!1},b={message:"Please fill the search field",color:"yellow",position:"center",progressBar:!1};h.addEventListener("submit",s=>{if(s.preventDefault(),i.q=s.target.elements.search_key.value.trim(),s.target.elements.search_key.value="",g.innerHTML="",i.q===null||i.q===""){c.warning(b);return}a.style.display="block",f(new URLSearchParams(i)).then(e=>{if(e.total===0){c.error(y),a.style.display="none";return}p(e),a.style.display="none",u.on("show.simplelightbox",function(){}),u.refresh()}).catch(e=>console.log(e))});
//# sourceMappingURL=commonHelpers.js.map
