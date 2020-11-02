import this
import time
import math
import datetime
import sys
import greet
# from datetime import datetime as dt

# Do not modify these lines
__winc_id__ = '78029e0e504a49e5b16482a7a23af58c'
__human_name__ = 'modules'
# Add your code after this line


def wait(seconds):
    time.sleep(seconds)


def my_sin(x):
    return math.sin(x)


def iso_now():
    # return datetime.now().isoformat()
    return datetime.datetime.strptime(
        '2017-01-12T14:12:06.000-0500',
        '%Y-%m-%dT%H:%M:%S.%f%z')


def platform():
    return sys.platform


def supergreeting_wrapper(x):
    return greet.supergreeting(x)


if __name__ == '__main__':    
    print(wait(1))
    print(my_sin(30))
    print(iso_now())
    print(platform())
    print(supergreeting_wrapper("Bob"))
    
