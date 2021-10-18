#list = collection

#Create list

number = [ 1,2,3,4,5]
fruits = [ 'Apples', 'Orange', 'Grapes', 'Pears']


#use a constructor
numbers2 = list((1,2,3,4,5)) #list = class

#get a value
print(fruits[1]) #Orange

#get the last value
print(fruits[-1]) #Pears

#get the length
print(len(fruits)) #4

#append to list
fruits.append('Kiwi')
print(fruits) #['Apples', 'Orange', 'Grapes', 'Pears', 'Kiwi']

#remove from list
fruits.remove('Grapes')
print(fruits) #['Apples', 'Orange', 'Pears', 'Kiwi']

#Insert into position
fruits.insert(2, 'Strawberries')
print(fruits) #['Apples', 'Orange', 'Strawberries', 'Pears', 'Kiwi']

#change value
fruits[0] = 'Blueberries'
print(fruits)

#remove the end
fruits.pop(2)
print(fruits) #'Blueberries', 'Orange', 'Pears', 'Kiwi']

#reverse the list
fruits.reverse()
print(fruits) #['Kiwi', 'Pears', 'Orange', 'Blueberries']

#sort list
fruits.sort()
print(fruits) #['Blueberries', 'Kiwi', 'Orange', 'Pears']

