document.getElementById('fetchGrades').addEventListener('click', function() {
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ['contentScript.js']
    });
});
