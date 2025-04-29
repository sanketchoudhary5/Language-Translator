const selectTag = document.querySelectorAll("select");   //Selects all <select> dropdown elements, presumably for choosing languages.

const translateBtn = document.querySelector("#transfer");   //Selects the button with id="transfer" for triggering the translation.

const fromText = document.querySelector("#fromText");   //Selects the text area where the user enters the text to translate

const toText = document.querySelector("#toText");  //Selects the text area where the translated text will appear

const icons = document.querySelectorAll("img");   //Selects all <img> elements, likely for additional functionalities like copying or speech.


selectTag.forEach((tag, id) => {      //Loops through each dropdown (<select>).
  for (const countriesCode in countries) {    // Iterates through each key (countriesCode) in the countries object, which maps language codes (e.g., en-GB) to their names (e.g., English).

    let selected = "";        //Declares a variable selected to determine whether the current option should be the default selection.
    if (id === 0 && countriesCode === "en-GB") {            //Sets the default selected options for: The first dropdown (id === 0) as "en-GB".
      selected = "selected";
    } else if (id === 1 && countriesCode === "hi-IN") {     //The second dropdown (id === 1) as "hi-IN".
      selected = "selected";
    }
    let option = `<option value="${countriesCode}" ${selected}>${countries[countriesCode]}</option>`;         //Creates an <option> element with
    tag.insertAdjacentHTML("beforeend", option);    // It provides an efficient way to add new content without parsing the entire document or disrupting existing elements.


  }
});

translateBtn.addEventListener("click", () => {      //Adds a click event listener to the "Transfer" button. When clicked, the translation process begins.
  
  let Text = fromText.value,                        //The text entered in the fromText text area.
    translateFrom = selectTag[0].value,             //The language code selected in the first dropdown.
    translateTo = selectTag[1].value;               //The language code selected in the second dropdown.

  let apiURL = `https://api.mymemory.translated.net/get?q=${Text}&langpair=${translateFrom}|${translateTo}`;        //API

  fetch(apiURL)                                     //Sends a GET request to the API.
    .then(res => res.json())                        //Converts the API response (res) to a JavaScript object using res.json().
    .then(data => {                                 // Updates the toText text area with the translated text (data.responseData.translatedText).
      toText.value = data.responseData.translatedText || "Translation unavailable";       //"Translation unavailable" as fallback text if the translation missing.      
    })
    .catch(err => {
      console.error("Error fetching translation:", err);
      toText.value = "Error occurred";
    });
});

icons.forEach(icon => {
  icon.addEventListener("click", ({ target }) => {        //Adds a click event listener to each icon. The target is the clicked icon.
    if (target.classList.contains("copy")) {              //Checks if the clicked icon has the class copy (used for copy-to-clipboard functionality).
      if (target.id === "from") {                         //Copies text to the clipboard:
        navigator.clipboard.writeText(fromText.value);    //Copies fromText if the icon’s id is "from".
      } else {
        navigator.clipboard.writeText(toText.value);      //Copies toText otherwise.

      }
    } else {
      let utterance;
      if (target.id === "from") {
        utterance = new SpeechSynthesisUtterance(fromText.value);         //speechSynthesisUtterance - Converts text into spoken words.
        utterance.lang = selectTag[0].value;
      } else {
        utterance = new SpeechSynthesisUtterance(toText.value);
        utterance.lang = selectTag[1].value;
      }
      speechSynthesis.speak(utterance);
    }
  });
});
