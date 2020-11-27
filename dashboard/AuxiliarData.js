
//payments
function payments(id,job,date,status,userId,card,bank,amount) {
  return { id,job,date,status,userId,card,bank,amount }
}

export const paymentsData = [
  payments(1,'Pet walking','20/03/20','paid',1,'***-123','bank uno',1234),
  payments(2,'Carwash','20/05/20','pending',2,'***-123','bank uno',1897),
  payments(3,'Pet walking','20/05/20','pending',1,'***-123','bank dos',1234),
  payments(4,'Carwash','20/05/20','paid',3,'***-123','bank dos',1234),
  payments(5,'Pet walking','20/03/20','paid',2,'***-123','bank dos',14),
  payments(6,'Carwash','25/05/20','pending',3,'***-123','bakn tres',1234),
  payments(7,'Pet walking','20/09/20','pending',4,'***-123','bakn tres',1234),
  payments(8,'Carwash','22/11/19','paid',2,'***-123','bakn tres',1235)
]

export const paymentsHead=['#','Name','Mail','Job','Date','Status']


//services
function services(id,job,category,city,province,date,userId,jobTime,adress,postal,unit,tools,description,payId) {
  return { id,job,category,city,province,date,userId,jobTime,adress,postal,unit,tools,description,payId }
}

export const servicesData = [
  services(1,'job Example','dog walking','vanccouver','Province exam.','30/05/20',1,'12:00-13:00','Adress example #123, etc 0123. Dept. 12',1234,1,'leash,bags','Looking for someone to walk my lovely dog Gregorio today at noon! He is really cute and super friendly',1),
  services(2,'job Example','pet sitting','vanccouver','Province exam.','30/07/20',1,'12:00-13:00','Adress example #123, etc 0123. Dept. 12',1234,1,'leash,bags','Looking for someone to walk my lovely dog Gregorio today at noon! He is really cute and super friendly',2),
  services(3,'job Example','dog walking','vanccouver','Province exam.','30/05/20',2,'12:00-13:00','Adress example #123, etc 0123. Dept. 12',1234,1,'leash,bags','Looking for someone to walk my lovely dog Gregorio today at noon! He is really cute and super friendly',3),
  services(4,'job Example','dog sitting','vanccouver','Province exam.','24/05/20',2,'12:00-13:00','Adress example #123, etc 0123. Dept. 12',1234,1,'leash,bags','Looking for someone to walk my lovely dog Gregorio today at noon! He is really cute and super friendly',4),
  services(5,'job Example','dog walking','vanccouver','Province exam.','30/05/20',4,'12:00-13:00','Adress example #123, etc 0123. Dept. 12',1234,1,'leash,bags','Looking for someone to walk my lovely dog Gregorio today at noon! He is really cute and super friendly',5),
  services(6,'job Example','pet sitting','vanccouver','Province exam.','30/07/20',4,'12:00-13:00','Adress example #123, etc 0123. Dept. 12',1234,1,'leash,bags','Looking for someone to walk my lovely dog Gregorio today at noon! He is really cute and super friendly',6),
  services(7,'job Example','dog walking','vanccouver','Province exam.','30/05/20',3,'12:00-13:00','Adress example #123, etc 0123. Dept. 12',1234,1,'leash,bags','Looking for someone to walk my lovely dog Gregorio today at noon! He is really cute and super friendly',7),
  services(8,'job Example','dog sitting','vanccouver','Province exam.','24/05/20',3,'12:00-13:00','Adress example #123, etc 0123. Dept. 12',1234,1,'leash,bags','Looking for someone to walk my lovely dog Gregorio today at noon! He is really cute and super friendly',8)
]

export const servicesHead=['#','Job title','Category','City','Province','Job date']


//users
function users(id,name,mail,type,date,rol,bids,posts,earned,paid) {
  return { id,name,mail,type,date,rol,bids,posts,earned,paid }
}

export const usersData = [
  users(1,'Leonardo Sciretta','algo@example.com','App register','20/03/20','user',1200,350,'$8k',330),
  users(2,'Jose Santana','santana@example.com','Google','20/05/20','admin',3000,350,'$2.5k',330),
  users(3,'Miguel Example','example@example.com','Facebook','02/01/20','user',6000,350,'$4k',330),
  users(4,'Name Sanchez','sanchez@example.com','App register','20/03/20','admin',1200,350,'$1k',200)
]

export const usersHead=['#','Name','Mail','Register type','Register date','Rol']


//dashboard

export const dashboardTop = {
  title:'Dashboard',
  currentBids:1500,
  transactions:500,
  earned:'$3K',
  bidsDone:900
} 

export const dashboardBottom = {
  title:'By service',
  currentBids:200,
  transactions:100,
  earned:'$300',
  bidsDone:50
} 