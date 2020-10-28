# Do not modify these lines
__winc_id__ = '6eb355e1a60f48a28a0bbbd0c88d9ab4'
__human_name__ = 'lists'

# Add your code after this line

# Write a function alphabetical_order that takes one argument: a list of strings that represent film names. It returns a list of the same films in alphabetical order. We have not discussed sorting lists yet, so you should probably search the web to see if there's a good approach out there. Your solution should not be longer than a few lines.

film_names = ["film B", "film A", "film C"]
# film_names.sort()

# alphabetical_order = film_names

# print(alphabetical_order)

print(sorted(film_names))


# Write a function won_golden_globe that takes a film name and returns True or False based on whether or not this movie won a Golden Globe.

#     This page will come in handy: Wikipedia -- List of awards and nominations received by John Williams
#     A nomination is not a win.
#     You are not allowed to do string-to-string comparisons in this function, so no string_a == string_b!
#     John is not very tidy with his archive, so the captitalization of the names might not be correct. Look into using the lower-function on the given film string.

# film_names = ["Film A", True], ["film B", False], ["Film C", True], ["film D", False]

# won_golden_globe = film_names

# print(won_golden_globe)

def won_golden_globe(film_name):
    winners = ['jaws',
               'star wars: episode iv - a new hope',
               'e.t. the extra-terrestrial',
               'memoirs of a geisha']
    return film_name.lower() in winners

result = won_golden_globe("Jaws")
print(result)

# John's son Joseph accidentally mixed in some of his own work as lead singer for Toto with a list his dad's compositions. Write a function remove_toto_albums that takes a list of strings, removes Joseph's Toto albums from it and returns the tidy list.

#     Use this information: Wikipedia -- Joseph Williams (musician)
#     It is not certain that all of Joseph's Toto albums are in the list received by remove_toto_albums, but they might! Don't let your script run into any errors.
#     Joseph did not inherit his dad's sloppiness with captitalization, so his Toto albums would be listed correctly.
#     Search the web on how to remove an item from a list by value.


def remove_toto_albums(album_name):

    albums = ['Joseph Williams',
              'I Am Alive',
              '3',
              'Early Years',
              "Vertigo",
              "Two of Us",
              "Vertigo 2",
              "Smiles and Tears",
              "This Fall",
              "Williams/Friestedt",
              "Fahrenheit",
              "The Seventh One",
              "Toto XX",
              "Falling in Between",
              "35th Anniversary – Live in Poland",
              "Toto XI",
              "Old Is New",
              "40 Tours Around The Sun - Live in Holland"
              ]
    # Reader has not yet had instruction about for-loops.
    # If you have: how could you improve this code by making use of them?
    if 'Fahrenheit' in album_name:
        album_name.remove('Fahrenheit')
    if 'The Seventh One' in album_name:
        album_name.remove('The Seventh One')
    if 'Toto XX' in album_name:
        album_name.remove('Toto XX')
    if 'Falling in Between' in album_name:
        album_name.remove('Falling in Between')
    if '35th Anniversary - Live in Poland' in album_name:
        album_name.remove('35th Anniversary - Live in Poland')
    if 'Toto XIV' in album_name:
        album_name.remove('Toto XIV')
    if 'Old is New' in album_name:
        album_name.remove('Old is New')
    if '40 Tours Around The Sun - Live in Holland' in album_name:
        album_name.remove('40 Tours Around The Sun - Live in Holland')
    return album_name in albums

result = remove_toto_albums("Vertigo 2")
print(result)
