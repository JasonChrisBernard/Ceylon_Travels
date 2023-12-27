Se = int(input("Enter the value for SE :"))
P = int(input("Enter the value for P :"))
Sp = int(input("Enter the value for S :"))

VPP = Se * P /( Se * P + (1-Sp) * (1-P))

print(VPP)