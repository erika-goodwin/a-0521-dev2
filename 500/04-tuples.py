# a Tuple is a collection which is ordered an UNCHANGEABLE
# Allows duplicate members

#Create a tuple
fruits = [ 'Apple', 'Orange', 'Grapes']

#using a constructor
fruits2 = tuple(('Apple', 'Orange', 'Grapes'))
print(type(fruits2)) #<class 'tuple'>

fruits3 = ( 'Applees') #single value needs trailing comma for tuple
print(fruits3, type(fruits3)) #Applees <class 'str'>

#get a value
print(fruits[1]) #Orange

# Can't change value
fruits[0] = 'Bread'
print(fruits)

#delete tuple
del fruits2
print(len(fruits))

#get length
print(fruits)

