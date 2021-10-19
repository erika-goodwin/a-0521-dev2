# A set is a collection which is unordered and unindexed.\\
# No duplication member

#Create a set
fruits = [ 'Apples', 'Orange', 'Grapes'] 

##Check if in set
print('Kiwi' in fruits) #False

#add to set
# fruits.add('Kiwi') #ERROR: 'list' object has no attribute 'add'

#remove from set
fruits.remove('Apples')
print(fruits) #['Orange', 'Grapes']

#add duplicate
# fruits.add('Orange') #ERROR: 'list' object has no attribute 'add'
print(fruits) 

#Clear set
# fruits.clear()
print(fruits) #[]

#delete
del fruits
print(fruits) #name 'fruits' is not defined