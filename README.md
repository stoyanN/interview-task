# interview-task
## JS interview terms and conditions

As a user I need to see the latest forex rates which are available form our api (currencies.json file attached)

Currencies.json
{"success":true,"timestamp":1596461944,"base":"EUR","date":"2020-08-03","rates":{"USD":1.17055,"AUD":1.652887,"CAD":1.573722,"BGN":1.95}}


Please show all the pairs with their rates:
EURUSD x.xxxx
EURAUD x.xxxx
EURCAD x.xxxx
EURBGN x.xxxx

The rates from the json file should be taken only on initial loading. 
The rates must show exactly 4 decimal places (4 digits to the right of the decimal point)
The rates should be increased/decreased every 5 seconds with 0.0001
The first minute - the rates should go up,, the next one - the rates will go down  and so on.
Updating the rates should stop in the 5th minute after opening the page. 
When the new rate is bigger than the previous rate the background should be green
When the new rate is smaller than the previous rate the background should be red
The rate should not go below 1.0001



Technical requirements

The task should be implemented using either Vanilla JavaScript, Angular or React library/framework. 
You are free to style the page as you wish
Please provide a working solution in GitHub  or any GitHub alternative

