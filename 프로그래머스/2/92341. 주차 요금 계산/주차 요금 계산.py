import math

def calculate_fee(fees, total_time):
    basictime, basiccost, unit_time, unit_cost = fees
    if total_time <= basictime:
        return basiccost
    return basiccost + math.ceil((total_time - basictime) / unit_time) * unit_cost

def solution(fees, records):
    answer = []
    parking_times = {}
    in_times = {} 

    for record in records:
        time, number, status = record.split()
        if status == "IN":
            in_times[number] = time
        else:
            intime = in_times.pop(number)
            in_hour, in_minute = map(int, intime.split(":"))
            out_hour, out_minute = map(int, time.split(":"))
            in_total = in_hour * 60 + in_minute
            out_total = out_hour * 60 + out_minute
            total_time = out_total - in_total
            parking_times[number] = parking_times.get(number, 0) + total_time

    for number, intime in in_times.items():
        in_hour, in_minute = map(int, intime.split(":"))
        out_hour, out_minute = 23, 59
        in_total = in_hour * 60 + in_minute
        out_total = out_hour * 60 + out_minute
        total_time = out_total - in_total
        parking_times[number] = parking_times.get(number, 0) + total_time

    for number in sorted(parking_times.keys()):
        total_time = parking_times[number]
        fee = calculate_fee(fees, total_time)
        answer.append(fee)

    return answer
