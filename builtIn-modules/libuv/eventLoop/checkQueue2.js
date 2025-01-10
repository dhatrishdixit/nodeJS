setTimeout(()=>console.log("setTimeout 1"),0);
setImmediate(()=>console.log("setImmediate 1"));

// the ambiguity here is due to the default set value in setTimeout that is atleast 1 ms of delay will be there in adding setTimeout callback to then queue , so basically all this depends upon whether the event loop reaches setTimeout after 1 ms or not , i.e it depends upon the system performance.

// we can ensure this ambiguity is eliminated by adding this for loop 

for(let i=0;i<200000000;i++){}