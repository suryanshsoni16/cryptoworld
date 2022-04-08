# starting

create app , 
download material ui=>
@material-ui/core,@material-ui/lab
download react rputer dom=>
install react-router-dom


# Material-ui

AppBar = for top navigation bar ,
Container
 = to give responsiveness, 
makeStyles
 =  makeStyles is a function from Material-UI that allows us to create CSS classes and rules using JavaScript objects. The makeStyles function returns a React hook that we can use in a functional component to access the styles and classes., 
MenuItem
 = Provides options to select list, 
Select
 = Select components are used for collecting user provided information from a list of options., 
Toolbar
 = Toolbar is to display its children with an inline display (elements are placed next to each other), something Appbar doesn't do. The AppBar component uses display: flex and flex-direction: column, that means direct descendants are stacked on top of each other. On the other hand Toolbar uses display: flex too, but doesn't set flex-direction, which means it uses its default value: row. That being said, the Button component uses display: inline-block. That is the reason why elements are placed next to each other inside Toolbar components., 
Typography
 = component used to standardize the text and its related CSS properties without worrying about browser compatibility issues ,
theme
 = The theme specifies the color of the components, darkness of the surfaces, level of shadow, appropriate opacity of ink elements, etc.
createTheme = , 
ThemeProvider = 
TextField, 
TableContainer ,
LinearProgress , 
Table,
TableRow,
TableHead,
TableCell, 
TableBody,
Pagination

# react-router-dom 
React Router DOM is an npm package that enables you to implement dynamic routing in a web app. It allows you to display pages and allow users to navigate them. It is a fully-featured client and server-side routing library for React. React Router Dom is used to build single-page applications i.e. applications that have many pages or components but the page is never refreshed instead the content is dynamically fetched based on the URL. This process is called Routing and it is made possible with the help of React Router Dom.

The major advantage of react-router is that the page does not have to be refreshed when a link to another page is clicked
BrowserRouter
 = BrowserRouter is a router implementation that uses the HTML5 history API(pushState, replaceState and the popstate event) to keep your UI in sync with the URL. It is the parent component that is used to store all of the other components., 
Route
 = Route is the conditionally shown component that renders some UI when its path matches the current URL, 
Routes
 = it use to wrap the routes
useNavigate
 = The useNavigate() hook is introduced in the React Router v6 to replace the useHistory() hook. In the earlier version, the useHistory() hook accesses the React Router history object and navigates to the other routers using the push or replace methods. It helps to go to the specific URL, forward or backward pages


# context API

imported from react

The Context API is a React structure that enables you to exchange unique details and assists in solving prop-drilling from all levels of your application.
context.Provider
 = Wrap child components in the Context Provider and supply the state value.
createContext
 = To create context, you must Import createContext and initialize it , 
useContext
 = In order to use the Context in a child component, we need to access it using the useContext Hook.
First, include the useContext in the import statement

# axious

Axios is a promise based HTTP client for the browser and Node. js. Axios makes it easy to send asynchronous HTTP requests to REST endpoints and perform CRUD operations. It can be used in plain JavaScript or with a library such as Vue or React.

Need of Axios in React: As we have discussed that Axios allows you to communicate with the APIs in your React project. The same tasks can also be performed by using AJAX, but Axios provide you more functionality and features and that helps you in building your application quickly

Axios makes it easy to send asynchronous HTTP requests to REST endpoints and perform CRUD operations.

Axios is just a JavaScript library that helps you to use Ajax easier.

install and make request

# react alice carousel

React Alice Carousel is a React component for building content galleries, content rotators and any React carousels.


# dangerously set inner html

html react parser was not working so i used dangerously write inner html to show to content

convert html string 


# react-chartjs


import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    } from 'chart.js';
    
    ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
    );


# firebase 
Firebase is a platform developed by Google for creating mobile and web applications.

Google Firebase is a Google-backed application development software that enables developers to develop iOS, Android and Web apps.

gmail suryanshsoni16@gmail.com
project name crypto-world

npm install firevase

# raect google button

# react icons

install react icons
