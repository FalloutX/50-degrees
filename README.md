# 50-degrees
Today's hot.


<img src="https://cloud.githubusercontent.com/assets/2933430/24846370/3443ccfc-1d77-11e7-8d1d-dc64d86c3852.png" width="300" align="right">

This is for the Final Project of React Fundamentals Course
========

#### For more information on React Training, [click here](http://reacttraining.com/online)

## Objective
Build a functioning Weather app using the [Open Weather API](http://openweathermap.org/api). The end result of this project can be found [HERE](http://reacttraining.github.io/react-fundamentals-curriculum).


## Step 0: Examine the Final Product
 - [x] Head over [HERE](http://reacttraining.github.io/react-fundamentals-curriculum) and play around with the final project. Think about how you would separate your different components and functionality.

## Step 1: Set up a HelloWorld Component (tag - `step1`)

 - [x] npm install the dependencies you'll need
 - [x] Add your babel settings to your package. json file
 - [x]  In your app directory create and configure your index.html file
 - [x] In your app directory create and add a style to your index.css file
 - [x] In your app directory create and configure your index.js file to render a HelloWorld component including your stylesheet.
 - [x]  Create and configure your webpack.config.js file
 - [x] Start webpack and make sure everything is working
 - [x] Add webpack commands as node package.json scripts.  
 - [x] Add eslint for linting.



## Step 2: Let React Router handle Routing (tag - `step2`)

 - [x] Move your HelloWorld component to a Home.jsx file (I have mine located in a containers folder)
 - [x] Set up your route configuration file to activate the Home component whenever a user hits the index '/' path of your app.
 - [x] Now instead of rendering <Home /> to the DOM, render your routes configuration.
 - [x] Add a basic Navbar with atleast two routes and distinguish active route.

## Step 3: Add UI for Home (tag - `step3`)

 - [x] Create a Home component and set it to the IndexRoute in your route configuration.
 - [x] At this point when you go to localhost:8080 you should see any UI the Main component spits out as well as any UI the Home component spits out.
 - [x] Add the full page background image to the Home component as well as the input field and button. At this point, my app looks like this.

App looking like this after Step3 Completion.

<img src="https://cloud.githubusercontent.com/assets/3653345/25063256/0c52d726-21fd-11e7-8d4f-840c3c1972b9.png">

## Step 4: ADD UI for Header (tag - `step4`)

 - [x] Finish the UI for the Header component.

App looking like this after Step4 Completion.

<img src="https://cloud.githubusercontent.com/assets/3653345/25063604/b99550cc-2206-11e7-9285-23b4bf5691cb.png">

## Step 5: Wire up the Weather Button (tag - `step5`)
In this step we're going to write up the button to our weather API, though we'll just log the result from now.

 - [x] Wire up your button (mine says "Get Weather") to log whatever is in the input field when the button is clicked.
 - [x] Get Free Open Weather Map api key and use it for your requests. To Know More  [click here](http://openweathermap.org/appid).
 - [x] We're going to be querying the weather API for two types of data. A specific city's current weather, and the 5 day forecast for a specific city.
 - Those two endpoints are,
      Current Weather: http://api.openweathermap.org/data/2.5/weather?q=CITY-NAME&type=accurate&APPID=YOUR-API-KEY
      5 Day Forecast: http://api.openweathermap.org/data/2.5/forecast/daily?q=CITY-NAME&type=accurate&APPID=YOUR-API-KEY&cnt=5
 - [x] Tie up the "Get Weather" button to be able to grab the city's current weather and log it to the console.
 - [x] Once the previous step is working, also create the functionality for the 5 day forecast request and test is by hooking it up to the "Get Weather" button. Once it works, change it back to get the current weather.

App Status after Step5 Completion. Console is also opened.

![Step 5 Completed](https://cloud.githubusercontent.com/assets/3653345/25064263/912f9b5c-2214-11e7-8ff7-d0ebd3850a0d.png)

## Step 6: New /forecast route (tag - `step6`)
 - [x]  Add a new Route to your route config of 'forecast/:city'.
 - [x]  Create the component(s) that will become active when the user goes to /forecast/SOME-CITY
 - [x] Now make it so instead of calling the weather API when we click on the "Get Weather" button, go to this /forecast route we just created.

<!-- TODO: Change this Image. -->
Empty Forecast component
![Step 6 Completed](https://cloud.githubusercontent.com/assets/3653345/25066916/7aa9c3f2-2251-11e7-98c0-f31a85422d74.png)


## Step 7: Make /forecast show loading and fetch (tag - `step7`)
Before we had our API request when the user clicked on the "Get Weather" button. However, in Step 6 we removed that and are instead routing to the /forecast route. Now what we need to do it when someone reaches the /forecast route, show a loading indicator while the component fetches the city data from the weather API.

 - [x] When someone goes to /forecast, have that component that becomes active fetch the forecast for the specific city which should probably be a route parameter.
 - [x] Also make it so this component initially renders "Loading" while the request to the weather API is being made.
 - [x] When the request comes back, console.log that data and set loading to false.
 - [x] By this point when your user goes to /forecast, they should see a loading screen then when the loading screen goes away they should see the forecast data in the console.

![Step 7 Completed](https://cloud.githubusercontent.com/assets/3653345/25067249/15393eb2-225b-11e7-886b-8673c1fbe79c.png)

## Step 8: Finish the UI for /forecast
 - [x] At this point the component that becomes active when a user navigates to /forecast should have all the data it needs to render properly. So, make that UI look nice.

- As of right now, The App looks like this

![Step 8 Completed](https://cloud.githubusercontent.com/assets/3653345/25074846/23d1e2d0-2323-11e7-9531-041fd006827f.png)


## Step 9: Make each day clickable
Now we want to make it so you can click on a specific day and we'll be taken to a new route which displays that day's weather information more in depth.
 - [x] Create a new /detail/SOME-CITY route
 - [x] Create the component(s) that are going to be active when that route is matched.
 - [x] Add a click handler to every day that when clicked, will go to the new /detail/SOME-CITY route passing through that specific days data through as state.

- As of right now, The new detail route is empty

![Step 9 Completed](https://cloud.githubusercontent.com/assets/3653345/25075144/fc8cc8f4-232a-11e7-9a5e-c52ebf494642.png)


## Step 10: Finish the UI for the /detail route
At this point the /detail route should have all the data it needs to render.

 - [x] Finish the app by finishing the UI for the /detail route.

The final /detail route looks like this.
![Step 10 Completed](https://cloud.githubusercontent.com/assets/3653345/25082942/81f00cfe-2371-11e7-83aa-10fac8d26507.png)
