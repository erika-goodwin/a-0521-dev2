name = 'John'
age = 37

#only STRING can be concatinated 
print('HEllo, my name is' + name + ' and I am ' +  str(age)) #HEllo, my name isJohn and I am 37
# print('HEllo, my name is' + name + ' and I am ' +  age) // ERROR

#string formatting - arguments by position
print('My name is {someName} and I am {age}.'.format(someName = name, age=age)) #My name is John and I am 37.

#string formatting - F-Strings
print('Hello, my name is {someName} and I am {age}')

#String Methods
s = 'helloworld' 

#Capitalize String
print(s.capitalize()) #Helloworld

#Make all capital
print(s.upper()) #HELLOWORLD

#Swap case
print(s.swapcase())

#get length
print(len(s)) #10

#replace
print(s.replace('world', 'everyone')) #helloeveryone

#count
sub = 'l'
print(s.count(sub)) #3

#start with
print(s.endswith('e')) #False

#split into a list
print(s.split(' ')) #['helloworld']

#Find position
print(s.find('r')) #7

#is all alphanumeric
print(s.isalnum()) #True

#is all numeric
print(s.isnumeric()) #False



