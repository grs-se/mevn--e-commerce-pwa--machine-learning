"use strict";(self["webpackChunkolx_vue_3"]=self["webpackChunkolx_vue_3"]||[]).push([[292],{6292:function(e,t,a){a.r(t),a.d(t,{default:function(){return St}});var s=a(6252),o=a(3577),i=a(9963);const r={class:"container"},n={class:"row"},l={class:"col-md-3 df"},d={class:"list-group"};function c(e,t,a,c,u,g){const p=(0,s.up)("Users"),m=(0,s.up)("Categories"),h=(0,s.up)("Chart"),C=(0,s.up)("MainProd"),_=(0,s.up)("center");return(0,s.wg)(),(0,s.iD)("div",null,[(0,s.Wm)(_,null,{default:(0,s.w5)((()=>[(0,s._)("div",r,[(0,s._)("div",n,[(0,s._)("div",l,[(0,s._)("div",d,[(0,s._)("a",{class:(0,o.C_)(["list-group-item","list-group-item-action","v",g.ChangeClassAndComponent("Users")?"active":"",,]),onClick:t[0]||(t[0]=e=>g.ChangePage("Users"))}," Users ",2),(0,s._)("a",{class:(0,o.C_)(["list-group-item","list-group-item-action","v",g.ChangeClassAndComponent("Categories")?"active":""]),onClick:t[1]||(t[1]=e=>g.ChangePage("Categories"))}," Categories ",2),(0,s._)("a",{class:(0,o.C_)(["list-group-item","list-group-item-action","v",g.ChangeClassAndComponent("MainProd")?"active":""]),onClick:t[2]||(t[2]=e=>g.ChangePage("MainProd"))}," Products ",2),(0,s._)("a",{class:(0,o.C_)(["list-group-item","list-group-item-action","v",g.ChangeClassAndComponent("Chart")?"active":""]),onClick:t[3]||(t[3]=e=>g.ChangePage("Chart"))}," Chart ",2)])]),(0,s.Wm)(i.W3,{tag:"div",name:"slide",class:"col-md-9 d"},{default:(0,s.w5)((()=>[!g.ChangeClassAndComponent("Users")?(0,s.kq)("",!0):((0,s.wg)(),(0,s.j4)(p,{key:"Users"})),g.ChangeClassAndComponent("Categories")?((0,s.wg)(),(0,s.j4)(m,{key:"Categories"})):(0,s.kq)("",!0),g.ChangeClassAndComponent("Chart")?((0,s.wg)(),(0,s.j4)(h,{key:"Chart"})):(0,s.kq)("",!0),g.ChangeClassAndComponent("MainProd")?((0,s.wg)(),(0,s.j4)(C,{key:"MainProd"})):(0,s.kq)("",!0)])),_:1})])])])),_:1})])}a(7658);const u=e=>((0,s.dD)("data-v-4fbe2573"),e=e(),(0,s.Cn)(),e),g=u((()=>(0,s._)("h5",{class:"btn-danger"},"Categories",-1))),p={class:"z list-group-item d-flex justify-content-between align-items-center"},m=["onUpdate:modelValue"],h={class:"form-group"},C=["onClick"],_=["onClick"],w=["onClick"],D=u((()=>(0,s._)("hr",null,null,-1)));function P(e,t,a,r,n,l){const d=(0,s.up)("pagination-store"),c=(0,s.up)("center");return(0,s.wg)(),(0,s.j4)(c,null,{default:(0,s.w5)((()=>[(0,s._)("div",null,[g,(0,s.wy)((0,s._)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>n.NewAddedCat=e),class:"form-group bn",type:"text",placeholder:"Category Name"},null,512),[[i.nr,n.NewAddedCat]]),(0,s._)("button",{class:"btn btn-success form-group bn",onClick:t[1]||(t[1]=(...e)=>l.AddNewCat&&l.AddNewCat(...e))}," New Category "),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(n.NewCatList,(e=>((0,s.wg)(),(0,s.iD)("ul",{key:e._id,class:"list-group m"},[(0,s._)("li",p,[e.isEdit?(0,s.wy)(((0,s.wg)(),(0,s.iD)("input",{key:0,"onUpdate:modelValue":t=>e.name=t,type:"text"},null,8,m)),[[i.nr,e.name]]):(0,s.kq)("",!0),(0,s.Uk)(" "+(0,o.zw)(e.name)+" ",1),(0,s._)("div",h,[e.isEdit?(0,s.kq)("",!0):((0,s.wg)(),(0,s.iD)("button",{key:0,class:"form-control btn btn-primary",onClick:t=>e.isEdit=!e.isEdit}," Edit ",8,C)),e.isEdit?((0,s.wg)(),(0,s.iD)("button",{key:1,class:"form-control btn btn-success",onClick:t=>l.SaveAfterEdit(e._id,e)}," Save ",8,_)):(0,s.kq)("",!0),e.isEdit?(0,s.kq)("",!0):((0,s.wg)(),(0,s.iD)("button",{key:2,class:"form-control btn btn-danger",onClick:t=>l.Delete(e._id)}," Delete ",8,w))])])])))),128)),D,(0,s.Wm)(d,{"component-name":"CategoriesComponent",onNewCategoryData:l.NewCatListPageData},null,8,["onNewCategoryData"])])])),_:1})}const v=e=>((0,s.dD)("data-v-416e2e8e"),e=e(),(0,s.Cn)(),e),f={class:"container wid"},N={class:"row"},A={"aria-label":"Page navigation  "},y={class:"pagination"},b={class:"page-item"},k=v((()=>(0,s._)("span",{"aria-hidden":"true"},"«",-1))),U=v((()=>(0,s._)("span",{class:"sr-only"},"Previous",-1))),L=[k,U],S=["onClick"],E={class:"page-item"},I=v((()=>(0,s._)("span",{"aria-hidden":"true"},"»",-1))),G=v((()=>(0,s._)("span",{class:"sr-only"},"Next",-1))),F=[I,G];function $(e,t,a,i,r,n){return(0,s.wg)(),(0,s.iD)("div",f,[(0,s._)("div",N,[(0,s._)("nav",A,[(0,s._)("ul",y,[(0,s._)("li",b,[(0,s._)("button",{class:"page-link",onClick:t[0]||(t[0]=e=>n.NextPrevPage(!1))},L)]),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(r.PageArray,((e,t)=>((0,s.wg)(),(0,s.iD)("li",{key:t,class:"page-item"},[(0,s._)("button",{class:(0,o.C_)(r.PageSelected===e?"page-link active":"page-link"),onClick:t=>n.ChangePage(e)},(0,o.zw)(e),11,S)])))),128)),(0,s._)("li",E,[(0,s._)("button",{class:"page-link",onClick:t[1]||(t[1]=e=>n.NextPrevPage(!0))},F)])])])])])}var x=a(3907),T={name:"PaginationStore",props:{componentName:{type:String,default:"UsersComponent"}},emits:["new-user-data","new-category-data","new-products-data"],data(){return{PageSelected:"",PageArray:[]}},computed:{...(0,x.Se)(["AllUsers","AllCategories","AllProducts"])},mounted(){this.$route.query.page||this.$router.push({path:"/",name:"Admin",query:{page:1}}).catch((()=>{})),this.PageSelected=parseInt(this.$route.query.page),this.Pagination()},methods:{...(0,x.nv)(["GetUserByPageNum","GetCatByPageNum","GetProdByPageNum"]),ChangePage(e){if("UsersComponent"==this.componentName){this.GetUserByPageNum(e);let t=this.AllUsers;this.$emit("new-user-data",t,e)}if("CategoriesComponent"==this.componentName){this.GetCatByPageNum(e);let t=this.AllCategories;this.$emit("new-category-data",t,e)}if("ProductsComponent"==this.componentName){this.GetProdByPageNum(e);let t=this.AllProducts;this.$emit("new-products-data",t,e)}this.PageSelected=e,this.$router.push({path:"/",name:"Admin",query:{page:e}}).catch((()=>{}))},Pagination(){this.PageArray=[];let e=this.PageSelected+3;for(let t=this.PageSelected;t<e;t++)this.PageArray.push(t)},NextPrevPage(e){0==e&&1==this.PageSelected&&console.log("non"),0==e&&1!==this.PageSelected&&(this.PageSelected=this.PageSelected-1,this.ChangePage(this.PageSelected),this.Pagination(),console.log("nn",this.PageSelected)),1==e&&(this.PageSelected=this.PageSelected+1,this.ChangePage(this.PageSelected),this.Pagination(),console.log("nn",this.PageSelected))}}},q=a(3744);const Z=(0,q.Z)(T,[["render",$],["__scopeId","data-v-416e2e8e"]]);var V=Z,j={name:"CategoriesView",components:{PaginationStore:V},data(){return{CatList:[],NewCatList:[],NewAddedCat:"",PageNumber:null}},computed:{...(0,x.Se)(["AllCategories"])},mounted(){this.GetCatListFromStore(),this.AddEditToCatList()},created(){this.GetCategories(),this.$store.watch((e=>{console.log("store change cat.vue",e),this.GetCatListFromStore(),this.AddEditToCatList()}))},methods:{...(0,x.nv)(["ADD_NEW_CAT","EditOneCat","DeleteOneCat","GetCategories"]),GetCatListFromStore:function(){this.CatList=this.AllCategories},SaveAfterEdit:function(e,t){let a={ID:e,NewCatName:t["name"]};this.EditOneCat(a),this.AddEditToCatList()},AddNewCat(){let e={NewCatName:this.NewAddedCat};this.ADD_NEW_CAT(e),this.AddEditToCatList()},Delete:function(e){let t={ID:e};this.DeleteOneCat(t),this.GetCatListFromStore(),this.AddEditToCatList()},NewCatListPageData(e,t){this.PageNumber=t,this.CatList=e,this.AddEditToCatList()},AddEditToCatList(){let e=[];for(let t=0;t<this.CatList.length;t++){let a=this.CatList[t]["_id"],s=this.CatList[t]["name"];e.push({_id:a,name:s,isEdit:!1})}this.NewCatList=[],this.NewCatList=e}}};const O=(0,q.Z)(j,[["render",P],["__scopeId","data-v-4fbe2573"]]);var W=O;const z=(0,s._)("h1",null,"Chart",-1);function M(e,t,a,o,i,r){const n=(0,s.up)("pie-chart"),l=(0,s.up)("area-chart");return(0,s.wg)(),(0,s.iD)("div",null,[z,(0,s.Wm)(n,{data:i.pieData},null,8,["data"]),(0,s.Wm)(l,{data:i.areaData},null,8,["data"])])}var B={name:"ChartView",data(){return{pieData:[],areaData:{}}},mounted(){this.InitGetData()},methods:{InitGetData(){this.areaData={"2021-8-6":290,"2021-8-7":178,"2021-8-8":360,"2021-8-9":580,"2021-8-10":200,"2021-8-11":610},this.pieData=[["blueberry",55],["strawberry",24],["mango",88]]}}};const R=(0,q.Z)(B,[["render",M]]);var H=R;const K={class:""},Y={class:""};function J(e,t,a,o,i,r){const n=(0,s.up)("AddNewProd"),l=(0,s.up)("ProdList");return(0,s.wg)(),(0,s.iD)("div",K,[(0,s._)("div",Y,[(0,s.Wm)(n,{key:"AddNew",onNewData:r.RestData},null,8,["onNewData"]),(0,s.Wm)(l,{key:"ProdList",ref:"child"},null,512)])])}const X=e=>((0,s.dD)("data-v-e5b914a2"),e=e(),(0,s.Cn)(),e),Q={class:""},ee={key:0,class:"d"},te={class:"form-row"},ae={class:"col-md-12"},se=["src"],oe={class:"fileUpload"},ie=X((()=>(0,s._)("small",null,"Upload Img",-1))),re={class:"form-group col-md-6"},ne=X((()=>(0,s._)("label",null,"Name",-1))),le={class:"form-group col-md-6"},de=X((()=>(0,s._)("label",null,"Price",-1))),ce={class:"form-group"},ue=X((()=>(0,s._)("label",null,"Desc",-1))),ge={class:"form-row"},pe={class:"form-group col-md-4"},me=X((()=>(0,s._)("label",{for:"inputCategories"},"Categories",-1))),he=["value"];function Ce(e,t,a,r,n,l){return(0,s.wg)(),(0,s.iD)("div",Q,[(0,s._)("button",{class:"btn btn-success form-group bn",onClick:t[0]||(t[0]=e=>(n.CreateNew,n.CreateNew=!n.CreateNew))}," New Product "),n.CreateNew?((0,s.wg)(),(0,s.iD)("form",ee,[(0,s._)("div",te,[(0,s._)("div",ae,[(0,s._)("img",{class:"ii",src:n.NewProdData.product_img},null,8,se),(0,s._)("div",oe,[(0,s._)("input",{type:"file",class:"upload",enctype:"multipart/form-data",onChange:t[1]||(t[1]=e=>l.onFileNewImg(e))},null,32),ie])]),(0,s._)("div",re,[ne,(0,s.wy)((0,s._)("input",{"onUpdate:modelValue":t[2]||(t[2]=e=>n.NewProdData.name=e),type:"text",class:"form-control",placeholder:"Product name"},null,512),[[i.nr,n.NewProdData.name]])]),(0,s._)("div",le,[de,(0,s.wy)((0,s._)("input",{"onUpdate:modelValue":t[3]||(t[3]=e=>n.NewProdData.price=e),type:"number",class:"form-control",placeholder:"Product Price"},null,512),[[i.nr,n.NewProdData.price]])])]),(0,s._)("div",ce,[ue,(0,s.wy)((0,s._)("input",{"onUpdate:modelValue":t[4]||(t[4]=e=>n.NewProdData.desc=e),type:"text",class:"form-control",placeholder:"Description"},null,512),[[i.nr,n.NewProdData.desc]])]),(0,s._)("div",ge,[(0,s._)("div",pe,[me,(0,s.wy)((0,s._)("select",{"onUpdate:modelValue":t[5]||(t[5]=e=>n.NewProdData.prod_categories=e),class:"form-control",onChange:t[6]||(t[6]=e=>l.ChangeNewProdCat(e))},[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(n.CategoriesList,(e=>((0,s.wg)(),(0,s.iD)("option",{key:e._id,value:e._id},(0,o.zw)(e.name),9,he)))),128))],544),[[i.bM,n.NewProdData.prod_categories]])])]),(0,s._)("button",{type:"submit",class:"btn btn-primary",onClick:t[7]||(t[7]=e=>l.AddNewProduct(e))}," Add ")])):(0,s.kq)("",!0)])}var _e=a(8945);const we="https://olx-vue.herokuapp.com/api";var De={name:"AddNewProd",emits:["new-data"],data(){return{data:[],CreateNew:!1,NewProdData:{name:"",desc:"",price:"",product_img:"",prod_categories:""},files:null,CategoriesList:[]}},created(){this.GetCatListFromStore()},methods:{GetCatListFromStore:function(){_e.Z.get(`${we}/categories/All`).then((e=>{this.CategoriesList=e.data}))},ChangeNewProdCat(e){this.NewProdData.prod_categories=e.target.value},AddNewProduct(e){if(e.preventDefault(),this.NewProdData.name&&this.NewProdData.desc&&this.NewProdData.price&&this.NewProdData.product_img&&this.NewProdData.prod_categories){const e=new FormData;e.append("name",this.NewProdData.name),e.append("desc",this.NewProdData.desc),e.append("price",this.NewProdData.price),e.append("prod_categories",this.NewProdData.prod_categories);for(const a of Object.keys(this.files))e.append("image",this.files[a]);let t=JSON.parse(localStorage.getItem("Auth")).Token;_e.Z.post(`${we}/products`,e,{headers:{"x-auth-token":t}}).then((e=>{console.log("new prod data",e.data),this.$emit("new-data"),this.CreateNew=!this.CreateNew})).catch((e=>{alert(e.response.data.msg),console.log(e.response.data.msg)}))}else alert("Please Complete From Data")},onFileNewImg(e){this.NewProdData.product_img=URL.createObjectURL(e.target.files[0]),this.files=e.target.files}}};const Pe=(0,q.Z)(De,[["render",Ce],["__scopeId","data-v-e5b914a2"]]);var ve=Pe;const fe=e=>((0,s.dD)("data-v-9903f99e"),e=e(),(0,s.Cn)(),e),Ne={class:""},Ae={key:0,class:""},ye={class:"card d"},be=["src","alt"],ke={class:"card-body"},Ue={class:"card-title"},Le={class:"card-text"},Se={class:"list-group list-group-flush"},Ee={class:"list-group-item"},Ie={class:"list-group-item danger"},Ge={class:"card-body"},Fe=["onClick"],$e=fe((()=>(0,s._)("hr",null,null,-1)));function xe(e,t,a,i,r,n){const l=(0,s.up)("pagination"),d=(0,s.up)("edit-prod");return(0,s.wg)(),(0,s.iD)("div",Ne,[r.EDIT?(0,s.kq)("",!0):((0,s.wg)(),(0,s.iD)("div",Ae,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(r.ProductsList,(e=>((0,s.wg)(),(0,s.iD)("div",{key:e.id,class:""},[(0,s._)("div",ye,[(0,s._)("img",{class:"card-img-top",src:e.product_img,alt:e.name},null,8,be),(0,s._)("div",ke,[(0,s._)("h5",Ue,"Name: "+(0,o.zw)(e.name),1),(0,s._)("p",Le,"Desc: "+(0,o.zw)(e.desc),1)]),(0,s._)("ul",Se,[(0,s._)("li",Ee,"Price: "+(0,o.zw)(e.price),1),(0,s._)("li",Ie," Category: "+(0,o.zw)(e.prod_categories.name),1)]),(0,s._)("div",Ge,[(0,s._)("a",{class:"card-link btn btn-danger",onClick:t=>n.EditProd(e._id)},"Edit",8,Fe)])])])))),128)),$e,(0,s.Wm)(l,{"component-name":"ProductsComponent",onNewProductsData:n.changePagination},null,8,["onNewProductsData"])])),r.EDIT?((0,s.wg)(),(0,s.j4)(d,{key:"EditProd","prod-id":r.EditProdID,onSaveDone:n.SaveDoneFunc},null,8,["prod-id","onSaveDone"])):(0,s.kq)("",!0)])}const Te=e=>((0,s.dD)("data-v-1d059878"),e=e(),(0,s.Cn)(),e),qe={class:""},Ze={class:"d"},Ve={class:"form-row"},je={class:"col-md-12"},Oe=["src"],We={class:"fileUpload"},ze=Te((()=>(0,s._)("span",null,"Upload",-1))),Me={class:"form-group col-md-6"},Be=Te((()=>(0,s._)("label",null,"Name",-1))),Re={class:"form-group col-md-6"},He=Te((()=>(0,s._)("label",null,"Price",-1))),Ke={class:"form-group"},Ye=Te((()=>(0,s._)("label",null,"Desc",-1))),Je={class:"form-row"},Xe={class:"form-group col-md-4"},Qe=Te((()=>(0,s._)("label",{for:"inputCategories"},"Categories",-1))),et=["selected","value"];function tt(e,t,a,r,n,l){return(0,s.wg)(),(0,s.iD)("div",qe,[(0,s._)("form",Ze,[(0,s._)("div",Ve,[(0,s._)("div",je,[(0,s._)("img",{class:"ii",src:n.DataArr.product_img},null,8,Oe),(0,s._)("div",We,[(0,s._)("input",{type:"file",class:"upload",enctype:"multipart/form-data",onChange:t[0]||(t[0]=t=>e.onFileChange(t))},null,32),ze])]),(0,s._)("div",Me,[Be,(0,s.wy)((0,s._)("input",{"onUpdate:modelValue":t[1]||(t[1]=e=>n.DataArr.name=e),type:"text",class:"form-control",placeholder:"Product name"},null,512),[[i.nr,n.DataArr.name]])]),(0,s._)("div",Re,[He,(0,s.wy)((0,s._)("input",{"onUpdate:modelValue":t[2]||(t[2]=e=>n.DataArr.price=e),type:"number",class:"form-control",placeholder:"Product Price"},null,512),[[i.nr,n.DataArr.price]])])]),(0,s._)("div",Ke,[Ye,(0,s.wy)((0,s._)("input",{"onUpdate:modelValue":t[3]||(t[3]=e=>n.DataArr.desc=e),type:"text",class:"form-control",placeholder:"Description"},null,512),[[i.nr,n.DataArr.desc]])]),(0,s._)("div",Je,[(0,s._)("div",Xe,[Qe,(0,s._)("select",{class:"form-control",onChange:t[4]||(t[4]=e=>l.ChangeProductCat(e,n.DataArr._id))},[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(n.CategoriesList,(e=>((0,s.wg)(),(0,s.iD)("option",{key:e._id,selected:l.CheckCat(e._id),value:e._id},(0,o.zw)(e.name),9,et)))),128))],32)])]),(0,s._)("button",{class:"btn btn-primary",onClick:t[5]||(t[5]=e=>l.SaveData(e))},"Save"),(0,s._)("button",{class:"btn btn-success",onClick:t[6]||(t[6]=e=>l.Delete(n.DataArr._id))}," Delete ")])])}const at="https://olx-vue.herokuapp.com/api";var st={name:"EditProd",props:{prodId:{type:String,default:""}},emits:["save-done"],data(){return{DataArr:[],prodid:this.prodId,files:null,CategoriesList:[]}},created(){this.DataFunc(),this.GetCatListFromStore()},methods:{GetCatListFromStore:function(){_e.Z.get(`${at}/categories/All`).then((e=>{this.CategoriesList=e.data}))},DataFunc:function(){_e.Z.get(`${at}/products/${this.prodid}`).then((e=>{let t={_id:e.data._id,desc:e.data.desc,name:e.data.name,product_img:e.data.product_img,price:e.data.price,catName:e.data.prod_categories.name,catId:e.data.prod_categories._id};this.DataArr=t}))},SaveData(e){if(e.preventDefault(),this.DataArr.name&&this.DataArr.desc&&this.DataArr.price&&this.DataArr.product_img){const e=new FormData;if(e.append("name",this.DataArr.name),e.append("desc",this.DataArr.desc),e.append("price",this.DataArr.price),e.append("prod_categories",this.DataArr.prod_categories),e.append("product_img",this.DataArr.product_img),null!==this.files)for(const a of Object.keys(this.files))e.append("image",this.files[a]);let t=JSON.parse(localStorage.getItem("Auth")).Token;_e.Z.put(`${at}/products/${this.DataArr._id}`,e,{headers:{"x-auth-token":t}}).then((e=>{console.log("new prod data ",e.data),this.$emit("save-done")})).catch((e=>{console.log("errX",e.response),alert(e.response.data)}))}else alert("Please complete form data")},onFileNewImg(e){this.DataArr.product_img=URL.createObjectURL(e.target.files[0]),this.files=e.target.files},CheckCat(e){let t=this.DataArr.catId;return String(t)===String(e)},ChangeProductCat(e){this.DataArr.catId=e.target.value},Delete(e,t){e.preventDefault();let a=JSON.parse(localStorage.getItem("Auth")).Token;_e.Z["delete"](`${at}/products/${t}`,{headers:{"x-auth-token":a}}).then((e=>{console.log("del res",e),this.$emit("save-done")})).catch((e=>{console.log("er",e.response.data.msg)}))}}};const ot=(0,q.Z)(st,[["render",tt],["__scopeId","data-v-1d059878"]]);var it=ot;const rt="https://olx-vue.herokuapp.com/api";var nt={name:"ProdList",components:{Pagination:V,EditProd:it},data(){return{ProductsList:[],EDIT:!1,EditProdID:""}},created(){this.GetProdListFromStore()},methods:{GetProdListFromStore:function(){_e.Z.get(`${rt}/products/ProdByPage/1`).then((e=>{this.ProductsList=e.data}))},changePagination(e,t){console.log("non",e),_e.Z.get(`${rt}/products/ProdByPage/${t}`).then((e=>{this.ProductsList=e.data}))},EditProd(e){this.EditProdID=e,this.EDIT=!this.EDIT},SaveDoneFunc(){this.GetProdListFromStore(),this.EDIT=!this.EDIT}}};const lt=(0,q.Z)(nt,[["render",xe],["__scopeId","data-v-9903f99e"]]);var dt=lt,ct={name:"MainProd",components:{AddNewProd:ve,ProdList:dt},methods:{RestData(){console.log("any main prod"),this.$refs.child.GetProdListFromStore()}}};const ut=(0,q.Z)(ct,[["render",J]]);var gt=ut;const pt=e=>((0,s.dD)("data-v-752bd3c2"),e=e(),(0,s.Cn)(),e),mt=pt((()=>(0,s._)("h5",{class:"btn-danger"},"Users",-1))),ht={class:"list-group-item d-flex justify-content-between align-items-center"},Ct=["src"],_t={key:0,class:"badge badge-primary badge-pill"},wt={key:1,class:"badge badge-warning badge-pill"},Dt={class:"form-group"},Pt=["onUpdate:modelValue","onChange"],vt=pt((()=>(0,s._)("option",{value:!1,class:"btn btn-primary"},"User",-1))),ft=pt((()=>(0,s._)("option",{value:!0,class:"btn btn-warning"},"Admin",-1))),Nt=[vt,ft];function At(e,t,a,r,n,l){const d=(0,s.up)("pagination-store"),c=(0,s.up)("center");return(0,s.wg)(),(0,s.j4)(c,null,{default:(0,s.w5)((()=>[(0,s._)("div",null,[mt,((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(n.UsersList,(e=>((0,s.wg)(),(0,s.iD)("ul",{key:e._id,class:"list-group m"},[(0,s._)("li",ht,[(0,s._)("img",{class:"userimg",alt:"",src:e.profile_img},null,8,Ct),e.isAdmin?(0,s.kq)("",!0):((0,s.wg)(),(0,s.iD)("span",_t,"User")),e.isAdmin?((0,s.wg)(),(0,s.iD)("span",wt,"Admin")):(0,s.kq)("",!0),(0,s.Uk)(" "+(0,o.zw)(e.first_name)+" ",1),(0,s._)("div",Dt,[(0,s.wy)((0,s._)("select",{id:"exampleFormControlSelect1","onUpdate:modelValue":t=>e.isAdmin=t,class:"form-control",onChange:t=>l.ChangeUserRole(e._id,e.isAdmin)},Nt,40,Pt),[[i.bM,e.isAdmin]])])])])))),128)),(0,s.Wm)(d,{"component-name":"UsersComponent",onNewUserData:l.NewUserData},null,8,["onNewUserData"])])])),_:1})}var yt={name:"UsersView",components:{PaginationStore:V},data(){return{UsersList:[],PageNumber:null}},computed:{...(0,x.Se)(["AllUsers"])},created(){this.GetUserList(),this.$store.watch((e=>{console.log("store change",e),this.GetUsersListFromStore()}))},methods:{...(0,x.nv)(["GetUserList","EditOneUser","GetUserByPageNum"]),GetUsersListFromStore:function(){this.UsersList=this.AllUsers},ChangeUserRole:function(e,t){let a={ID:e,isAdmin:t};this.EditOneUser(a)},NewUserData(e,t){this.PageNumber=t,this.UsersList=e}}};const bt=(0,q.Z)(yt,[["render",At],["__scopeId","data-v-752bd3c2"]]);var kt=bt,Ut={name:"AdminView",components:{Categories:W,Chart:H,MainProd:gt,Users:kt},data(){return{Data:[{name:"Users",val:!0},{name:"Categories",val:!1},{name:"Chart",val:!1},{name:"MainProd",val:!1}]}},methods:{ChangeClassAndComponent:function(e){for(let t=0;t<this.Data.length;t++){const a=this.Data[t];if(e==a.name)return a.val}},ChangePage:function(e){let t=[];for(let a=0;a<this.Data.length;a++){const s=this.Data[a];e==s.name?(s.val=!s.val,t.push(s)):(s.val=!1,t.push(s))}this.Data=t}}};const Lt=(0,q.Z)(Ut,[["render",c]]);var St=Lt}}]);
//# sourceMappingURL=292.a8ca304c.js.map