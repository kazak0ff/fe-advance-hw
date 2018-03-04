"use strict";var baseUrl="http://fecore.net.ua/rest",details=document.querySelector(".detail"),onClick=function(e){"get"==e.target.className?getUsers():"add"==e.target.className?addUser(document.getElementById("addName").value,document.getElementById("addScore").value):"update"==e.target.className?updateUser(document.getElementById("updateId").value,document.getElementById("updateName").value,document.getElementById("updateScore").value):"remove"==e.target.className&&removeUser(document.getElementById("removeId").value)};function fillDetails(e){details.innerHTML="";var t=!0,r=!1,a=void 0;try{for(var n,o=e[Symbol.iterator]();!(t=(n=o.next()).done);t=!0){var i=n.value,c=document.createElement("p");c.classList.add("details__name"),c.textContent="player "+i.id,details.append(c);var l=Object.keys(i),u=!0,s=!1,d=void 0;try{for(var f,y=l[Symbol.iterator]();!(u=(f=y.next()).done);u=!0){var m=f.value;if(Array.isArray(i[m])){var v=!0,h=!1,g=void 0;try{for(var p,E=i[m][Symbol.iterator]();!(v=(p=E.next()).done);v=!0){var S=p.value,N=Object.keys(S),b=!0,w=!1,U=void 0;try{for(var _,A=N[Symbol.iterator]();!(b=(_=A.next()).done);b=!0){createKeyParamDivs(_.value,S)}}catch(e){w=!0,U=e}finally{try{!b&&A.return&&A.return()}finally{if(w)throw U}}}}catch(e){h=!0,g=e}finally{try{!v&&E.return&&E.return()}finally{if(h)throw g}}}createKeyParamDivs(m,i)}}catch(e){s=!0,d=e}finally{try{!u&&y.return&&y.return()}finally{if(s)throw d}}}}catch(e){r=!0,a=e}finally{try{!t&&o.return&&o.return()}finally{if(r)throw a}}}function createKeyParamDivs(e,t){var r=document.createElement("div");r.classList.add("info-table__details__params__bold"),r.textContent=e;var a=document.createElement("div");a.classList.add("info-table__details__params"),a.textContent=t[e],details.append(r),details.append(a)}function getUsers(){fetch("http://fecore.net.ua/rest/",{method:"get"}).then(function(e){if(e.ok)return e.json();throw new Error("Error fetching data")}).then(function(e){futureArray=JSON.parse(JSON.stringify(e)),fillDetails(futureArray)}).catch(function(e){console.error("Error: ",e)})}function addUser(e,t){fetch(baseUrl+"/?action=1&name="+e+"&score="+t).then(function(e){if(e.ok)return e.json();throw new Error("Error fetching data")}).then(function(e){futureArray=JSON.parse(JSON.stringify(e)),fillDetails(futureArray)}).catch(function(e){console.error("Error: ",e)})}function updateUser(e,t,r){fetch(baseUrl+"/?action=2&id="+e+"&name="+t+"&score="+r).then(function(e){if(e.ok)return e.json();throw new Error("Error fetching data")}).then(function(e){futureArray=JSON.parse(JSON.stringify(e)),fillDetails(futureArray)}).catch(function(e){console.error("Error: ",e)})}function removeUser(e){fetch(baseUrl+"/?action=3&id="+e).then(function(e){if(e.ok)return e.json();throw new Error("Error fetching data")}).then(function(e){futureArray=JSON.parse(JSON.stringify(e)),fillDetails(futureArray)}).catch(function(e){console.error("Error: ",e)})}document.addEventListener("click",onClick);