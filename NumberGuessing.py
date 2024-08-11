name=input("Enter your name : ")
print(name,"Welcome to the number guessing game")
print("In this game you need to guess the secret number given by the system")

    
import random

def guess_number():
    secret_number = random.randint(1, 100)
    def is_prime(n):
        if n < 2:
            return False
        for i in range(2, int(n**0.5)+1):
            if n % i == 0:
                return False
        return True
    
    
    numbers = [x for x in range(1,secret_number)]
    div_a=[]
    for i in numbers:
        if secret_number%i==0:
            div_a.append(i)
    

    attempts = 0
    while True:
        try:
            guess = int(input("Guess a number between 1 and 100: "))
            if guess == secret_number:
                print("Congratulations, you guessed the number!")
                print("Number of attempts:", attempts)
                if attempts <= 3:
                    print("Excellent you got 5 stars *****")
                if attempts == 4:
                    print("Very good you got 4 stars ***")
                if attempts > 4:
                    print("Good you got 1 stars *")
                
                    print("Try hard to get big stars")
                print("Do you want to play te game again")
                
                a=int(input("If you want to play the again select 'one(1)' to continue or 'zero(0)' to stop the game : "))
                if a==1:
                    guess_number()
                elif a==0:
                    break
                else:
                    break
                    
            
            elif guess < secret_number:
                print("Your guessed number {} is lesser than the secret number, try again!".format(guess))
                attempts += 1
            elif guess > secret_number:
                print("Your guessed number {} is greater than the secret number, try again!".format(guess))
                attempts += 1
            
            if attempts == 1:
                if secret_number <=50:
                    print("Hint 1 : The secret number is less than fifty(50)")
                else:
                    print("Hint 1 : The secret number is above fifty(50)")
            elif attempts == 2:
                if secret_number % 2 ==0:
                    print("Hint 2 : The secret number is even")
                else:
                    print("Hint 2 : The secret number is odd")
            elif attempts == 3:
                if is_prime(secret_number):
                    print("Hint 3 : secret number is a prime number.")
                else:
                    print("Hint 3 : secret number is not a prime number.")
            elif attempts == 4:
                print("Hint 4 : The secret number is divisble by : ",div_a)
            elif attempts == 5:
                print("Hint 5 : The square of secret number is : ",secret_number**2)
            elif attempts == 6:
                print("Hint 6 : The cube root of secret number is : ",secret_number**1/3)
        except ValueError:
            print("Invalid input, please enter a number between 1 and 100.")
guess_number()