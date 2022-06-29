# example-store-front-end
An example e-commerce store React app inspired by Open Study College

<br>

# *Work In Progress*
*This project is a part-time educational and showcasing project which is currently a work in progress.*

<br>

### **For more information, see the README of the Back-end repo**
[https://github.com/theusufructuary/example-store-api](https://github.com/theusufructuary/example-store-api)

<br>

## 1. Set Up (Front End)

a). To install, clone this repo via the terminal by running:
    
    git clone https://github.com/theusufructuary/example-store-front-end
    
    cd example-store-front-end
    
    npm install

b). Launch a local version of the React app:

    npm start

Note: Ensure example-store-api is also set up as per the instructions on that repo too, otherwise data will not be displayed in the Card components.

<br>

## 2. Front End App Component Tree

- **App**
    
    State: Cart Add/Remove
    Props: N/A
    Behaviour: Render whole app

    - **NavBar**
        
        State: N/A
        Props: N/A
        Behaviour: Render Navbar
    - **Cart**

        State: N/A
        Props: Cart Add/Remove
        Behaviour: Render cart

    - **Cards**
        
        State: Courses
        Props: N/A
        Behaviour: Render all course items

        - **Card**

            State: N/A
            Props: Courses, Cart Add/Remove
            Behaviour: Render a course