function scrapeGrades() {
    const assignments = [];
    document.querySelectorAll('tr.assignment').forEach(row => {
        let name = row.querySelector('.assignment-name').textContent;
        let grade = row.querySelector('.grade').textContent;
        assignments.push({name, grade});
    });
    return assignments;
}

chrome.runtime.sendMessage({type: "grades", data: scrapeGrades()});
