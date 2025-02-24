 /**
 Javascript :-
  -> JS asynchronous language h but uska default behaviour synchronous hota h. Us behavior ko hame forcefully bta kr async bnana 
  pdta h. Sbse easy example h aapke settimeout or setinterval methods.
  -> Javascript is synchronous - Synchronous means firstly first code will execute then another code will execute and then another
  code will execute.
  -> It is a single threaded language - Single threaded means in one thread everything will be executed.

  Execution Context :-

  -> Execute one line of code at a time.
  -> Each operation waits for the last one to complete before executing.

  Blocking Code vs Non-Blocking Code :-
  -> Blocking Code - Blocking Code block the flow of program. Read file sync.

  -> Non-Blocking Code - Does not block execution. Read file async.

  Javascript engine is made up from Memory heap and call stack. In browser, there is web API. Sometimes, instead of web API
  it gives environment also. Mostly used environment is node. If it is web API then you get access of DOM because Document
  Object Model(DOM) is only in browser or web. If you have taken Node environment then you wouldn't get DOM API because there 
  is no Document Object Model(DOM) .
  
  Second thing is we have task queue also. Task queue makes whole javascript fast and asynchronous. In web API, there are
  promises also. Promises have different queue which is known as high priority queue.

  Whenever program executes its call stack make. In call stack global execution context make and 1 by 1 it loads function.
  jaise-jaise function execute hota h function ko unload kr diya jata h. In Memory heap, there is memory allocation.
  Whenever you write asynchronous type code, you want that type of resource or that type of mechanism jiske ander mai kahu
  ye wala kaam krke please baad me yaad dila dena. So, for that type of works, we have web API or Node API.

  Some new APIs were added in javascript which are relatively new like fetch API. Fetch API also works on task queue. In this,
  task queue is expanded which is more high priority. In fetch, there is a concept of promise which tells do this work after
  sometime. agar hua ho successful toh bta dena agar nhi hua ho toh bta dena. Aise kaam k results fetch ke through aate h.
  
  Fetch ke ander jo promise queue hoti h uske andr bhi call backs bnte h, call back vps s call stack k andr add hote h ....
 **/