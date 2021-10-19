people = ['John', 'Paul', 'Sara', 'Susan']

#Simple loop
for person in people:
    print(person) 
    '''
    John
    Paul
    Sara
    Susan
    '''
print('+++++++++++++')

#Break
for person in people:
    if person == 'Sara':
        break
    print(person)
    '''
    John
    Paul
    '''
print('+++++++++++++')

#Continue
for person in people:
    if person == 'Sara':
        continue
    print(person)
    '''
    John
    Paul
    Susan
    '''
print('+++++++++++++')

#Range
for i in range(len(people)):
    print(people[i])
    '''
    John
    Paul
    Sara
    Susan
    '''
print('--------------')

for i in range(0,3):
    print(people[i])
    '''
    John
    Paul
    Sara
    '''
print('+++++++++++++')

#While
counter = 0
while counter < 10:
    print(counter)
    counter += 1
    '''
    0
    1
    2
    3
    4
    5
    6
    7
    8
    9
    '''
print('+++++++++++++')

