# Do not modify these lines
__winc_id__ = '62311a1767294e058dc13c953e8690a4'
__human_name__ = 'casting'

# Add your code after this line

# Part1

# Create a variable leek_price with an integer value of 2.
# Cast this into a string and use the +-operator to print a string like this one, only with the correct price in it:

leek_price = 2
# print(f"Leek is {leek_price} euros per kilo")
print(f"Leek is {str(leek_price)} euros per kilo")

# Part 2

# We got an order! Store the string 'leek 4' in a variable.
# Use find and slicing to extract the number from this string.
# Cast it into an integer.
# Use this and leek_price to compute the sum total and store it in sum_total. Print out the value for this variable.

order = 'leek 4'
order_number = int(order[order.find(" "):])
print(order_number)
sum_total = leek_price * order_number
print(sum_total)

# Part 3

# Broccoli costs 2.34 euros per kg. We got an order: 'broccoli 1.6'.

# Create one variable for the broccoli price and one for the order.
# Compute and print the total price for this order.
# Use the +-operator to assemble and print a string like the following:

broccoli_price = 2.34
order = 'broccoli 1.6'
order_amount = float(order[order.find(" "):])
sum_total = round(broccoli_price * order_amount, 2)

print(f"{order_amount} KG broccoli costs {sum_total} Euro.")

# print(f"Leek is {str(leek_price)} euros per kilo")
