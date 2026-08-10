# **APIs and Async JavaScript**

## What is an API?

- An API(Application Programming Interface) is a set of rules that lets different pieces of software talk to each other.

## Few related terms that often come up:

- REST API (Representation State Transfer): a common style/convention for designing APIs, usually over HTTP, using mehods like GET, POST, PUT, DELETE
- Endpoint: a specific URL where an API can be accessed (e.g., /users/:id)
- Request/Response: what the client sends, and what the server sends back
- JSON (JavaScript Object Notation): the most common data format APIs use to send information back and forth 

**JSON:** is a lightweight text format for representing structured data.
``` {
    "id": 5,
    "name": "Mohamed Farah",
    "email":  "@example.com",
    "age": 26
}
```

The keys can be surrended double quotes

##### JSON only has a handful of data types:
**String**: text, always in double quotes:
**Number**: 28, 3.14
**Boolean**: true or false
**null**: represents **no value**
**Object**: key-value pairs in { }, keys are always strings
**Array**: an ordered list in [ ]

## Async
Is how JavaScript handles operations that take time - like reading a database, fetching a file or calling an API - without freezing everything else while it waits.

**The core problem it solve**: JavaScript is single-threaded - it can only do one thing at a time. If a database query takes 200ms and JS just sat there waiting, your entire server would freeze for those 200ms and couldn't handle any other requests.

