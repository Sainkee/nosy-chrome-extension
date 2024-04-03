import { GoogleGenerativeAI } from "@google/generative-ai";

let body = document.body;
let btn = document.createElement("button");
btn.setAttribute("id", "btnNosy");
body.appendChild(btn);

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

const API_KEY = "AIzaSyCmd3guYR-kltQEsUeapkg66iQq1gE3RlI";

// Replace with your actual API key
const genAI = new GoogleGenerativeAI(API_KEY);

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

// handle keyPress events

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

// let buttonCreated = false; // Flag to track button creation

// if (!buttonCreated) {
//   // Check if a comment box form is clicked
//   document.body.addEventListener("click", (e) => {
//     if (e.target.classList.contains("comments-comment-box__form")) {
//       let divId = e.target.id;

//       const targetElement = document.getElementById(divId);

//       if (targetElement) {
//         let btnDiv = document.createElement("span");
//         let buttonForComment = document.createElement("button");

//         buttonForComment.setAttribute("class", "aiSearch");
//         btnDiv.classList.add(
//           "artdeco-button",
//           "artdeco-button--circle",
//           "artdeco-button--muted"
//         );

//         btnDiv.appendChild(buttonForComment);

//         targetElement.insertBefore(btnDiv, targetElement.firstChild);

//         buttonCreated = true; // Set flag after button creation
//       } else {
//         console.error("Element with ID", divId, "not found");
//       }
//     }
//   });
// } else {
//   console.log("Button already created. Click ignored.");
// }

document.addEventListener("click", function (e) {
  console.log(e.target.className);

  if (
    e.target.classList.contains("artdeco-button__text") ||
    e.target.classList.contains("artdeco-button")
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
  }
});

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("aiSearch")) {
    // Create a div element for the popup
    let popup = document.createElement("div");
    popup.classList.add("popup-container"); // Add the CSS class to the popup container

    // Set the innerHTML of the div to include an input field and buttons
    popup.innerHTML = `
  <input type="text" id="textInputPop" placeholder="Enter text">
  <button id="submitBtn">Geminai &#128269;</button>
  <button id="copyBtn">Copy to Clipboard</button>
  <button id="closeBtn">Cancel</button>
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

// Function to submit data
function submitData() {
  console.log("Submit");
  // Get the value from the input field
  var inputValue = document.getElementById("textInputPop").value;
  // Do something with the value (for example, display it)
  alert("You entered: " + inputValue);

  // Close the popup
  // closePopup();
}

// Function to close the popup
// function closePopup() {
//   // Remove the popup from the document body
//   document.body.removeChild(popup);
// }

// Function to copy text to clipboard
function copyToClipboard() {
  var copyText = document.getElementById("textInputPop").value;
  navigator.clipboard.writeText(copyText).then(() => {
    // Alert the user that the action took place.
    // Nobody likes hidden stuff being done under the hood!
    alert("Copied to clipboard" + copyText);
  });
}
