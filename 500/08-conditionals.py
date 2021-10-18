x = 15
y = 15

'''
Comparison Operators
==
!=
>
<
>=
<=
'''

# Simple if
if  x > y:
    print(f'{x} is greater than {y}')  #17 is greater than 16

#if/else
if  x > y:
    print(f'{x} is greater than {y}')
else:
    print(f'{y} is greater than {x}') #16 is greater than 15

#elif (else/if)
if x > y:
    print(f'{x} is greater than {y}')
elif x ==y:
    print(f'{x} is equal to {y}') #15 is equal to 15
else:
    print(f'{y} is greater than {x}')


#nested if
if x > 2:
    if x < 20:
        print(f'{x} is greater than 2 and less than or equal to 20')

#Logical operators (and, or, not)

#and
if x > 2 and x <=20:
    print(f'{x} is greater than 2 and less than or equal to 20')

#or
if x>2 or x <=20:
    print(f'{x} is greater than 2 or less than or equal to 20')

#not
if not(x == y):
    print(f'{x} is not equal to {y}')

#Membership operators (not, not in)
num = 4
numbers = [ 1,2,3,4,5]

#in
if x in numbers:
    print('IN:')
    print(num in numbers) #False

#not in
if x not in numbers:
    print('NOT IN:')
    print(num not in numbers) #False

#Identity operators (is, is not)
x = 4
y = 4
#is
if x is y:
    print('IS: ')
    print(x is y) #True
#is not
if x is not y:
    print('IS NOT: ')
    print(x is not y)
