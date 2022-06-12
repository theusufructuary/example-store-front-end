# example-store-front-end
An example e-commerce store React app inspired by Open Study College

### App component tree

- **App**
    
    State: Cart Add/Remove
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

            State: N/A
            Props: Courses, Cart Add/Remove
            Behaviour: Render a course