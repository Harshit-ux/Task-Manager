let start=prompt(`Welome Sir !! How Can we help you`)
let task=['play games']
while(start!=='close')
{
  if(start==="Add")
  {
    let ad=prompt("Add the new task ")
    task.push(ad)
    console.log(`${ad} task has been added`)
    
  }
  else if(start==="Display")
  {
    console.log("Task List are :")
    for(let i=0;i<=task.length-1;i++)
    {
       console.log(`${i}: ${task[i]}`)
    }
  }
  else if(start==="Delete")
  {
    let del=prompt(`Choose the task to remove`)
    task.splice(del,1)
    console.log(`${task[del]} has been removed `)
  }
  start=prompt("How can we help you !!!")
  
  
  
}
console.log("Thanks For Using Us !!!")