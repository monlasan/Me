import{j as h,r as n,l as f,F as p,a as g,b as x,e as b,R as v,c as y}from"./vendor.edb28b0e.js";const N=function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const d of a.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function s(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerpolicy&&(a.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?a.credentials="include":r.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(r){if(r.ep)return;r.ep=!0;const a=s(r);fetch(r.href,a)}};N();var w="/Me/assets/back.28f8fa2a.png",k="/Me/assets/me.5b745bae.jpg",j="/Me/assets/marineland.e0610f5c.jpg",M="/Me/assets/fondationvissin.3469b1b4.jpg",_="/Me/assets/carrecube.949e188d.jpg";const e=h.exports.jsx,t=h.exports.jsxs;function u({children:i,picture:l}){return t("div",{className:"flex flex-col items-center md:flex-row",children:[e("div",{"data-scroll":!0,className:"bg-indigo-900 anime_fade hover:scale-105 hover:rotate-3 duration-100 w-80 h-56 mb-2",children:e("img",{src:l,alt:`${i[0]}`,className:"w-full h-full object-cover hover:opacity-100 duration-100 cursor-pointer opacity-70"})}),e("div",{"data-scroll":!0,className:"anime_rightToLeft grid md:ml-8",children:t("div",{className:"self-center",children:[e("span",{className:"text-white text-xl font-medium font-noto",children:i[0]}),e("span",{className:"block max-w-xs mt-2 font-montserrat text-sm leading-6 text-gray-500",children:i[1]})]})})]})}function S(){const[i,l]=n.exports.useState("");n.exports.useEffect(()=>{f()},[]),n.exports.useEffect(()=>{let c=new Date;l(c.getUTCFullYear())},[]);const s=n.exports.useRef(),o=n.exports.useRef(),r=n.exports.useRef(),a=n.exports.useRef();return t("div",{className:"bg-[#010101]",children:[e("div",{className:"grid z-10 place-items-center overflow-hidden text-white min-h-screen w-full",children:t("div",{className:"z-10 relative",children:[e("div",{className:"-z-10 ",children:e("img",{src:w,className:"absolute max-w-5xl md:max-w-6xl -z-10  top-[50%] left-[50%] duration-75 translate-x-[-50%] rotate-180 translate-y-[-65%] md:translate-y-[-55%]",alt:"Haze Background"})}),e("span",{className:"overflow-hidden block",children:t("p",{className:"anime_myname text-7xl sm:text-6xl z-10 duration-75 ease-out font-noto",children:["Khaled ",e("br",{className:"sm:hidden"})," Sanny"]})}),e("span",{className:"overflow-hidden block",children:e("p",{className:"anime_field text-xl text-gray-300 z-10 font-montserrat mt-2",children:"UI / UX / Web Development"})}),e("button",{className:"anime_button hover:bg-indigo-900/80 z-20 border bg-indigo-900 duration-75 p-2 mt-8 font-montserrat",children:e("a",{href:"../sanny_khaled_dev_resume.pdf",download:!0,children:"Download resume"})})]})}),t("div",{className:"flex flex-col pb-20 items-center min-h-screen w-full",children:[t("div",{className:" rounded-full relative z-20 bg-indigo-900",children:[e("img",{src:k,id:"mypic",alt:"Sanny Khaled's Photo",className:"rounded-full z-30 w-72 sm:w-80 opacity-60"}),e("h1",{"data-scroll":!0,id:"aboutme",className:"anime_me top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] whitespace-nowrap text-7xl sm:text-8xl text-white absolute font-noto font-bold",children:"About me"})]}),t("p",{className:"max-w-lg mx-12 mt-20 mb-20 text-center font-montserrat text-gray-500",children:[e("span",{className:"text-xl text-indigo-500 font-mono",children:"HI,"})," my name is Sanny Khaled. I have been studying web development and UI/UX Design since October 2019. I love creative works and developing awesome websites."]}),t("div",{className:"text-gray-500",children:[e("h1",{"data-scroll":!0,className:"anime_leftToRight text-white mb-16 md:mt-16 text-4xl text-center font-noto",children:"Skills"}),t("div",{className:"flex flex-col sm:flex-row gap-y-20 gap-x-20 font-montserrat",children:[t("ul",{className:"relative grid gap-2 hover:text-gray-400 duration-150",children:[e("li",{className:"absolute -top-5 -left-5 block w-3 h-3 bg-indigo-500 rounded-full"}),e("li",{children:"Html"}),e("li",{children:"Css / Scss"}),e("li",{children:"Javascript"}),e("li",{children:"Php"}),e("li",{children:"Git"})]}),t("ul",{className:"relative grid gap-2 hover:text-gray-400 duration-150",children:[e("li",{className:"absolute -top-5 -left-5 block w-3 h-3 bg-indigo-500 rounded-full"}),e("li",{children:"React JS"}),e("li",{children:"Tailwind"}),e("li",{children:"Node JS"}),e("li",{children:"MongoDB"}),e("li",{children:"MySQL"})]}),t("ul",{className:"relative grid gap-2 hover:text-gray-400 duration-150",children:[e("li",{className:"absolute -top-5 -left-5 block w-3 h-3 bg-indigo-500 rounded-full"}),e("li",{children:"Wordpress"}),e("li",{children:"Figma"}),e("li",{children:"Affinity Designer"}),e("li",{children:"Adobe XD"}),e("li",{children:"Adobe Photoshop"})]})]})]})]}),t("div",{className:"flex z-10 items-center justify-center flex-col pt-8 lg:pt-28 text-gray-500",children:[e("h1",{"data-scroll":!0,className:"anime_leftToRight text-white text-4xl text-center font-noto",children:"Works"}),e("p",{className:"max-w-xs sm:max-w-md my-16 text-center font-montserrat",children:"A collection of my favorite projects I\u2019ve developed recently. Feel great while sharing them..."}),t("div",{className:"grid gap-y-16",children:[t(u,{picture:j,children:[e("p",{children:"Marine land"}),e("p",{children:"A project for Marine Land, a maritime equipment supplier in Benin and sub-region that needed an online presence to reach more customers and display its product catalog."})]}),t(u,{picture:M,children:[e("p",{children:"Fondation vissin"}),e("p",{children:"I designed and developed the new website for the NGO Fondation Vissin to bring a touch of modernity and a boost to their humanitarian project."})]}),t(u,{picture:_,children:[e("p",{children:"CarreCube"}),e("p",{children:"CarreCube needed a simple and modern website specially designed to present the services of their construction and real estate agency."})]})]})]}),e("div",{className:"grid place-items-center pt-24 text-gray-500",children:t("div",{className:"w-full grid justify-center pb-36",children:[t("h1",{"data-scroll":!0,className:"anime_bottomToTop pb-16 lg:pt-16 text-white font-noto text-center text-4xl",children:["Let's get in ",e("br",{})," touch"]}),t("form",{ref:s,onSubmit:c=>{c.preventDefault(),b.sendForm("service_uo6zw49","template_qoe32ij",s.current,"lnKMy74XbB8KlgSks").then(m=>{console.log(m.text),o.current.value="",r.current.value="",a.current.value=""},m=>{console.log(m.text)})},className:"relative grid md:grid-cols-2 grid-cols-1 max-w-4xl gap-4 mx-8",children:[t("div",{className:"grid gap-4 font-montserrat",children:[e("input",{required:!0,type:"name",name:"user_name",ref:o,className:"p-2 bg-black outline-none focus:border-indigo-300 w-full border-l md:border-r md:border-l-0 placeholder-gray-500 border-indigo-900",placeholder:"What is your name ?"}),e("input",{required:!0,type:"email",ref:r,name:"user_email",className:"p-2 bg-black outline-none focus:border-indigo-300 w-full border-l md:border-r md:border-l-0 placeholder-gray-500 border-indigo-900",placeholder:"Set your email please"})]}),e("textarea",{required:!0,ref:a,name:"message",className:"w-full p-2 font-montserrat focus:border-indigo-300 bg-black outline-none border-l border-indigo-900",id:"",defaultValue:"Message",cols:"30",rows:"3"}),e("button",{className:"font-montserrat absolute bottom-0 left-[50%] translate-x-[-50%] translate-y-24 mt-10 text-sm p-3 px-8 bg-indigo-900/10 hover:bg-indigo-900 duration-75 text-gray-300",children:"Send message"}),t("div",{className:"absolute flex flex-col items-center bottom-0 left-[50%] translate-x-[-50%] translate-y-52",children:["or",t("div",{className:"flex gap-x-10 opacity-80 text-indigo-900 text-xl mt-8",children:[e("a",{href:"https://t.me/khaled_sama",children:e(p,{})}),e("a",{href:"mailto:khaledsannyaml@gmail.com",children:e(g,{})})]})]})]})]})}),e("div",{className:"grid z-10 place-items-center pt-32 text-gray-700",children:t("p",{className:"p-3 font-mono text-center",children:["\xA9 ",i," Khaled Sanny. ",e("br",{className:"sm:hidden"})," Made with",e(x,{className:"text-red-600 inline-block mx-2"}),"by me"]})})]})}v.render(e(y.StrictMode,{children:e(S,{})}),document.getElementById("root"));
