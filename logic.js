document.addEventListener('DOMContentLoaded', () => {
    const convertButton = document.getElementById('convertButton');
    const languageSelect = document.getElementById('languageSelect');
    const codeInput = document.getElementById('codeInput');
    const codeOutput = document.getElementById('codeOutput');

    // Event listener for the "Convert" button
    convertButton.addEventListener('click', async () => {
        const inputCode = codeInput.value.trim();
        const targetLang = languageSelect.value;

        // Validation for code input and language selection
        if (!inputCode) {
            alert("Please paste some code to convert.");
            codeInput.focus();
            return;
        }

        if (!targetLang) {
            alert("Please select a target language.");
            languageSelect.focus();
            return;
        }

        try {
            // Send POST request to the backend API
            const response = await fetch('/convert', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    inputCode,
                    sourceLang: 'Python', // Assume source language is Python; update as needed
                    targetLang,
                }),
            });

            // Handle non-OK responses
            if (!response.ok) {
                throw new Error("Failed to convert code. Please try again.");
            }

            // Parse and display the converted code
            const data = await response.json();
            codeOutput.value = data.convertedCode;
        } catch (error) {
            console.error("Error:", error);
            alert("An error occurred while converting the code. Please try again later.");
        }
    });
});
