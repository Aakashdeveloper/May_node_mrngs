const sgMail = require('@sendgrid/mail');
sgMail.setApiKey('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');
const msg = {
  to: 'ahanda205@gmail.com',
  from: 'contactus@developerfunnel.com',
  subject: 'DeveloperFunnel-YouTube Live Interview Preparation Series For Full Stack Development',
  text: 'Reply "Yes" For confirmation',
  html: '<div><center><h2 style="color:rgb(252, 71, 71)">Interview Preparation Series For Full Stack Development</h2><h2>JOIN <a href="https://www.youtube.com/watch?v=QKnumc-JYYk" target="_blank">Youtube Live webinar</a> on<center><h2><a target="_blank" href="https://calendar.google.com/event?action=TEMPLATE&amp;tmeid=N2l2aWFncjJxNDA5czU0dnJrdmlkN2RjdGsgYWhhbmRhMjA1QG0&amp;tmsrc=ahanda205%40gmail.com"><img border="0" src="https://www.google.com/calendar/images/ext/gc_button1_en-GB.gif"></a></h2><img src="https://i.ibb.co/5X30Zb1/Screenshot-2020-05-22-at-5-41-20-AM-1.png"/> <h4>Reply "Yes" for confirmation</h4></center></h2></center></div>',};
sgMail.send(msg);