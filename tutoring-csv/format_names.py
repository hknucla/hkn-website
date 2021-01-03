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
            if 'PM' in start: 
                s_time+=12
            if 'PM' in end: 
                e_time+=12

            interval={}
            interval['uid']=count 
            interval['start']='this.createMoment({{ h: {}, m: 0, d: {}}})'.format(s_time, days[num2])
            interval['end']='this.createMoment({{ h: {}, m: 0, d: {}}})'.format(e_time, days[num2])
            interval['value']='\"'+col.replace(';',',')+'\"'
            interval['highlighted']=[] 
            
            intervals.append(interval)
            count+=1


# with open('tutoring_data.js', 'w') as tutoring_data:
#     tutoring_data.write('export const tutoringData=')
#     tutoring_data.write(str(intervals).replace('\'',''))

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
                    allSubjects[subject]=[]
                    allSubjects[subject].append(course_num)
                elif course_num not in allSubjects[subject]:
                    allSubjects[subject].append(course_num)

                sub_str+=subject+' '+course_num+','

            sub_str=sub_str[0:-1]
            s={}
            s['uid']=count 
            s['subjects']='"'+sub_str+'"'
            
            subjects.append(s)
            count+=1

with open('subject_data.js', 'w') as subject_data:
    subject_data.write('export const subjectData=')
    subject_data.write(str(subjects).replace('\'',''))

with open('all_subjects.js', 'w') as all_subjects:
    all_subjects.write('export const allSubjects=')
    all_subjects.write(str(allSubjects))