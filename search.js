


function searchCandidates() {
    let location = document.getElementById("location").value;
    let jobRole = document.getElementById("jobRole").value;
   
// sample data
    
let searchResults=[
    { name: "Arjun Sharma", location: "Delhi", jobRole: "Developer" },
    { name: "Aditi Patel", location: "Mumbai", jobRole: "Designer" },
    { name: "Aryan Das", location: "Calcutta", jobRole: "Project Manager" },
    { name: "Anaya Verma", location: "Chennai", jobRole: "Developer" },
    { name: "Advait Gupta", location: "Delhi", jobRole: "Designer" },
    { name: "Aaradhya Sengupta", location: "Mumbai", jobRole: "Project Manager" },
    { name: "Atharva Reddy", location: "Calcutta", jobRole: "Developer" },
    { name: "Ananya Roy", location: "Chennai", jobRole: "Designer" },
    { name: "Aaditya Singh", location: "Delhi", jobRole: "Project Manager" },
    { name: "Aisha Sharma", location: "Mumbai", jobRole: "Developer" },
    { name: "Aayush Kapoor", location: "Calcutta", jobRole: "Designer" },
    { name: "Aarohi Das", location: "Chennai", jobRole: "Project Manager" },
    { name: "Amrit Patel", location: "Delhi", jobRole: "Developer" },
    { name: "Aanya Sengupta", location: "Mumbai", jobRole: "Designer" },
    { name: "Aman Verma", location: "Calcutta", jobRole: "Project Manager" },
    { name: "Anika Gupta", location: "Chennai", jobRole: "Developer" },
    { name: "Akshay Reddy", location: "Delhi", jobRole: "Designer" },
    { name: "Aarushi Roy", location: "Mumbai", jobRole: "Project Manager" },
    { name: "Arnav Singh", location: "Calcutta", jobRole: "Developer" },
    { name: "Avani Sharma", location: "Chennai", jobRole: "Designer" },
    { name: "Ayush Kapoor", location: "Delhi", jobRole: "Project Manager" },
    { name: "Anaya Das", location: "Mumbai", jobRole: "Developer" },
    { name: "Aditya Sengupta", location: "Calcutta", jobRole: "Designer" },
    { name: "Aadhya Verma", location: "Chennai", jobRole: "Project Manager" },
    { name: "Advik Patel", location: "Delhi", jobRole: "Developer" },
    { name: "Anaya Roy", location: "Mumbai", jobRole: "Designer" },
    { name: "Anay Gupta", location: "Calcutta", jobRole: "Project Manager" },
    { name: "Aaradhya Sengupta", location: "Chennai", jobRole: "Developer" },
    { name: "Aditi Reddy", location: "Delhi", jobRole: "Designer" },
    { name: "Ayaan Sharma", location: "Mumbai", jobRole: "Project Manager" },
    { name: "Aarohi Das", location: "Calcutta", jobRole: "Developer" },
    { name: "Amaira Patel", location: "Chennai", jobRole: "Designer" },
    { name: "Aarav Roy", location: "Delhi", jobRole: "Project Manager" },
    { name: "Ananya Singh", location: "Mumbai", jobRole: "Developer" },
    { name: "Aaditya Sengupta", location: "Calcutta", jobRole: "Designer" },
    { name: "Aisha Verma", location: "Chennai", jobRole: "Project Manager" },
    { name: "Aarush Gupta", location: "Delhi", jobRole: "Developer" },
    { name: "Anaya Kapoor", location: "Mumbai", jobRole: "Designer" },
    { name: "Amrita Das", location: "Calcutta", jobRole: "Project Manager" },
    { name: "Aanya Sengupta", location: "Chennai", jobRole: "Developer" },
    { name: "Aman Verma", location: "Delhi", jobRole: "Designer" },
    { name: "Anika Gupta", location: "Mumbai", jobRole: "Project Manager" },
    { name: "Arnav Singh", location: "Calcutta", jobRole: "Developer" },
    { name: "Avani Sharma", location: "Chennai", jobRole: "Designer" },
    { name: "Ayush Kapoor", location: "Delhi", jobRole: "Project Manager" },
    { name: "Anaya Das", location: "Mumbai", jobRole: "Developer" },
    { name: "Aditya Sengupta", location: "Calcutta", jobRole: "Designer" },
    { name: "Aadhya Verma", location: "Chennai", jobRole: "Project Manager" },
    { name: "Advik Patel", location: "Delhi", jobRole: "Developer" },
    { name: "Anaya Roy", location: "Mumbai", jobRole: "Designer" },
    { name: "Anay Gupta", location: "Calcutta", jobRole: "Project Manager" }
  ]

    
    let resultsContainer = document.getElementById("results");
    resultsContainer.innerHTML = "";
    
  
  let finalResults = searchResults.filter((candidate) => {
    if (candidate.location !== "" && candidate.jobRole !== "") {
      if (location === "all" && jobRole === "all") {
        return candidate; // Include all candidates
      } else if (location === "all") {
        return candidate.jobRole === jobRole; // Match job role only
      } else if (jobRole === "all") {
        return candidate.location === location; // Match location only
      } else {
        return candidate.location === location && candidate.jobRole === jobRole; // Match both location and job role
      }
    }
  });
  
  if (finalResults.length > 0) {
      for (let i = 0; i < finalResults.length; i++) {
        let candidate = finalResults[i];
        
        // Create a new result element
        let resultElement = document.createElement("div");
        resultElement.innerHTML = "<strong>Name:</strong> " + candidate.name +
                                  "<br><strong>Location:</strong> " + candidate.location +
                                  "<br><strong>Job Role:</strong> " + candidate.jobRole;
        
        // Append the result element to the results container
        resultsContainer.appendChild(resultElement);
      }
    } else {
      resultsContainer.innerHTML = "No results found.";
    }
  }
  