/* 
   Write a program to calculate the total price of your phone pur‐
chase. You will keep purchasing phones (hint: loop!) until you
run out of money in your bank account. You’ll also buy accesso‐
ries for each phone as long as your purchase amount is below
your mental spending threshold.

• After you’ve calculated your purchase amount, add in the tax,
then print out the calculated purchase amount, properly for‐
matted.
• Finally, check the amount against your bank account balance to
see if you can afford it or not.
• You should set up some constants for the “tax rate,” “phone
price,” “accessory price,” and “spending threshold,” as well as a
variable for your “bank account balance.”
• You should define functions for calculating the tax and for for‐
matting the price with a “$” and rounding to two decimal
places.
• Bonus Challenge: Try to incorporate input into this program,
perhaps with the prompt(..) covered in “Input” on page 6. You
may prompt the user for their bank account balance, for exam‐
ple. Have fun and be creative!
*/

//constants
const PHONE_COST = 60
const ACCESSORY_PRICE = 9.99
const TAX_RATE = 0.08
const BANK_BALANCE = prompt("How much is in your bacnk account")
const SPENDING_THRESHOLD = 750

var total_cost = 0

function formatAmount() {
  return "$" + total_cost.toFixed( 2 );
}

function calculate_tax (amt) {
  amt = amt * TAX_RATE;
  
  return amt
}

while(total_cost < BANK_BALANCE){
  total_cost += PHONE_COST

  if (total_cost < SPENDING_THRESHOLD){
    total_cost += ACCESSORY_PRICE
  }
}

total_cost = total_cost + calculate_tax(total_cost)

console.log("Your purchase cost" + formatAmount(total_cost))

if (total_cost < BANK_BALANCE){
  console.log("You can afford this")
}
else{
  console.log("Oops, YOU POOR!")
}


