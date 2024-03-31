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
  console.log("im in", prompt);
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  const result = await model.generateContent(
    "Give possible voice commands related to Amazon e-commerce website for the prompt -" +
      // "according to you user what is searching on this website give responce in 5 words go generate link accodingly -" +
      prompt
  );

  let response = result.response;
  let responseText = response.text();

  // Check for navigation commands and perform navigation accordingly
  generateLink(responseText);
}

// ai integration parts

import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = "AIzaSyCmd3guYR-kltQEsUeapkg66iQq1gE3RlI";

// Replace with your actual API key
const genAI = new GoogleGenerativeAI(API_KEY);

async function generateLink(Linkprompt) {
  console.log("im in link", Linkprompt);
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  const result = await model.generateContent(
    "Give possible link  related to Amazon e-commerce website for the prompt to set window.location -" +
      Linkprompt
  );

  let response = result.response;
  let responseLink = response.text();
  // console.log("hello this is link", responseLink);
  let linksToShow = extractLinks(responseLink);
  window.location.href = linksToShow;
  // linksToShow && linksToShow[0] ? linksToShow[0] : "https://www.amazon.com/";lin
}

function extractLinks(responseText) {
  console.log("im in extractedlink", responseText);
  // Define a regular expression pattern to match links
  const linkPattern = /https?:\/\/(?:www\.)?amazon\.com\/\S+/gi;

  // Extract links from the response text using the pattern
  const links = responseText.match(linkPattern);

  // Return the array of extracted links
  return links || " https://www.amazon.com/"; // Return an empty array if no links are found
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
