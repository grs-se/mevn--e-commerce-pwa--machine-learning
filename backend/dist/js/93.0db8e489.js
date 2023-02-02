"use strict";(self["webpackChunkolx_vue_3"]=self["webpackChunkolx_vue_3"]||[]).push([[93],{6093:function(e,t,a){a.r(t),a.d(t,{default:function(){return ne}});var s=a(6252),i=a(3577);const o=e=>((0,s.dD)("data-v-8403c514"),e=e(),(0,s.Cn)(),e),l=o((()=>(0,s._)("hr",null,null,-1))),c={class:"col-md-2",style:{float:"left",margin:"1px 2%"}},r=o((()=>(0,s._)("div",{class:"col-md-3"},null,-1))),n={class:"col-md-9"},d={class:"container"},h={class:"card-group"},g={key:0,class:"row"},u=["src","alt"],C={class:"card-body"},m={class:"card-title vx"},p=["onClick"],_=o((()=>(0,s._)("small",null,"Remove From Cart",-1))),P=[_],k=["onClick"],v=o((()=>(0,s._)("hr",null,null,-1))),w={class:"container wid"},f={class:"row"},y={"aria-label":"Page navigation  "},D={class:"pagination"},S={class:"page-item"},I=o((()=>(0,s._)("span",{"aria-hidden":"true"},"«",-1))),x=o((()=>(0,s._)("span",{class:"sr-only"},"Previous",-1))),L=[I,x],b=["onClick"],A={class:"page-item"},N=o((()=>(0,s._)("span",{"aria-hidden":"true"},"»",-1))),B=o((()=>(0,s._)("span",{class:"sr-only"},"Next",-1))),$=[N,B],q=o((()=>(0,s._)("div",{class:"clear xp"},null,-1)));function M(e,t,a,o,_,I){const x=(0,s.up)("sug-products"),N=(0,s.up)("categories"),B=(0,s.up)("router-link"),M=(0,s.up)("center");return(0,s.wg)(),(0,s.iD)("div",null,[(0,s.Wm)(x),l,(0,s.Wm)(M,null,{default:(0,s.w5)((()=>[(0,s._)("div",c,[(0,s.Wm)(N,{onCheckCat:I.CheckCategory},null,8,["onCheckCat"])]),r,(0,s._)("div",n,[(0,s._)("div",d,[(0,s._)("div",h,[_.isLoaded?((0,s.wg)(),(0,s.iD)("div",g,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(_.items,((e,t)=>((0,s.wg)(),(0,s.iD)("div",{key:e._id,class:"card col-md-4"},[(0,s._)("img",{class:"card-img-top",src:e.product_img,alt:e.name},null,8,u),(0,s._)("div",C,[(0,s._)("h6",null,"£"+(0,i.zw)(e.price),1),(0,s.Wm)(B,{to:{path:"/SpecificItem",query:{ID:e._id}}},{default:(0,s.w5)((()=>[(0,s._)("h5",m,(0,i.zw)(I.MaxName(e.name)),1)])),_:2},1032,["to"]),e.IsInCart?((0,s.wg)(),(0,s.iD)("button",{key:1,class:"btn btn-primary",onClick:a=>I.AddToCart(e._id,t)}," Add To Cart ",8,k)):((0,s.wg)(),(0,s.iD)("button",{key:0,class:"btn btn-danger",onClick:a=>I.RemoveFromCart(e._id,t)},P,8,p))])])))),128))])):(0,s.kq)("",!0)])]),v,(0,s._)("div",w,[(0,s._)("div",f,[(0,s._)("nav",y,[(0,s._)("ul",D,[(0,s._)("li",S,[(0,s._)("button",{class:"page-link",onClick:t[0]||(t[0]=e=>I.NextPrevPage(!1))},L)]),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(_.PageArray,((e,t)=>((0,s.wg)(),(0,s.iD)("li",{key:t,class:"page-item"},[(0,s._)("button",{class:(0,i.C_)(_.PageSelected===e?"page-link active":"page-link"),onClick:t=>I.ChangePage(e)},(0,i.zw)(e),11,b)])))),128)),(0,s._)("li",A,[(0,s._)("button",{class:"page-link",onClick:t[1]||(t[1]=e=>I.NextPrevPage(!0))},$)])])])])])])])),_:1}),q])}a(7658);const G={class:"list-group list-group-flush"},F={class:"custom-control custom-checkbox"},W=["id","onChange"],Z=["for"];function z(e,t,a,o,l,c){return(0,s.wg)(),(0,s.iD)("div",null,[(0,s._)("ul",G,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(l.CategoriesList,(e=>((0,s.wg)(),(0,s.iD)("li",{key:e._id,class:"list-group-item"},[(0,s._)("div",F,[(0,s._)("input",{id:e._id,type:"checkbox",class:"custom-control-input",onChange:t=>c.CheckCategory(e._id)},null,40,W),(0,s._)("label",{class:"custom-control-label",for:e._id},(0,i.zw)(e.name),9,Z)])])))),128))])])}var R=a(3907),Y={name:"CategoriesView",emits:["CheckCategory"],data(){return{CategoriesList:[]}},computed:{...(0,R.Se)(["AllCategories"])},created(){this.GetCategories(),this.$store.watch((()=>{this.GetCatListFromStore()}))},mounted(){this.CategoriesList=this.AllCategories},methods:{...(0,R.nv)(["GetCategories"]),CheckCategory(e){console.log("cat id",e),this.$emit("CheckCategory",e)},GetCatListFromStore:function(){this.CategoriesList=this.AllCategories}}},H=a(3744);const K=(0,H.Z)(Y,[["render",z],["__scopeId","data-v-1530a0ff"]]);var T=K,O=a(9963);const V={key:0,class:"hS"},J={class:"container"},j={class:"card"},E=["src"],Q={class:"card-block"},U={class:"card-title vx"},X={class:"card-text"};function ee(e,t,a,o,l,c){const r=(0,s.up)("center"),n=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("div",null,[(0,s.Wm)(r,null,{default:(0,s.w5)((()=>[l.BigData.length>0?((0,s.wg)(),(0,s.iD)("h3",V,"Items that You may Like")):(0,s.kq)("",!0)])),_:1}),(0,s._)("div",J,[l.isLoad?((0,s.wg)(),(0,s.j4)(O.W3,{key:0,name:"fade",tag:"div",class:"row"},{default:(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(l.BigData,(e=>((0,s.wg)(),(0,s.iD)("div",{key:e._id,class:"col"},[(0,s._)("div",j,[(0,s._)("img",{class:"card-img-top",src:e.product_img},null,8,E),(0,s._)("div",Q,[(0,s.Wm)(n,{to:{path:"/SpecificItem",query:{ID:e._id}}},{default:(0,s.w5)((()=>[(0,s._)("h6",U,(0,i.zw)(c.MaxName(e.name)),1)])),_:2},1032,["to"]),(0,s._)("p",X,"£"+(0,i.zw)(e.price),1)])])])))),128))])),_:1})):(0,s.kq)("",!0)])])}var te=a(8945);const ae="https://olx-vue.herokuapp.com/api";var se={data(){return{BigData:[],isLoad:Boolean}},created(){let e=[],t=JSON.parse(localStorage.getItem("Auth")).Token;t&&te.Z.get(`${ae}/machine_learning/All`,{headers:{"x-auth-token":t}}).then((t=>{for(let a=0;a<t.data.length;a++){const s=t.data[a];e.push(s)}if(e.length>4){const t=e.sort((()=>.5-Math.random()));let a=t.slice(0,5);this.BigData=a,console.log("BigData",this.BigData),this.isLoad=!0}else this.BigData=e,this.isLoad=!0;console.log("ar",e)})).catch((e=>{console.log("er",e.response.data.msg)}))},methods:{MaxName(e){return e.length<12?e:e.slice(0,12)+"..."}}};const ie=(0,H.Z)(se,[["render",ee],["__scopeId","data-v-783fd617"]]);var oe=ie;const le="https://olx-vue.herokuapp.com/api";var ce={name:"MainView",components:{Categories:T,SugProducts:oe},data(){return{items:[],PageArray:[],PageSelected:3,CheckedCat:[],isLoaded:!0}},computed:{...(0,R.Se)(["AllProducts"])},created(){this.GetProducts()},mounted(){this.$route.query.page||this.$router.push({path:"/",name:"Main",query:{page:1}}).catch((()=>{})),this.PageSelected=parseInt(this.$route.query.page),this.getProdData(),this.Pagination()},methods:{...(0,R.nv)(["GetProducts","GetProdByPageNum","CheckIfInCart","SetNewCartItem","RemoveItemFromCart"]),getProdData(){0!==this.CheckedCat.length?te.Z.post(`${le}/products/ProdByCat/${this.PageSelected}`,{cat:this.CheckedCat}).then((e=>{e.data.length&&(this.isLoaded=!1,this.items=e.data,console.log("data after cat check",e.data),this.CheckIf_inCart())})):te.Z.get(`${le}/products/ProdByPage/${this.PageSelected}`).then((e=>{e.data.length&&(this.isLoaded=!1,this.items=e.data,console.log("data without cat",e.data),this.CheckIf_inCart())}))},CheckIf_inCart(){let e=[];for(let t=0;t<this.items.length;t++){const a=this.items[t];let s=JSON.parse(localStorage.getItem("Cart")),i=s.findIndex((e=>e.id==a._id));a.IsInCart=-1===i,e.push(a)}this.isLoaded=!0},AddToCart(e,t){this.isLoaded=!1,this.items[t].IsInCart=!0,this.isLoaded=!0,this.SetNewCartItem(e),this.getProdData()},RemoveFromCart(e,t){this.isLoaded=!1,this.items[t].IsInCart=!1,this.isLoaded=!0,this.RemoveItemFromCart(e),this.getProdData()},MaxName(e){return e.length<12?e:e.slice(0,12)+"..."},Pagination(){this.PageArray=[];let e=this.PageSelected+3;for(let t=this.PageSelected;t<e;t++)this.PageArray.push(t);console.log("Pagination",this.PageArray),this.getProdData()},ChangePage(e){this.GetProdByPageNum(e),this.PageSelected=e,this.$router.push({path:"/",name:"Main",query:{page:e}}),this.getProdData()},NextPrevPage(e){0==e&&1==this.PageSelected&&console.log("non"),0==e&&1!==this.PageSelected&&(this.PageSelected=this.PageSelected-1,this.ChangePage(this.PageSelected),this.Pagination(),this.getProdData(),console.log("n",this.PageSelected)),1==e&&(this.PageSelected=this.PageSelected+1,this.ChangePage(this.PageSelected),this.Pagination(),this.getProdData(),console.log("n ",this.PageSelected))},CheckCategory(e){console.log("MainView cat id",e),-1===this.CheckedCat.indexOf(e)?this.CheckedCat.push(e):this.CheckedCat=this.CheckedCat.filter((t=>t!==e)),te.Z.post(`${le}/products/ProdByCat/${this.PageSelected}`,{cat:this.CheckedCat}).then((e=>{0!==e.data.length&&(this.items=e.data,this.CheckIf_inCart())}))}}};const re=(0,H.Z)(ce,[["render",M],["__scopeId","data-v-8403c514"]]);var ne=re}}]);
//# sourceMappingURL=93.0db8e489.js.map