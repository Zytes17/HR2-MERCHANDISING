document.getElementsByClassName("sidebar")[0].style.width = "350px";

    function onDropdown() {
        var dropdown = document.getElementById("dropdown");
        if (dropdown.style.maxHeight === "0px" || dropdown.style.maxHeight === "") {
            dropdown.style.maxHeight = "300px";
        } else {
            dropdown.style.maxHeight = "0px";
        }
    }

    function onToggle() {
        var sidebar = document.getElementsByClassName("sidebar")[0];
        if (sidebar.style.width === "0px" || sidebar.style.width === "") {
            sidebar.style.width = "350px";
        } else {
            sidebar.style.width = "0";
        }
    }

    //Evaluation//
    
    // JavaScript to handle form submission and calculate total percentage
    document.getElementById('evaluationForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form from submitting normally

        // Get selected #
        const communication = parseInt(document.querySelector('input[name="communication"]:checked').value);
        const teamwork = parseInt(document.querySelector('input[name="teamwork"]:checked').value);
        const punctuality = parseInt(document.querySelector('input[name="punctuality"]:checked').value);
        const customerService = parseInt(document.querySelector('input[name="customerService"]:checked').value);
        const overallPerformance = parseInt(document.querySelector('input[name="overallPerformance"]:checked').value);

        // Calculate total percentage
        const totalScore = communication + teamwork + punctuality + customerService + overallPerformance;
        const maxScore = 25; // 5 criteria, each with a max score of 5
        const totalPercentage = (totalScore / maxScore) * 100;

        // Display the total percentage
        document.getElementById('totalPercentage').textContent = `Total Percentage: ${totalPercentage.toFixed(2)}%`;
    });