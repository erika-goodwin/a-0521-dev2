
#create a function

def sayHello(name = 'Sam'):     #def: define (Function)
    print(f'Hello {name} ')

sayHello() #Hello Sam 
sayHello('Aubrey') #Hello Aubrey

#Return Values
def getSum(num1, num2):
    total = num1 + num2
    return total

print(getSum(4,5)) #9

# A lambda function is a small anonymous function.

# getSum() = (num1, num2) => num1 + num2 //JavaScript
getSum2 = lambda num1, num2: num1 + num2
print(getSum2(10, 3)) #13