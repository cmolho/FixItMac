
#FixItMac!
FixItMac is a mobile application that helps students report problems that they are experiencing with a printer on campus in only a few clicks. It also serves to indicate which printers are in working-order and are available for use.
 * To access the full code of the application, visit the project page:
   https://github.com/cmolho/FixItMac
 * To access the server code, visit our back-end repository: https://github.com/cmolho/FixItMacServer
 * For more information, please email fixitmacalester@gmail.com
 

## Built With
* Ionic
* AngularJS
* Cordova
* Node
* Amazon AWS
* Heroku

## Installation and Emulation
1. Install Node and the Ionic Framework/CLI (follow Step 1 at http://ionicframework.com/getting-started/)
2. Navigate into the FixItMac folder from command line and run `ionic emulate ios` to build and open in an iPhone emulator, or `ionic serve` to open in a web browser. You can also use `ionic emulate android`, but our app is not currently optimized for android systems. Please note that if viewing in the browser, reporting a printer issue will not successfully make a server POST request to change the status; this is a bug with local development in Chrome, not an issue with our app, and this feature works in emulation and on devices. 

**Important Note**: When testing, please either comment out the email sending line (www/js/controllers.js, line 86) or change the email in line 85 of the same file to your own email. 

## Device Deployment
FixItMac functions on both android and ios smart phones. To install the app on your phone using Ionic View:

1. Create an ionic view account at https://apps.ionic.io/login
2. Create a template app by clicking the green "New App" button at the top-right-hand-side of the web page
3. Enter the ionic.project file in FixItMac
4. Replace the default App ID in this file with the App ID from your template app in its place
5. In the terminal, cd into the file containing FixItMac and type "ionic upload"
6. Install the free Ionic View app on your smart phone and sign in with your account information created in step one
7. Click on your template app and select sync to latest
8. Once the app is sync, select view app

You will now be able to view the FixItMac app on your smart phone!

To directly download the native iOS or Android versions, build the native code using `ionic build ios` or `ionic build android` (need the Ionic CLI installed). A corresponding folder will be created or updated in the platforms folder, where you can access all of the necessary files for the native app as an Xcode or AndroidStudio project. This github project already contains the latest ios build. 
Please note that our app is currently optimized for iOS and has not been tested very thoroughly on android. There are a few problems on the android version, such as formatting issues, that have not yet been addressed. However, the iOS app is fully functional as intended. 

**Important Note**: When testing, please either comment out the email sending line (www/js/controllers.js, line 86) or change the email in line 85 of the same file to your own email. 

## Usage
On the home page, you will see the list of printers with red and green icons reflecting the status of the printers. If the icons are red, it means the printer in that location is in the process of getting fixed. If the icon is green, it means that the printer is functioning correctly.  Each printer is categorized by its location and listed alphabetically by name.

To learn more about the application, click the information icon in the upper right hand corner of your screen. To go back to the home page, select the home button at the bottom of your screen.

When you discover a problem with any of the printers, please click the corresponding printer to report.  This will lead you to the printer's profile page where you may select the specific problem that you are experiencing with the printer. To select one of the four issues, click the circle to the left of the printer issue. To write a description in the "other category", click on the placeholder text and type your printer problem. When finished selecting the issues the printer is experiencing, click the red report button. A pop-up box will ask you to confirm your report. Click "yes" to continue or "cancel" to return to the profile page. At any point you may return to the homepage by selecting the back button in the top left-hand corner of your screen. Once you have reported a printer issue, you will be taken to a "thank you" page. Click the home icon at the bottom of the page to return to the main screen.

## Known Bugs
* If individuals report the same issue at the same exact time, multiple emails will be sent to ITS. (This problem would likely never come up in practice).

##Future Features
Once the current app is used by many students and gets positive feedback, FixItMac plans to extend its service to variety of issues, including projector malfunction, broken stalls, washing machines, driers, etc.


## Contributing
1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request

**Important Note**: When testing, please either comment out the email sending line (www/js/controllers.js, line 86) or change the email in line 85 of the same file to your own email. 

## History
FixItMac was created by students at Macalester College throughout their duration in a Software Design and Development course in the spring of 2016.

## Authors
Current maintainers:
 * Rae Hohle  - https://github.com/rhohle
 * Minju Kim  - https://github.com/mkim2
 * Ana Lindholm - https://github.com/amikkels
 * Cody Molho - https://github.com/cmolho


