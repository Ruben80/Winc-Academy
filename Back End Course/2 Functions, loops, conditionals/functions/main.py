# Do not modify these lines
__winc_id__ = '49bce82ef9cc475ca3146ee15b0259d0'
__human_name__ = 'functions'

# Add your code after this line

# def double(x):
#     doubled_x = x * 2
#     return doubled_x

# four_doubled = double(4)
# print(four_doubled)


# greet: takes a name and returns a string in the format:

# name = "Bob"
# greet = f"Greet {name}!"
# print(greet)

def greet(name):
    return f"Greet, {name}!"

name = greet("Bob")
print(name)

# add: takes three numbers (integers or floats) and returns their sum.

def add(a, b, c):
    return f"{a + b + c}"

sum = add(5,3,2)
print(sum)    

# scottish_greet: takes a name and a boolean (in that order) and returns a scottish greeting that accounts for whether the person is a child.

def kid(name, child):
    if child:
        return f" Hello, wee {name}!"
    return f"Hello, {name}!"
    
scottish_greet =  kid("Jamie", False)
print(scottish_greet)

# positive: takes a number (integer or float) and returns whether or not it is positive in the form of a boolean. You do not have to handle the case where the argument is not an int or a float.

def positive(number):
    return number > 0
        
positive_number = positive(1) 
print(positive_number)

# negative: takes a number (integer or float) and returns whether or not it is negative in the form of a boolean. You do not have to handle the case where the argument is not an int or float.

def negative(number):
    return number < 0

negative_number = negative(-1)
print(negative_number)

# sign: takes a number and returns its sign. If the given argument is not an int or a float, sign returns a string that says "This doesn't have a
# sign!"

def sign(x):
    if type(x) is not int and type(x) is not float:
        return "This doesn't have a sign!"
    if positive(x):
        return 1
    elif negative(x):
        return -1
    return 0

result = sign(50)
print(result)

result = sign(-50)
print(result)

result = sign("Bob")
print(result)

# nag: takes three arguments in this order: a str, another str and an int. It returns a string like the ones in these examples. Note that the number of repetitions of the entire phrase is not the only thing that depends on the given integer, and that the string does not end in a newline! Be picky: if the any of the types of the given arguments is not what you expect it to be, return the boolean False.

def nag(name, subject, number):
    if type(name) is not str:
        return False
    elif type(subject) is not str:
        return False
    elif type(number) is not int:
        return False

    dots = "." * number
    template = f"{name}{dots} Why can't I have a {subject}?!\n"
    return (template * number)[:-1]

result = nag("Auntie", "race car", 2)
print(result) 

result = nag("Mommy", "cookie", 5)
print(result) 

result = nag(2, "true", "Mommy")
print(result) 