//your JS code here. If required.
document.getElementById("votingForm").addEventListener("submit", function(event) {
            event.preventDefault();
            
            const name = document.getElementById("name").value.trim();
            const age = parseInt(document.getElementById("age").value, 10);
            
            if (!name || isNaN(age)) {
                alert("Please enter valid details.");
                return;
            }
            
            const checkVotingEligibility = new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (age >= 18) {
                        resolve(`Welcome, ${name}. You can vote.`);
                    } else {
                        reject(`Oh sorry ${name}. You aren't old enough.`);
                    }
                }, 4000); // 4-second delay
            });
            
            checkVotingEligibility
                .then((message) => alert(message))
                .catch((error) => alert(error));
        });