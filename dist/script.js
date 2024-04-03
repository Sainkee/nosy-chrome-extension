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
 */let e=["user","model","function"];(N=G||(G={})).HARM_CATEGORY_UNSPECIFIED="HARM_CATEGORY_UNSPECIFIED",N.HARM_CATEGORY_HATE_SPEECH="HARM_CATEGORY_HATE_SPEECH",N.HARM_CATEGORY_SEXUALLY_EXPLICIT="HARM_CATEGORY_SEXUALLY_EXPLICIT",N.HARM_CATEGORY_HARASSMENT="HARM_CATEGORY_HARASSMENT",N.HARM_CATEGORY_DANGEROUS_CONTENT="HARM_CATEGORY_DANGEROUS_CONTENT",(I=D||(D={})).HARM_BLOCK_THRESHOLD_UNSPECIFIED="HARM_BLOCK_THRESHOLD_UNSPECIFIED",I.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",I.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",I.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",I.BLOCK_NONE="BLOCK_NONE",(v=P||(P={})).HARM_PROBABILITY_UNSPECIFIED="HARM_PROBABILITY_UNSPECIFIED",v.NEGLIGIBLE="NEGLIGIBLE",v.LOW="LOW",v.MEDIUM="MEDIUM",v.HIGH="HIGH",(b=B||(B={})).BLOCKED_REASON_UNSPECIFIED="BLOCKED_REASON_UNSPECIFIED",b.SAFETY="SAFETY",b.OTHER="OTHER",(M=x||(x={})).FINISH_REASON_UNSPECIFIED="FINISH_REASON_UNSPECIFIED",M.STOP="STOP",M.MAX_TOKENS="MAX_TOKENS",M.SAFETY="SAFETY",M.RECITATION="RECITATION",M.OTHER="OTHER",(L=F||(F={})).TASK_TYPE_UNSPECIFIED="TASK_TYPE_UNSPECIFIED",L.RETRIEVAL_QUERY="RETRIEVAL_QUERY",L.RETRIEVAL_DOCUMENT="RETRIEVAL_DOCUMENT",L.SEMANTIC_SIMILARITY="SEMANTIC_SIMILARITY",L.CLASSIFICATION="CLASSIFICATION",L.CLUSTERING="CLUSTERING",(k=K||(K={})).STRING="STRING",k.NUMBER="NUMBER",k.INTEGER="INTEGER",k.BOOLEAN="BOOLEAN",k.ARRAY="ARRAY",k.OBJECT="OBJECT";/**
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
 */class t extends Error{constructor(e){super(`[GoogleGenerativeAI Error]: ${e}`)}}class n extends t{constructor(e,t){super(e),this.response=t}}(H=U||(U={})).GENERATE_CONTENT="generateContent",H.STREAM_GENERATE_CONTENT="streamGenerateContent",H.COUNT_TOKENS="countTokens",H.EMBED_CONTENT="embedContent",H.BATCH_EMBED_CONTENTS="batchEmbedContents";class s{constructor(e,t,n,s,i){this.model=e,this.task=t,this.apiKey=n,this.stream=s,this.requestOptions=i}toString(){var e;let t=(null===(e=this.requestOptions)||void 0===e?void 0:e.apiVersion)||"v1",n=`https://generativelanguage.googleapis.com/${t}/${this.model}:${this.task}`;return this.stream&&(n+="?alt=sse"),n}}async function i(e,n,s){let i;try{if(!(i=await fetch(e.toString(),Object.assign(Object.assign({},function(e){let t={};if((null==e?void 0:e.timeout)>=0){let n=new AbortController,s=n.signal;setTimeout(()=>n.abort(),e.timeout),t.signal=s}return t}(s)),{method:"POST",headers:{"Content-Type":"application/json","x-goog-api-client":"genai-js/0.3.1","x-goog-api-key":e.apiKey},body:n}))).ok){let e="";try{let t=await i.json();e=t.error.message,t.error.details&&(e+=` ${JSON.stringify(t.error.details)}`)}catch(e){}throw Error(`[${i.status} ${i.statusText}] ${e}`)}}catch(s){let n=new t(`Error fetching from ${e.toString()}: ${s.message}`);throw n.stack=s.stack,n}return i}/**
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
 */function o(e){return e.text=()=>{if(e.candidates&&e.candidates.length>0){var t,s,i,o;if(e.candidates.length>1&&console.warn(`This response had ${e.candidates.length} candidates. Returning text from the first candidate only. Access response.candidates directly to use the other candidates.`),a(e.candidates[0]))throw new n(`${l(e)}`,e);return(null===(o=null===(i=null===(s=null===(t=e.candidates)||void 0===t?void 0:t[0].content)||void 0===s?void 0:s.parts)||void 0===i?void 0:i[0])||void 0===o?void 0:o.text)?e.candidates[0].content.parts.map(({text:e})=>e).join(""):""}if(e.promptFeedback)throw new n(`Text not available. ${l(e)}`,e);return""},e.functionCall=()=>{if(e.candidates&&e.candidates.length>0){var t,s,i,o;if(e.candidates.length>1&&console.warn(`This response had ${e.candidates.length} candidates. Returning function call from the first candidate only. Access response.candidates directly to use the other candidates.`),a(e.candidates[0]))throw new n(`${l(e)}`,e);return null===(o=null===(i=null===(s=null===(t=e.candidates)||void 0===t?void 0:t[0].content)||void 0===s?void 0:s.parts)||void 0===i?void 0:i[0])||void 0===o?void 0:o.functionCall}if(e.promptFeedback)throw new n(`Function call not available. ${l(e)}`,e)},e}let r=[x.RECITATION,x.SAFETY];function a(e){return!!e.finishReason&&r.includes(e.finishReason)}function l(e){var t,n,s;let i="";if((!e.candidates||0===e.candidates.length)&&e.promptFeedback)i+="Response was blocked",(null===(t=e.promptFeedback)||void 0===t?void 0:t.blockReason)&&(i+=` due to ${e.promptFeedback.blockReason}`),(null===(n=e.promptFeedback)||void 0===n?void 0:n.blockReasonMessage)&&(i+=`: ${e.promptFeedback.blockReasonMessage}`);else if(null===(s=e.candidates)||void 0===s?void 0:s[0]){let t=e.candidates[0];a(t)&&(i+=`Candidate was blocked due to ${t.finishReason}`,t.finishMessage&&(i+=`: ${t.finishMessage}`))}return i}function c(e){return this instanceof c?(this.v=e,this):new c(e)}"function"==typeof SuppressedError&&SuppressedError;/**
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
 */let d=/^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;async function u(e){let t=[],n=e.getReader();for(;;){let{done:e,value:s}=await n.read();if(e)return o(function(e){let t=e[e.length-1],n={promptFeedback:null==t?void 0:t.promptFeedback};for(let t of e)if(t.candidates)for(let e of t.candidates){let t=e.index;if(n.candidates||(n.candidates=[]),n.candidates[t]||(n.candidates[t]={index:e.index}),n.candidates[t].citationMetadata=e.citationMetadata,n.candidates[t].finishReason=e.finishReason,n.candidates[t].finishMessage=e.finishMessage,n.candidates[t].safetyRatings=e.safetyRatings,e.content&&e.content.parts){n.candidates[t].content||(n.candidates[t].content={role:e.content.role||"user",parts:[]});let s={};for(let i of e.content.parts)i.text&&(s.text=i.text),i.functionCall&&(s.functionCall=i.functionCall),0===Object.keys(s).length&&(s.text=""),n.candidates[t].content.parts.push(s)}}return n}(t));t.push(s)}}/**
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
 */async function h(e,n,r,a){let l=new s(n,U.STREAM_GENERATE_CONTENT,e,!0,a);return function(e){let[n,s]=(function(e){let n=e.getReader();return new ReadableStream({start(e){let s="";return function i(){return n.read().then(({value:n,done:o})=>{let r;if(o){if(s.trim()){e.error(new t("Failed to parse stream"));return}e.close();return}let a=(s+=n).match(d);for(;a;){try{r=JSON.parse(a[1])}catch(n){e.error(new t(`Error parsing JSON response: "${a[1]}"`));return}e.enqueue(r),a=(s=s.substring(a[0].length)).match(d)}return i()})}()}})})(e.body.pipeThrough(new TextDecoderStream("utf8",{fatal:!0}))).tee();return{stream:function(e){return function(e,t,n){if(!Symbol.asyncIterator)throw TypeError("Symbol.asyncIterator is not defined.");var s,i=n.apply(e,t||[]),o=[];return s={},r("next"),r("throw"),r("return"),s[Symbol.asyncIterator]=function(){return this},s;function r(e){i[e]&&(s[e]=function(t){return new Promise(function(n,s){o.push([e,t,n,s])>1||a(e,t)})})}function a(e,t){try{var n;(n=i[e](t)).value instanceof c?Promise.resolve(n.value.v).then(l,d):u(o[0][2],n)}catch(e){u(o[0][3],e)}}function l(e){a("next",e)}function d(e){a("throw",e)}function u(e,t){e(t),o.shift(),o.length&&a(o[0][0],o[0][1])}}(this,arguments,function*(){let t=e.getReader();for(;;){let{value:e,done:n}=yield c(t.read());if(n)break;yield yield c(o(e))}})}(n),response:u(s)}}(await i(l,JSON.stringify(r),a))}async function f(e,t,n,r){let a=new s(t,U.GENERATE_CONTENT,e,!1,r),l=await i(a,JSON.stringify(n),r);return{response:o(await l.json())}}/**
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
 */function E(e){let n=[];if("string"==typeof e)n=[{text:e}];else for(let t of e)"string"==typeof t?n.push({text:t}):n.push(t);return function(e){let n={role:"user",parts:[]},s={role:"function",parts:[]},i=!1,o=!1;for(let t of e)"functionResponse"in t?(s.parts.push(t),o=!0):(n.parts.push(t),i=!0);if(i&&o)throw new t("Within a single message, FunctionResponse cannot be mixed with other type of part in the request for sending chat message.");if(!i&&!o)throw new t("No content is provided for sending chat message.");return i?n:s}(n)}function p(e){return e.contents?e:{contents:[E(e)]}}/**
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
 */let g=["text","inlineData","functionCall","functionResponse"],m={user:["text","inlineData"],function:["functionResponse"],model:["text","functionCall"]},_={user:["model"],function:["model"],model:["user","function"]},O="SILENT_ERROR";class y{constructor(n,s,i,o){this.model=s,this.params=i,this.requestOptions=o,this._history=[],this._sendPromise=Promise.resolve(),this._apiKey=n,(null==i?void 0:i.history)&&(function(n){let s;for(let i of n){let{role:n,parts:o}=i;if(!s&&"user"!==n)throw new t(`First content should be with role 'user', got ${n}`);if(!e.includes(n))throw new t(`Each item should include role field. Got ${n} but valid roles are: ${JSON.stringify(e)}`);if(!Array.isArray(o))throw new t("Content should have 'parts' property with an array of Parts");if(0===o.length)throw new t("Each Content should have at least one part");let r={text:0,inlineData:0,functionCall:0,functionResponse:0};for(let e of o)for(let t of g)t in e&&(r[t]+=1);let a=m[n];for(let e of g)if(!a.includes(e)&&r[e]>0)throw new t(`Content with role '${n}' can't contain '${e}' part`);if(s&&!_[n].includes(s.role))throw new t(`Content with role '${n}' can't follow '${s.role}'. Valid previous roles: ${JSON.stringify(_)}`);s=i}}(i.history),this._history=i.history)}async getHistory(){return await this._sendPromise,this._history}async sendMessage(e){var t,n,s;let i;await this._sendPromise;let o=E(e),r={safetySettings:null===(t=this.params)||void 0===t?void 0:t.safetySettings,generationConfig:null===(n=this.params)||void 0===n?void 0:n.generationConfig,tools:null===(s=this.params)||void 0===s?void 0:s.tools,contents:[...this._history,o]};return this._sendPromise=this._sendPromise.then(()=>f(this._apiKey,this.model,r,this.requestOptions)).then(e=>{var t;if(e.response.candidates&&e.response.candidates.length>0){this._history.push(o);let n=Object.assign({parts:[],role:"model"},null===(t=e.response.candidates)||void 0===t?void 0:t[0].content);this._history.push(n)}else{let t=l(e.response);t&&console.warn(`sendMessage() was unsuccessful. ${t}. Inspect response object for details.`)}i=e}),await this._sendPromise,i}async sendMessageStream(e){var t,n,s;await this._sendPromise;let i=E(e),o={safetySettings:null===(t=this.params)||void 0===t?void 0:t.safetySettings,generationConfig:null===(n=this.params)||void 0===n?void 0:n.generationConfig,tools:null===(s=this.params)||void 0===s?void 0:s.tools,contents:[...this._history,i]},r=h(this._apiKey,this.model,o,this.requestOptions);return this._sendPromise=this._sendPromise.then(()=>r).catch(e=>{throw Error(O)}).then(e=>e.response).then(e=>{if(e.candidates&&e.candidates.length>0){this._history.push(i);let t=Object.assign({},e.candidates[0].content);t.role||(t.role="model"),this._history.push(t)}else{let t=l(e);t&&console.warn(`sendMessageStream() was unsuccessful. ${t}. Inspect response object for details.`)}}).catch(e=>{e.message!==O&&console.error(e)}),r}}/**
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
 */async function C(e,t,n,o){let r=new s(t,U.COUNT_TOKENS,e,!1,{});return(await i(r,JSON.stringify(Object.assign(Object.assign({},n),{model:t})),o)).json()}/**
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
 */async function T(e,t,n,o){let r=new s(t,U.EMBED_CONTENT,e,!1,{});return(await i(r,JSON.stringify(n),o)).json()}async function R(e,t,n,o){let r=new s(t,U.BATCH_EMBED_CONTENTS,e,!1,{}),a=n.requests.map(e=>Object.assign(Object.assign({},e),{model:t}));return(await i(r,JSON.stringify({requests:a}),o)).json()}/**
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
 */class A{constructor(e,t,n){this.apiKey=e,t.model.includes("/")?this.model=t.model:this.model=`models/${t.model}`,this.generationConfig=t.generationConfig||{},this.safetySettings=t.safetySettings||[],this.tools=t.tools,this.requestOptions=n||{}}async generateContent(e){let t=p(e);return f(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools},t),this.requestOptions)}async generateContentStream(e){let t=p(e);return h(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools},t),this.requestOptions)}startChat(e){return new y(this.apiKey,this.model,Object.assign({tools:this.tools},e),this.requestOptions)}async countTokens(e){let t=p(e);return C(this.apiKey,this.model,t)}async embedContent(e){let t="string"==typeof e||Array.isArray(e)?{content:E(e)}:e;return T(this.apiKey,this.model,t)}async batchEmbedContents(e){return R(this.apiKey,this.model,e,this.requestOptions)}}let S=document.body,w=document.createElement("button");if(w.setAttribute("id","btnNosy"),S.appendChild(w),w.addEventListener("click",()=>{w.toggleAttribute("listener"),w.hasAttribute("listener")?$.start():$.stop()}),"SpeechRecognition"in window||"webkitSpeechRecognition"in window){var N,I,v,b,M,L,k,H,G,D,P,B,x,F,K,U,$=new(window.SpeechRecognition||window.webkitSpeechRecognition);$.lang="en-US",$.continuous=!1,$.interimResults=!1,$.onresult=function(e){let t=e.results[e.results.length-1][0].transcript;w.removeAttribute("listener"),Y(t.toLowerCase())}}async function Y(e){let t=j.getGenerativeModel({model:"gemini-pro"});q((await t.generateContent("Give possible voice commands related to linkedin website for the prompt -"+e)).response.text())}let j=new /**
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
 */class{constructor(e){this.apiKey=e}getGenerativeModel(e,n){if(!e.model)throw new t("Must provide a model name. Example: genai.getGenerativeModel({ model: 'my-model-name' })");return new A(this.apiKey,e,n)}}("AIzaSyCmd3guYR-kltQEsUeapkg66iQq1gE3RlI");async function q(e){console.log("im in link=>",e);try{let t=j.getGenerativeModel({model:"gemini-pro"}),n=(await t.generateContent("Considering the prompt: "+e+", what would be a relevant LinkedIn URL to complete the user's action?")).response.text();console.log("hello this is link=>=>",n);let s=await function(e){console.log("im in extractedlink=>",e);let t=e.match(/https?:\/\/[^\s,]+/gi);return t?t.join(","):"https://www.linkedin.com/"}(n);window.location.href=s}catch(e){console.error("Error generating or handling link:",e)}}document.addEventListener("keydown",function(e){e.ctrlKey&&"Space"===e.code&&w.click()}),document.addEventListener("click",function(e){if(console.log(e.target.className),e.target.classList.contains("artdeco-button__text")){let e=document.querySelectorAll(".mlA");for(let t=0;t<e.length;t++)if(console.log(e[t]),"true"!==e[t].dataset.sy){let n=document.createElement("div");n.setAttribute("class","comments-comment-box-comment__text-editor"),n.classList.add("wrapAi");let s=document.createElement("button");s.setAttribute("class","aiSearch"),n.appendChild(s),e[t].insertBefore(n,e[t].firstChild),e[t].dataset.sy="true",console.log("btn is creating")}}}),document.addEventListener("click",function(e){e.target.classList.contains("aiSearch")})})();
//# sourceMappingURL=script.js.map
