from app import db

class Member(db.Model):
    __tablename__ = 'member'
    
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String())
    last_name = db.Column(db.String())
    email = db.Column(db.String())
    phone = db.Column(db.String())
    major = db.Column(db.String())
    grad_year = db.Column(db.Integer())
    induction_date = db.Column(db.TIMESTAMP)
    photo = db.Column(db.String())
    
    def __init__(self, first_name, last_name, email, phone, major, grad_year, induction_date, photo):
        self.first_name = first_name
        self.last_name = last_name
        self.email = email
        self.phone = phone
        self.major = major
        self.grad_year = grad_year
        self.induction_date = induction_date
        self.photo = photo
    
    def __repr__(self):
        return '<id {}>'.format(self.id)
    
    def serialize(self):
        return {
            'id': self.id,
            'first_name': self.first_name,
            'last_name': self.last_name,
            'email': self.email,
            'phone': self.phone,
            'major': self.major,
            'grad_year': self.grad_year,
            'induction_date': self.induction_date,
            'photo': self.photo
        }

class MemberStatus(db.Model):
    __tablename__ = 'member_status'
    
    id = db.Column(db.Integer, primary_key=True)
    stat = db.Column(db.String())
    
    def __init__(self, stat):
        self.stat = stat
    
    def __repr__(self):
        return '<id {}>'.format(self.id)
    
    def serialize(self):
        return {
            'id': self.id,
            'status': self.stat
        }

class InducteeStatus(db.Model):
    __tablename__ = 'inductee_status'
    
    member_id = db.Column(db.Integer, db.ForeignKey('member.id'), primary_key=True)
    interview_complete = db.Column(db.Boolean)
    payment = db.Column(db.Boolean)
    
    def __init__(self, interview_complete, payment):
        self.interview_complete = interview_complete
        self.payment = payment
    
    def __repr__(self):
        return '<id {}>'.format(self.id)
    
    def serialize(self):
        return {
            'id': self.id,
            'interview_complete': self.interview_complete,
            'payment': self.payment
        }

class Event(db.Model):
    __tablename__ = 'event'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String())
    description = db.Column(db.String())
    location = db.Column(db.String())
    starts_at = db.Column(db.TIMESTAMP)
    ends_at = db.Column(db.TIMESTAMP)
    professional = db.Column(db.Boolean)
    social = db.Column(db.Boolean)

    def __init__(self, id, title, description, location, starts_at, ends_at, professional, social):
        self.id = id
        self.title = title
        self.description = description
        self.location = location
        self.starts_at = starts_at
        self.ends_at = ends_at
        self.professional = professional
        self.social = social
    
    def __repr__(self):
        return '<id {}>'.format(self.id)
    
    def serialize(self):
        return {
            'id': self.id,
            'title': self.title,
            'description': self.description,
            'location': self.location,
            'starts_at': self.starts_at,
            'ends_at': self.ends_at,
            'professional': self.professional,
            'social': self.social
    }

