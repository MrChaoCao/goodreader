# Questions

## For 2018-03-19
- [x] how to test Application Controller methods? I can create a user but I'm having trouble logging it in. To test things in the User model I go User.create, how do I get access to functions in the application controller?
+ long story short: postman
+ you can make ajax requests in the browser too, that's what postman is doing under the hood.
+ you pass in the user object data through the

- [x] Why exactly do we namespace our controllers under API. I think it's because it makes it easier to find and group similar modules. [Resource](http://bclennox.com/namespaces-in-rails-applications)
+ Answer: make it clear that we should be getting data back and not a render.
- [ ]


database -> model -> controller -> view -> frontend
