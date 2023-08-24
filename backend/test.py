import csv
fileContent = []
with open('TB_provisional_notifications_2023-08-10.csv', 'r') as file:
    reader = csv.reader(file)
    for row in reader:
        fileContent.append(row)

print(fileContent)