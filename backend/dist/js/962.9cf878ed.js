"use strict";(self["webpackChunkolx_vue_3"]=self["webpackChunkolx_vue_3"]||[]).push([[962],{2962:function(t,e,a){a.r(e),a.d(e,{default:function(){return w}});var r=a(6252),s=a(3577),c=a(9963);const l={class:"col-md-9"},u={class:"container"},n={class:"card-group"},h=["src"],i={class:"card-body"},o=(0,r._)("h5",{class:"card-title"},"Card title",-1);function d(t,e,a,d,m,_){const S=(0,r.up)("router-link"),p=(0,r.up)("center");return(0,r.wg)(),(0,r.j4)(p,null,{default:(0,r.w5)((()=>[(0,r._)("div",null,[(0,r._)("h3",null,[(0,r.Uk)(" Searching for : "),(0,r._)("small",null,(0,s.zw)(m.SearchData),1)]),(0,r._)("div",l,[(0,r._)("div",u,[(0,r._)("div",n,[(0,r.Wm)(c.W3,{name:"fade",tag:"div",class:"row"},{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(m.ResultItems,(t=>((0,r.wg)(),(0,r.iD)("div",{key:t._id,class:"card col-md-4"},[(0,r._)("img",{class:"card-img-top",src:t.product_img,alt:"Card image cap"},null,8,h),(0,r._)("div",i,[(0,r._)("h6",null,"Price: £"+(0,s.zw)(t.price),1),o,(0,r.Wm)(S,{to:{path:"/SpecificItem",query:{ID:t._id}},class:"card-title"},{default:(0,r.w5)((()=>[(0,r.Uk)((0,s.zw)(t.name),1)])),_:2},1032,["to"])])])))),128))])),_:1})])])])])])),_:1})}var m=a(3907),_=a(8945);const S="https://olx-vue.herokuapp.com/api";var p={data(){return{SearchData:"",ResultItems:[]}},watch:{$route(t,e){this.SearchData=t.query.SData,this.runSearch()}},mounted(){this.SearchData=this.$route.query.SData,this.runSearch()},methods:{...(0,m.nv)(["SetUserMovementSearch"]),runSearch(){const t=JSON.parse(localStorage.getItem("Auth")).Token;t?_.Z.get(`${S}/search/user/${this.SearchData}`,{headers:{"x-auth-token":t}}).then((t=>{this.ResultItems=t.data})):_.Z.get(`${S}/search/${this.SearchData}`).then((t=>{this.ResultItems=t.data})),this.SetUserMovementSearch(this.ResultItems)}}},v=a(3744);const g=(0,v.Z)(p,[["render",d]]);var w=g}}]);
//# sourceMappingURL=962.9cf878ed.js.map