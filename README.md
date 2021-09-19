# How to pass event handlers as props
This program demonstrates how to pass event handlers and other objects to children elements. 
We have a button that is a stateless component(component doesn't have any state). Properties are passed by parent components to their children. 

Problem: How to attatch an event listener to the button(stateless component) to trigger some code?

Solution: Pass event handler as a property to this stateless component and use the property in the stateless component.
We have two components "Content" and "Statelessb", "Content" is stateful and "Statelessb" is stateless. Statelessb doesn't have its own onClick event handler, it uses the handler passed down to it by it's parent in a 'this.props.handler' property. 
Initial counter is set to 0 in the parent(Content), the event handler is also defined in parent. Therefore, child(Statelessb) triggers the event on the parent.
