# Higher-order components 
(HOCs) in React were inspired by higher-order functions in JavaScript. A HOC is an advanced technique for reusing logic in React components. It is a pattern created out of React’s compositional nature.

HOCs basically incorporate the don’t-repeat-yourself (DRY) principle of programming, which you’ve most likely come across at some point in your career as a software developer. It is one of the best-known principles of software development, and observing it is very important when building an application or writing code in general.

# Here are some examples of real-world HOCs you might have come across:
`react-redux`	connect(mapStateToProps, mapDispatchToProps)(UserPage)
`react-router`	withRouter(UserPage)
`material-ui`	withStyles(styles)(UserPage)