// Function to close the popup

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  // Check if the message is 'aiSearchClicked'
  if (message.message === "aiSearchClicked") {
    // Set the popup for the browser action button to 'popup.html'
    //
    console.log("Message received: aiSearchClicked");
  }
});

// Function to close the popup
// function closePopup() {
//   window.close();
// }

// // Function to handle form submission
// function submitData() {
//   // Get the value from the input field
//   var inputValue = document.getElementById("textInput").value;
//   // Do something with the value (for example, display it)
//   alert("You entered: " + inputValue);
//   // Close the popup
//   closePopup();
// }
