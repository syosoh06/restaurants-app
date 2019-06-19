1) I spent around 2 to 2.5 hours on this test. If I would have had more time,
I would have implemented lazy loading / paginated results on the Front End.
I would have also added more CSS styling.
I could have also used graphql to get much more streamlined data.

2) React Hooks has been used, which is a pretty new feature.
  ```
const [state, setState] = useState({restaurantName: ''});
    const handleChange = (event) => {
        setState({restaurantName: event.target.value});
        props.fetchRestaurantsByName(state.restaurantName);
    };
```

3) I have worked on code-splitting 
and component-splitting to enhance a React App's performance

4) API returns a lot of data - may be the number data fields could be reduced.
May be the API user could request only specific fields of data to be returned.
GraphQL could also have been used. 

5)   
      ```
      {
            "data": {
              "name": "soham",
              "age": 26,
              "profession": "Javascript Lover"
              }
            } 
      
      ``` 