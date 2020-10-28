from helpers import get_countries

""" Leave this untouched. Wincpy uses it to match this assignment with the
tests it runs. """
__winc_id__ = 'c545bc87620d4ced81cbddb8a90b4a51'
__human_name__ = 'for'


""" Your code here. """

# This block is only run if this file is the entrypoint; python main.py
# It is not run if it is imported as a module: `from main import *`
if __name__ == '__main__':
    countries = get_countries()

# shortest_names: takes a list of country names and returns a list of country names that have the shortest length. If there is only one country with the shortest name the list will contain only that country name, otherwise multiple countries should be in the list. Use a for-loop and len!

def shortest_names(countries):
    shortest_len = float('inf')
    shortest_names = []

    for country in countries:
        country_len = len(country)
        if country_len < shortest_len:
            shortest_len = country_len
            shortest_names = [country]
        elif country_len == shortest_len:
            shortest_names.append(country)

    return shortest_names

result = shortest_names(countries)
print(result)

# most_vowels: takes a list of country names and returns a list with the top three countries that have the most vowels in their name. The country with the most vowels should be on position 0 in the list, the country with the second-most on position 1, and so on. If there are multiple countries with the same number of vowels the order does not matter. To sidestep the y-issue: we count aeiou as vowels.

def most_vowels(countries):
    vowels = 'aeiou'

    # List of tuples of (country_name, vowel_count)
    # Can also be lists if unfamiliar with tuples
    leaderboard = [('', 0)]

    for country_name in countries:
        # Count vowels
        vowel_count = 0
        for char in country_name:
            if char in vowels:
                vowel_count += 1

        # Insert into leaderboard if deserving.
        for position in range(len(leaderboard)):
            if vowel_count >= leaderboard[position][1]:
                leaderboard.insert(position, (country_name, vowel_count))
                break
            if position > 2:
                break

    return [x[0] for x in leaderboard[:3]]

result = most_vowels(countries)
print(result)   

# alphabet_set: takes a list of country names and returns a list of country names whose letters can be combined to form the alphabet. How short can you get your list to be?

#     Letter case is not relevant, so 'a' is the same letter as 'A' with regards to the alphabet.
#     Solutions that with 14 or fewer countries are accepted as correct.

def shortest_alphabet_set(countries):
    # Assembles alphabet 
    countries = [country.lower() for country in countries]

    letters_needed = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
                'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x',
                'y', 'z']
    countries_used = []

    for country in countries:
        for char in country:
            if char in letters_needed:
                letters_needed.remove(char)
                if country not in countries_used:
                    countries_used.append(country)
        if letters_needed == []:
            return countries_used

result = shortest_alphabet_set(countries)
print(result)  