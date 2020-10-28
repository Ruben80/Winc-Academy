from helpers import random_koala_fact

__winc_id__ = 'c0dc6e00dfac46aab88296601c32669f'
__human_name__ = 'while'

# unique_koala_facts: takes an integer as an argument and returns that number of unique koala facts in a list. Note that there are only a limited number of unique facts in the dataset. For high arguments your function should return all unique facts in the dataset. No worries: the number of facts is small enough that this should be feasible.

def unique_koala_facts(num_requested):
    loops, max_loops = 0, 1000
    facts = []
    while len(facts) < num_requested:
        fact = random_koala_fact()
        if fact not in facts:
            facts.append(fact)
        if loops > max_loops:
            break
        loops += 1
    return facts

# num_joey_facts: young marsupials are called 'joeys'. How many unique facts mentioning this term are in our facts dataset? Count them by getting facts from random_koala_fact until you have seen some particular fact 10 times, then return how many unique joey facts you counted in the dataset.

def num_joey_facts():
    first_fact = random_koala_fact()
    times_seen_first_fact = 0
    num_joey_facts = 0
        
    # Using a set instead of a list for unique_facts would be better if you are
    # familiar with it.
    unique_facts = []

    while times_seen_first_fact < 10:
        fact = random_koala_fact()
        if fact == first_fact:
            times_seen_first_fact += 1
        if fact not in unique_facts:
            unique_facts.append(fact)
            if 'joey' in fact.lower():
                num_joey_facts += 1  
    return num_joey_facts

def koala_weight():
    fact = random_koala_fact()
    while 'kg' not in fact.lower():
        fact = random_koala_fact()
    return int(fact.split('kg')[0].split(' ')[-1])

    # print(koala_weight())

# This block is only executed if this script is run directly (python main.py)
# It is not run if you import this file as a module.
if __name__ == '__main__':
    print(random_koala_fact())    
    print(len(unique_koala_facts(50)))
    print(unique_koala_facts(1000))    
    print(num_joey_facts())
    print(koala_weight())
