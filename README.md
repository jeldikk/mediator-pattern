# Mediator Design Pattern

The Mediator pattern provides central authority over a group of objects by encapsulating how these objects interact.

this pattern is useful for scenarios where there is a need to manage complex conditions in which every object is aware of any state change in any other object in the group

We have a central spot called a Mediator where we manage our clients

We create client objects and register our clients to this mediator object.

A client can send message to a specific client or broadcast the message to all clients attached to mediator

But all message passed must pass through the central mediator object