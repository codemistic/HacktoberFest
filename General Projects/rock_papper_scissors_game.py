# Rock , papper ,scissors game:

# imported a package which generates random numbers
import random 

# defined a function names gamewin between you and computer

def gamewin(comp,you):

      # if you and computer chooses same value, declare a tie!
      if comp == you :
            return None

      # check all possibilities when computer chooses Rock
      elif comp == 'r' :
            if you == 'p':
                  return True

            elif you == 's' :
                  return False
      # check all possibilities when computer chooses papper
      elif comp == 'p' :
            if you == 's':
                  return True

            elif you == 'r' :
                  return False
      # check all possibilities when computer chooses scissor
      elif comp == 's' :
            if you == 'r':
                  return True

            elif you == 'p' :
                  return False
      

# printed computer turn and assigned random numbers
print("Comp Turn: rock(r) papper(p) or scissor(s)?")
randNo = random.randint(1, 3) 
if randNo == 1:
    comp = 'r'
elif randNo == 2:
    comp = 'p'
elif randNo == 3:
    comp = 's'

# given an option to choose player and declared conditions on game win,or lose
you = input("Your Turn: rock(r) papper(p) or scissor(s)?")
a = gamewin(comp, you)

print(f"Computer chose {comp}")
print(f"You chose {you}")

if a == None:
    print("The game is a tie!")
elif a:
    print("You Win!")
else:
    print("You Lose!")
