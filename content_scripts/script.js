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
// content_scripts/hoverButton.js

// Function to create the button
// function injectButton() {
//   // Select all input[type=text] and textarea elements
//   const inputElements = document.querySelectorAll(
//     'input[type="text"], textarea'
//   );

//   // Inject the button into each element
//   inputElements.forEach((element) => {
//     // Create a new button element
//     const button = document.createElement("button");
//     button.textContent = "Click me"; // Set button text
//     button.classList.add("my-button-class"); // Add any desired CSS classes

//     // Find the parent element where you want to insert the button
//     const parentElement = document.querySelector(
//       ".quick-action-compose-trigger"
//     );

//     // Insert the button into the parent element
//     parentElement.appendChild(button);

//     // Insert the button after the input/textarea element
//     element.parentNode.insertBefore(button, element.nextSibling);
//   });
// }

// document.addEventListener("click", (e) => {
// if (
//   e.target.className ===
//   "artdeco-hoverable-trigger artdeco-hoverable-trigger--content-placed-top artdeco-hoverable-trigger--is-hoverable ember-view feed-shared-social-action-bar__action-button"
// ) {
//   console.log("Button clicked");
//   let ref = document.querySelectorAll(
//     ".comments-comment-box-comment__text-editor"
//   );
//   console.log(ref);
// }
// });

// console.log("clicked");
