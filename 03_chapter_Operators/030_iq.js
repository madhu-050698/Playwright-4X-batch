let responseTime = 850; //ms
let sla = 1000;  //ms
let slaStatus = responseTime <= sla ? "within SLA" : "SLA breached";
console.log('Response: ${responseTime}ms - ${slaStatus}');

//templet literal
console.log('What is the sla time ? -${sla}');

