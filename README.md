# REACT LIFECYCLE METHODS:-

React component has three stages of lifecycle:
## 1). Mounting(create):- 
Whenever our component is rendered a number of lifecycle methods are rendered. They are listed as follows
### 1.1).Constructor
The first method in mounting is constructor in which we create our state. Whenever we want to create an initial state or logic we use constructor
### 1.2).getDrivedStateFromProps
This lifecycle method is static. This lifecycle is rendered when there is change in component state or props. You have to return something which will be saved to update the state. It is similar to setState function
This lifecycle gives us two parameters one is props and other is state. 
### 1.3).render
This is the third method in which we render our jsx
### 1.4). componentDidMount
This lifecycle is executed only once after render method. It is used to fetch the data from database or api. Weather you use fetch method from API or firebase to get the data you will use them inside componentDidMount. Now you can save this data by creating a property inside state by the name of data which takes an empty array. When data is recieved form API using componentDidMount I will call this.setState which takes the property data and the value of data is obtained from API. 
componentDidMount will get the data from API and save it in my state.

## 1). Updating
## 1). Unmounting(delete) 

# These lifecycles are not used now a days because of the hooks and redux.  