import csv 
import re

def filterEmpty(x): 
    return list(filter(lambda a: a !='', x))

intervals=[] 

with open('hours.csv', 'r') as csvfile: 
    # creating a csv reader object 
    csvreader = csv.reader(csvfile) 
      
    # extracting field names through first row 
    fields = next(csvreader) #skip first row
    # fields = filterEmpty(fields) # gives [Time, Monday, Tuesday ...] as strings. not necessary
    
    matrix=[]
    # extracting each data row one by one 
    for row in csvreader: 
        filtered=filterEmpty(row)
        if not filtered:
            continue
        else: 
            matrix.append(filtered)

    # constructing the dictionary from data
    count=1 # need arbitrary uid for calendar
    days=['','M','T','W','R','F']
    for num, row in enumerate(matrix): 
        for num2, col in enumerate(row): 
            if(num2==0):
                continue
            # get time 
            start, end= tuple(row[0].split('-'))
            s_time=int((re.findall('\d+', start))[0])
            e_time=int((re.findall('\d+', end))[0])
            if 'PM' in start and s_time!=12: 
                s_time+=12
            if 'PM' in end and e_time!=12: 
                e_time+=12

            interval={}
            interval['uid']=count 
            interval['start']='this.createMoment({{ h: {}, m: 0, d: {}}})'.format(s_time, days[num2])
            interval['end']='this.createMoment({{ h: {}, m: 0, d: {}}})'.format(e_time, days[num2])
            interval['value']='\"'+col.replace(';',',')+'\"'
            interval['highlighted']=[] 
            
            intervals.append(interval)
            count+=1


with open('tutoring_data.js', 'w') as tutoring_data:
    print("writing")
    tutoring_data.write('export const tutoringData=')
    tutoring_data.write(str(intervals).replace('\'','').replace('{uid','\n{uid'))

subjects=[]
allSubjects={}
with open('subjects.csv', 'r') as csvfile: 
    # creating a csv reader object 
    csvreader = csv.reader(csvfile) 
      
    # extracting field names through first row 
    fields = next(csvreader) #skip first row
    # fields = filterEmpty(fields) # gives [Time, Monday, Tuesday ...] as strings. not necessary
    
    matrix=[]
    # extracting each data row one by one 
    for row in csvreader: 
        filtered=filterEmpty(row)
        if not filtered:
            continue
        else: 
            matrix.append(filtered)

    # constructing the dictionary from data
    count=1 # corresponds to hours uid for calendar
    days=['','M','T','W','R','F']
    for row in matrix: 
        for num2, col in enumerate(row): 
            if(num2==0):
                continue

            # getting subjects
            int_sub=col.split(';')
            sub_str=''
            for sub in int_sub: 
                if('CHEM' in sub):
                    parts=re.split('(\d+)',sub)
                else:
                    parts=re.split('(M*\d+)',sub,1)
                subject=parts[0].strip()
                course_num=str(''.join(parts[1:])).strip()
                if(subject=='EE'): 
                    subject='EC ENGR'
                elif(subject=='CS'):
                    subject='COM SCI'


                # add to all subjects
                if subject not in allSubjects: 
                    allSubjects[subject]={}
                    allSubjects[subject][course_num]=[]
                    allSubjects[subject][course_num].append(count) 
                elif course_num not in allSubjects[subject]:
                    allSubjects[subject][course_num]=[]
                    allSubjects[subject][course_num].append(count) 
                else: 
                    allSubjects[subject][course_num].append(count)
            
            count+=1

with open('subject_data.js', 'w') as subject_data:
    subject_data.write('export const subjectData=')
    subject_data.write(str(allSubjects))
