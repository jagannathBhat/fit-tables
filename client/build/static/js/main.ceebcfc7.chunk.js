(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{66:function(e,t,a){e.exports=a(96)},77:function(e,t,a){},96:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(9),u=a.n(c),l=(a(71),a(138)),o=a(123),i=a(39),s=a(17),p=(a(77),a(5)),m=a.n(p),E=a(8),b=a(127),f=a(139),h=a(130),d=a(140),T=Object(s.b)((function(e){return{batch:e.batch}}),{changeCurrentTeacher:function(e){return function(){var t=Object(E.a)(m.a.mark((function t(a){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",a({type:"CHANGE_CURRENT_TEACHER",payload:e}));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},deleteCurrentTeacher:function(){return function(){var e=Object(E.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t({type:"DELETE_CURRENT_TEACHER"}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},newTeacher:function(){return function(){var e=Object(E.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t({type:"ADD_TEACHER"}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},renameCurrentTeacher:function(e){return function(){var t=Object(E.a)(m.a.mark((function t(a){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",a({type:"RENAME_CURRENT_TEACHER",payload:e}));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.batch,a=t.batches,n=t.currentBatch,c=t.currentSubject,u=t.currentTeacher,l=e.classes,i=e.changeCurrentTeacher,s=e.deleteCurrentTeacher,p=e.newTeacher,m=e.renameCurrentTeacher,E=function(){document.getElementById("teacherName")&&document.getElementById("teacherName").focus()},T=a[n].subjects[c].teachers;return r.a.createElement("div",{className:l.inputSection},r.a.createElement(o.a,{variant:"h4",component:"h2"},"Teachers"),r.a.createElement("div",null,T.map((function(e,t){return r.a.createElement(b.a,{variant:t===u?"contained":"outlined",size:"large",color:"primary",className:l.buttons,onClick:function(){i(t),E()},key:t},e)})),r.a.createElement(b.a,{variant:"outlined",size:"large",color:"primary",className:l.buttons,onClick:function(){p(),E()}},"Add Teacher")),r.a.createElement("div",null,-1!==u?r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,{autoFocus:!0,label:"Teacher Name",variant:"outlined",id:"teacherName",value:T[u],onChange:function(e){var t=e.target.value;return m(t)}}),r.a.createElement(h.a,{"aria-label":"delete",onClick:s},r.a.createElement(d.a,null))):r.a.createElement(r.a.Fragment,null)))})),C=Object(s.b)((function(e){return{batch:e.batch}}),{changeCurrentSubject:function(e){return function(){var t=Object(E.a)(m.a.mark((function t(a){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",a({type:"CHANGE_CURRENT_SUBJECT",payload:e}));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},changeCurrentSubjectMax:function(e){return function(){var t=Object(E.a)(m.a.mark((function t(a){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a({type:"CHANGE_CURRENT_SUBJECT_MAX",payload:parseInt(e)});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},changeCurrentSubjectMin:function(e){return function(){var t=Object(E.a)(m.a.mark((function t(a){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",a({type:"CHANGE_CURRENT_SUBJECT_MIN",payload:parseInt(e)}));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},changeCurrentSubjectStep:function(e){return function(){var t=Object(E.a)(m.a.mark((function t(a){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",a({type:"CHANGE_CURRENT_SUBJECT_STEP",payload:parseInt(e)}));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},deleteCurrentSubject:function(){return function(){var e=Object(E.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t({type:"DELETE_CURRENT_SUBJECT"}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},newSubject:function(){return function(){var e=Object(E.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t({type:"NEW_SUBJECT"}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},renameCurrentSubject:function(e){return function(){var t=Object(E.a)(m.a.mark((function t(a){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",a({type:"RENAME_CURRENT_SUBJECT",payload:e}));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setDefaultSubjectMax:function(){return function(){var e=Object(E.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:"SET_DEFAULT_SUBJECT_MAX"});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},setDefaultSubjectMin:function(){return function(){var e=Object(E.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t({type:"SET_DEFAULT_SUBJECT_MIN"}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},setDefaultSubjectStep:function(){return function(){var e=Object(E.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t({type:"SET_DEFAULT_SUBJECT_STEP"}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})((function(e){var t=e.batch,a=t.batches,n=t.currentBatch,c=t.currentSubject,u=e.changeCurrentSubject,l=e.changeCurrentSubjectMax,i=e.changeCurrentSubjectMin,s=e.changeCurrentSubjectStep,p=e.classes,m=e.deleteCurrentSubject,E=e.newSubject,C=e.renameCurrentSubject,v=e.setDefaultSubjectMax,j=e.setDefaultSubjectMin,y=e.setDefaultSubjectStep,g=function(){document.getElementById("subjectName")&&document.getElementById("subjectName").focus()},_=a[n].subjects;return r.a.createElement("div",{className:p.inputSection},r.a.createElement(o.a,{variant:"h4",component:"h2"},"Subjects"),r.a.createElement("div",null,_.map((function(e,t){return r.a.createElement(b.a,{variant:t===c?"contained":"outlined",size:"large",color:"primary",className:p.buttons,onClick:function(){u(t),g()},key:t},e.name)})),r.a.createElement(b.a,{variant:"outlined",size:"large",color:"primary",className:p.buttons,onClick:function(){E(),g()}},"Add Subject")),r.a.createElement("div",null,-1!==c?r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,{autoFocus:!0,label:"Subject Name",variant:"outlined",id:"subjectName",value:_[c].name,onChange:function(e){var t=e.target.value;return C(t)}}),r.a.createElement(h.a,{"aria-label":"delete",onClick:m},r.a.createElement(d.a,null)),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(f.a,{label:"Minimum Limit",variant:"outlined",type:"number",value:_[c].min,onChange:function(e){var t=e.target.value;return i(t)}}),r.a.createElement(b.a,{color:"primary",size:"large",onClick:j},"Set as default"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(f.a,{label:"Maximum Limit",variant:"outlined",type:"number",value:_[c].max,onChange:function(e){var t=e.target.value;return l(t)}}),r.a.createElement(b.a,{color:"primary",size:"large",onClick:v},"Set as default"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(f.a,{label:"Step",variant:"outlined",type:"number",value:_[c].step,onChange:function(e){var t=e.target.value;return s(t)}}),r.a.createElement(b.a,{color:"primary",size:"large",onClick:y},"Set as default"),r.a.createElement(T,{classes:p})):r.a.createElement(r.a.Fragment,null)))})),v=a(36),j=a.n(v),y=Object(s.b)((function(e){return{batch:e.batch}}),{changeCurrentBatch:function(e){return function(){var t=Object(E.a)(m.a.mark((function t(a){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",a({type:"CHANGE_CURRENT_BATCH",payload:e}));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},deleteCurrentBatch:function(){return function(){var e=Object(E.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t({type:"DELETE_CURRENT_BATCH"}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},loadData:function(){return function(){var e=Object(E.a)(m.a.mark((function e(t){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.get("/load");case 2:a=e.sent,console.log(a.data.b),t({type:"LOAD_BATCH",payload:a.data.b}),t({type:"TIME_TABLE",payload:a.data.t});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},newBatch:function(){return function(){var e=Object(E.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t({type:"ADD_BATCH"}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},renameCurrentBatch:function(e){return function(){var t=Object(E.a)(m.a.mark((function t(a){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",a({type:"RENAME_CURRENT_BATCH",payload:e}));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.batch,a=t.batches,c=t.currentBatch,u=e.changeCurrentBatch,l=e.classes,i=e.deleteCurrentBatch,s=e.loadData,p=e.newBatch,T=e.renameCurrentBatch;Object(n.useEffect)((function(){(function(){var e=Object(E.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s();case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var v=function(){document.getElementById("batchName")&&document.getElementById("batchName").focus()};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:l.inputSection},r.a.createElement(o.a,{variant:"h4",component:"h2"},"Batches"),r.a.createElement("div",null,a.map((function(e,t){return r.a.createElement(b.a,{variant:t===c?"contained":"outlined",size:"large",color:"primary",className:l.buttons,onClick:function(){u(t),v()},key:t},e.name)})),r.a.createElement(b.a,{variant:"outlined",size:"large",color:"primary",className:l.buttons,onClick:function(){p(),v()}},"Add Batch")),r.a.createElement("div",null,-1!==c?r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,{autoFocus:!0,label:"Batch Name",variant:"outlined",id:"batchName",value:a[c].name,onChange:function(e){var t=e.target.value;return T(t)}}),r.a.createElement(h.a,{"aria-label":"delete",onClick:i},r.a.createElement(d.a,null)),r.a.createElement(C,{classes:l})):r.a.createElement(r.a.Fragment,null))))})),g=a(20),_=a(57),S=a(58),N=a(16),R=a(12),A={batches:[],currentBatch:-1,currentSubject:-1,currentTeacher:-1,defaultMax:0,defaultMin:0,defaultStep:0},B={timetable:[],error:null,loading:!1},w=Object(g.combineReducers)({batch:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0,a=e.batches,n=e.currentBatch,r=e.currentSubject,c=e.currentTeacher,u=e.defaultMax,l=e.defaultMin,o=e.defaultStep,i=a,s=-1===n?null:a[n].subjects,p=-1===n||-1===r?null:a[n].subjects[r].teachers,m=0;switch(t.type){case"CHANGE_CURRENT_BATCH":return""===a[a.length-1].name&&i.pop(),Object(R.a)({},e,{batches:i,currentBatch:t.payload,currentSubject:-1,currentTeacher:-1});case"CHANGE_CURRENT_SUBJECT":return""===s[s.length-1].name&&i[n].subjects.pop(),Object(R.a)({},e,{batches:i,currentSubject:t.payload,currentTeacher:-1});case"CHANGE_CURRENT_TEACHER":return""===p[p.length-1]&&i[n].subjects[r].teachers.pop(),Object(R.a)({},e,{batches:i,currentTeacher:t.payload});case"CHANGE_CURRENT_SUBJECT_MAX":return i[n].subjects[r].max=t.payload,Object(R.a)({},e,{batches:i});case"CHANGE_CURRENT_SUBJECT_MIN":return i[n].subjects[r].min=t.payload,Object(R.a)({},e,{batches:i});case"CHANGE_CURRENT_SUBJECT_STEP":return i[n].subjects[r].step=t.payload,Object(R.a)({},e,{batches:i});case"DELETE_CURRENT_BATCH":return Object(R.a)({},e,{batches:a.filter((function(e,t){return t!==n})),currentBatch:-1,currentSubject:-1,currentTeacher:-1});case"DELETE_CURRENT_SUBJECT":return i[n].subjects=s.filter((function(e,t){return t!==r})),Object(R.a)({},e,{batches:i,currentSubject:-1,currentTeacher:-1});case"DELETE_CURRENT_TEACHER":return i[n].subjects[r].teachers=p.filter((function(e,t){return t!==c})),Object(R.a)({},e,{batches:i,currentTeacher:-1});case"LOAD_BATCH":return Object(R.a)({},A,{},t.payload);case"ADD_BATCH":return(m=a.length-1)<0||""!==a[m].name?Object(R.a)({},e,{batches:[].concat(Object(N.a)(a),[{name:"",subjects:[]}]),currentBatch:m+1,currentSubject:-1,currentTeacher:-1}):e;case"NEW_SUBJECT":return(m=s.length-1)<0||""!==s[m].name?(i[n].subjects.push({name:"",teachers:[],max:u,min:l,step:o}),Object(R.a)({},e,{batches:i,currentSubject:m+1,currentTeacher:-1})):e;case"ADD_TEACHER":return(m=p.length-1)<0||""!==p[m].name?(i[n].subjects[r].teachers.push(""),Object(R.a)({},e,{batches:i,currentTeacher:m+1})):e;case"RENAME_CURRENT_BATCH":return i[n].name=t.payload,Object(R.a)({},e,{batches:i});case"RENAME_CURRENT_SUBJECT":return i[n].subjects[r].name=t.payload,Object(R.a)({},e,{batches:i});case"RENAME_CURRENT_TEACHER":return i[n].subjects[r].teachers[c]=t.payload,Object(R.a)({},e,{batches:i});case"SET_DEFAULT_SUBJECT_MAX":return Object(R.a)({},e,{defaultMax:a[n].subjects[r].max});case"SET_DEFAULT_SUBJECT_MIN":return Object(R.a)({},e,{defaultMin:a[n].subjects[r].min});case"SET_DEFAULT_SUBJECT_STEP":return Object(R.a)({},e,{defaultStep:a[n].subjects[r].step});default:return e}},timetable:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TIME_TABLE":return Object(R.a)({},t.payload,{error:null,loading:!1});case"TIME_TABLE_ERROR":var a="Failed to generate. Please try again.";return"failed"!==t.payload.msg&&(a="The maximum limits in "+t.payload.batch+" are too low."),{timetable:[],error:a,loading:!1};case"TIME_TABLE_LOADING":return{timetable:[],error:null,loading:!0};default:return e}}}),O=[S.a],x=Object(g.createStore)(w,{},Object(_.composeWithDevTools)(g.applyMiddleware.apply(void 0,O))),U=a(131),k=a(132),M=a(129),H=a(133),D=a(134),L=a(135),I=a(136),J=a(137),F=Object(s.b)((function(e){return{batch:e.batch,timetable:e.timetable}}),{generateTimetable:function(e){return function(){var t=Object(E.a)(m.a.mark((function t(a){var n,r;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:"TIME_TABLE_LOADING"}),t.prev=1,n={headers:{"Content-Type":"application/json"}},t.next=5,j.a.post("/generate",{batches:e},n);case 5:(r=t.sent).data.msg?a({type:"TIME_TABLE_ERROR",payload:r.data}):a({type:"TIME_TABLE",payload:r.data}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),console.error(t.t0);case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.batch.batches,a=e.classes,n=e.timetable,c=n.timetable,u=n.error,l=n.loading,i=e.generateTimetable;return r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("div",{className:a.wrapper},r.a.createElement(b.a,{variant:"contained",color:"secondary",size:"large",className:a.buttons,disabled:l,onClick:function(){return i(t)}},"Generate Timetable"),l&&r.a.createElement(U.a,{size:24,className:a.buttonProgress})),null!==u?r.a.createElement(o.a,{variant:"body1",component:"p"},u):r.a.createElement(r.a.Fragment,null,c.map((function(e,t){return r.a.createElement(k.a,{component:M.a,className:a.tableContainer,key:t},r.a.createElement(H.a,{className:a.table},r.a.createElement(D.a,null,r.a.createElement(L.a,null,r.a.createElement(I.a,null,e.name),r.a.createElement(I.a,{align:"center"},"Hour 1"),r.a.createElement(I.a,{align:"center"},"Hour 2"),r.a.createElement(I.a,{align:"center"},"Hour 3"),r.a.createElement(I.a,{align:"center"},"Hour 4"),r.a.createElement(I.a,{align:"center"},"Hour 5"),r.a.createElement(I.a,{align:"center"},"Hour 6"),r.a.createElement(I.a,{align:"center"},"Hour 7"))),r.a.createElement(J.a,null,e.classes.map((function(e,t){return r.a.createElement(L.a,{key:t},r.a.createElement(I.a,{component:"th",scope:"row"},"Day ",t+1),e.map((function(e,t){return r.a.createElement(I.a,{align:"center",key:t},e[0],r.a.createElement("br",null),e[1])})))})))))}))))})),G=Object(l.a)((function(e){return{buttons:{margin:e.spacing(3),marginLeft:"0px",textTransform:"none"},buttonProgress:{color:i.a[500],position:"absolute",top:"50%",left:"50%",marginTop:-12,marginLeft:-24},inputSection:{margin:e.spacing(6)+"px 0px "+e.spacing(3)+"px 0px"},root:{display:"flex",flexDirection:"column",height:"100%",margin:e.spacing(6),paddingTop:e.spacing(24)},table:{minWidth:650},tableContainer:{margin:e.spacing(6)+"px 0px"},wrapper:{margin:e.spacing(1),position:"relative"}}})),z=function(){var e=G();return r.a.createElement(s.a,{store:x},r.a.createElement("div",{className:e.root},r.a.createElement(o.a,{variant:"h3",component:"h1"},"Timetable Generator"),r.a.createElement(y,{classes:e}),r.a.createElement(F,{classes:e})))};u.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(z,null)),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.ceebcfc7.chunk.js.map