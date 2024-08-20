avg=sum(arr)/len(arr)
count=0
for num in arr:
    if num>avg:
        count+=1
return count
arr=[2,4,5,6]
