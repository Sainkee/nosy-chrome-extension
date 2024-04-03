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
 */let t=["user","model","function"];(N=H||(H={})).HARM_CATEGORY_UNSPECIFIED="HARM_CATEGORY_UNSPECIFIED",N.HARM_CATEGORY_HATE_SPEECH="HARM_CATEGORY_HATE_SPEECH",N.HARM_CATEGORY_SEXUALLY_EXPLICIT="HARM_CATEGORY_SEXUALLY_EXPLICIT",N.HARM_CATEGORY_HARASSMENT="HARM_CATEGORY_HARASSMENT",N.HARM_CATEGORY_DANGEROUS_CONTENT="HARM_CATEGORY_DANGEROUS_CONTENT",(I=x||(x={})).HARM_BLOCK_THRESHOLD_UNSPECIFIED="HARM_BLOCK_THRESHOLD_UNSPECIFIED",I.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",I.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",I.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",I.BLOCK_NONE="BLOCK_NONE",(v=G||(G={})).HARM_PROBABILITY_UNSPECIFIED="HARM_PROBABILITY_UNSPECIFIED",v.NEGLIGIBLE="NEGLIGIBLE",v.LOW="LOW",v.MEDIUM="MEDIUM",v.HIGH="HIGH",(b=P||(P={})).BLOCKED_REASON_UNSPECIFIED="BLOCKED_REASON_UNSPECIFIED",b.SAFETY="SAFETY",b.OTHER="OTHER",(L=D||(D={})).FINISH_REASON_UNSPECIFIED="FINISH_REASON_UNSPECIFIED",L.STOP="STOP",L.MAX_TOKENS="MAX_TOKENS",L.SAFETY="SAFETY",L.RECITATION="RECITATION",L.OTHER="OTHER",(M=F||(F={})).TASK_TYPE_UNSPECIFIED="TASK_TYPE_UNSPECIFIED",M.RETRIEVAL_QUERY="RETRIEVAL_QUERY",M.RETRIEVAL_DOCUMENT="RETRIEVAL_DOCUMENT",M.SEMANTIC_SIMILARITY="SEMANTIC_SIMILARITY",M.CLASSIFICATION="CLASSIFICATION",M.CLUSTERING="CLUSTERING",(B=K||(K={})).STRING="STRING",B.NUMBER="NUMBER",B.INTEGER="INTEGER",B.BOOLEAN="BOOLEAN",B.ARRAY="ARRAY",B.OBJECT="OBJECT";/**
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
 */class e extends Error{constructor(t){super(`[GoogleGenerativeAI Error]: ${t}`)}}class n extends e{constructor(t,e){super(t),this.response=e}}(k=U||(U={})).GENERATE_CONTENT="generateContent",k.STREAM_GENERATE_CONTENT="streamGenerateContent",k.COUNT_TOKENS="countTokens",k.EMBED_CONTENT="embedContent",k.BATCH_EMBED_CONTENTS="batchEmbedContents";class s{constructor(t,e,n,s,i){this.model=t,this.task=e,this.apiKey=n,this.stream=s,this.requestOptions=i}toString(){var t;let e=(null===(t=this.requestOptions)||void 0===t?void 0:t.apiVersion)||"v1",n=`https://generativelanguage.googleapis.com/${e}/${this.model}:${this.task}`;return this.stream&&(n+="?alt=sse"),n}}async function i(t,n,s){let i;try{if(!(i=await fetch(t.toString(),Object.assign(Object.assign({},function(t){let e={};if((null==t?void 0:t.timeout)>=0){let n=new AbortController,s=n.signal;setTimeout(()=>n.abort(),t.timeout),e.signal=s}return e}(s)),{method:"POST",headers:{"Content-Type":"application/json","x-goog-api-client":"genai-js/0.3.1","x-goog-api-key":t.apiKey},body:n}))).ok){let t="";try{let e=await i.json();t=e.error.message,e.error.details&&(t+=` ${JSON.stringify(e.error.details)}`)}catch(t){}throw Error(`[${i.status} ${i.statusText}] ${t}`)}}catch(s){let n=new e(`Error fetching from ${t.toString()}: ${s.message}`);throw n.stack=s.stack,n}return i}/**
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
 */function o(t){return t.text=()=>{if(t.candidates&&t.candidates.length>0){var e,s,i,o;if(t.candidates.length>1&&console.warn(`This response had ${t.candidates.length} candidates. Returning text from the first candidate only. Access response.candidates directly to use the other candidates.`),r(t.candidates[0]))throw new n(`${l(t)}`,t);return(null===(o=null===(i=null===(s=null===(e=t.candidates)||void 0===e?void 0:e[0].content)||void 0===s?void 0:s.parts)||void 0===i?void 0:i[0])||void 0===o?void 0:o.text)?t.candidates[0].content.parts.map(({text:t})=>t).join(""):""}if(t.promptFeedback)throw new n(`Text not available. ${l(t)}`,t);return""},t.functionCall=()=>{if(t.candidates&&t.candidates.length>0){var e,s,i,o;if(t.candidates.length>1&&console.warn(`This response had ${t.candidates.length} candidates. Returning function call from the first candidate only. Access response.candidates directly to use the other candidates.`),r(t.candidates[0]))throw new n(`${l(t)}`,t);return null===(o=null===(i=null===(s=null===(e=t.candidates)||void 0===e?void 0:e[0].content)||void 0===s?void 0:s.parts)||void 0===i?void 0:i[0])||void 0===o?void 0:o.functionCall}if(t.promptFeedback)throw new n(`Function call not available. ${l(t)}`,t)},t}let a=[D.RECITATION,D.SAFETY];function r(t){return!!t.finishReason&&a.includes(t.finishReason)}function l(t){var e,n,s;let i="";if((!t.candidates||0===t.candidates.length)&&t.promptFeedback)i+="Response was blocked",(null===(e=t.promptFeedback)||void 0===e?void 0:e.blockReason)&&(i+=` due to ${t.promptFeedback.blockReason}`),(null===(n=t.promptFeedback)||void 0===n?void 0:n.blockReasonMessage)&&(i+=`: ${t.promptFeedback.blockReasonMessage}`);else if(null===(s=t.candidates)||void 0===s?void 0:s[0]){let e=t.candidates[0];r(e)&&(i+=`Candidate was blocked due to ${e.finishReason}`,e.finishMessage&&(i+=`: ${e.finishMessage}`))}return i}function c(t){return this instanceof c?(this.v=t,this):new c(t)}"function"==typeof SuppressedError&&SuppressedError;/**
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
 */let d=/^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;async function u(t){let e=[],n=t.getReader();for(;;){let{done:t,value:s}=await n.read();if(t)return o(function(t){let e=t[t.length-1],n={promptFeedback:null==e?void 0:e.promptFeedback};for(let e of t)if(e.candidates)for(let t of e.candidates){let e=t.index;if(n.candidates||(n.candidates=[]),n.candidates[e]||(n.candidates[e]={index:t.index}),n.candidates[e].citationMetadata=t.citationMetadata,n.candidates[e].finishReason=t.finishReason,n.candidates[e].finishMessage=t.finishMessage,n.candidates[e].safetyRatings=t.safetyRatings,t.content&&t.content.parts){n.candidates[e].content||(n.candidates[e].content={role:t.content.role||"user",parts:[]});let s={};for(let i of t.content.parts)i.text&&(s.text=i.text),i.functionCall&&(s.functionCall=i.functionCall),0===Object.keys(s).length&&(s.text=""),n.candidates[e].content.parts.push(s)}}return n}(e));e.push(s)}}/**
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
 */async function h(t,n,a,r){let l=new s(n,U.STREAM_GENERATE_CONTENT,t,!0,r);return function(t){let[n,s]=(function(t){let n=t.getReader();return new ReadableStream({start(t){let s="";return function i(){return n.read().then(({value:n,done:o})=>{let a;if(o){if(s.trim()){t.error(new e("Failed to parse stream"));return}t.close();return}let r=(s+=n).match(d);for(;r;){try{a=JSON.parse(r[1])}catch(n){t.error(new e(`Error parsing JSON response: "${r[1]}"`));return}t.enqueue(a),r=(s=s.substring(r[0].length)).match(d)}return i()})}()}})})(t.body.pipeThrough(new TextDecoderStream("utf8",{fatal:!0}))).tee();return{stream:function(t){return function(t,e,n){if(!Symbol.asyncIterator)throw TypeError("Symbol.asyncIterator is not defined.");var s,i=n.apply(t,e||[]),o=[];return s={},a("next"),a("throw"),a("return"),s[Symbol.asyncIterator]=function(){return this},s;function a(t){i[t]&&(s[t]=function(e){return new Promise(function(n,s){o.push([t,e,n,s])>1||r(t,e)})})}function r(t,e){try{var n;(n=i[t](e)).value instanceof c?Promise.resolve(n.value.v).then(l,d):u(o[0][2],n)}catch(t){u(o[0][3],t)}}function l(t){r("next",t)}function d(t){r("throw",t)}function u(t,e){t(e),o.shift(),o.length&&r(o[0][0],o[0][1])}}(this,arguments,function*(){let e=t.getReader();for(;;){let{value:t,done:n}=yield c(e.read());if(n)break;yield yield c(o(t))}})}(n),response:u(s)}}(await i(l,JSON.stringify(a),r))}async function f(t,e,n,a){let r=new s(e,U.GENERATE_CONTENT,t,!1,a),l=await i(r,JSON.stringify(n),a);return{response:o(await l.json())}}/**
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
 */function p(t){let n=[];if("string"==typeof t)n=[{text:t}];else for(let e of t)"string"==typeof e?n.push({text:e}):n.push(e);return function(t){let n={role:"user",parts:[]},s={role:"function",parts:[]},i=!1,o=!1;for(let e of t)"functionResponse"in e?(s.parts.push(e),o=!0):(n.parts.push(e),i=!0);if(i&&o)throw new e("Within a single message, FunctionResponse cannot be mixed with other type of part in the request for sending chat message.");if(!i&&!o)throw new e("No content is provided for sending chat message.");return i?n:s}(n)}function E(t){return t.contents?t:{contents:[p(t)]}}/**
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
 */let g=["text","inlineData","functionCall","functionResponse"],m={user:["text","inlineData"],function:["functionResponse"],model:["text","functionCall"]},y={user:["model"],function:["model"],model:["user","function"]},C="SILENT_ERROR";class _{constructor(n,s,i,o){this.model=s,this.params=i,this.requestOptions=o,this._history=[],this._sendPromise=Promise.resolve(),this._apiKey=n,(null==i?void 0:i.history)&&(function(n){let s;for(let i of n){let{role:n,parts:o}=i;if(!s&&"user"!==n)throw new e(`First content should be with role 'user', got ${n}`);if(!t.includes(n))throw new e(`Each item should include role field. Got ${n} but valid roles are: ${JSON.stringify(t)}`);if(!Array.isArray(o))throw new e("Content should have 'parts' property with an array of Parts");if(0===o.length)throw new e("Each Content should have at least one part");let a={text:0,inlineData:0,functionCall:0,functionResponse:0};for(let t of o)for(let e of g)e in t&&(a[e]+=1);let r=m[n];for(let t of g)if(!r.includes(t)&&a[t]>0)throw new e(`Content with role '${n}' can't contain '${t}' part`);if(s&&!y[n].includes(s.role))throw new e(`Content with role '${n}' can't follow '${s.role}'. Valid previous roles: ${JSON.stringify(y)}`);s=i}}(i.history),this._history=i.history)}async getHistory(){return await this._sendPromise,this._history}async sendMessage(t){var e,n,s;let i;await this._sendPromise;let o=p(t),a={safetySettings:null===(e=this.params)||void 0===e?void 0:e.safetySettings,generationConfig:null===(n=this.params)||void 0===n?void 0:n.generationConfig,tools:null===(s=this.params)||void 0===s?void 0:s.tools,contents:[...this._history,o]};return this._sendPromise=this._sendPromise.then(()=>f(this._apiKey,this.model,a,this.requestOptions)).then(t=>{var e;if(t.response.candidates&&t.response.candidates.length>0){this._history.push(o);let n=Object.assign({parts:[],role:"model"},null===(e=t.response.candidates)||void 0===e?void 0:e[0].content);this._history.push(n)}else{let e=l(t.response);e&&console.warn(`sendMessage() was unsuccessful. ${e}. Inspect response object for details.`)}i=t}),await this._sendPromise,i}async sendMessageStream(t){var e,n,s;await this._sendPromise;let i=p(t),o={safetySettings:null===(e=this.params)||void 0===e?void 0:e.safetySettings,generationConfig:null===(n=this.params)||void 0===n?void 0:n.generationConfig,tools:null===(s=this.params)||void 0===s?void 0:s.tools,contents:[...this._history,i]},a=h(this._apiKey,this.model,o,this.requestOptions);return this._sendPromise=this._sendPromise.then(()=>a).catch(t=>{throw Error(C)}).then(t=>t.response).then(t=>{if(t.candidates&&t.candidates.length>0){this._history.push(i);let e=Object.assign({},t.candidates[0].content);e.role||(e.role="model"),this._history.push(e)}else{let e=l(t);e&&console.warn(`sendMessageStream() was unsuccessful. ${e}. Inspect response object for details.`)}}).catch(t=>{t.message!==C&&console.error(t)}),a}}/**
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
 */async function O(t,e,n,o){let a=new s(e,U.COUNT_TOKENS,t,!1,{});return(await i(a,JSON.stringify(Object.assign(Object.assign({},n),{model:e})),o)).json()}/**
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
 */async function T(t,e,n,o){let a=new s(e,U.EMBED_CONTENT,t,!1,{});return(await i(a,JSON.stringify(n),o)).json()}async function R(t,e,n,o){let a=new s(e,U.BATCH_EMBED_CONTENTS,t,!1,{}),r=n.requests.map(t=>Object.assign(Object.assign({},t),{model:e}));return(await i(a,JSON.stringify({requests:r}),o)).json()}/**
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
 */class S{constructor(t,e,n){this.apiKey=t,e.model.includes("/")?this.model=e.model:this.model=`models/${e.model}`,this.generationConfig=e.generationConfig||{},this.safetySettings=e.safetySettings||[],this.tools=e.tools,this.requestOptions=n||{}}async generateContent(t){let e=E(t);return f(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools},e),this.requestOptions)}async generateContentStream(t){let e=E(t);return h(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools},e),this.requestOptions)}startChat(t){return new _(this.apiKey,this.model,Object.assign({tools:this.tools},t),this.requestOptions)}async countTokens(t){let e=E(t);return O(this.apiKey,this.model,e)}async embedContent(t){let e="string"==typeof t||Array.isArray(t)?{content:p(t)}:t;return T(this.apiKey,this.model,e)}async batchEmbedContents(t){return R(this.apiKey,this.model,t,this.requestOptions)}}let A=document.body,w=document.createElement("button");if(w.setAttribute("id","btnNosy"),A.appendChild(w),w.addEventListener("click",()=>{w.toggleAttribute("listener"),w.hasAttribute("listener")?$.start():$.stop()}),"SpeechRecognition"in window||"webkitSpeechRecognition"in window){var N,I,v,b,L,M,B,k,H,x,G,P,D,F,K,U,$=new(window.SpeechRecognition||window.webkitSpeechRecognition);$.lang="en-US",$.continuous=!1,$.interimResults=!1,$.onresult=function(t){let e=t.results[t.results.length-1][0].transcript;w.removeAttribute("listener"),Y(e.toLowerCase())}}async function Y(t){let e=j.getGenerativeModel({model:"gemini-pro"});q((await e.generateContent("Give possible voice commands related to linkedin website for the prompt -"+t)).response.text())}let j=new /**
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
 */class{constructor(t){this.apiKey=t}getGenerativeModel(t,n){if(!t.model)throw new e("Must provide a model name. Example: genai.getGenerativeModel({ model: 'my-model-name' })");return new S(this.apiKey,t,n)}}("AIzaSyCmd3guYR-kltQEsUeapkg66iQq1gE3RlI");async function q(t){console.log("im in link=>",t);try{let e=j.getGenerativeModel({model:"gemini-pro"}),n=(await e.generateContent("Considering the prompt: "+t+", what would be a relevant LinkedIn URL to complete the user's action?")).response.text();console.log("hello this is link=>=>",n);let s=await function(t){console.log("im in extractedlink=>",t);let e=t.match(/https?:\/\/[^\s,]+/gi);return e?e.join(","):"https://www.linkedin.com/"}(n);window.location.href=s}catch(t){console.error("Error generating or handling link:",t)}}function J(){console.log("Submit"),alert("You entered: "+document.getElementById("textInputPop").value)}function V(){var t=document.getElementById("textInputPop").value;navigator.clipboard.writeText(t).then(()=>{alert("Copied to clipboard"+t)})}document.addEventListener("keydown",function(t){t.ctrlKey&&"Space"===t.code&&w.click()}),document.addEventListener("click",function(t){if(console.log(t.target.className),t.target.classList.contains("artdeco-button__text")||t.target.classList.contains("artdeco-button")){let t=document.querySelectorAll(".mlA");for(let e=0;e<t.length;e++)if(console.log(t[e]),"true"!==t[e].dataset.sy){let n=document.createElement("div");n.setAttribute("class","comments-comment-box-comment__text-editor"),n.classList.add("wrapAi");let s=document.createElement("button");s.setAttribute("class","aiSearch"),n.appendChild(s),t[e].insertBefore(n,t[e].firstChild),t[e].dataset.sy="true",console.log("btn is creating")}}}),document.addEventListener("click",function(t){if(t.target.classList.contains("aiSearch")){let t=document.createElement("div");t.classList.add("popup-container"),t.innerHTML=`
  <input type="text" id="textInputPop" placeholder="Enter text">
  <button id="submitBtn">Geminai &#128269;</button>
  <button id="copyBtn">Copy to Clipboard</button>
  <button id="closeBtn">Cancel</button>
`,A.style.position="relative",document.body.appendChild(t);let e=document.getElementById("submitBtn"),n=document.getElementById("copyBtn"),s=document.getElementById("closeBtn");e.addEventListener("click",J),n.addEventListener("click",V),s.addEventListener("click",function(){document.body.removeChild(t)})}})})();
//# sourceMappingURL=script.js.map
