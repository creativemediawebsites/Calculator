onClick of (1) button add number to display

var currOpNumber
var currOpOperation

on Click of "+" 
empty?
currOpNumber = whatever current display is
currOpOperation = "+"
full?
display = operate(currOpOperation, display, currOpNumber)
reset currOp fields

<!-- - check to see if currOp is empty
* yes - run lines below
- display num = currOpNumber
- currOpOperation = "+"
* no - run lines below
- run sum(a = currOp.num, b = displayNum)
- update display to show result of sum
- update currOp to show {num: displayNum, opp: "+"} -->



key log empty?
yes- add num to key log
no - add num to key log
run funtcion that return key log added up
- clear key log and update with result of function you ran function
- display result of key log 


forSure
when you click a number you want it to show up in display

num = empty && opp = empty
onPressing 1..... num = 1, d = num, opp = empty
num = full && opp = empty
onPressing 2 ......  num = num + e, d = convert(num), opp = empty
onPressing + ......  opp = "+" 
num = full && opp = full
num = num + e, d = e, 
