chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.type === "grades") {
        console.log("Grades received:", request.data);
        // Further processing or API calls can be done here
    }
});
