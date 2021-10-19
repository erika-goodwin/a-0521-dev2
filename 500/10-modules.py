#Core modules
import datetime
from datetime import date
# today = datetime.date.today()
today = date.today()   #with 'from datetime import date'
print(today) #2021-10-18


import time
from time import time
# timestamp = time.time()
timestamp = time() #with 'from time import time'
print(timestamp) #1634596650.144812


#PIP module 
#Install@Terminal: pip install camelcase
#Confirm@Terminal: pip freeze
from camelcase import CamelCase
c = CamelCase()
print(c.hump('hello there world'))


#Custom module
import validator #validator.py
from validator import validate_email
email = 'test@mail.com'
if validate_email(email):
    print('Email is valid') #Email is valid
else:
    print("Email is NOT valid")

