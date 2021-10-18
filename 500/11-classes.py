#create class

class User:
    # constructor
    def __init__(self, name, email, age):
        self.name = name
        self.mail = email
        self.age = age
    
    def greeting(self):
        return f'My name is { self.name} and I am { self.age} '

#init a user object
emily = User('Emily', 'email@mail.com', 20)
jane = User('Jane', 'jane@mail.com', 37)

print(emily) #<__main__.User object at 0x1061b33d0>
print(emily.greeting())  #My name is Emily and I am 20 
print(jane.greeting()) #My name is Jane and I am 37 

