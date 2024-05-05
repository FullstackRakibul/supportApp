import random
def guess():
  attempt =0;
  secretNumber = random.randint(1,10);

  print("Welcome to me guessing game ...");
  print("Pick a number from 1 to 10 ...");

  while True:
    guessNumber = int(input("Guess the number :"))
    attempt+=1
    if(guessNumber==secretNumber):
      print(f"Congrass ...Secret number was={secretNumber}")
      break
    elif guessNumber>secretNumber:
      print("Guess number is High")
    else:
      print("Guess number is low")

guess()