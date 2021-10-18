# A dictionary is a collection which is unordered, changeable and indexed
# No duplicate members

#create a dictionary
person = { 
    'first_name' : 'John', 
    'last_name': 'Doe', 
    'age': 30
    }

#use constructor
person2 = dict(first_name='Sara', last_name = 'Connor') # no ' ' needs\

#get value
print(person['first_name']) #John
print(person.get('last_name')) #Doe

#Add key/value
person[ 'phone'] = '555-555-5555'
print(person) #{'first_name': 'John', 'last_name': 'Doe', 'age': 30, 'phone': '555-555-5555'}

#get all dict keys
print(person.keys()) #dict_keys(['first_name', 'last_name', 'age', 'phone'])

#get all dict items
print(person.items()) #dict_items([('first_name', 'John'), ('last_name', 'Doe'), ('age', 30), ('phone', '555-555-5555')])

#remove item
del(person[ 'age'])
print(person) #{'first_name': 'John', 'last_name': 'Doe', 'phone': '555-555-5555'}
person.pop('phone')
print(person) #{'first_name': 'John', 'last_name': 'Doe'}

#copy dict items
person2 = person.copy()
person2[ 'city'] = 'Vancouver'
print(person) #{'first_name': 'John', 'last_name': 'Doe'}
print(person2) #{'first_name': 'John', 'last_name': 'Doe', 'city': 'Vancouver'}

#get length
print(len(person2))
print(person) #{'first_name': 'John', 'last_name': 'Doe'}
print(person2) #{'first_name': 'John', 'last_name': 'Doe', 'city': 'Vancouver'}

#clear
person.clear()
print(person) #{}
print(person2) #{'first_name': 'John', 'last_name': 'Doe', 'city': 'Vancouver'}

#List of dictionaries
people = [
    {'name': 'Kevin', 'age': 30},
    {'name': 'Dwayne', 'age': 12}
]
print(people) #[{'name': 'Kevin', 'age': 30}, {'name': 'Dwayne', 'age': 12}]
print(people[1]['name']) #Dwayne 