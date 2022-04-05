# Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

number = [1,2,3,4,5,6,7,8,9,0]
def create_phone_number(n):
   return returnArrayWithStringValues(list(map(str, n)))
def returnArrayWithStringValues(array):
    array.insert(0, '(')
    array.insert(4, ')')
    array.insert(5, ' ')
    array.insert(9, '-')
    array = ''.join(array)
    return array
number = create_phone_number(number)
print(number)

'''
1. Understand and explain the problem to a duck
2. Plan
3. Pseudocode and research applicable functions 
4. Divide and conquer
'''

"""

1. get array, return string in phone number format as: (123) 456-7890
2.
the plan is to change the number values to a string first
then push new string values into the array
index = new value
0 = (
4 = )
5 = _
9 = -

3. 

def returnPhoneNumber(array){
    returnArrayWithStringValues(array)  // my func
    returnArrayWithNewInputs()  // my func
    return newArraytoString() // builtin string func
}
def returnArrayWithNewInputs(array):
    array.insert(0, '(')
    array.insert(5, ' ')
   array.insert(4, ')')
   array.insert(-5, '-')

"""


