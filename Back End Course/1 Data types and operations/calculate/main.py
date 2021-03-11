# Do not modify these lines
__winc_id__ = '499e67d5cb54448e93cee7465be2c866'
__human_name__ = 'calculate'

# Add your code after this line

broccoli = 2
leek = 2
patato = 3
brussel_sprout = 7

sum_one_each = broccoli + leek + patato + brussel_sprout
avg_price = sum_one_each / 4
num_patatoes = 7
num_broccolis = 5
num_leeks = 2
num_brussel_sprouts = 10

sum_total = (
    broccoli * num_broccolis
    + patato * num_patatoes
    + broccoli * num_broccolis
    + leek * num_leeks
    + brussel_sprout * num_brussel_sprouts
)

discount_percentage = 30
discounted_sum_total = sum_total * (1 - discount_percentage / 100)


print("Leek costs: ", (leek))
print("The sum of one each is: ", (sum_one_each))
print("The average price is: ", (avg_price))
print("The sum total is: ", (sum_total))
print("The price including discount is: ", (discounted_sum_total))
