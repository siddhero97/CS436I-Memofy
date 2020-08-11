# Memofy

## Project Description

Memofy's mission is to help users easily keep track of their kitchen inventory by providing detailed information for every food item and also ways to search for items. The application also allows users to share inventory so it doesn't matter who is shopping, everyone can keep the inventory updated!

## Project Goals

✅ - Complete

❌ - Incomplete

✅❌ - Partially complete

- **Minimal requirements**
  - Overview Page ✅
  - Login page ✅
  - Users can add/remove items ✅
  - Users can see their items ✅
  - User data is saved/stored ✅
  - Responsive UI ✅❌
  - Users can see their account + settings ✅
- **Standard requirements**
  - Sort/Filter/Search items ✅
  - Feed (for adding/removing food, etc.) ✅
  - Email notification (for adding/removing food, etc.) ❌
  - Users can collaborate/share Memofy lists of items with other users ✅
  - Users can add/collaborate recipes ❌
- **Stretch requirements**
  - Mobile app ❌
  - Delivery service ❌
  - Nutrition tracking ❌
  - Subscription service ❌

## Tech used from Course

**Unit 1 - HTML, CSS, JS**
  - HTML is used alongside JSX to render and style our React components. 
  - CSS is used to stylize various ui components, particularly for using `css-grids`.
  - JS fundamentals are used for implementing both client and server side logic for this application.

**Unit 2 - React & Redux**
  - React is used as the frontend framework for this application. 
  - Redux is used for providing an application state for our frontend React app.

**Unit 3 - MongoDB**
  - MongoDB is used to store persistent data such as users, fridges and items our application.
  - Hosted in the cloud by Atlas.

**Unit 4 - Node & Express**
  - Node is used as the main server side framework for Memofy and connects all our endpoint and DB logic together. 
  - Express is used in this application to create server endpoints that can be called from the Memofy client application.

**Unit 5 - Release Engineering**
  - Heroku is used as Memofy's cloud hosting platform.

## 'Above and Beyond' functionality

**JWT Token Authentication/Authorization**

For our application, we built our own authorization and authentication strategies using PassportJS and JWT tokens. As such, we have our own registration process, storing user data in our database (hashing sensitive data such as passwords). When logging in, we **authenticate** the user by validating the password and, if successful, returning a JWT token to the browser to be stored in redux. All backend API routes except for `/login` and `/signup` are protected by a middleware that checks that the request has a valid JWT token in its URL query param. Since we store the JWT token in redux, whenever we need to call a backend API route we **authorize** ourselves by always adding the JWT token in the query param.

**Using TypeScript and other developer tools**

We decided to use TypeScript in both our frontend and backend code in order to gain a more representative experience of what the industry uses (this is not implying that the industry does not use JavaScript, but there are so many pros for using TypeScript that, personally, it does not make sense to use JS). We also added eslinting, allowing us to catch a lot of bugs before they were "introduced". By using TypeScript, we were also able to define our redux store schema very strictly, making it easy (but also tedious!) to ensure that we are always passing around the right types. Another note about TypeScript is that it really helped us to ensure we were using React hooks properly, specifically ensuring that we always provided the correct dependencies for hooks such as `useEffect` and `useCallback`.

**Using modern React and Redux tooling and patterns**

In our frontend code, we only use functional components as it reduces a lot of boilerplate code to simply setup a component. In addition, we also used a systematic pattern to develop our Redux store and how our components communicate with it. Details such as automated conditional destructuring when selecting redux state values makes the code very clean, avoiding the use of `if` guards. We also constructed the project structure in a way where it is organized and intuitive:

```
- src
  - components    // here we put generic utility components, avoids duplication
  - foundation    // here we setup the Application, such as setting routes
  - sections      // here is the meat of our Application, where each Section is a page (ie. ProfilePage, OverviewPage, etc.)
  - store         // here is where all the redux code lies, broken down further into specific reducer folders containing actions, reducers, and selectors files
  - utils         // here we put any utility functions, such as creating a debouncer hook
```

**Using ReduxThunk**

When dispatching actions, it is very important to keep in mind to make them asynchronous if the action involves promises. Doing so means that you will need to add asynchronous functions within your components, which could raise problems such as race-conditions. ReduxThunk solves this by hiding the asynchronous characteristic from the components, while at the same time we took advantage of ReduxThunk to "gate" components from changing until the the action has been resolved. This makes components extremely predictable (which is awesome!) as it is ALWAYS controlled by state and not by asynchronous details.

**Using Debouncer hook**

In our application, we call a third-party API called IconFinder to search up icons. In our icon search bar, we track the changes of a text input and use that input in a request to the third-party API. However, we don't want to be calling the API everytime the text changes (and we also want to make it "cool" by not requiring the user to click a button to trigger the search). In order to do this, we created a debouncer hook called `useDebouncer`. When used, when the text input changes, only when the text input has not changed for at least 1 second will we trigger the third-party API call. This makes our app much more performant and also saves us potential cost by not making unnecessary third-party API calls.

**Exercising modern backend patterns to format project file structure**

In the backend, we created a Node & Express server from scratch using TypeScript. When building the backend, we followed modern practices such as moving away from traditional project structures such as:

```
- src
  - controllers
  - views       // this is not as relevant because our views is rendered by our React code
  - models
```

And practiced a modern project structure such as:

```
- src
  - components
```

The idea is simple. In the traditional approach, we organize the project structure based on layers. However, as the project grows this easily creates a lot of coupling of logic. For example, in `controllers` folder we may have a `userController` and an `itemController`. These controllers may have no relation to each other, yet they live within the same directory. With the modern approach, we organize the project structure based on models. For example, we can have a `users` and `items` folder inside components. Within those 2 folders contains all the logic that relates to that particular model. Using this new way of structuring, it was easy for us to add/edit/fix features and functionality without needing to 'move' around too much around the codebase.

## Next Steps

**Recipes**
  - Allow users to store different recipes on their account so they can easily determine whether or not they have all the necessary ingredients in their fridge.

**Order food (Subscription service)**
  - Implement the ability for users to directly order the groceries they would like through the application.

**Email/Push notifications**
  - Introduce an email service that notifies users when their fridges/items are being modified.

## List of Contributions

**Vincent**
  - Implement add food item to fridge functionality (Frontend/Backend)
  - Implement edit item functionality (Frontend/Backend)
  - Implement Item and User schema setup in MongoDB (Backend)
  - Implement activity log feed alert feature (Frontend/Backend)
  - Set up and implement routes and backend API for food Item (Backend)
  - Set up Redux state for User (Frontend)
  
**Jaehun**
  - Implement Login page (Frontend)
  - Implement Food Searchbar (Frontend/Backend)
  - Implement FeedAlert (Frontend/Backend)
  - Create Figma designs
  - Implement initial CRUD setup for Fridges and Items (Backend)
  - Implementation of Fridge/User/Item relationship schema and setup for CRUD functionality on the server side. 
  - Implementation of FridgeBar Client and server. 
  
**Kwan**
  - Setup React code and npm libraries (Frontend)
  - Implement Profile page (Frontend)
  - Implement Fridge Management page (Frontend)
  - Implement Overview page except for Feed component (Frontend)
  - Implement some parts of Item page such as ItemSummaryLayout, Fridgebar and ItemList (Frontend)
  - Setup React and Redux patterns for team to learn and follow (Frontend)
  - Setup `react-router` routes (Frontend)
  - Implement debouncer for performant third-party API calls (Frontend)
  
  - Setup Express server code, hooked up to our Atlas database, and initial backend patterns/best practices (Backend)
  - Implement PassportJS middleware for authentication/authorization with JWT token (Backend)
  - Implement and paried on many of the Fridges, Items, Users routes/services (Backend)
  
  - Deploy our application to Heroku
  - Hook up IconFinder third-party API (Frontend/Backend)
  - Setup eslinting, Github CI builds and also PR templates
  - An unofficial leadership role, usually the one to setup the field for others to easily start their tasks and to setup/lead meetings
**Siddhartha Gupta**
  - Implement Item and User Schema with Mongoose. (Backend)
  - Initialize Database (Backend)
  - Made initial navbar (Frontend)
  - Made initial Profile (Frontend)
  - Implement Register Module (Frontend)

## Group Members

| **First Name** | **Last Name** | **Student Number** | **CS-ID** |
| --- | --- | --- | --- |
| Siddhartha | Gupta | 35169151 | w7h0b |
| Kwan | Lam | 42151100 | e6e8 |
| Jaehun | Song | 39131164 | h8u0b |
| Vincent | Chiang | 14316160 | m9y0b |

## Links

**Memofy Website** https://obscure-beyond-80726.herokuapp.com

**Figma Designs** https://www.figma.com/file/JsjFPCDJiZp0jOZbW7zU8l/Memofy?node-id=0%3A1
