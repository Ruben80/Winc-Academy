# Do not modify these lines
__winc_id__ = '71dd124b4a6e4d268f5973db521394ee'
__human_name__ = 'strings'

# Add your code after this line

ruud = "Ruud Gullit"
marco = "Marco van Basten"

goal_0 = 32
goal_1 = 54

scorers = ruud + " " + str(goal_0) + ", " + marco + " " + str(goal_1)

print(scorers)

report = f'{ruud} scored in the {goal_0}th minute\n' +\
        f'{marco} scored in the {goal_1}th minute'

print(report)

# ----------------------------------------------

player = "Ruud Gullit"

first_name = player[:player.find(' ')]

print(first_name)

last_name_len = len (player[player.find(' ') + 1:])

print (last_name_len)

name_short = player[0] + '.' + player[player.find(' '):]

print(name_short)

chant = ((player[:player.find(' ')] + '! ') * len(player[:player.find(' ')]))[:-1]

print(chant)

good_chant = chant[-1] != " "

print(good_chant)