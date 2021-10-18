# A set is a collection which is unordered and unindexed.\\
# No duplication member

#Create a set
fruits = [ 'apple', 'Orange', 'Grapes'] 

##Check if in set
print('Kiwi' in fruits)

#add to set
fruits.add('Kiwi')

#remove from set
fruits.remove('Apples')

#add duplicate
fruits.add('Orange')
print(fruits) #NO: 

#Clear set
fruits.clear()
print(fruits)

#delete
del fruits
print(fruits)