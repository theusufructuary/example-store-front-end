# example-store-front-end
An example e-commerce store React app inspired by Open Study College

### App component tree

- **App**
    
    State: N/A
    Props: N/A
    Behaviour: Render whole app

    - **NavBar**
        
        State: Categories
        Props: N/A
        Behaviour: Render Navbar
    - **Cart**

        State: N/A
        Props: Cart Add/Remove
        Behaviour: Render cart

    - **Cards**
        
        State: Courses
        Props: Categories
        Behaviour: Render all course items

        - **Card**

            State: Cart Add/Remove
            Props: Courses
            Behaviour: Render a course