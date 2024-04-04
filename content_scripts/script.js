import { GoogleGenerativeAI } from "@google/generative-ai";
const API_KEY = "AIzaSyCmd3guYR-kltQEsUeapkg66iQq1gE3RlI";
const genAI = new GoogleGenerativeAI(API_KEY);

let body = document.body;
let btn = document.createElement("button");
btn.setAttribute("id", "btnNosy");
body.appendChild(btn);
// ========================================================================

function createToast(message, duration = 3000) {
  // 1. Create the toast element dynamically
  const toast = document.createElement("div");
  toast.classList.add("toast"); // Add a class for styling (CSS needed later)
  toast.innerText = message;

  // 2. (Optional) Create a close button element
  const closeButton = document.createElement("button");
  closeButton.innerText = "X";
  closeButton.classList.add("close-button"); // Add a class for styling (CSS needed later)
  closeButton.addEventListener("click", function () {
    toast.remove();
  });
  toast.appendChild(closeButton); // Add the close button to the toast

  // 3. Append the toast to the body (consider positioning)
  document.body.appendChild(toast);

  // 4. Set a timeout to remove the toast automatically
  setTimeout(() => {
    toast.remove();
  }, duration);
}

// =====================================================================

btn.addEventListener("click", () => {
  btn.toggleAttribute("listener");
  if (btn.hasAttribute("listener")) {
    recognition.start();
  } else {
    recognition.stop();
  }
});

if ("SpeechRecognition" in window || "webkitSpeechRecognition" in window) {
  // Create a new SpeechRecognition object
  var recognition = new (window.SpeechRecognition ||
    window.webkitSpeechRecognition)();
  recognition.lang = "en-US";
  // for only one time listen and stop
  recognition.continuous = false;
  // result gives once after process
  recognition.interimResults = false;

  recognition.onresult = function (event) {
    let data = event.results[event.results.length - 1][0].transcript;

    btn.removeAttribute("listener");
    let recognizedText = data.toLowerCase();
    generateResponse(recognizedText);
  };
}

async function generateResponse(prompt) {
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  const result = await model.generateContent(
    "Give possible voice commands related to linkedin website for the prompt -" +
      prompt
  );

  let response = result.response;
  let responseText = response.text();

  generateLink(responseText);
}

// ai integration parts

async function generateLink(Linkprompt) {
  console.log("im in link=>", Linkprompt);

  try {
    // Initialize the model (assuming genAI is already defined outside this function)
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    // Generate content based on the prompt
    const result = await model.generateContent(
      "Considering the prompt: " +
        Linkprompt +
        ", what would be a relevant LinkedIn URL to complete the user's action?"
    );

    // Extract the response text
    const responseLink = result.response.text();
    console.log("hello this is link=>=>", responseLink);

    // Extract links from the response text
    const linksToShow = await extractLinks(responseLink);

    window.location.href = linksToShow;
  } catch (error) {
    console.error("Error generating or handling link:", error);
    // Handle errors appropriately
  }
}

function extractLinks(responseText) {
  console.log("im in extractedlink=>", responseText);
  // Define a regular expression pattern to match URLs
  const linkPattern = /https?:\/\/[^\s,]+/gi;

  // Extract links from the response text using the pattern
  const links = responseText.match(linkPattern);

  // Join the extracted links into a single string separated by commas
  const formattedLinks = links ? links.join(",") : "https://www.linkedin.com/";

  // Return the formatted links
  return formattedLinks;
}

function handleKeyDown(event) {
  // Check if ctrl and Space keys are pressed simultaneously
  if (event.ctrlKey && event.code === "Space") {
    // Trigger button click event
    btn.click();
  }
}

// Add event listener for keydown event
document.addEventListener("keydown", handleKeyDown);

// ============================================================================================================================================================

document.addEventListener("click", function (e) {
  console.log(e.target.className);

  if (
    e.target.classList.contains("artdeco-button__text") ||
    e.target.classList.contains("artdeco-button") ||
    (e.target.tagName === "SPAN" && e.target.textContent.trim() === "Reply") ||
    e.target.classList.contains("artdeco-button__icon")
  ) {
    let alldiv = document.querySelectorAll(".mlA");

    for (let i = 0; i < alldiv.length; i++) {
      console.log(alldiv[i]);
      if (alldiv[i].dataset.sy !== "true") {
        let wrap = document.createElement("div");
        wrap.setAttribute("class", "comments-comment-box-comment__text-editor");
        wrap.classList.add("wrapAi");
        let btn = document.createElement("button");
        btn.setAttribute("class", "aiSearch");
        wrap.appendChild(btn);
        alldiv[i].insertBefore(wrap, alldiv[i].firstChild);
        alldiv[i].dataset.sy = "true";
        console.log("btn is creating");
      }
    }
  } else if (e.target.classList.contains("ql-container")) {
    let postDiv = document.querySelectorAll(".ql-container");
    let wrap = document.createElement("div");
    wrap.setAttribute("class", "comments-comment-box-comment__text-editor");
    wrap.classList.add("wrapAi");
    let btn = document.createElement("button");
    btn.setAttribute("class", "aiSearch");
    wrap.appendChild(btn);
    postDiv.appendChild(wrap);
  }
});

let popup = "";
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("aiSearch")) {
    // Create a div element for the popup
    popup = document.createElement("div");
    popup.classList.add("popup-container"); // Add the CSS class to the popup container
    // Set the innerHTML of the div to include an input field and buttons
    popup.innerHTML = `
    <p class="q-title">Query Here With AI</p>
  <input type="text" id="textInputPop" placeholder="Enter text">
  <p class="showRes"><div class="loader" id="loader"></div> </p>
  <button id="submitBtn">Geminai &#128269;</button>
  <button id="copyBtn">Copy & Close</button>
  <button id="closeBtn">Close</button>
  
`;

    // Append the div element to the document body
    body.style.position = "relative";
    document.body.appendChild(popup);
    let submitBtn = document.getElementById("submitBtn");
    let copyBtn = document.getElementById("copyBtn");
    let closeBtn = document.getElementById("closeBtn");

    // Add event listeners to the buttons
    submitBtn.addEventListener("click", submitData);
    copyBtn.addEventListener("click", copyToClipboard);
    closeBtn.addEventListener("click", closePopup);

    function closePopup() {
      // Remove the popup from the document body
      document.body.removeChild(popup);
    }
  }
});

async function submitData() {
  var inputValue = document.getElementById("textInputPop").value;

  if (inputValue == "") {
    createToast("Please Query First!");
    return;
  }

  let aiRes = await getgeminAiRes(inputValue);
  console.log(aiRes);
  document.querySelector(".showRes").innerText = aiRes;
}

// Function to copy text to clipboard
function copyToClipboard() {
  var copyText = document.querySelector(".showRes").innerText;
  if (copyText == "") {
    createToast("There is nothing to copy");
    return;
  }
  navigator.clipboard.writeText(copyText).then(() => {
    createToast("Copied to clipboard");
    copyText.value = "";
    document.body.removeChild(popup);
  });
}

async function getgeminAiRes(commentPrompt) {
  let loader = document.querySelector(".loader");
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    loader.style.display = "block";

    const result = await model.generateContent(
      `Considering the prompt: ` +
        commentPrompt +
        `, and return short trimmed ready to paste comment integrated emojeies and match with mood and no markdown ?`
    );

    let response = result.response.text().trim();
    loader.style.display = "none";
    return response;
  } catch (error) {
    console.error("Error generating or handling link:", error);
  }
}
