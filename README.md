
# Language Translator

This language translator website allows users to translate text from one language to another using the MyMemory translation API. The application has a clean user interface and the following key features:

1. User Input Section:
A text area where users can input the text they wish to translate.
Dropdown menus for selecting the source language and target language.

2. Translate Button:
A button that, when clicked, triggers the translation process.

3. Output Section:
An area to display the translated text once the translation is completed.

4. Styling:
Basic CSS for styling the layout, ensuring it's user-friendly and visually appealing with responsive design for mobile and desktop.

5. JavaScript Functionality:
JavaScript is used to handle user interactions and API requests.
It fetches translated text from the MyMemory API and displays it in the output section.


## Acknowledgements

-MyMemory API for providing translation  services.
-Inspiration from various open-source translation projects.


## API Reference

#### Get all items

```http
  GET /api/items
```
https://api.mymemory.translated.net/get?q={text}&langpair={sourceLang}|{targetLang}


## Deployment
  
To deploy this project, run the following command:  

```bash  
npm run deploy
```


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`API_KEY`

`ANOTHER_API_KEY`


## FAQ

## 1. What languages are supported?
The MyMemory API supports a vast range of languages; you can refer to their documentation for a complete list.

## 2. Can I use this project offline?
Currently, the application relies on the MyMemory API, so an internet connection is necessary for translations.

## 3. How can I contribute to this project?
Feel free to fork the repository, make changes, and submit a pull request!


## Features

- Light/dark mode toggle
- Live previews
- Fullscreen mode
- Cross platform


## License

[MIT](https://choosealicense.com/licenses/mit/)

MIT License  

Permission is hereby granted, free of charge, to any person obtaining a copy  
of this software and associated documentation files (the "Software"), to deal  
in the Software without restriction, including without limitation the rights  
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell  
copies of the Software, and to permit persons to whom the Software is  
furnished to do So.
