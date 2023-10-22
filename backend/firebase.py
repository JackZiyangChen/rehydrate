import pyrebase
import datetime
import random
import time

id = 1#int(input("enter your id:"))
xp = 56 #int(input("enter your xp:"))
coins =126#int(input("enter your coins:"))
bottles = 4#int(input("enter bottle level:"))
threshold_percent = round( random.random(),2) * 100
timestamp = datetime.datetime.now()
Config = {
    "apiKey": "AIzaSyCwoRAPvKfWPKQMmBcNFjVvFxtxqX2MEdY",
    "authDomain": "pybackend-338c1.firebaseapp.com",
    "projectId": "pybackend-338c1",
    "databaseURL":"https://pybackend-338c1-default-rtdb.firebaseio.com/",
    "storageBucket": "pybackend-338c1.appspot.com",
    "messagingSenderId": "637686713585",
    "appId": "1:637686713585:web:249f59e312090b6d1eed50",
    "measurementId": "G-2W5KE6LL32"
  }

firebase = pyrebase.initialize_app(Config)

db = firebase.database()

    
#dummy = {"id": id , "XP": xp , "coins": coins , "bottles": bottles , "threshold_percent": threshold_percent , "hydrate_timestamp":str(timestamp) }
 

#user = db.child("-NhIgt4IOQLxbhFnoGZZ").child()


#while True:

  #print("updating")
"""user = db.child("-NhIgt4IOQLxbhFnoGZZ").child().child()
d = user.get().val()
x = d["threshold_percent"]
print(x)"""

while True:
  user = db.child("-NhIgt4IOQLxbhFnoGZZ").child().child()
  d = user.get().val()
  x = d["threshold_percent"]
  print(x)  
  x =  x - random.random() / 10
  db.child("-NhIgt4IOQLxbhFnoGZZ").child().child().update({"threshold_percent": x})
  print(x)
  time.sleep(3)
  #print("updated")








   




#db.push(dummy)
    
