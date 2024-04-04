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
 */let e=["user","model","function"];(I=G||(G={})).HARM_CATEGORY_UNSPECIFIED="HARM_CATEGORY_UNSPECIFIED",I.HARM_CATEGORY_HATE_SPEECH="HARM_CATEGORY_HATE_SPEECH",I.HARM_CATEGORY_SEXUALLY_EXPLICIT="HARM_CATEGORY_SEXUALLY_EXPLICIT",I.HARM_CATEGORY_HARASSMENT="HARM_CATEGORY_HARASSMENT",I.HARM_CATEGORY_DANGEROUS_CONTENT="HARM_CATEGORY_DANGEROUS_CONTENT",(b=P||(P={})).HARM_BLOCK_THRESHOLD_UNSPECIFIED="HARM_BLOCK_THRESHOLD_UNSPECIFIED",b.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",b.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",b.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",b.BLOCK_NONE="BLOCK_NONE",(L=D||(D={})).HARM_PROBABILITY_UNSPECIFIED="HARM_PROBABILITY_UNSPECIFIED",L.NEGLIGIBLE="NEGLIGIBLE",L.LOW="LOW",L.MEDIUM="MEDIUM",L.HIGH="HIGH",(M=F||(F={})).BLOCKED_REASON_UNSPECIFIED="BLOCKED_REASON_UNSPECIFIED",M.SAFETY="SAFETY",M.OTHER="OTHER",(k=K||(K={})).FINISH_REASON_UNSPECIFIED="FINISH_REASON_UNSPECIFIED",k.STOP="STOP",k.MAX_TOKENS="MAX_TOKENS",k.SAFETY="SAFETY",k.RECITATION="RECITATION",k.OTHER="OTHER",(x=U||(U={})).TASK_TYPE_UNSPECIFIED="TASK_TYPE_UNSPECIFIED",x.RETRIEVAL_QUERY="RETRIEVAL_QUERY",x.RETRIEVAL_DOCUMENT="RETRIEVAL_DOCUMENT",x.SEMANTIC_SIMILARITY="SEMANTIC_SIMILARITY",x.CLASSIFICATION="CLASSIFICATION",x.CLUSTERING="CLUSTERING",(B=$||($={})).STRING="STRING",B.NUMBER="NUMBER",B.INTEGER="INTEGER",B.BOOLEAN="BOOLEAN",B.ARRAY="ARRAY",B.OBJECT="OBJECT";/**
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
 */class t extends Error{constructor(e){super(`[GoogleGenerativeAI Error]: ${e}`)}}class n extends t{constructor(e,t){super(e),this.response=t}}(H=Y||(Y={})).GENERATE_CONTENT="generateContent",H.STREAM_GENERATE_CONTENT="streamGenerateContent",H.COUNT_TOKENS="countTokens",H.EMBED_CONTENT="embedContent",H.BATCH_EMBED_CONTENTS="batchEmbedContents";class o{constructor(e,t,n,o,s){this.model=e,this.task=t,this.apiKey=n,this.stream=o,this.requestOptions=s}toString(){var e;let t=(null===(e=this.requestOptions)||void 0===e?void 0:e.apiVersion)||"v1",n=`https://generativelanguage.googleapis.com/${t}/${this.model}:${this.task}`;return this.stream&&(n+="?alt=sse"),n}}async function s(e,n,o){let s;try{if(!(s=await fetch(e.toString(),Object.assign(Object.assign({},function(e){let t={};if((null==e?void 0:e.timeout)>=0){let n=new AbortController,o=n.signal;setTimeout(()=>n.abort(),e.timeout),t.signal=o}return t}(o)),{method:"POST",headers:{"Content-Type":"application/json","x-goog-api-client":"genai-js/0.3.1","x-goog-api-key":e.apiKey},body:n}))).ok){let e="";try{let t=await s.json();e=t.error.message,t.error.details&&(e+=` ${JSON.stringify(t.error.details)}`)}catch(e){}throw Error(`[${s.status} ${s.statusText}] ${e}`)}}catch(o){let n=new t(`Error fetching from ${e.toString()}: ${o.message}`);throw n.stack=o.stack,n}return s}/**
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
 */function i(e){return e.text=()=>{if(e.candidates&&e.candidates.length>0){var t,o,s,i;if(e.candidates.length>1&&console.warn(`This response had ${e.candidates.length} candidates. Returning text from the first candidate only. Access response.candidates directly to use the other candidates.`),a(e.candidates[0]))throw new n(`${l(e)}`,e);return(null===(i=null===(s=null===(o=null===(t=e.candidates)||void 0===t?void 0:t[0].content)||void 0===o?void 0:o.parts)||void 0===s?void 0:s[0])||void 0===i?void 0:i.text)?e.candidates[0].content.parts.map(({text:e})=>e).join(""):""}if(e.promptFeedback)throw new n(`Text not available. ${l(e)}`,e);return""},e.functionCall=()=>{if(e.candidates&&e.candidates.length>0){var t,o,s,i;if(e.candidates.length>1&&console.warn(`This response had ${e.candidates.length} candidates. Returning function call from the first candidate only. Access response.candidates directly to use the other candidates.`),a(e.candidates[0]))throw new n(`${l(e)}`,e);return null===(i=null===(s=null===(o=null===(t=e.candidates)||void 0===t?void 0:t[0].content)||void 0===o?void 0:o.parts)||void 0===s?void 0:s[0])||void 0===i?void 0:i.functionCall}if(e.promptFeedback)throw new n(`Function call not available. ${l(e)}`,e)},e}let r=[K.RECITATION,K.SAFETY];function a(e){return!!e.finishReason&&r.includes(e.finishReason)}function l(e){var t,n,o;let s="";if((!e.candidates||0===e.candidates.length)&&e.promptFeedback)s+="Response was blocked",(null===(t=e.promptFeedback)||void 0===t?void 0:t.blockReason)&&(s+=` due to ${e.promptFeedback.blockReason}`),(null===(n=e.promptFeedback)||void 0===n?void 0:n.blockReasonMessage)&&(s+=`: ${e.promptFeedback.blockReasonMessage}`);else if(null===(o=e.candidates)||void 0===o?void 0:o[0]){let t=e.candidates[0];a(t)&&(s+=`Candidate was blocked due to ${t.finishReason}`,t.finishMessage&&(s+=`: ${t.finishMessage}`))}return s}function c(e){return this instanceof c?(this.v=e,this):new c(e)}"function"==typeof SuppressedError&&SuppressedError;/**
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
 */let d=/^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;async function u(e){let t=[],n=e.getReader();for(;;){let{done:e,value:o}=await n.read();if(e)return i(function(e){let t=e[e.length-1],n={promptFeedback:null==t?void 0:t.promptFeedback};for(let t of e)if(t.candidates)for(let e of t.candidates){let t=e.index;if(n.candidates||(n.candidates=[]),n.candidates[t]||(n.candidates[t]={index:e.index}),n.candidates[t].citationMetadata=e.citationMetadata,n.candidates[t].finishReason=e.finishReason,n.candidates[t].finishMessage=e.finishMessage,n.candidates[t].safetyRatings=e.safetyRatings,e.content&&e.content.parts){n.candidates[t].content||(n.candidates[t].content={role:e.content.role||"user",parts:[]});let o={};for(let s of e.content.parts)s.text&&(o.text=s.text),s.functionCall&&(o.functionCall=s.functionCall),0===Object.keys(o).length&&(o.text=""),n.candidates[t].content.parts.push(o)}}return n}(t));t.push(o)}}/**
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
 */async function h(e,n,r,a){let l=new o(n,Y.STREAM_GENERATE_CONTENT,e,!0,a);return function(e){let[n,o]=(function(e){let n=e.getReader();return new ReadableStream({start(e){let o="";return function s(){return n.read().then(({value:n,done:i})=>{let r;if(i){if(o.trim()){e.error(new t("Failed to parse stream"));return}e.close();return}let a=(o+=n).match(d);for(;a;){try{r=JSON.parse(a[1])}catch(n){e.error(new t(`Error parsing JSON response: "${a[1]}"`));return}e.enqueue(r),a=(o=o.substring(a[0].length)).match(d)}return s()})}()}})})(e.body.pipeThrough(new TextDecoderStream("utf8",{fatal:!0}))).tee();return{stream:function(e){return function(e,t,n){if(!Symbol.asyncIterator)throw TypeError("Symbol.asyncIterator is not defined.");var o,s=n.apply(e,t||[]),i=[];return o={},r("next"),r("throw"),r("return"),o[Symbol.asyncIterator]=function(){return this},o;function r(e){s[e]&&(o[e]=function(t){return new Promise(function(n,o){i.push([e,t,n,o])>1||a(e,t)})})}function a(e,t){try{var n;(n=s[e](t)).value instanceof c?Promise.resolve(n.value.v).then(l,d):u(i[0][2],n)}catch(e){u(i[0][3],e)}}function l(e){a("next",e)}function d(e){a("throw",e)}function u(e,t){e(t),i.shift(),i.length&&a(i[0][0],i[0][1])}}(this,arguments,function*(){let t=e.getReader();for(;;){let{value:e,done:n}=yield c(t.read());if(n)break;yield yield c(i(e))}})}(n),response:u(o)}}(await s(l,JSON.stringify(r),a))}async function p(e,t,n,r){let a=new o(t,Y.GENERATE_CONTENT,e,!1,r),l=await s(a,JSON.stringify(n),r);return{response:i(await l.json())}}/**
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
 */function f(e){let n=[];if("string"==typeof e)n=[{text:e}];else for(let t of e)"string"==typeof t?n.push({text:t}):n.push(t);return function(e){let n={role:"user",parts:[]},o={role:"function",parts:[]},s=!1,i=!1;for(let t of e)"functionResponse"in t?(o.parts.push(t),i=!0):(n.parts.push(t),s=!0);if(s&&i)throw new t("Within a single message, FunctionResponse cannot be mixed with other type of part in the request for sending chat message.");if(!s&&!i)throw new t("No content is provided for sending chat message.");return s?n:o}(n)}function m(e){return e.contents?e:{contents:[f(e)]}}/**
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
 */let E=["text","inlineData","functionCall","functionResponse"],g={user:["text","inlineData"],function:["functionResponse"],model:["text","functionCall"]},y={user:["model"],function:["model"],model:["user","function"]},C="SILENT_ERROR";class _{constructor(n,o,s,i){this.model=o,this.params=s,this.requestOptions=i,this._history=[],this._sendPromise=Promise.resolve(),this._apiKey=n,(null==s?void 0:s.history)&&(function(n){let o;for(let s of n){let{role:n,parts:i}=s;if(!o&&"user"!==n)throw new t(`First content should be with role 'user', got ${n}`);if(!e.includes(n))throw new t(`Each item should include role field. Got ${n} but valid roles are: ${JSON.stringify(e)}`);if(!Array.isArray(i))throw new t("Content should have 'parts' property with an array of Parts");if(0===i.length)throw new t("Each Content should have at least one part");let r={text:0,inlineData:0,functionCall:0,functionResponse:0};for(let e of i)for(let t of E)t in e&&(r[t]+=1);let a=g[n];for(let e of E)if(!a.includes(e)&&r[e]>0)throw new t(`Content with role '${n}' can't contain '${e}' part`);if(o&&!y[n].includes(o.role))throw new t(`Content with role '${n}' can't follow '${o.role}'. Valid previous roles: ${JSON.stringify(y)}`);o=s}}(s.history),this._history=s.history)}async getHistory(){return await this._sendPromise,this._history}async sendMessage(e){var t,n,o;let s;await this._sendPromise;let i=f(e),r={safetySettings:null===(t=this.params)||void 0===t?void 0:t.safetySettings,generationConfig:null===(n=this.params)||void 0===n?void 0:n.generationConfig,tools:null===(o=this.params)||void 0===o?void 0:o.tools,contents:[...this._history,i]};return this._sendPromise=this._sendPromise.then(()=>p(this._apiKey,this.model,r,this.requestOptions)).then(e=>{var t;if(e.response.candidates&&e.response.candidates.length>0){this._history.push(i);let n=Object.assign({parts:[],role:"model"},null===(t=e.response.candidates)||void 0===t?void 0:t[0].content);this._history.push(n)}else{let t=l(e.response);t&&console.warn(`sendMessage() was unsuccessful. ${t}. Inspect response object for details.`)}s=e}),await this._sendPromise,s}async sendMessageStream(e){var t,n,o;await this._sendPromise;let s=f(e),i={safetySettings:null===(t=this.params)||void 0===t?void 0:t.safetySettings,generationConfig:null===(n=this.params)||void 0===n?void 0:n.generationConfig,tools:null===(o=this.params)||void 0===o?void 0:o.tools,contents:[...this._history,s]},r=h(this._apiKey,this.model,i,this.requestOptions);return this._sendPromise=this._sendPromise.then(()=>r).catch(e=>{throw Error(C)}).then(e=>e.response).then(e=>{if(e.candidates&&e.candidates.length>0){this._history.push(s);let t=Object.assign({},e.candidates[0].content);t.role||(t.role="model"),this._history.push(t)}else{let t=l(e);t&&console.warn(`sendMessageStream() was unsuccessful. ${t}. Inspect response object for details.`)}}).catch(e=>{e.message!==C&&console.error(e)}),r}}/**
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
 */async function T(e,t,n,i){let r=new o(t,Y.COUNT_TOKENS,e,!1,{});return(await s(r,JSON.stringify(Object.assign(Object.assign({},n),{model:t})),i)).json()}/**
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
 */async function O(e,t,n,i){let r=new o(t,Y.EMBED_CONTENT,e,!1,{});return(await s(r,JSON.stringify(n),i)).json()}async function R(e,t,n,i){let r=new o(t,Y.BATCH_EMBED_CONTENTS,e,!1,{}),a=n.requests.map(e=>Object.assign(Object.assign({},e),{model:t}));return(await s(r,JSON.stringify({requests:a}),i)).json()}/**
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
 */class A{constructor(e,t,n){this.apiKey=e,t.model.includes("/")?this.model=t.model:this.model=`models/${t.model}`,this.generationConfig=t.generationConfig||{},this.safetySettings=t.safetySettings||[],this.tools=t.tools,this.requestOptions=n||{}}async generateContent(e){let t=m(e);return p(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools},t),this.requestOptions)}async generateContentStream(e){let t=m(e);return h(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools},t),this.requestOptions)}startChat(e){return new _(this.apiKey,this.model,Object.assign({tools:this.tools},e),this.requestOptions)}async countTokens(e){let t=m(e);return T(this.apiKey,this.model,t)}async embedContent(e){let t="string"==typeof e||Array.isArray(e)?{content:f(e)}:e;return O(this.apiKey,this.model,t)}async batchEmbedContents(e){return R(this.apiKey,this.model,e,this.requestOptions)}}let S=new /**
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
 */class{constructor(e){this.apiKey=e}getGenerativeModel(e,n){if(!e.model)throw new t("Must provide a model name. Example: genai.getGenerativeModel({ model: 'my-model-name' })");return new A(this.apiKey,e,n)}}("AIzaSyCmd3guYR-kltQEsUeapkg66iQq1gE3RlI"),w=document.body,v=document.createElement("button");function N(e,t=3e3){let n=document.createElement("div");n.classList.add("toast"),n.innerText=e;let o=document.createElement("button");o.innerText="X",o.classList.add("close-button"),o.addEventListener("click",function(){n.remove()}),n.appendChild(o),document.body.appendChild(n),setTimeout(()=>{n.remove()},t)}if(v.setAttribute("id","btnNosy"),w.appendChild(v),v.addEventListener("click",()=>{v.toggleAttribute("listener"),v.hasAttribute("listener")?j.start():j.stop()}),"SpeechRecognition"in window||"webkitSpeechRecognition"in window){var I,b,L,M,k,x,B,H,G,P,D,F,K,U,$,Y,j=new(window.SpeechRecognition||window.webkitSpeechRecognition);j.lang="en-US",j.continuous=!1,j.interimResults=!1,j.onresult=function(e){let t=e.results[e.results.length-1][0].transcript;v.removeAttribute("listener"),q(t.toLowerCase())}}async function q(e){let t=S.getGenerativeModel({model:"gemini-pro"});J((await t.generateContent("Give possible voice commands related to linkedin website for the prompt -"+e)).response.text())}async function J(e){console.log("im in link=>",e);try{let t=S.getGenerativeModel({model:"gemini-pro"}),n=(await t.generateContent("Considering the prompt: "+e+", what would be a relevant LinkedIn URL to complete the user's action?")).response.text();console.log("hello this is link=>=>",n);let o=await function(e){console.log("im in extractedlink=>",e);let t=e.match(/https?:\/\/[^\s,]+/gi);return t?t.join(","):"https://www.linkedin.com/"}(n);window.location.href=o}catch(e){console.error("Error generating or handling link:",e)}}document.addEventListener("keydown",function(e){e.ctrlKey&&"Space"===e.code&&v.click()}),document.addEventListener("click",function(e){if(console.log(e.target.className),e.target.classList.contains("artdeco-button__text")||e.target.classList.contains("artdeco-button")||"SPAN"===e.target.tagName&&"Reply"===e.target.textContent.trim()||e.target.classList.contains("artdeco-button__icon")){let e=document.querySelectorAll(".mlA");for(let t=0;t<e.length;t++)if(console.log(e[t]),"true"!==e[t].dataset.sy){let n=document.createElement("div");n.setAttribute("class","comments-comment-box-comment__text-editor"),n.classList.add("wrapAi");let o=document.createElement("button");o.setAttribute("class","aiSearch"),n.appendChild(o),e[t].insertBefore(n,e[t].firstChild),e[t].dataset.sy="true",console.log("btn is creating")}}else if(e.target.classList.contains("ql-container")){let e=document.querySelectorAll(".ql-container"),t=document.createElement("div");t.setAttribute("class","comments-comment-box-comment__text-editor"),t.classList.add("wrapAi");let n=document.createElement("button");n.setAttribute("class","aiSearch"),t.appendChild(n),e.appendChild(t)}});let V="";async function X(){var e=document.getElementById("textInputPop").value;if(""==e){N("Please Query First!");return}let t=await W(e);console.log(t),document.querySelector(".showRes").innerText=t}function Q(){var e=document.querySelector(".showRes").innerText;if(""==e){N("There is nothing to copy");return}navigator.clipboard.writeText(e).then(()=>{N("Copied to clipboard"),e.value="",document.body.removeChild(V)})}async function W(e){let t=document.querySelector(".loader");try{let n=S.getGenerativeModel({model:"gemini-pro"});t.style.display="block";let o=(await n.generateContent("Considering the prompt: "+e+", and return short trimmed ready to paste comment integrated emojeies and match with mood and no markdown ?")).response.text().trim();return t.style.display="none",o}catch(e){console.error("Error generating or handling link:",e)}}document.addEventListener("click",function(e){if(e.target.classList.contains("aiSearch")){(V=document.createElement("div")).classList.add("popup-container"),V.innerHTML=`
    <p class="q-title">Query Here With AI</p>
  <input type="text" id="textInputPop" placeholder="Enter text">
  <p class="showRes"><div class="loader" id="loader"></div> </p>
  <button id="submitBtn">Geminai &#128269;</button>
  <button id="copyBtn">Copy & Close</button>
  <button id="closeBtn">Close</button>
  
`,w.style.position="relative",document.body.appendChild(V);let e=document.getElementById("submitBtn"),t=document.getElementById("copyBtn"),n=document.getElementById("closeBtn");e.addEventListener("click",X),t.addEventListener("click",Q),n.addEventListener("click",function(){document.body.removeChild(V)})}})})();
//# sourceMappingURL=script.js.map
