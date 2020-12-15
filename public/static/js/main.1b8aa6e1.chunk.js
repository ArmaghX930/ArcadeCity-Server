(this["webpackJsonpget-scripts"]=this["webpackJsonpget-scripts"]||[]).push([[0],{38:function(A,e,t){},61:function(A,e,t){"use strict";t.r(e);var n=t(0),a=t(1),r=t.n(a),i=t(31),c=t.n(i),s=t(11),o=t(2),l=t(3),u=t(5),h=t(4),d=(t(38),t(6)),j=t(14),g=t(16),b=t.n(g),p=new(function(){function A(){Object(o.a)(this,A),this.auth=b.a.create({baseURL:"https://arcade-city.herokuapp.com",withCredentials:!0})}return Object(l.a)(A,[{key:"signup",value:function(A,e,t){return this.auth.post("/auth/signup",{player:A,email:e,password:t}).then((function(A){return A.data}))}},{key:"login",value:function(A,e){return this.auth.post("/auth/login",{email:A,password:e}).then((function(A){return A.data}))}},{key:"logout",value:function(){return this.auth.get("/auth/logout").then((function(A){return A.data}))}}]),A}()),m=new(function(){function A(){var e=this;Object(o.a)(this,A),this.getArcades=function(A){return e.api.get("/arcades/search/".concat(A))},this.getOneArcade=function(A){return e.api.get("/arcades/".concat(A)).then((function(A){return A.data}))},this.createArcade=function(A,t,n,a,r,i,c,s,o,l,u,h){return e.api.post("/arcades",{game:A,description:t,maxPlayers:n,isEmulated:a,coins:r,yearReleased:i,highestScores:c,gallery:s,coordinates:o,contactInfo:l,address:u,city:h}).then((function(A){return A.data}))},this.deleteArcade=function(A){return e.api.delete("/arcades/".concat(A)).then((function(A){return A.data}))},this.addComment=function(A,t){return e.api.put("/arcades/".concat(A,"/comments"),t).then((function(A){return A.data}))},this.addHighestScores=function(A,t){return e.api.post("/arcades/".concat(A,"/highest-scores"),t).then((function(A){return A.data}))},this.api=b.a.create({baseURL:"https://arcade-city.herokuapp.com/api",withCredentials:!0})}return Object(l.a)(A,[{key:"me",value:function(){return this.api.get("/player/me").then((function(A){return A.data}))}},{key:"deleteMe",value:function(){return this.api.delete("/player/me").then((function(A){return A.data}))}},{key:"updateMe",value:function(){return this.api.put("/player/me").then((function(A){return A.data}))}},{key:"getPlayer",value:function(A){return this.api.get("/player/".concat(A)).then((function(A){return A.data}))}}]),A}()),O=r.a.createContext(),y=O.Consumer,f=O.Provider,x=function(A){Object(u.a)(t,A);var e=Object(h.a)(t);function t(){var A;Object(o.a)(this,t);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(A=e.call.apply(e,[this].concat(a))).state={isLoggedIn:!1,isLoading:!0,user:null},A.signup=function(e,t,n){p.signup(e,t,n).then((function(e){return A.setState({isLoggedIn:!0,user:e})})).catch((function(e){A.setState({isLoggedIn:!1,user:null})}))},A.login=function(e,t,n){p.login(e,t,n).then((function(e){return A.setState({isLoggedIn:!0,user:e})})).catch((function(e){A.setState({isLoggedIn:!1,user:null})}))},A.logout=function(){p.logout().then((function(){return A.setState({isLoggedIn:!1,user:null})})).catch((function(A){return console.log(A)}))},A.deleteMe=function(){m.deleteMe().then((function(){return A.setState({isLoggedIn:!1,user:null})})).catch((function(A){return console.log(A)}))},A}return Object(l.a)(t,[{key:"componentDidMount",value:function(){var A=this;m.me().then((function(e){return A.setState({isLoggedIn:!0,user:e,isLoading:!1})})).catch((function(e){return A.setState({isLoggedIn:!1,user:null,isLoading:!1})}))}},{key:"render",value:function(){var A=this.state,e=A.isLoggedIn,t=A.isLoading,a=A.user,r=this.signup,i=this.login,c=this.logout,s=this.deleteMe;return t?Object(n.jsx)("p",{children:"Loading"}):Object(n.jsx)(f,{value:{isLoggedIn:e,isLoading:t,user:a,signup:r,login:i,logout:c,deleteMe:s},children:this.props.children})}}]),t}(r.a.Component),C=function(A){return function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return Object(n.jsx)(y,{children:function(t){var a=t.isLoggedIn,r=t.isLoading,i=t.user,c=t.signup,s=t.login,o=t.logout,l=t.deleteMe;return Object(n.jsx)(A,Object(j.a)(Object(j.a)({},e.props),{},{isLoggedIn:a,isLoading:r,user:i,signup:c,login:s,logout:o,deleteMe:l}))}})}}]),a}(r.a.Component)},v=C(function(A){Object(u.a)(t,A);var e=Object(h.a)(t);function t(){return Object(o.a)(this,t),e.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return Object(n.jsxs)("nav",{className:"navbar",children:[Object(n.jsx)(s.b,{to:"/",id:"home-btn",children:Object(n.jsx)("h4",{children:"Home"})}),this.props.isLoggedIn?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("p",{children:["username: ",this.props.user&&this.props.user.player]}),Object(n.jsx)("button",{onClick:this.props.logout,children:"Logout"})]}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)(s.b,{to:"/login",children:[Object(n.jsx)("button",{className:"navbar-button",children:"Login"})," "]}),Object(n.jsx)("br",{}),Object(n.jsxs)(s.b,{to:"/signup",children:[Object(n.jsx)("button",{className:"navbar-button",children:"Sign Up"})," "]})]})]})}}]),t}(a.Component)),w=t.p+"static/media/arcada.5125e1a4.png",B=t.p+"static/media/inserte-moneda.ccd497db.png",D="data:image/png;base64,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",L=function(A){Object(u.a)(t,A);var e=Object(h.a)(t);function t(){var A;Object(o.a)(this,t);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(A=e.call.apply(e,[this].concat(a))).state={city:""},A.handleInput=function(e){var t=e.target.value;A.setState({city:t})},A.goToSearchResults=function(){A.props.history.push("/search/".concat(A.state.city.toLowerCase()))},A}return Object(l.a)(t,[{key:"componentDidMount",value:function(){var A=this;m.me().then((function(e){return A.setState({isLoggedIn:!0,user:e,isLoading:!1})})).catch((function(e){return A.setState({isLoggedIn:!1,user:null,isLoading:!1})}))}},{key:"render",value:function(){return Object(n.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",height:"100vh"},children:[Object(n.jsx)("h1",{style:{marginBottom:40},children:"Welcome to ArcadeCity"}),Object(n.jsx)("img",{src:w,alt:"Main",style:{height:230,width:"auto",objectFit:"contain"}}),Object(n.jsxs)("div",{style:{border:"2px solid",borderColor:"black",marginTop:40,marginBottom:10,display:"flex",padding:8},children:[Object(n.jsx)("img",{src:D,style:{height:"auto",width:20,marginRight:6},alt:""}),Object(n.jsx)("input",{className:"searchCity",type:"text",name:"city",value:this.state.city,onChange:this.handleInput,placeholder:"City",style:{border:"none",textAlign:"center"}})]}),Object(n.jsx)("button",{style:{border:"none",backgroundColor:"white"},onClick:this.goToSearchResults,children:Object(n.jsx)("img",{src:B,alt:"Main",style:{height:60,width:"auto",objectFit:"contain"}})})]})}}]),t}(r.a.Component),S=t(13),k=C(function(A){Object(u.a)(t,A);var e=Object(h.a)(t);function t(){var A;Object(o.a)(this,t);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(A=e.call.apply(e,[this].concat(a))).state={player:"",email:"",password:""},A.handleFormSubmit=function(e){e.preventDefault();var t=A.state,n=t.player,a=t.email,r=t.password;A.props.signup(n,a,r)},A.handleChange=function(e){var t=e.target,n=t.name,a=t.value;A.setState(Object(S.a)({},n,a))},A}return Object(l.a)(t,[{key:"render",value:function(){var A=this.state,e=A.player,t=A.email,a=A.password;return Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{children:"Sign Up"}),Object(n.jsxs)("form",{onSubmit:this.handleFormSubmit,children:[Object(n.jsx)("label",{children:"Player Name:"}),Object(n.jsx)("input",{type:"text",name:"player",value:e,onChange:this.handleChange}),Object(n.jsx)("label",{children:"Email Address:"}),Object(n.jsx)("input",{type:"email",name:"email",value:t,onChange:this.handleChange}),Object(n.jsx)("label",{children:"Password:"}),Object(n.jsx)("input",{type:"password",name:"password",value:a,onChange:this.handleChange}),Object(n.jsx)("input",{type:"submit",value:"Signup"})]}),Object(n.jsx)("p",{children:"Already have account?"}),Object(n.jsx)(s.b,{to:"/login",children:" Login"})]})}}]),t}(a.Component)),I=C(function(A){Object(u.a)(t,A);var e=Object(h.a)(t);function t(){var A;Object(o.a)(this,t);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(A=e.call.apply(e,[this].concat(a))).state={email:"",password:""},A.handleFormSubmit=function(e){e.preventDefault();var t=A.state,n=t.email,a=t.password;A.props.login(n,a)},A.handleChange=function(e){var t=e.target,n=t.name,a=t.value;A.setState(Object(S.a)({},n,a))},A}return Object(l.a)(t,[{key:"render",value:function(){var A=this.state,e=A.email,t=A.password;return Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{children:"Login"}),Object(n.jsxs)("form",{onSubmit:this.handleFormSubmit,children:[Object(n.jsx)("label",{children:"Email:"}),Object(n.jsx)("input",{type:"text",name:"email",value:e,onChange:this.handleChange}),Object(n.jsx)("label",{children:"Password:"}),Object(n.jsx)("input",{type:"password",name:"password",value:t,onChange:this.handleChange}),Object(n.jsx)("input",{type:"submit",value:"Login"})]})]})}}]),t}(a.Component)),E=C(function(A){Object(u.a)(t,A);var e=Object(h.a)(t);function t(){return Object(o.a)(this,t),e.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{children:"Private Route"}),Object(n.jsxs)("h2",{children:["Welcome ",this.props.user&&this.props.user.player]})]})}}]),t}(a.Component));var Q=C((function(A){var e=A.isLoggedIn,t=A.isLoading,a=A.component,r=A.exact,i=A.path;return t?"Loading":Object(n.jsx)(d.b,{exact:r,path:i,render:function(A){return e?Object(n.jsx)(d.a,{to:"/private"}):e?void 0:Object(n.jsx)(a,Object(j.a)({},A))}})}));var M=C((function(A){var e=A.isLoggedIn,t=A.isLoading,a=A.component,r=A.exact,i=A.path;return t?"Loading":Object(n.jsx)(d.b,{exact:r,path:i,render:function(A){return e?e?Object(n.jsx)(a,Object(j.a)({},A)):void 0:Object(n.jsx)(d.a,{to:"/login"})}})})),P=function(A){Object(u.a)(t,A);var e=Object(h.a)(t);function t(){return Object(o.a)(this,t),e.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return Object(n.jsxs)("div",{style:{border:"2px solid",borderColor:"black",marginTop:40,marginBottom:10,display:"flex",padding:8},children:[Object(n.jsx)("img",{src:D,style:{height:"auto",width:20,marginRight:6},alt:"find"}),Object(n.jsx)("input",{className:"searchCity",type:"text",name:"city",placeholder:"City",style:{border:"none",textAlign:"center"}})]})}}]),t}(a.Component),F=function(A){Object(u.a)(t,A);var e=Object(h.a)(t);function t(){return Object(o.a)(this,t),e.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(A){return Object(n.jsx)("button",{onClick:this.props.onClick,style:{backgroundColor:"white",padding:8,borderRadius:6},children:Object(n.jsx)("span",{children:"Filter Search"})})}}]),t}(a.Component),R=function(A){Object(u.a)(t,A);var e=Object(h.a)(t);function t(){return Object(o.a)(this,t),e.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(A){return Object(n.jsx)("div",{style:{position:"absolute",height:"100vh",width:"100vw",display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"rgba(89, 89, 89, 0.50)"},children:Object(n.jsxs)("div",{style:{border:"2px solid black",height:"50%",width:"50%",backgroundColor:"white"},children:[Object(n.jsx)("button",{onClick:this.props.onClick,style:{marginBottom:40},children:Object(n.jsx)("span",{children:" Close "})}),Object(n.jsxs)("div",{style:{height:"70%",width:"100",display:"flex",flexDirection:"column",justifyContent:"space-evenly",alignItems:"center"},children:[Object(n.jsx)("input",{type:"text",name:"game",value:this.props.game,onChange:this.props.handleChange,placeholder:"Game"}),Object(n.jsx)("label",{children:"Emulation"}),Object(n.jsx)("input",{type:"checkbox",name:"isEmulated",value:this.props.isEmulated,onChange:this.props.handleChange}),Object(n.jsx)("button",{type:"submit",children:" SEARCH "})]})]})})}}]),t}(a.Component),H=function(A){Object(u.a)(t,A);var e=Object(h.a)(t);function t(){return Object(o.a)(this,t),e.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){var A=this;return Object(n.jsxs)("div",{style:{border:"2px solid black",borderRadius:6},children:[Object(n.jsx)("img",{src:this.props.arcade.gallery,alt:"arcadeImage"}),Object(n.jsx)("h4",{children:this.props.arcade.game}),Object(n.jsx)("button",{onClick:function(){return A.props.showArcadeDetails(A.props.arcade)}})]})}}]),t}(a.Component),U=function(A){Object(u.a)(t,A);var e=Object(h.a)(t);function t(){var A;Object(o.a)(this,t);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(A=e.call.apply(e,[this].concat(a))).state={showModal:!1,showArcadeDetails:!1,arcades:[],arcadeToShow:{}},A.showArcadeDetails=function(A){},A.closeArcadeDetails=function(){},A.getResultsCity=function(){var e=A.props.match.params.city;m.getArcades(e).then((function(e){console.log(e),A.setState({arcades:e.data})}))},A}return Object(l.a)(t,[{key:"componentDidMount",value:function(){this.getResultsCity()}},{key:"render",value:function(){var A=this,e=function(){A.setState({showModal:!A.state.showModal})};return Object(n.jsxs)("div",{style:{width:"100vw",height:"100vh",display:"flex",alignItems:"center",flexDirection:"column"},children:[Object(n.jsx)("img",{src:w,style:{width:"auto",height:80,marginTop:30},alt:""}),Object(n.jsx)(P,{}),this.state.showArcadeDetails?Object(n.jsx)("div",{children:"Show the big card from this.arcadeToShow "}):null,Object(n.jsx)(F,{onClick:function(){return e()}}),this.state.showModal&&Object(n.jsx)(R,{onClick:function(){return e()}}),this.state.arcades.length>0?this.state.arcades.map((function(e){return Object(n.jsx)(H,{arcade:e,showArcadeDetails:A.showArcadeDetails},e._id)})):Object(n.jsx)("p",{children:"No results found for this City"})]})}}]),t}(a.Component),J=C(function(A){Object(u.a)(t,A);var e=Object(h.a)(t);function t(){var A;Object(o.a)(this,t);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(A=e.call.apply(e,[this].concat(a))).state={game:"",description:"",maxPlayers:1,isEmulated:!1,coins:"",yearReleased:1980,gallery:"",long:0,lat:0,contactInfo:"",address:"",city:""},A.handleChange=function(e){var t=e.target,n=t.name,a=t.value;A.setState(Object(S.a)({},n,a))},A.handleSubmit=function(e){e.preventDefault();var t=A.state,n=t.game,a=t.description,r=t.maxPlayers,i=t.isEmulated,c=t.coins,s=t.yearReleased,o=t.highestScores,l=t.gallery,u=t.long,h=t.lat,d=t.contactInfo,j=t.address,g=t.city,b=[u,h];m.createArcade(n,a,r,i,c,s,o,l,b,d,j,g).then((function(){A.props.history.push("/arcade-details")})).catch((function(A){return console.log(A)}))},A.handleFileUpload=function(e){console.log("The file to be uploaded is: ",e.target.files);var t=e.target.files[0],n=new FormData;n.append("gallery",t),b.a.post("".concat("https://arcade-city.herokuapp.com","/api/arcades/upload"),n,{withCredentials:!0}).then((function(e){console.log("response is: ",e),A.setState({gallery:e.data.secure_url})})).catch((function(A){console.log("Error while uploading the file: ",A)}))},A}return Object(l.a)(t,[{key:"render",value:function(){return Object(n.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",height:"100vh"},children:[Object(n.jsx)("h2",{children:" Create New Arcade"}),Object(n.jsxs)("form",{className:"createArcadeForm",onSubmit:this.handleSubmit,style:{textAlign:"center"},children:[Object(n.jsx)("label",{children:" Game "}),Object(n.jsx)("br",{}),Object(n.jsx)("input",{style:{marginBottom:20},type:"text",name:"game",value:this.state.game,onChange:this.handleChange,placeholder:"Name the Arcade"}),Object(n.jsx)("br",{}),Object(n.jsx)("label",{children:" Description "}),Object(n.jsx)("br",{}),Object(n.jsx)("textarea",{style:{marginBottom:20},name:"description",value:this.state.description,onChange:this.handleChange,placeholder:"Add a brief description"}),Object(n.jsx)("br",{}),Object(n.jsx)("label",{children:" Maximum Number of Players "}),Object(n.jsx)("br",{}),Object(n.jsx)("input",{style:{marginBottom:20},type:"number",name:"maxPlayers",value:this.state.maxPlayers,onChange:this.handleChange}),Object(n.jsx)("br",{}),Object(n.jsx)("label",{children:" Is Emulated? "}),Object(n.jsx)("input",{style:{marginBottom:20},type:"checkbox",name:"isEmulated",value:this.state.isEmulated,onChange:this.handleChange}),Object(n.jsx)("br",{}),Object(n.jsx)("label",{children:" Coins per Game "}),Object(n.jsx)("br",{}),Object(n.jsx)("input",{style:{marginBottom:20},type:"number",name:"coins",value:this.state.coins,onChange:this.handleChange,placeholder:"0.50"}),Object(n.jsx)("br",{}),Object(n.jsx)("label",{children:" Year Released "}),Object(n.jsx)("br",{}),Object(n.jsx)("input",{style:{marginBottom:20},type:"number",name:"yearRelease",value:this.state.yearRelease,onChange:this.handleChange,placeholder:"1970",min:"1970",max:"2020"}),Object(n.jsx)("br",{}),Object(n.jsx)("label",{children:" Maximum Number of Players "}),Object(n.jsx)("br",{}),Object(n.jsx)("input",{style:{marginBottom:20},type:"number",name:"maxPlayers",value:this.state.maxPlayers,onChange:this.handleChange,min:"1",max:"8"}),Object(n.jsx)("br",{}),Object(n.jsx)("label",{children:" Arcade Picture "}),Object(n.jsx)("br",{}),Object(n.jsx)("img",{style:{width:"100px"},src:this.state.gallery,alt:""}),Object(n.jsx)("br",{}),Object(n.jsx)("input",{style:{marginBottom:20},type:"file",name:"gallery",onChange:this.handleFileUpload}),Object(n.jsx)("br",{}),Object(n.jsx)("label",{children:"Provide the Location Coordinates (Optional) "}),Object(n.jsx)("br",{}),Object(n.jsx)("input",{type:"number",name:"long",placeholder:"Longitude",onChange:this.handleChange,value:this.state.long}),Object(n.jsx)("br",{}),Object(n.jsx)("input",{style:{marginBottom:20},type:"number",name:"lat",placeholder:"Latitude",onChange:this.handleChange,value:this.state.lat})," ",Object(n.jsx)("br",{}),Object(n.jsx)("label",{children:" Address "}),Object(n.jsx)("br",{}),Object(n.jsx)("input",{style:{marginBottom:20},type:"text",name:"address",value:this.state.address,onChange:this.handleChange,placeholder:"Describe the Arcade"}),Object(n.jsx)("br",{}),Object(n.jsx)("label",{children:" City "}),Object(n.jsx)("br",{}),Object(n.jsx)("input",{style:{marginBottom:20},type:"text",name:"city",value:this.state.city,onChange:this.handleChange,placeholder:"City"}),Object(n.jsx)("br",{}),Object(n.jsx)("button",{type:"submit",children:"CREATE NEW ARCADE"})]})]})}}]),t}(a.Component)),T=function(A){Object(u.a)(t,A);var e=Object(h.a)(t);function t(){return Object(o.a)(this,t),e.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)(v,{}),Object(n.jsxs)(d.d,{children:[Object(n.jsx)(d.b,{exact:!0,path:"/",component:L}),Object(n.jsx)(d.b,{exact:!0,path:"/search/:city",component:U}),Object(n.jsx)(M,{exact:!0,path:"/create-arcade",component:J}),Object(n.jsx)(Q,{exact:!0,path:"/signup",component:k}),Object(n.jsx)(Q,{exact:!0,path:"/login",component:I}),Object(n.jsx)(M,{exact:!0,path:"/private",component:E})]})]})}}]),t}(a.Component),Y=Object(d.g)(T);c.a.render(Object(n.jsx)(s.a,{children:Object(n.jsx)(x,{children:Object(n.jsx)(Y,{})})}),document.getElementById("root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.1b8aa6e1.chunk.js.map