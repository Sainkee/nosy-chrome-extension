(()=>{/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let e=["user","model","function"];(b=P||(P={})).HARM_CATEGORY_UNSPECIFIED="HARM_CATEGORY_UNSPECIFIED",b.HARM_CATEGORY_HATE_SPEECH="HARM_CATEGORY_HATE_SPEECH",b.HARM_CATEGORY_SEXUALLY_EXPLICIT="HARM_CATEGORY_SEXUALLY_EXPLICIT",b.HARM_CATEGORY_HARASSMENT="HARM_CATEGORY_HARASSMENT",b.HARM_CATEGORY_DANGEROUS_CONTENT="HARM_CATEGORY_DANGEROUS_CONTENT",(L=D||(D={})).HARM_BLOCK_THRESHOLD_UNSPECIFIED="HARM_BLOCK_THRESHOLD_UNSPECIFIED",L.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",L.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",L.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",L.BLOCK_NONE="BLOCK_NONE",(M=F||(F={})).HARM_PROBABILITY_UNSPECIFIED="HARM_PROBABILITY_UNSPECIFIED",M.NEGLIGIBLE="NEGLIGIBLE",M.LOW="LOW",M.MEDIUM="MEDIUM",M.HIGH="HIGH",(k=K||(K={})).BLOCKED_REASON_UNSPECIFIED="BLOCKED_REASON_UNSPECIFIED",k.SAFETY="SAFETY",k.OTHER="OTHER",(x=U||(U={})).FINISH_REASON_UNSPECIFIED="FINISH_REASON_UNSPECIFIED",x.STOP="STOP",x.MAX_TOKENS="MAX_TOKENS",x.SAFETY="SAFETY",x.RECITATION="RECITATION",x.OTHER="OTHER",(B=$||($={})).TASK_TYPE_UNSPECIFIED="TASK_TYPE_UNSPECIFIED",B.RETRIEVAL_QUERY="RETRIEVAL_QUERY",B.RETRIEVAL_DOCUMENT="RETRIEVAL_DOCUMENT",B.SEMANTIC_SIMILARITY="SEMANTIC_SIMILARITY",B.CLASSIFICATION="CLASSIFICATION",B.CLUSTERING="CLUSTERING",(G=Y||(Y={})).STRING="STRING",G.NUMBER="NUMBER",G.INTEGER="INTEGER",G.BOOLEAN="BOOLEAN",G.ARRAY="ARRAY",G.OBJECT="OBJECT";/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t extends Error{constructor(e){super(`[GoogleGenerativeAI Error]: ${e}`)}}class n extends t{constructor(e,t){super(e),this.response=t}}(H=j||(j={})).GENERATE_CONTENT="generateContent",H.STREAM_GENERATE_CONTENT="streamGenerateContent",H.COUNT_TOKENS="countTokens",H.EMBED_CONTENT="embedContent",H.BATCH_EMBED_CONTENTS="batchEmbedContents";class s{constructor(e,t,n,s,o){this.model=e,this.task=t,this.apiKey=n,this.stream=s,this.requestOptions=o}toString(){var e;let t=(null===(e=this.requestOptions)||void 0===e?void 0:e.apiVersion)||"v1",n=`https://generativelanguage.googleapis.com/${t}/${this.model}:${this.task}`;return this.stream&&(n+="?alt=sse"),n}}async function o(e,n,s){let o;try{if(!(o=await fetch(e.toString(),Object.assign(Object.assign({},function(e){let t={};if((null==e?void 0:e.timeout)>=0){let n=new AbortController,s=n.signal;setTimeout(()=>n.abort(),e.timeout),t.signal=s}return t}(s)),{method:"POST",headers:{"Content-Type":"application/json","x-goog-api-client":"genai-js/0.3.1","x-goog-api-key":e.apiKey},body:n}))).ok){let e="";try{let t=await o.json();e=t.error.message,t.error.details&&(e+=` ${JSON.stringify(t.error.details)}`)}catch(e){}throw Error(`[${o.status} ${o.statusText}] ${e}`)}}catch(s){let n=new t(`Error fetching from ${e.toString()}: ${s.message}`);throw n.stack=s.stack,n}return o}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i(e){return e.text=()=>{if(e.candidates&&e.candidates.length>0){var t,s,o,i;if(e.candidates.length>1&&console.warn(`This response had ${e.candidates.length} candidates. Returning text from the first candidate only. Access response.candidates directly to use the other candidates.`),a(e.candidates[0]))throw new n(`${l(e)}`,e);return(null===(i=null===(o=null===(s=null===(t=e.candidates)||void 0===t?void 0:t[0].content)||void 0===s?void 0:s.parts)||void 0===o?void 0:o[0])||void 0===i?void 0:i.text)?e.candidates[0].content.parts.map(({text:e})=>e).join(""):""}if(e.promptFeedback)throw new n(`Text not available. ${l(e)}`,e);return""},e.functionCall=()=>{if(e.candidates&&e.candidates.length>0){var t,s,o,i;if(e.candidates.length>1&&console.warn(`This response had ${e.candidates.length} candidates. Returning function call from the first candidate only. Access response.candidates directly to use the other candidates.`),a(e.candidates[0]))throw new n(`${l(e)}`,e);return null===(i=null===(o=null===(s=null===(t=e.candidates)||void 0===t?void 0:t[0].content)||void 0===s?void 0:s.parts)||void 0===o?void 0:o[0])||void 0===i?void 0:i.functionCall}if(e.promptFeedback)throw new n(`Function call not available. ${l(e)}`,e)},e}let r=[U.RECITATION,U.SAFETY];function a(e){return!!e.finishReason&&r.includes(e.finishReason)}function l(e){var t,n,s;let o="";if((!e.candidates||0===e.candidates.length)&&e.promptFeedback)o+="Response was blocked",(null===(t=e.promptFeedback)||void 0===t?void 0:t.blockReason)&&(o+=` due to ${e.promptFeedback.blockReason}`),(null===(n=e.promptFeedback)||void 0===n?void 0:n.blockReasonMessage)&&(o+=`: ${e.promptFeedback.blockReasonMessage}`);else if(null===(s=e.candidates)||void 0===s?void 0:s[0]){let t=e.candidates[0];a(t)&&(o+=`Candidate was blocked due to ${t.finishReason}`,t.finishMessage&&(o+=`: ${t.finishMessage}`))}return o}function c(e){return this instanceof c?(this.v=e,this):new c(e)}"function"==typeof SuppressedError&&SuppressedError;/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let d=/^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;async function u(e){let t=[],n=e.getReader();for(;;){let{done:e,value:s}=await n.read();if(e)return i(function(e){let t=e[e.length-1],n={promptFeedback:null==t?void 0:t.promptFeedback};for(let t of e)if(t.candidates)for(let e of t.candidates){let t=e.index;if(n.candidates||(n.candidates=[]),n.candidates[t]||(n.candidates[t]={index:e.index}),n.candidates[t].citationMetadata=e.citationMetadata,n.candidates[t].finishReason=e.finishReason,n.candidates[t].finishMessage=e.finishMessage,n.candidates[t].safetyRatings=e.safetyRatings,e.content&&e.content.parts){n.candidates[t].content||(n.candidates[t].content={role:e.content.role||"user",parts:[]});let s={};for(let o of e.content.parts)o.text&&(s.text=o.text),o.functionCall&&(s.functionCall=o.functionCall),0===Object.keys(s).length&&(s.text=""),n.candidates[t].content.parts.push(s)}}return n}(t));t.push(s)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function h(e,n,r,a){let l=new s(n,j.STREAM_GENERATE_CONTENT,e,!0,a);return function(e){let[n,s]=(function(e){let n=e.getReader();return new ReadableStream({start(e){let s="";return function o(){return n.read().then(({value:n,done:i})=>{let r;if(i){if(s.trim()){e.error(new t("Failed to parse stream"));return}e.close();return}let a=(s+=n).match(d);for(;a;){try{r=JSON.parse(a[1])}catch(n){e.error(new t(`Error parsing JSON response: "${a[1]}"`));return}e.enqueue(r),a=(s=s.substring(a[0].length)).match(d)}return o()})}()}})})(e.body.pipeThrough(new TextDecoderStream("utf8",{fatal:!0}))).tee();return{stream:function(e){return function(e,t,n){if(!Symbol.asyncIterator)throw TypeError("Symbol.asyncIterator is not defined.");var s,o=n.apply(e,t||[]),i=[];return s={},r("next"),r("throw"),r("return"),s[Symbol.asyncIterator]=function(){return this},s;function r(e){o[e]&&(s[e]=function(t){return new Promise(function(n,s){i.push([e,t,n,s])>1||a(e,t)})})}function a(e,t){try{var n;(n=o[e](t)).value instanceof c?Promise.resolve(n.value.v).then(l,d):u(i[0][2],n)}catch(e){u(i[0][3],e)}}function l(e){a("next",e)}function d(e){a("throw",e)}function u(e,t){e(t),i.shift(),i.length&&a(i[0][0],i[0][1])}}(this,arguments,function*(){let t=e.getReader();for(;;){let{value:e,done:n}=yield c(t.read());if(n)break;yield yield c(i(e))}})}(n),response:u(s)}}(await o(l,JSON.stringify(r),a))}async function p(e,t,n,r){let a=new s(t,j.GENERATE_CONTENT,e,!1,r),l=await o(a,JSON.stringify(n),r);return{response:i(await l.json())}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m(e){let n=[];if("string"==typeof e)n=[{text:e}];else for(let t of e)"string"==typeof t?n.push({text:t}):n.push(t);return function(e){let n={role:"user",parts:[]},s={role:"function",parts:[]},o=!1,i=!1;for(let t of e)"functionResponse"in t?(s.parts.push(t),i=!0):(n.parts.push(t),o=!0);if(o&&i)throw new t("Within a single message, FunctionResponse cannot be mixed with other type of part in the request for sending chat message.");if(!o&&!i)throw new t("No content is provided for sending chat message.");return o?n:s}(n)}function f(e){return e.contents?e:{contents:[m(e)]}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let E=["text","inlineData","functionCall","functionResponse"],g={user:["text","inlineData"],function:["functionResponse"],model:["text","functionCall"]},y={user:["model"],function:["model"],model:["user","function"]},C="SILENT_ERROR";class T{constructor(n,s,o,i){this.model=s,this.params=o,this.requestOptions=i,this._history=[],this._sendPromise=Promise.resolve(),this._apiKey=n,(null==o?void 0:o.history)&&(function(n){let s;for(let o of n){let{role:n,parts:i}=o;if(!s&&"user"!==n)throw new t(`First content should be with role 'user', got ${n}`);if(!e.includes(n))throw new t(`Each item should include role field. Got ${n} but valid roles are: ${JSON.stringify(e)}`);if(!Array.isArray(i))throw new t("Content should have 'parts' property with an array of Parts");if(0===i.length)throw new t("Each Content should have at least one part");let r={text:0,inlineData:0,functionCall:0,functionResponse:0};for(let e of i)for(let t of E)t in e&&(r[t]+=1);let a=g[n];for(let e of E)if(!a.includes(e)&&r[e]>0)throw new t(`Content with role '${n}' can't contain '${e}' part`);if(s&&!y[n].includes(s.role))throw new t(`Content with role '${n}' can't follow '${s.role}'. Valid previous roles: ${JSON.stringify(y)}`);s=o}}(o.history),this._history=o.history)}async getHistory(){return await this._sendPromise,this._history}async sendMessage(e){var t,n,s;let o;await this._sendPromise;let i=m(e),r={safetySettings:null===(t=this.params)||void 0===t?void 0:t.safetySettings,generationConfig:null===(n=this.params)||void 0===n?void 0:n.generationConfig,tools:null===(s=this.params)||void 0===s?void 0:s.tools,contents:[...this._history,i]};return this._sendPromise=this._sendPromise.then(()=>p(this._apiKey,this.model,r,this.requestOptions)).then(e=>{var t;if(e.response.candidates&&e.response.candidates.length>0){this._history.push(i);let n=Object.assign({parts:[],role:"model"},null===(t=e.response.candidates)||void 0===t?void 0:t[0].content);this._history.push(n)}else{let t=l(e.response);t&&console.warn(`sendMessage() was unsuccessful. ${t}. Inspect response object for details.`)}o=e}),await this._sendPromise,o}async sendMessageStream(e){var t,n,s;await this._sendPromise;let o=m(e),i={safetySettings:null===(t=this.params)||void 0===t?void 0:t.safetySettings,generationConfig:null===(n=this.params)||void 0===n?void 0:n.generationConfig,tools:null===(s=this.params)||void 0===s?void 0:s.tools,contents:[...this._history,o]},r=h(this._apiKey,this.model,i,this.requestOptions);return this._sendPromise=this._sendPromise.then(()=>r).catch(e=>{throw Error(C)}).then(e=>e.response).then(e=>{if(e.candidates&&e.candidates.length>0){this._history.push(o);let t=Object.assign({},e.candidates[0].content);t.role||(t.role="model"),this._history.push(t)}else{let t=l(e);t&&console.warn(`sendMessageStream() was unsuccessful. ${t}. Inspect response object for details.`)}}).catch(e=>{e.message!==C&&console.error(e)}),r}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _(e,t,n,i){let r=new s(t,j.COUNT_TOKENS,e,!1,{});return(await o(r,JSON.stringify(Object.assign(Object.assign({},n),{model:t})),i)).json()}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function A(e,t,n,i){let r=new s(t,j.EMBED_CONTENT,e,!1,{});return(await o(r,JSON.stringify(n),i)).json()}async function O(e,t,n,i){let r=new s(t,j.BATCH_EMBED_CONTENTS,e,!1,{}),a=n.requests.map(e=>Object.assign(Object.assign({},e),{model:t}));return(await o(r,JSON.stringify({requests:a}),i)).json()}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(e,t,n){this.apiKey=e,t.model.includes("/")?this.model=t.model:this.model=`models/${t.model}`,this.generationConfig=t.generationConfig||{},this.safetySettings=t.safetySettings||[],this.tools=t.tools,this.requestOptions=n||{}}async generateContent(e){let t=f(e);return p(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools},t),this.requestOptions)}async generateContentStream(e){let t=f(e);return h(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools},t),this.requestOptions)}startChat(e){return new T(this.apiKey,this.model,Object.assign({tools:this.tools},e),this.requestOptions)}async countTokens(e){let t=f(e);return _(this.apiKey,this.model,t)}async embedContent(e){let t="string"==typeof e||Array.isArray(e)?{content:m(e)}:e;return A(this.apiKey,this.model,t)}async batchEmbedContents(e){return O(this.apiKey,this.model,e,this.requestOptions)}}let R=new /**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class{constructor(e){this.apiKey=e}getGenerativeModel(e,n){if(!e.model)throw new t("Must provide a model name. Example: genai.getGenerativeModel({ model: 'my-model-name' })");return new S(this.apiKey,e,n)}}("AIzaSyCmd3guYR-kltQEsUeapkg66iQq1gE3RlI"),w=document.body,v=document.createElement("button");v.setAttribute("id","btnNosy"),w.appendChild(v);let N=document.createElement("div");function I(e,t=3e3){let n=document.createElement("div");n.classList.add("toast"),n.innerText=e;let s=document.createElement("button");s.innerText="X",s.classList.add("close-button"),s.addEventListener("click",function(){n.remove()}),n.appendChild(s),document.body.appendChild(n),setTimeout(()=>{n.remove()},t)}if(N.setAttribute("class","gemSearch"),N.innerText="AI",w.appendChild(N),v.addEventListener("click",()=>{v.toggleAttribute("listener"),v.hasAttribute("listener")?q.start():q.stop()}),"SpeechRecognition"in window||"webkitSpeechRecognition"in window){var b,L,M,k,x,B,G,H,P,D,F,K,U,$,Y,j,q=new(window.SpeechRecognition||window.webkitSpeechRecognition);q.lang="en-US",q.continuous=!1,q.interimResults=!1,q.onresult=function(e){let t=e.results[e.results.length-1][0].transcript;v.removeAttribute("listener"),J(t.toLowerCase())}}async function J(e){let t=R.getGenerativeModel({model:"gemini-pro"});V((await t.generateContent("Give possible voice commands related to linkedin website for the prompt -"+e)).response.text())}async function V(e){console.log("im in link=>",e);try{let t=R.getGenerativeModel({model:"gemini-pro"}),n=(await t.generateContent("Considering the prompt: "+e+", what would be a relevant LinkedIn URL to complete the user's action?")).response.text();console.log("hello this is link=>=>",n);let s=await function(e){console.log("im in extractedlink=>",e);let t=e.match(/https?:\/\/[^\s,]+/gi);return t?t.join(","):"https://www.linkedin.com/"}(n);window.location.href=s}catch(e){console.error("Error generating or handling link:",e)}}document.addEventListener("keydown",function(e){e.ctrlKey&&"Space"===e.code&&v.click()}),document.addEventListener("click",function(e){if(console.log(e.target.className),e.target.classList.contains("artdeco-button__text")||e.target.classList.contains("artdeco-button")||"SPAN"===e.target.tagName&&"Reply"===e.target.textContent.trim()||e.target.classList.contains("artdeco-button__icon")){let e=document.querySelectorAll(".mlA");for(let t=0;t<e.length;t++)if(console.log(e[t]),"true"!==e[t].dataset.sy){let n=document.createElement("div");n.setAttribute("class","comments-comment-box-comment__text-editor"),n.classList.add("wrapAi");let s=document.createElement("button");s.setAttribute("class","aiSearch"),n.appendChild(s),e[t].insertBefore(n,e[t].firstChild),e[t].dataset.sy="true",console.log("btn is creating")}}else if(e.target.classList.contains("ql-container")){let e=document.querySelectorAll(".ql-container"),t=document.createElement("div");t.setAttribute("class","comments-comment-box-comment__text-editor"),t.classList.add("wrapAi");let n=document.createElement("button");n.setAttribute("class","aiSearch"),t.appendChild(n),e.appendChild(t)}});let X="";async function W(){var e=document.getElementById("textInputPop").value;if(""==e){I("Please Query First!");return}let t=await z(e);console.log(t),document.querySelector(".showRes").innerText=t}function Q(){var e=document.querySelector(".showRes").innerText;if(""==e){I("There is nothing to copy");return}navigator.clipboard.writeText(e).then(()=>{I("Copied to clipboard"),e.value="",document.body.removeChild(X)})}async function z(e){let t=document.querySelector(".loader");try{let n=R.getGenerativeModel({model:"gemini-pro"});t.style.display="block";let s=(await n.generateContent("Considering the prompt: "+e+", and return short trimmed ready to paste comment integrated emojeies and match with mood and no markdown ?")).response.text().trim();return t.style.display="none",s}catch(e){console.error("Error generating or handling link:",e)}}document.addEventListener("click",function(e){if(e.target.classList.contains("aiSearch")||e.target.classList.contains("gemSearch")){(X=document.createElement("div")).classList.add("popup-container"),X.innerHTML=`
    <p class="q-title">WelCome To Gemini AI</p>
  <input type="text" id="textInputPop" placeholder="Search AnyThing...">
  <p class="showRes"><div class="loader" id="loader"></div> </p>
  <button id="submitBtn">Geminai &#128269;</button>
  <button id="copyBtn">Copy & Close</button>
  <button id="closeBtn">Close</button>
  
`,w.style.position="relative",document.body.appendChild(X);let e=document.getElementById("submitBtn"),t=document.getElementById("copyBtn"),n=document.getElementById("closeBtn");e.addEventListener("click",W),t.addEventListener("click",Q),n.addEventListener("click",function(){document.body.removeChild(X)})}})})();
//# sourceMappingURL=script.js.map
