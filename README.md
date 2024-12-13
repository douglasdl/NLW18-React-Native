# NLW18-React-Native

<p align="center">
  <a href="#-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-project">Project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-layout">Layout</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-ide">IDE</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-license">License</a>
</p>

<p align="center">
 <img src="https://img.shields.io/static/v1?label=PRs&message=welcome&color=49AA26&labelColor=000000" alt="PRs welcome!" />

  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=49AA26&labelColor=000000">
</p>

<br>
<p align="center">
    <a href="https://github.com/douglasdl/NLW18-React-Native/edit/main/README.md" target="_blank">
        <img alt="Barbershop" src="https://raw.githubusercontent.com/douglasdl/images/refs/heads/main/nearby.png" width="100%">
    </a>
</p>

### QR Code Sample
![QR Code](https://raw.githubusercontent.com/douglasdl/NLW18-React-Native/refs/heads/main/api/QR%20Code.png)


## 🚀 Technologies

This project was developped using the following technologies:
<p alight="center">
  <a href="https://reactnative.dev/"><img height="40" src="https://douglasdl.github.io/images/ReactNative2.png"></a>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <a href="https://expo.dev/"><img height="40" src="https://douglasdl.github.io/images/Expo.png"></a>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</p>

  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
- [Git](https://git-scm.com/) - [Github](https://github.com/) - [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

📚 Libraries
- [Google Fonts - Rubik](https://fonts.google.com/specimen/Rubik)
- [Tabler Icons](https://tabler.io/docs/icons/react-native)
- [React Native Bottom Sheet](https://gorhom.dev/react-native-bottom-sheet/)
- [MapView](https://docs.expo.dev/versions/latest/sdk/map-view/)
- [Expo Location](https://docs.expo.dev/versions/latest/sdk/location/)
- [Expo Camera](https://docs.expo.dev/versions/latest/sdk/camera/)

🛠 Utilities
- [QRFY](https://qrfy.com)

## 📐 Project

This was the project from the Full Stack Week 5th Edition that was presented from AUG/05/2024 ~ AUG/12/2024.
This project is a web application with mobile first layout (the desktop version was also developed by myself after finish the main project) to help people to efficiently find barbershop and booking/cancel sevices.
This project also utilizes Google Authentication with OAuth integration.
Check the deployed project online [here](https://fsw-5-barber-git-main-douglasdls-projects.vercel.app/).

Create the project as Navigation (TypeScript):
```sh
npx create-expo-app@latest --template
```

Install the dependencies:
```sh
npx expo install expo-font @expo-google-fonts/rubik
npx expo install react-native-svg
npm install @tabler/icons-react-native
npm i axios
npm i @gorhom/bottom-sheet
npx expo install react-native-reanimated react-native-gesture-handler
npx expo install react-native-maps
npx expo install expo-location
npx expo install expo-camera
```

Start the project:
```sh
npx expo start
```

## API

Start the API:
```sh
cd api
npm i
npm start
```

View the Database with Prisma Studio:
```sh
npx prisma studio
```

## 🔖 Layout

The basic layout project can be accessed in [this link](https://www.figma.com/design/XYi54I0Mkj6gwjBRS07JRA/NLW-Pocket-Mobile-•-Nearby?node-id=0-1&node-type=canvas&t=mbpL6WwhnOQWGqQQ-0) in your [Figma](https://figma.com) account. Check mre details on [Notion](https://docs-rocketseat.notion.site/NLW-Mobile-149395da577080a398d5dde2d90321ad).

## 💻 IDE
This project was done using [Visual Studio Code](https://code.visualstudio.com/) IDE.

### 🧩 VS Code Extensions

- [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)
- [Brazilian Portuguese - Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker-portuguese-brazilian)

### ⚙ VS Code Configuration

-   CRTL + SHIFT + P
    -   settings.json

```json
{
    "editor.fontSize": 16,
    "terminal.integrated.fontSize": 16,
    "workbench.colorTheme": "Omni",
    "workbench.iconTheme": "material-icon-theme",
    "editor.bracketPairColorization.enabled": true,
    "editor.minimap.enabled": false,
    "editor.wordWrap": "on",
    "workbench.editor.tabSizing": "shrink",
    "explorer.compactFolders": false,

    // formatter
    "prettier.tabWidth": 2,
    "prettier.semi": false, 
    "prettier.singleQuote": true,
    "prettier.trailingComma": "none", 
    "prettier.arrowParens": "avoid",
    "prettier.endOfLine": "auto",
    "editor.tabSize": 2,
    "editor.formatOnSave": true,
    "[javascript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[html]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "liveServer.settings.donotShowInfoMsg": true,
    "liveServer.settings.donotVerifyTags": true,
}
```

## 📝 License

This project is under the MIT license. See the file [LICENSE](https://github.com/douglasdl/FSW5-Barber/blob/main/LICENSE) for more details.

---

Done with ♥ by [Douglas Dias Leal](mailto:douglasdiasleal87@gmail.com)
