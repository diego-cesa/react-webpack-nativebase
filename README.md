## REACT NATIVE PROJECTS
>### node_modules folder: 
  * start new projects with React Native;
  * add modules that will work as support for development of all projects
    - e.g.: ***create-react-native-app***, ***webpack***, ***native-base***

>### shared-res folder:
  * customize Native Base components that are shared throughout all projects
  * share images, styles, and all resources common to all projects
       
>### src folder:
  * each inner folder is a different project
  * all inner folders **MUST** be created by de command
    - `create-react-native-app <NameOfTheProject>`
    - be sure of being at src folder to run it
  * after create de project, run the following:
    - `cd NameOfTheProject`
    - `react-native link`
    - `npm install native-base --save`
    - `npm install watchman --save-dev`
  * AwesomeProject is a model we can see how start a fresh project
  * Ideal internal structure of the projects should (minimum):
    ```
    .ProjecName
    ├── docs
    ├── node_modules
    ├── resources
    ├── src
    |   ├── css
    |   ├── data
    |   ├── fonts
    |   ├── img
    |   └── js
    |       ├── actions
    |       ├── components
    |       ├── configs
    |       ├── stores
    |       └── views
    |           └── Main.js
    └── App.js
    ``` 
  > ### Docs/Guides
   - https://facebook.github.io/react-native/
   - https://nativebase.io/
   - https://docs.nativebase.io/
