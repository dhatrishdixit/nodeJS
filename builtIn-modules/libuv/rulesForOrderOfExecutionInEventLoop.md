# Rules for Order of Execution in Node.js Event Loop

## Core Principle
User written synchronous code takes priority over any async code runtime would like to execute 

## Order of Execution in Event Loop:

1. Callback in MicroTask Queues
   - nextTick Queues followed by Promise Queues

2. Callback in Timer Queues
   - Following Timer Queues, return to MicroTask Queues (nextTick Queues then Promise Queues)

3. Callback in I/O Queues
   - Following I/O Queues, return to MicroTask Queues (nextTick Queues then Promise Queues)

4. Callback in Check Queues
   - Following Check Queues, return to MicroTask Queues (nextTick Queues then Promise Queues)

5. Callback in Close Queues
   - Following Close Queues, return to MicroTask Queues (nextTick Queues then Promise Queues)

## Loop Continuation
If there are more callbacks to be processed, the loop is kept alive for one more run and the same steps are repeated.