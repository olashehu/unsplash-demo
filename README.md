# About The App
This app is to demonstrate infinite scroll on a page.
I created this using create-react-app. A javascrip frame work to build user-interface.
I make use of unsplash APi to fetch the photos

##How To Get The Access-Key From unsplash.com
- Navigate to [unsplash.com](https://unsplash.com)
- Click on the login button to login. OR from the login page click on join to create an account.
- From your unsplash page, click on the toggle button and click Developers/Api link.
- Click on your apps button to go to next page.
- From the new page, click on New Application and check all the boxes in the next page. Click Accept terms.
- The next page is where you can copy your Access-key and Secret-key. But we are making use of access-key only to get the photos.
## You can read there documentation after signup for more explanation on how to use the Access-key and query there Api.

## How To Run This App
- From the github repository page, click on the code button to clone the repo to your local machine.
- On your local machine terminal, type in **git clone** hit spacebar on your machine and paste in the url you copy from the github repo page.
- On your teminal, run **npm install** to install the application dependency.
- In the project diretory, run **###npm start** to start the development server.
- Add your access-key variable to **.env file** and import it in the App component