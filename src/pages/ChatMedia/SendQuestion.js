// Example of making a ChatGPT API call in React
export const sendQuestion = async (question) => {
  try {
    const response = await fetch("/api/chatMeda/chatBot", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ question }),
    });

    const data = await response.json();
    // Handle the response from the ChatGPT API here
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
};
